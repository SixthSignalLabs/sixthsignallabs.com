# Technical SEO audit and remediation

Audit date: November 16, 2026 (Asia/Colombo). Preferred origin: **https://www.sixthsignallabs.com**. Changes are local and have **not been deployed or pushed**.

## Executive summary

The production site has a confirmed indexing blocker on WordLilt's landing page, missing app sitemap entries, and inconsistent canonical signals. `/apps` returns 404. The deployed non-www host already permanently redirects to www, while page canonicals and sitemap URLs point back to non-www.

Local remediation is VERIFIED against a production Next.js build: **25 page routes inspected, 18 eligible canonical URLs in the sitemap, five public product pages, six deliberately noindex draft/legal pages, one permanent alias, and 73 link/asset targets checked**. The verifier reports zero failures locally. Production verification is FAILED against the desired final behavior because the changes are not deployed. Neither Google indexing nor ranking improvements are claimed.

Preserved publication decisions: Oryfin's four pages remain noindex because operator/legal/publication details are missing. WordLilt's privacy and terms remain noindex because `legalReviewed` is explicitly false. WordLilt's genuine public product information now overrides the inherited legal-review restriction on its landing page only. FileSuite and HyperPulse have public informational websites although their store releases are still in preparation; their pages do not claim store availability.

## Architecture and scope

- Next.js 16.3.0 App Router, React 19.2.8, TypeScript, Tailwind CSS, Motion. This is a server-capable Next application, not a static-export-only site.
- `app/layout.tsx` supplies the root metadata and language. App layouts and pages supply nested metadata. Client components are prerendered into HTML; crucial product descriptions are available in fetched production HTML.
- `npm run build` runs `next build --webpack`. All current page routes and metadata endpoints are statically prerendered. The route inventory below is derived from actual `page.*` sources and checked with HTTP responses.
- No authentication pages, API handlers, dynamic page segments, rewrites, middleware/proxy, basePath, deployment manifest, or staging-specific SEO conditions were found in this repository. Services, work, process, technology, about and contact are homepage sections, not separate routes.
- `_template`, `_components`, and `_data` are private App Router folders and do not become routes. `/apps/_template` and a deliberately missing URL return 404.
- Live response headers identify Cloudflare in front of Vercel (`x-vercel-cache`, `x-nextjs-prerender`). CDN configuration is external to this checkout.
- Canonical policy: HTTPS, www, no trailing slash except the root URL, and no tracking query parameters in canonicals. `lib/seo-config.ts` supplies one production identity. Preview environment variables cannot silently change it.

## Evidence

- [Production baseline](seo-evidence/production-before.json): status, canonical, title, robots, X-Robots-Tag and complete robots/sitemap bodies before changes.
- [Production verifier results](seo-evidence/production-check.json): current deployed failures, route metadata, discovery and resource measurements.
- [Local production-build results](seo-evidence/local-after.json): final per-route metadata, indexability, link reachability, HTML content sizes, schema types, resource MIME types and cache headers.
- [External URL checks](seo-evidence/external-before.json): HTTP/HTTPS host behavior and real store-listing titles.

Production was fetched directly with curl after the browsing service could not access this domain. No response is represented as a Search Console result.

## Complete route inventory and indexability matrix

“Index” below means intended indexability after remediation, not confirmed Google indexing. All nonredirect pages have one H1, a nonempty title and description, meaningful HTML, a self-referencing www canonical, page-specific social metadata, and no restrictive X-Robots-Tag in the final local check. All are allowed for Googlebot and Bingbot by the generated robots.txt. Canonicals are absolute; the paths below append to `https://www.sixthsignallabs.com` (root normalized equivalently).

“Linked” means reachable from the homepage through ordinary HTML anchors. Intentionally excluded Oryfin pages may be unlinked; no eligible page is orphaned. Every content page uses static prerendering. Full titles/descriptions and full canonical URLs are retained in the linked JSON evidence.

