import { withPageSocial } from "@/lib/page-social";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { appCatalog } from "@/lib/app-catalog";

const title = "Apps by Sixth Signal Labs — Games & Everyday Tools";
const description = "Explore WordLilt, ArrowLilt, GeoPixly, FileSuite, and HyperPulse: puzzle games, location-stamped photos, file tools, and workout tracking by Sixth Signal Labs.";
export const metadata: Metadata = withPageSocial({
  title, description, alternates: { canonical: "/apps" },
  openGraph: { type: "website", title, description, url: "/apps", images: [{ url: "/brand/sixth-signal-labs-logo.png", width: 1280, height: 720, alt: "Sixth Signal Labs" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/brand/sixth-signal-labs-logo.png"] },
});

export default function AppsPage() {
  return <div id="top"><Navbar /><main id="main-content" className="bg-paper pb-20 pt-36 sm:pt-44">
    <Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sixthsignallabs.com/" }, { "@type": "ListItem", position: 2, name: "Apps", item: "https://www.sixthsignallabs.com/apps" }] }) }} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted"><Link href="/">Home</Link> / <span>Apps</span></nav>
      <h1 className="section-title">Apps by Sixth Signal Labs.</h1>
      <p className="body-large mt-8 max-w-3xl text-slate">Puzzle breaks, practical tools, and focused ways to track everyday progress. Explore our products, learn how they work, and find support and privacy information. Each product page lists its current store availability.</p>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {appCatalog.map(app => <article key={app.path} className="rounded-3xl border border-line bg-white p-8">
          {app.icon && <Image src={app.icon} alt={`${app.name} icon`} width={72} height={72} className="mb-6 rounded-2xl" sizes="72px" />}
          <h2 className="text-3xl font-medium tracking-tight"><a href={app.path} className="underline decoration-blue/30 underline-offset-8">{app.name}</a></h2>
          <p className="mt-6 leading-7 text-slate">{app.description}</p>
        </article>)}
      </div>
    </Container>
  </main><Footer /></div>;
}
