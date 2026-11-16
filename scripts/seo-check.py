#!/usr/bin/env python3
"""Audit real production HTML. Python 3 stdlib + curl; no browser required.
Run npm run build && npm run seo:check, or --base https://www.sixthsignallabs.com.
"""
import argparse
import concurrent.futures
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
import sys
import time
from urllib.parse import urljoin, urlsplit, unquote
from urllib.robotparser import RobotFileParser
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://www.sixthsignallabs.com'
EXCLUSIONS = json.loads((ROOT / 'lib/seo-exclusions.json').read_text())

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.title = ''; self.metas = {}; self.canonicals = []; self.links = []; self.images = []; self.assets = []
        self.schemas = []; self.h1 = 0; self.text = ''; self.ids = set(); self.stack = []; self.schema = None
        self.feed(source)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs); self.stack.append(tag)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'meta':
            key = (a.get('name') or a.get('property') or '').lower()
            self.metas.setdefault(key, []).append(a.get('content', ''))
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a.get('href'))
        if tag == 'link' and a.get('rel') in ['stylesheet', 'icon', 'apple-touch-icon']: self.assets.append(a.get('href', ''))
        if tag == 'a' and a.get('href'): self.links.append(a['href'])
        if tag == 'img': self.images.append(a); self.assets.append(a.get('src', ''))
        if tag == 'script' and a.get('src'): self.assets.append(a['src'])
        if tag == 'h1': self.h1 += 1
        if tag == 'script' and a.get('type') == 'application/ld+json': self.schema = ''
        if tag in ['meta','link','img','br','hr','input','source','wbr']: self.stack.pop()
    def handle_endtag(self, tag):
        if tag == 'script' and self.schema is not None:
            self.schemas.append(self.schema); self.schema = None
        if tag in self.stack:
            self.stack = self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
    def handle_data(self, data):
        if self.schema is not None: self.schema += data
        if 'title' in self.stack: self.title += data
        if not any(t in self.stack for t in ['script','style','title']): self.text += ' ' + data.strip()

def request(url, extra=()):
    proc = subprocess.run(['curl','-sS','--max-time','30','-D','-',*extra,url], capture_output=True)
    raw = proc.stdout
    # Strip proxy CONNECT and informational headers before the actual HTTP response.
    head = b''; body = raw
    while body.startswith(b'HTTP/') and b'\r\n\r\n' in body:
        head, body = body.split(b'\r\n\r\n', 1)
    status = re.search(rb'HTTP/[\d.]+ (\d+)',head)
    headers = {}
    for line in head.decode(errors='replace').splitlines()[1:]:
        key, sep, val = line.partition(':')
        if sep: headers[key.lower()] = headers.get(key.lower(), '') + val.strip()
    return {'status':int(status[1]) if status else 0, 'headers':headers, 'body':body.decode(errors='replace'), 'bytes':len(body), 'error':proc.stderr.decode()}

def discover():
    result = {}
    for p in (ROOT/'app').rglob('page.*'):
        if p.suffix not in ['.tsx','.ts','.jsx','.js']: continue
        parts = p.relative_to(ROOT/'app').parts[:-1]
        if any(s.startswith('_') or s.startswith('.') for s in parts): continue
        if any('[' in s for s in parts): raise ValueError('Dynamic route needs concrete URL cases: '+str(p))
        route = '/'+'/'.join(s for s in parts if not s.startswith('('))
        if route in result: raise ValueError('Duplicate public route '+route)
        result[route] = str(p.relative_to(ROOT))
    return result

def restricted(value):
    return bool(re.search(r'\b(noindex|nofollow|none)\b|(?:max-snippet|max-image-preview)\s*:\s*(?:0|none)', value, re.I))