| URL path | Route source | Intended index | Live HTTP before | Local HTTP after | Canonical path | Robots after | Sitemap after | Linked after |
|---|---|---|---|---|---|---|---|---|
| `/` | `app/page.tsx` | Yes | 200 | 200 | `/` | (default index, follow) | Yes | Yes |
| `/apps` | `app/apps/page.tsx` | Yes | 404 | 200 | `/apps` | (default index, follow) | Yes | Yes |
| `/apps/arrowlilt` | `app/apps/arrowlilt/page.tsx` | Yes | 200 | 200 | `/apps/arrowlilt` | index, follow | Yes | Yes |
| `/apps/arrowlilt/privacy` | `app/apps/arrowlilt/privacy/page.tsx` | Yes | 200 | 200 | `/apps/arrowlilt/privacy` | index, follow | Yes | Yes |
| `/apps/arrowlilt/terms` | `app/apps/arrowlilt/terms/page.tsx` | Yes | 200 | 200 | `/apps/arrowlilt/terms` | index, follow | Yes | Yes |
| `/apps/filesuite` | `app/apps/filesuite/page.tsx` | Yes | 200 | 200 | `/apps/filesuite` | index, follow | Yes | Yes |
| `/apps/filesuite/privacy` | `app/apps/filesuite/privacy/page.tsx` | Yes | 200 | 200 | `/apps/filesuite/privacy` | index, follow | Yes | Yes |
| `/apps/filesuite/terms` | `app/apps/filesuite/terms/page.tsx` | Yes | 200 | 200 | `/apps/filesuite/terms` | index, follow | Yes | Yes |
| `/apps/geopixly` | `app/apps/geopixly/page.tsx` | Yes | 200 | 200 | `/apps/geopixly` | (default index, follow) | Yes | Yes |
| `/apps/geopixly/privacy` | `app/apps/geopixly/privacy/page.tsx` | Yes | 200 | 200 | `/apps/geopixly/privacy` | (default index, follow) | Yes | Yes |
| `/apps/geopixly/terms` | `app/apps/geopixly/terms/page.tsx` | Yes | 200 | 200 | `/apps/geopixly/terms` | (default index, follow) | Yes | Yes |
| `/apps/hyperpulse` | `app/apps/hyperpulse/page.tsx` | Yes | 200 | 200 | `/apps/hyperpulse` | index, follow | Yes | Yes |
| `/apps/hyperpulse/privacy` | `app/apps/hyperpulse/privacy/page.tsx` | Yes | 200 | 200 | `/apps/hyperpulse/privacy` | index, follow | Yes | Yes |
| `/apps/hyperpulse/support` | `app/apps/hyperpulse/support/page.tsx` | Yes | 200 | 200 | `/apps/hyperpulse/support` | index, follow | Yes | Yes |
| `/apps/hyperpulse/terms` | `app/apps/hyperpulse/terms/page.tsx` | Yes | 200 | 200 | `/apps/hyperpulse/terms` | index, follow | Yes | Yes |
| `/apps/oryfin` | `app/apps/oryfin/page.tsx` | No | 200 | 200 | `/apps/oryfin` | noindex, follow | No | No |
| `/apps/oryfin/privacy` | `app/apps/oryfin/privacy/page.tsx` | No | 200 | 200 | `/apps/oryfin/privacy` | noindex, follow | No | No |
| `/apps/oryfin/support` | `app/apps/oryfin/support/page.tsx` | No | 200 | 200 | `/apps/oryfin/support` | noindex, follow | No | No |
| `/apps/oryfin/terms` | `app/apps/oryfin/terms/page.tsx` | No | 200 | 200 | `/apps/oryfin/terms` | noindex, follow | No | No |
| `/apps/wordlilt` | `app/apps/wordlilt/page.tsx` | Yes | 200 | 200 | `/apps/wordlilt` | index, follow | Yes | Yes |
| `/apps/wordlilt/privacy` | `app/apps/wordlilt/privacy/page.tsx` | No | 200 | 200 | `/apps/wordlilt/privacy` | noindex, follow | No | Yes |
| `/apps/wordlilt/terms` | `app/apps/wordlilt/terms/page.tsx` | No | 200 | 200 | `/apps/wordlilt/terms` | noindex, follow | No | Yes |
| `/privacy` | `app/privacy/page.tsx` | Yes | 200 | 200 | `/privacy` | (default index, follow) | Yes | Yes |
| `/privcy` | `app/privcy/page.tsx` | No | 307 | 308 | `redirect → /privacy` | redirect | No | No |
| `/terms` | `app/terms/page.tsx` | Yes | 200 | 200 | `/terms` | (default index, follow) | Yes | Yes |

