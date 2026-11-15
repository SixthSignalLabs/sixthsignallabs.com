import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { AppHeader } from "./_components/app-header";
import { AppFooter } from "./_components/app-footer";
import { AppHero } from "./_components/app-hero";
import { AppStoreCta } from "./_components/app-store-cta";
import { appData, getAppPath, getAppUrl } from "./_data/app-data";
import { pageMetadata } from "./_data/metadata";

export const metadata = pageMetadata(appData.metadata.title, appData.metadata.description);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: appData.name,
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description: appData.description,
  url: getAppUrl(),
  publisher: { "@type": "Organization", name: appData.developerName, url: appData.developerUrl },
  ...(appData.availability.playStoreUrl ? { downloadUrl: appData.availability.playStoreUrl } : {}),
};

export default function FileSuitePage() {
  return (
    <div id="top" className="min-h-screen bg-[var(--paper)]">
      <AppHeader />
      <main id="main-content">
        <AppHero />
        <section id="features" className="scroll-mt-24 border-b border-[var(--line)]">
          <Container className="section-pad">
            <SectionLabel>The toolkit</SectionLabel>
            <div className="mt-7 grid gap-7 lg:grid-cols-2 lg:gap-20">
              <h2 className="section-title">Less file friction.<br />More getting done.</h2>
              <p className="body-large max-w-xl self-end text-[var(--slate)]">Five practical tools for everyday photos and documents. Choose the result you need, adjust the settings, and keep processing on your device.</p>
            </div>
            <div className="mt-14 grid border-t border-[var(--ink)] md:grid-cols-2 lg:grid-cols-3">
              {appData.features.map(feature => (
                <article key={feature.number} className="border-b border-[var(--line)] py-8 md:pr-8 lg:py-10">
                  <span className="font-mono text-xs tracking-widest text-[var(--blue-deep)]">{feature.number}</span>
                  <h3 className="mt-7 text-3xl leading-tight font-medium tracking-[-0.045em]">{feature.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-7 text-[var(--slate)]">{feature.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-6 text-[var(--muted)]">Results vary by file, format, settings, and device.</p>
          </Container>
        </section>
        <section id="how-it-works" className="scroll-mt-24 border-b border-[var(--line)] bg-white">
          <Container className="section-pad">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="section-title mt-7 max-w-3xl">From source to shareable.</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {appData.steps.map((step, index) => <li key={step} className="border-t border-[var(--line)] pt-6"><span className="font-mono text-xs text-[var(--blue-deep)]">0{index + 1}</span><p className="mt-5 text-xl font-medium leading-7 tracking-tight">{step}</p></li>)}
            </ol>
          </Container>
        </section>
        <section id="privacy" className="border-b border-[var(--line)] bg-[var(--paper-2)]">
          <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
            <div><ShieldCheck aria-hidden="true" className="mb-6 size-8 text-[var(--blue)]" strokeWidth={1.5} /><SectionLabel>Local processing</SectionLabel><h2 className="section-title mt-7">Your files stay yours.</h2></div>
            <div className="self-center"><p className="body-large text-[var(--slate)]">FileSuite is designed to process supported photos and PDFs on your Android device. You choose where to save or share the result.</p><p className="mt-5 text-base leading-7 text-[var(--slate)]">A cloud-backed picker or a receiving app may use the network. Keep backups of important originals and check your outputs before relying on them.</p><a href={getAppPath("/privacy")} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--blue-deep)]">Read the Privacy Policy <ArrowUpRight aria-hidden="true" className="size-4" /></a></div>
          </Container>
        </section>
        <section id="faq" className="scroll-mt-24 border-b border-[var(--line)]">
          <Container className="section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><SectionLabel>Good to know</SectionLabel><h2 className="section-title mt-7">A few useful answers.</h2></div>
            <div className="min-w-0 border-t border-[var(--ink)]">{appData.faqs.map(faq => <details key={faq.question} className="border-b border-[var(--line)] py-6"><summary className="pr-4 text-lg font-medium leading-7 tracking-tight">{faq.question}</summary><p className="mt-5 max-w-2xl text-base leading-7 text-[var(--slate)]">{faq.answer}</p></details>)}</div>
          </Container>
        </section>
        <section id="download" className="scroll-mt-24 bg-[var(--paper-2)]">
          <Container className="py-16 sm:py-20">
            <div className="rounded-[var(--radius-panel)] border border-[var(--line)] bg-white px-6 py-10 shadow-[var(--shadow-tight)] sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div><SectionLabel>FileSuite for Android</SectionLabel><h2 className="section-title mt-6 max-w-2xl">Everyday files.<br />Simply handled.</h2><p className="mt-6 max-w-xl text-base leading-7 text-[var(--slate)]">PDF &amp; photo tools, designed around local processing.</p></div>
              <div className="mt-8 lg:mt-0"><AppStoreCta /><p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">{appData.availability.playStoreUrl ? "View availability and device compatibility on Google Play." : "A Google Play link will appear when the listing is verified."}</p></div>
            </div>
          </Container>
        </section>
      </main>
      <AppFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}