def audit(base, output):
    errors=[]; warnings=[]; records=[]
    def check(ok, message):
        if not ok: errors.append(message)
    routes=discover(); eligible=set(routes)-set(EXCLUSIONS)
    check(set(EXCLUSIONS)<=set(routes),'Stale exclusion entries')
    targets=sorted(set(routes)|{'/robots.txt','/sitemap.xml','/apps/_template','/seo-deliberately-missing'})
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        responses=dict(zip(targets,pool.map(lambda p:request(base+p),targets)))
    robot=responses['/robots.txt']; site=responses['/sitemap.xml']
    check(robot['status']==200,'robots.txt not 200'); check(site['status']==200,'sitemap.xml not 200')
    check('xml' in site['headers'].get('content-type',''),'Sitemap content type is not XML')
    check('Sitemap: '+ORIGIN+'/sitemap.xml' in robot['body'],'robots sitemap reference mismatch')
    rp=RobotFileParser();rp.parse(robot['body'].splitlines())
    locations=[]
    try:
        xml=ET.fromstring(site['body']);check(xml.tag=='{http://www.sitemaps.org/schemas/sitemap/0.9}urlset','Invalid sitemap namespace')
        locations=[e.text for e in xml.findall('{*}url/{*}loc')]
        check(len(locations)==len(set(locations)),'Duplicate sitemap URLs')
        check(set(locations)=={ORIGIN+p for p in eligible},'Sitemap coverage/canonical mismatch: '+str(sorted(set(locations)^{ORIGIN+p for p in eligible})))
    except ET.ParseError as e: errors.append('Invalid sitemap XML: '+str(e))
    pages={}; titles={}; descriptions={}; links=set(); assets=set(); graph={}; fragments=[]
    for path,source in sorted(routes.items()):
        r=responses[path]
        if path=='/privcy':
            check(r['status'] in [301,308] and r['headers'].get('location') in ['/privacy',base+'/privacy'],'Privacy alias must permanently redirect directly to /privacy')
            records.append({'path':path,'source':source,'status':r['status'],'indexable':False,'redirect':r['headers'].get('location')});continue
        p=Page(r['body']);pages[path]=p
        directives=','.join(sum([p.metas.get(k,[]) for k in ['robots','googlebot','bingbot']],[]))
        is_public=path in eligible
        check(r['status']==200,path+': not HTTP 200')
        check(p.h1==1,path+': expected one H1, got '+str(p.h1))
        check(len(p.text.strip())>150,path+': thin/empty HTML or soft-404 risk')
        check(len(p.canonicals)==1 and p.canonicals[0].rstrip('/')==(ORIGIN+path).rstrip('/'),path+': canonical mismatch '+str(p.canonicals))
        check(bool(p.title.strip()) and len(p.metas.get('description',[]))==1 and bool(p.metas['description'][0].strip()),path+': missing title/description')
        check(p.metas.get('og:url',[''])[0].rstrip('/')==(ORIGIN+path).rstrip('/'),path+': OG URL mismatch')
        for key in ['og:image:width','og:image:height']:
            check(p.metas.get(key,[''])[0].isdigit(),path+': missing/invalid '+key)
        check(bool(re.search(r'<html[^>]+lang="en"',r['body'])),path+': missing language declaration')
        for key in ['og:title','og:description','og:image','twitter:card','twitter:title','twitter:description']:
            check(bool(p.metas.get(key,[''])[0]),path+': missing '+key)
        check(p.metas.get('twitter:description')==p.metas.get('description'),path+': inherited incorrect Twitter description')
        if is_public:
            check(not restricted(directives),path+': restrictive robots '+directives)
            check(not restricted(r['headers'].get('x-robots-tag','')),path+': restrictive X-Robots-Tag')
            for bot in ['Googlebot','Bingbot','*']: check(rp.can_fetch(bot,ORIGIN+path),path+': blocked for '+bot)
            for value,bucket,label in [(p.title,titles,'title'),(p.metas.get('description',[''])[0],descriptions,'description')]:
                check(value not in bucket,path+': duplicate '+label+' with '+bucket.get(value,''));bucket[value]=path
        else: check('noindex' in directives,path+': intentional draft lost noindex')
        for image in p.images:
            check('alt' in image,path+': image lacks alt');check(bool(image.get('width')) and bool(image.get('height')),path+': image missing intrinsic dimensions')
        for key in ['og:image','twitter:image']:
            assets.update(p.metas.get(key,[]))
        assets.update(p.assets)
        graph[path]=set()
        for link in p.links:
            u=urlsplit(urljoin(ORIGIN+path,link))
            if u.hostname in ['www.sixthsignallabs.com','sixthsignallabs.com']:
                check(u.hostname=='www.sixthsignallabs.com',path+': internal link to noncanonical host '+link)
                target=u.path or '/'; links.add(target);graph[path].add(target)
                if u.fragment: fragments.append((path,target,unquote(u.fragment)))
                if target in EXCLUSIONS and target=='/privcy': errors.append(path+': links through privacy alias')
        schema_types=[]
        for raw in p.schemas:
            try:
                parsed=json.loads(raw); objects=parsed if isinstance(parsed,list) else parsed.get('@graph',[parsed])
                for obj in objects:
                    typ=obj.get('@type');schema_types.append(typ)
                    check(bool(typ),path+': schema missing @type')
                    if typ in ['SoftwareApplication','MobileApplication']:
                        check(all(obj.get(k) for k in ['name','description','url','operatingSystem','publisher']),path+': incomplete application schema')
                        check(obj.get('url')==ORIGIN+path,path+': application schema URL mismatch')
                        check(not any(k in obj for k in ['aggregateRating','review','offers']),path+': unverified ratings/reviews/pricing require manual evidence')
                    if typ=='BreadcrumbList': check(bool(obj.get('itemListElement')),path+': empty breadcrumb schema')
            except (ValueError,TypeError,AttributeError) as e: errors.append(path+': invalid JSON-LD '+str(e))
        if path.count('/')==2 and path.startswith('/apps/') and is_public:
            check('SoftwareApplication' in schema_types or 'MobileApplication' in schema_types,path+': missing app schema')
            check('/apps' in graph[path],path+': missing directory backlink')
        records.append({'path':path,'source':source,'status':r['status'],'indexable':is_public,'canonical':p.canonicals,'robots':directives or '(default index, follow)','xRobots':r['headers'].get('x-robots-tag','(absent)'), 'sitemap':ORIGIN+path in locations,'title':p.title,'description':p.metas.get('description'),'h1':p.h1,'htmlBytes':r['bytes'],'textCharacters':len(p.text.strip()),'schema':schema_types})
    for source,target,fragment in fragments:
        if target in pages: check(fragment in pages[target].ids,source+': broken fragment '+target+'#'+fragment)
    check('/apps' in graph.get('/',set()),'Homepage does not link to /apps')
    for path in eligible:
        if path.startswith('/apps/') and path.count('/')==2: check(path in graph.get('/apps',set()),'Directory missing '+path)
    reached={'/'}; previous=set()
    while reached!=previous:
        previous=set(reached)
        for path in previous: reached.update(graph.get(path,set()))
    for path in eligible: check(path in reached,'Orphaned page '+path)
    for r in records:r['internallyReachable']=r['path'] in reached
    check('Organization' in next((r.get('schema',[]) for r in records if r['path']=='/'),[]),'Missing Organization schema')
    check('WebSite' in next((r.get('schema',[]) for r in records if r['path']=='/'),[]),'Missing WebSite schema')
    for path in ['/apps/_template','/seo-deliberately-missing']:
        check(responses[path]['status']==404,path+': missing route must return 404')
    resource_targets=set()
    for value in links|assets:
        u=urlsplit(urljoin(ORIGIN+'/',value))
        if u.hostname in ['www.sixthsignallabs.com','sixthsignallabs.com']:
            target=u.path+('?' + u.query if u.query else '')
            if target not in routes: resource_targets.add(target)
            for bot in ['Googlebot','Bingbot']: check(rp.can_fetch(bot,ORIGIN+target),'Rendering resource blocked: '+target)
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        resource_results=list(pool.map(lambda p:(p,request(base+p)),sorted(resource_targets)))
    for path,r in resource_results:
        check(r['status']==200,'Broken internal link/asset '+path+': '+str(r['status']))
        mime=r['headers'].get('content-type','')
        ext=urlsplit(path).path.lower()
        if ext.endswith(('.png','.jpg','.jpeg','.webp','.avif','.svg','.ico')) or path.startswith('/_next/image'):
            check(mime.startswith('image/'),'Invalid image content type '+path+': '+mime)
        if ext.endswith('.css'):check('text/css' in mime,'Invalid CSS content type '+path)
        if ext.endswith('.js'):check('javascript' in mime,'Invalid JS content type '+path)

    slash=request(base+'/apps/arrowlilt/')
    check(slash['status'] in [301,308] and slash['headers'].get('location') in ['/apps/arrowlilt',base+'/apps/arrowlilt'],'Trailing slash policy failed')
    query=request(base+'/apps/arrowlilt?utm_source=seo-check')
    check(query['status']==200 and Page(query['body']).canonicals==[ORIGIN+'/apps/arrowlilt'],'Query canonical failed')
    if urlsplit(base).hostname in ['localhost','127.0.0.1']:
        host=request(base+'/apps/arrowlilt?utm_source=seo-check',('-H','Host: sixthsignallabs.com'))
        check(host['status'] in [301,308] and host['headers'].get('location')==ORIGIN+'/apps/arrowlilt?utm_source=seo-check','Non-www host redirect/query preservation failed')
    warnings.append('Browser layout, hydration, Lighthouse, field LCP/INP/CLS, Google-selected canonicals and indexing: NOT VERIFIED by this HTTP-only check.')
    result={'base':base,'status':'FAILED' if errors else 'VERIFIED','routes':records,'eligibleCount':len(eligible),'resourceMeasurements':[{'path':p,'bytes':r['bytes'],'contentType':r['headers'].get('content-type'),'cacheControl':r['headers'].get('cache-control')} for p,r in resource_results],'resourcesChecked':len(resource_results),'errors':errors,'limitations':warnings}
    if output: Path(output).write_text(json.dumps(result,indent=2)+'\n')
    print(json.dumps({'status':result['status'],'routes':len(records),'eligible':len(eligible),'resources':len(resource_results),'errors':errors,'limitations':warnings},indent=2))
    return 1 if errors else 0

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--base',default='http://127.0.0.1:4173');parser.add_argument('--start',action='store_true');parser.add_argument('--output',default='docs/seo-evidence/local-after.json');args=parser.parse_args()
    server=None
    try:
        if args.start:
            if not (ROOT/'.next/BUILD_ID').exists(): parser.error('Run npm run build first')
            server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','-p','4173','-H','127.0.0.1'],cwd=ROOT,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
            for _ in range(60):
                if server.poll() is not None: raise RuntimeError('Production server exited; check port 4173')
                if request(args.base+'/robots.txt')['status']==200: break
                time.sleep(.25)
            else: raise RuntimeError('Production server did not become ready')
        return audit(args.base.rstrip('/'),args.output)
    finally:
        if server:
            server.terminate()
            try:server.wait(timeout=10)
            except subprocess.TimeoutExpired:server.kill();server.wait()
if __name__=='__main__':sys.exit(main())