### Metadata endpoints and static resources

| URL | Production before | Local after | Behavior |
|---|---|---|---|
| `/robots.txt` | 200 | 200 | Public routes/resources allowed; sitemap now references www |
| `/sitemap.xml` | 200, 14 entries | 200, 18 entries | XML namespace valid; eligible self-canonical URLs only; no fabricated lastmod |
| `/apps/_template` | 404 | 404 | Private source folder, not an indexable duplicate |
| `/seo-deliberately-missing` | NOT VERIFIED in initial baseline | 404 | Regression check against catch-all soft 404s |
| `/icon.png`, `/apple-icon.png` | Not separately measured in baseline | 200 | Next file-based icons; explicit brand/app icons also checked |
| `/app-ads.txt`, `/.well-known/assetlinks.json` | Outside page inventory | Preserved | Advertising and Android app association resources; not HTML pages or sitemap entries |

### Intentional exclusions


- `/privcy`: Permanent alias of /privacy.
- `/apps/oryfin`: Intentional publication gate: missing operator and legal details.
- `/apps/oryfin/privacy`: Intentional Oryfin publication gate.
- `/apps/oryfin/terms`: Intentional Oryfin publication gate.
- `/apps/oryfin/support`: Intentional Oryfin publication gate.
- `/apps/wordlilt/privacy`: Legal review explicitly pending in app data.
- `/apps/wordlilt/terms`: Legal review explicitly pending in app data.

Changing a publication gate also requires updating `lib/seo-exclusions.json`. The HTTP verifier fails if an excluded draft loses noindex or an eligible page gains it. Do not set legal-review flags or fill missing legal identities just to pass SEO checks.

## Findings, severity, and before/after behavior

| Severity | Finding and evidence | Remediation | Verification |
|---|---|---|---|
| Critical | Live `/apps/wordlilt` contains `noindex, follow` inherited from its layout; genuine Play listing and homepage product entry exist | Landing page explicitly permits index/follow; pending legal pages retain their gate | Local landing is 200, index/follow, self-canonical, linked and in sitemap: VERIFIED |
| High | Live sitemap omits WordLilt, ArrowLilt, GeoPixly and their eligible subpages; it includes four noindex Oryfin pages | Discover page routes automatically; apply explicit publication/alias exclusions | Exact equality between 18 eligible URLs and XML locations: VERIFIED locally |
| High | Live `/apps` is 404; FileSuite/HyperPulse websites lack a homepage link path | Add useful app directory from actual product data, visible Apps navigation, app footer backlinks | Homepage → directory → all five products; every eligible page reachable: VERIFIED locally |
| High | Live non-www redirects 308 to www, but HTML canonical/OG and sitemap URLs use non-www | Fixed production origin used by metadata, robots, sitemap and app URL builders; non-www redirect fallback in Next config | Self-canonicals on all content pages; local Host redirect preserves paths and queries: VERIFIED |
| Medium | Legal pages lose OG images through shallow metadata replacement; several app Twitter descriptions inherit differing parent copy | `withPageSocial` derives page-specific text and image dimensions from actual assets; FileSuite helper includes dimensions | Required OG/Twitter fields, resource availability, unique public metadata: VERIFIED locally |
| Medium | GeoPixly privacy/terms download buttons point to nonexistent local `#download` | Link to the landing-page download fragment when on legal pages | All internal page and fragment references: VERIFIED locally |
| Medium | Homepage renders placeholder client marks, testimonial, unconfirmed contact email and social destinations | Remove placeholder-only sections and unavailable social destinations; replace unconfirmed contact action with real product/support navigation | Source reviewed and resulting HTML fetched: VERIFIED; visual layout NOT VERIFIED |
| Medium | Missing product schema except FileSuite; general site has ProfessionalService only | Add factual Organization/WebSite, SoftwareApplication for public product pages, BreadcrumbList for visible directory breadcrumb | JSON parsing and structural field checks: VERIFIED locally; rich-result eligibility NOT VERIFIED |
| Low | Sitemap uses `new Date()` as lastmod for every URL | Omit lastmod until genuine per-page modification dates exist | Generated XML contains no fabricated dates: VERIFIED |
| Low | `/privcy` uses a temporary 307 alias | Use `permanentRedirect` to `/privacy` | 308 directly to `/privacy`: VERIFIED locally |
| Low | Shared reveal components start invisible; no-JS presentation can conceal prerendered content | Keep reveal content opaque while retaining movement; add scripting:none visibility fallback | HTML/CSS source checked; actual disabled-JS browser behavior NOT VERIFIED |

