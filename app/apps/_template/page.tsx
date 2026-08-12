import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

import { AppFooter } from "./_components/app-footer";
import { AppHeader } from "./_components/app-header";
import { AppHero } from "./_components/app-hero";
import { appData, getAppUrl } from "./_data/app-data";

export const metadata: Metadata = {
  title: {
    absolute: `${appData.name} — ${appData.tagline}`,
  },
  description: appData.description,
  alternates: {
    canonical: getAppUrl(),
  },
  openGraph: {
    url: getAppUrl(),
    title: `${appData.name} — ${appData.tagline}`,
    description: appData.description,
  },
};

export default function AppLandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[var(--paper)]">
      <AppHeader />
      <main id="main-content">
        <AppHero />

        <section id="features" className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--paper)]">
          <Container className="section-pad">
            <Reveal>
              <SectionLabel>Product features</SectionLabel>
              <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-end lg:gap-20">
                <h2 className="section-title">Built around what matters.</h2>
                <p className="body-large max-w-2xl text-pretty text-[var(--slate)] lg:justify-self-end">
                  Replace these feature summaries with the three clearest reasons someone should choose {appData.name}.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid border-t border-[var(--ink)] md:grid-cols-3 lg:mt-20">
              {appData.features.map((feature, index) => (
                <Reveal
                  key={feature.number}
                  delay={index * 0.08}
                  className="border-b border-[var(--line)] py-8 md:border-r md:last:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0 md:first:pr-7 md:not-first:px-7"
                >
                  <article>
                    <span className="font-mono text-[0.62rem] font-semibold tracking-[0.15em] text-[var(--blue-deep)]">
                      {feature.number}
                    </span>
                    <h3 className="mt-10 text-balance text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.02] font-medium tracking-[-0.05em] text-[var(--ink)]">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-pretty text-base leading-7 text-[var(--slate)]">
                      {feature.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--paper-2)]">
          <Container className="py-16 sm:py-20 lg:py-24">
            <Reveal>
              <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-black/[0.08] bg-white px-6 py-10 shadow-[var(--shadow-tight)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-16 lg:px-14">
                <div
                  aria-hidden="true"
                  className="signal-grid pointer-events-none absolute inset-0 opacity-55"
                />
                <div className="relative">
                  <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--blue-deep)]">
                    Product engineering
                  </p>
                  <h2 className="mt-5 max-w-2xl text-balance text-[clamp(2rem,4vw,3.7rem)] leading-[0.98] font-medium tracking-[-0.055em] text-[var(--ink)]">
                    Built by {appData.developerName}.
                  </h2>
                  <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[var(--slate)] sm:text-lg">
                    Thoughtful software, carefully engineered from interface to infrastructure.
                  </p>
                </div>
                <a
                  href={appData.developerUrl}
                  className="group relative mt-8 inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full border border-[var(--ink)] px-5 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 lg:mt-0"
                >
                  Visit the studio
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                  />
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