## Dedicated /apps findings and implementation

The public directory presents WordLilt, ArrowLilt, GeoPixly, FileSuite, and HyperPulse, drawing names, descriptions and icons from their existing product data. It has a unique title, description, H1, canonical, OG/Twitter metadata and a visible Home/Apps breadcrumb. All product links have actual href attributes, and app footers lead back to the directory. Oryfin's draft route is not advertised as a published app.

The sitemap discovers new static page sources automatically. New app directory entries must be registered in `lib/app-catalog.ts`; the verifier fails if an eligible product page is missing from the directory. Drafts must explicitly retain noindex and be added to the exclusion registry. Dynamic URLs deliberately fail discovery until concrete route cases are supported, rather than silently publishing incomplete sitemap coverage.

Existing app product copy and interactive previews are retained. Real existing WordLilt, ArrowLilt and GeoPixly portfolio screenshots are also displayed on their product pages with descriptive alt text, intrinsic dimensions, lazy loading and full-size image links. FileSuite's existing actual screenshot is retained. No verified HyperPulse or Oryfin screen captures are available in this checkout, so none were fabricated. Branding, app URLs, legal documents, screenshots and store CTA logic are preserved.

The three existing Google Play links returned HTTP 200 with matching titles:

- WordLilt: “WordLilt: Word Search Puzzle - Apps on Google Play”.
- ArrowLilt: “ArrowLilt: Tap Away Puzzle - Apps on Google Play”.
- GeoPixly: “GeoPixly - Apps on Google Play”.

These checks establish real listings at the supplied URLs, not universal region/device installability. No App Store availability is inferred. FileSuite/HyperPulse store URLs remain unset and their preparation messaging remains accurate.

All five public product pages have SoftwareApplication schema using genuine names, descriptions, Android platform information and publisher details. Existing FileSuite schema is retained without duplication. No ratings, reviews, awards, install counts, pricing, offers or unsupported availability claims were added. This is semantic markup; Google software-app rich results have additional eligibility requirements and are not promised.

## Robots, canonicalization and CDN considerations

There was no blanket Googlebot/Bingbot disallow or restrictive X-Robots-Tag on the observed production app routes. The primary unintended blocker was WordLilt's HTML noindex. Robots.txt was not used to conceal draft pages: their HTML noindex remains crawlable.

The existing wildcard Allow rule remains; the change fixes its sitemap and host references. Cloudflare injects additional managed robots groups and content signals in production. These rules are outside repository control. Observed Googlebot and Bingbot access remains allowed; training/other bot restrictions were not indiscriminately removed. Confirm any changes in the Cloudflare dashboard after deployment.

Live host checks show:

- HTTP non-www → 301 HTTPS non-www → 308 HTTPS www (two hops).
- HTTP www → 301 HTTPS www.
- HTTPS non-www → 308 HTTPS www.
- HTTPS www trailing-slash app URL → 308 the same path without trailing slash.

The repository now supplies the non-www 308 fallback too. The HTTP non-www double hop can be collapsed to a direct HTTPS www redirect in Cloudflare; no external infrastructure was changed. Scheme enforcement remains at the observed deployment edge, avoiding unsafe forwarded-header assumptions in application code. Local Host-header tests verify non-www redirection and query preservation. App query variants keep the clean self-canonical URL.

One deployed Cloudflare-obfuscated email-protection href (`/cdn-cgi/l/email-protection`) returned 404 to a raw HTTP crawl. Local source mailto links remain valid. Review Cloudflare email obfuscation if crawlable direct support contacts are required; its browser decoding behavior was not tested.

## Content quality and legal limits

Actual homepage work entries already describe three real apps and have screenshots, rather than invented customer case studies. No replacement case studies or performance metrics were invented. Placeholder-only testimonial/client-logo sections and unavailable social links are no longer rendered. An unconfirmed studio mailbox is no longer presented as a working destination. Add a verified studio contact channel when available; existing product support addresses remain on the appropriate app pages.

Legal documents were preserved. WordLilt explicitly records pending legal review, and Oryfin lacks publication details; those limitations remain visible in source and the indexing policy. No legal-review status was fabricated and no legal text was rewritten for SEO. Studio and app claims were not expanded beyond repository evidence.

## Performance, mobile and rendering

Measured evidence is limited to HTTP content, response sizes, MIME types and cache headers. The JSON resource measurements record uncompressed bodies requested by curl, including fallback image src URLs. They are **not browser transfer sizes, selected srcset candidates, Lighthouse scores or Core Web Vitals**.

- All page content is statically prerendered. Every content page has one H1 and substantial text before JavaScript execution; actual HTML byte/text counts appear below.
- Existing Next Image responsive processing, AVIF/WebP configuration, intrinsic dimensions and Geist self-hosted fonts are retained. New screenshots load lazily below the existing content; the directory uses responsive Next Image icons.
- Largest original assets include FileSuite's approximately 1.09 MB icon and 662 KB wordmark. Next Image is used for rendered copies; social/favicon requests can still fetch originals. Smaller reviewed derivatives could reduce those requests, but original branding was not recompressed or regenerated here.
- Largest checked JavaScript chunks are about 239 KB and 201 KB uncompressed. This is an observed resource size, not proof that either chunk causes poor LCP/INP. Existing Motion behavior is retained.
- Next static chunks use year-long immutable caching. Public originals currently use max-age=0; adding immutable caching to unversioned filenames could serve stale branding and was not done. Optimized images have their own cache policy.
- Existing viewport, language, skip navigation and image dimensions are checked. Broken fragment links discovered by the audit were fixed. Static responsive classes are retained; mobile layouts and keyboard interactions need browser verification.
- Shared reveal content no longer starts transparent, and a CSS no-JS fallback restores entrance transforms/opacities. Browser execution of this fallback is not claimed as tested.


| Product URL | Local HTML bytes | Non-script text characters | Rendering |
|---|---|---|---|
| `/apps/arrowlilt` | 104215 | 3506 | Static prerender |
| `/apps/filesuite` | 60140 | 3723 | Static prerender |
| `/apps/geopixly` | 90356 | 3065 | Static prerender |
| `/apps/hyperpulse` | 39919 | 4274 | Static prerender |
| `/apps/oryfin` | 58315 | 2842 | Static prerender |
| `/apps/wordlilt` | 181501 | 2155 | Static prerender |

## Automated verification and outcomes

Run:

```bash
npm run build
npm run lint
npm run typecheck
npm run seo:check
# After deploying separately:
npm run seo:check:live
```

Python 3 and curl are required. The local command starts the production Next server on 127.0.0.1:4173, fetches actual HTML/resources and terminates its own server. A sandbox initially prevented binding the server port; verification succeeded after the tool's approved local-server execution. No external service or production configuration was changed.

| Check | Outcome | Evidence / scope |
|---|---|---|
| Production webpack build | VERIFIED | All current routes prerender successfully; TypeScript build checks pass |
| ESLint | VERIFIED | No errors or warnings in final run |
| `tsc --noEmit` | VERIFIED | Exit code 0 |
| Final local SEO check | VERIFIED | 25 routes, 18 eligible sitemap URLs, 73 resource/link targets, zero failures |
| HTTP statuses and redirect alias | VERIFIED locally | 24 content pages return 200, alias returns 308; missing/template routes 404 |
| Public app indexing directives, canonicals and sitemap coverage | VERIFIED locally | All five product routes covered explicitly through route discovery and directory assertions |
| Metadata and social completeness/uniqueness | VERIFIED locally | Nonempty titles/descriptions; distinct eligible metadata; OG/Twitter fields and actual image dimensions |
| Robots/X-Robots-Tag/resource access | VERIFIED locally | Googlebot/Bingbot allowed; no restrictive public-page directives; intentional gates retained |
| Discoverability and links | VERIFIED locally | Homepage/directory/product paths, reachable eligible subpages, HTTP links, fragment IDs, image/script/CSS MIME types |
| Structured data | VERIFIED locally | Valid JSON-LD; required app fields; no fabricated ratings/pricing; visible directory breadcrumb |
| Schema.org validator / Google Rich Results Test | NOT VERIFIED | Parser/structural checks do not equal complete external vocabulary or rich-result validation |
| Host/slash/query behavior | VERIFIED locally and baseline live | Header/location evidence in external JSON; local non-www Host check preserves query |
| Deployed final acceptance | FAILED | Production check still reports old defects; no deployment performed |
| Store destinations | VERIFIED | Three Play listing HTTP statuses and matching names; region/device availability not tested |
| Browser interaction, screenshots, disabled-JS appearance, mobile layout | NOT VERIFIED | No browser automation dependency or usable installed browser was available; no browser was installed |
| Lighthouse / field LCP, INP, CLS | NOT VERIFIED | No Lighthouse or field-data result collected |
| Google-selected canonicals, indexing and rankings | NOT VERIFIED | No Search Console connection or indexing confirmation |
| `git diff --check` | VERIFIED | No whitespace errors |

The verifier discovers source routes independently of the sitemap and compares exact URL coverage. It checks real HTTP status, metadata, robots meta and headers, sitemap XML, crawl permissions, public metadata duplicates, link graph reachability, missing routes, query canonicals, redirects, fragment targets, assets and schema. Soft-404 checks are heuristic (status, meaningful text and H1) and cannot substitute for Google's own classification. It deliberately fails on new dynamic routes requiring explicit URL test cases.

## Exact files changed


- `README.md`
- `app/apps/README.md`
- `app/apps/_template/_data/app-data.ts`
- `app/apps/_template/layout.tsx`
- `app/apps/arrowlilt/_components/app-footer.tsx`
- `app/apps/arrowlilt/_data/app-data.ts`
- `app/apps/arrowlilt/page.tsx`
- `app/apps/arrowlilt/privacy/page.tsx`
- `app/apps/arrowlilt/terms/page.tsx`
- `app/apps/filesuite/_components/app-footer.tsx`
- `app/apps/filesuite/_data/app-data.ts`
- `app/apps/filesuite/_data/metadata.ts`
- `app/apps/geopixly/_components/app-footer.tsx`
- `app/apps/geopixly/_components/app-header.tsx`
- `app/apps/geopixly/_data/app-data.ts`
- `app/apps/geopixly/page.tsx`
- `app/apps/geopixly/privacy/page.tsx`
- `app/apps/geopixly/terms/page.tsx`
- `app/apps/hyperpulse/_components/app-footer.tsx`
- `app/apps/hyperpulse/_data/app-data.ts`
- `app/apps/hyperpulse/page.tsx`
- `app/apps/oryfin/_components/app-footer.tsx`
- `app/apps/oryfin/_data/oryfin-data.ts`
- `app/apps/oryfin/page.tsx`
- `app/apps/oryfin/privacy/page.tsx`
- `app/apps/oryfin/support/page.tsx`
- `app/apps/oryfin/terms/page.tsx`
- `app/apps/page.tsx`
- `app/apps/wordlilt/_components/app-footer.tsx`
- `app/apps/wordlilt/_data/app-data.ts`
- `app/apps/wordlilt/page.tsx`
- `app/apps/wordlilt/privacy/page.tsx`
- `app/apps/wordlilt/terms/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `app/privacy/page.tsx`
- `app/privcy/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/terms/page.tsx`
- `components/app-schema.tsx`
- `components/footer.tsx`
- `components/product-screenshot.tsx`
- `components/sections/contact.tsx`
- `components/sections/intro-strip.tsx`
- `components/ui/reveal.tsx`
- `docs/seo-audit.md`
- `docs/seo-evidence/external-before.json`
- `docs/seo-evidence/local-after.json`
- `docs/seo-evidence/production-before.json`
- `docs/seo-evidence/production-check.json`
- `lib/app-catalog.ts`
- `lib/image-dimensions.json`
- `lib/page-social.ts`
- `lib/public-routes.ts`
- `lib/seo-config.ts`
- `lib/seo-exclusions.json`
- `lib/site-data.ts`
- `next.config.ts`
- `package.json`
- `scripts/seo-check.py`

## Deployment considerations and remaining work

1. Review and deploy this checkout through the existing pipeline; no push or deployment was performed. Next redirects and sitemap discovery require the normal production build. Current pages and metadata endpoints are prerendered, so the discovered route list is materialized at build time.
2. Keep `SITE_URL` fixed to the selected production identity. Old `NEXT_PUBLIC_SITE_URL` examples/settings no longer control canonical URLs; update external deployment documentation if it assumes otherwise.
3. Run `npm run seo:check:live` after deploying and refreshing any stale CDN HTML, sitemap and robots cache entries. A local pass does not establish a deployed pass.
4. Confirm Cloudflare still allows Googlebot/Bingbot, exposes the updated sitemap line, and does not add restrictive X-Robots-Tag headers. Review its email obfuscation and optional HTTP non-www redirect-chain reduction separately.
5. Supply verified Oryfin publication information and obtain WordLilt legal review before clearing their deliberate restrictions. Update metadata gates and exclusion entries together, rebuild and rerun checks.
6. Verify the final UI in a browser at mobile/desktop sizes, keyboard navigation, interactive previews, navigation overlays and disabled-JS mode. Existing functionality was preserved in source and HTTP routing; runtime interaction parity has not been certified.
7. Run mobile Lighthouse and inspect real Search Console/CrUX data when available. Assess LCP/INP/CLS from measured data rather than guessing from bundle/asset sizes.
8. Add an owner-verified studio contact channel when available. No mailbox confirmation or new legal identity was assumed.

## Recommended Google Search Console validation

- Verify access to the domain property (covers both host variants) and inspect the www production URLs after deployment.
- Submit `https://www.sixthsignallabs.com/sitemap.xml`; confirm successful processing, current URL coverage and no noindex/redirect URLs listed.
- Use URL Inspection → Test live URL for `/apps` and every public app landing page. Check crawl permission, rendered content, selected/user-declared canonical and resource loading.
- Request indexing for the corrected WordLilt page and newly linked directory/product URLs where appropriate. Do not request indexing for the retained drafts.
- Review Page indexing exclusions for blocked by robots, excluded by noindex, duplicate/canonical conflicts, soft 404 and discovered/crawled currently not indexed. Recheck after Google recrawls; there is no guaranteed schedule.
- Check Enhancements/Rich Results only for eligible structured data and Mobile/Core Web Vitals reports when sufficient field data exists. Track real changes without promising ranking gains.

## Guidance consulted

- [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): consistent redirects, self-canonicals, internal links and sitemap signals.
- [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): do not rely on JavaScript removing initial noindex; preserve meaningful HTML and consistent canonicals.
- [Google technical SEO guidance](https://developers.google.com/search/docs/fundamentals/get-started): crawlable text, structured data, and robots/noindex distinctions.

## Compact summary

| Issue | Affected URLs | Before | Fix | Verification | Status |
|---|---|---|---|---|---|
| WordLilt indexing blocker | `/apps/wordlilt` | Inherited noindex | Page permits index; legal gates retained | Production-build HTML | VERIFIED |
| Missing discovery | `/apps`, five products | Directory 404; orphaned products | Directory, navigation and backlinks | Link graph + 200 responses | VERIFIED |
| Sitemap eligibility | All eligible pages | Missing apps; drafts included | 18 canonical URLs; drafts/aliases excluded | XML/HTML equality checks | VERIFIED |
| Canonical/social drift | All content pages | Non-www canonical; inherited social text | Fixed origin and page-specific social metadata | Canonicals, query/host tests, images | VERIFIED |
| Placeholders and broken links | Homepage; GeoPixly legal | Placeholder sections; dead fragment CTAs | Accurate visible content and repaired hrefs | Source + HTTP/fragment checks | VERIFIED |
| Deployed acceptance | Production site | Old defects remain live | Changes await separate deployment | Live audit still fails | FAILED |
| CWV and Google indexing | Production site | No confirmed metrics/index state | Follow-up validation documented | Browser/field/Search Console needed | NOT VERIFIED |

