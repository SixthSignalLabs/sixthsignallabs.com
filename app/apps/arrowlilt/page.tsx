import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Leaf, Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

import { AppFooter } from "./_components/app-footer";
import { AppHeader } from "./_components/app-header";
import { AppHero } from "./_components/app-hero";
import { AppStoreCta } from "./_components/app-store-cta";
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
    images: appData.appIconPath
      ? [{ url: appData.appIconPath, alt: `${appData.name} icon` }]
      : undefined,
  },
};

function SlideIllustration() {
  return (
    <figure className="mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end">
      <div
        role="img"
        aria-label="Illustration: tapping an unblocked arrow to slide it out of the board."
        className="rounded-[1.75rem] border border-black/[0.08] bg-[#FCF9F8] p-4 shadow-[var(--shadow-tight)] sm:p-5"
      >
        <div aria-hidden="true" className="flex items-center justify-between">
          <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
            Action
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4D7A5E] px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-white shadow-[0_2px_0_#355942]">
            <span>Slide out</span>
            <span className="text-[0.9em]">→</span>
          </span>
        </div>

        <div className="mt-4 rounded-[1.25rem] bg-white p-3 shadow-[0_8px_24px_rgba(23,23,23,0.06)]">
          {/* Mini 3x3 board showing translation mechanic */}
          <div className="grid grid-cols-3 gap-2">
            {/* Row 0 */}
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#d4e0d8] bg-white text-base font-bold text-[#8a99a8]">
              ↓
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#c6d9cc] bg-[#edf3f0] text-base font-bold text-[#a0b8a4]">
              ✓
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#d4e0d8] bg-white text-base font-bold text-[#8a99a8]">
              ←
            </div>

            {/* Row 1: The sliding arrow */}
            <div className="relative flex aspect-square items-center justify-center rounded-xl border-2 border-[#4D7A5E] bg-[#7A9C7E] text-base font-bold text-white shadow-sm">
              →
              {/* motion trail */}
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#4D7A5E]">
                ⇢
              </span>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-[#7A9C7E] bg-[#E8F3EA] text-sm font-semibold text-[#4D7A5E]">
              free
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-[#7A9C7E]/40 bg-[#E8F3EA]/40 text-xs font-medium text-[#7A9C7E]">
              exit →
            </div>

            {/* Row 2 */}
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#d4e0d8] bg-white text-base font-bold text-[#8a99a8]">
              ↑
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#d4e0d8] bg-white text-base font-bold text-[#8a99a8]">
              ↗
            </div>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-[#d4e0d8] bg-white text-base font-bold text-[#8a99a8]">
              ↑
            </div>
          </div>

          <div className="mt-3.5 flex items-center justify-between border-t border-[var(--line)] pt-3 text-[0.68rem] text-[var(--muted)]">
            <span className="font-mono uppercase tracking-[0.1em]">Collision check</span>
            <span className="font-medium text-[#4D7A5E]">Path unobstructed</span>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
        Illustrative gameplay
      </figcaption>
    </figure>
  );
}

export default function ArrowLiltLandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[var(--paper)]">
      <AppHeader />
      <main id="main-content">
        {/* ── 1. Hero / Overview ─────────────────────────────────────────── */}
        <AppHero />

        {/* ── 2. Features ────────────────────────────────────────────────── */}
        <section
          id="features"
          className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--paper)]"
        >
          <Container className="section-pad">
            <Reveal>
              <SectionLabel>{appData.featuresIntro.label}</SectionLabel>
              <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-end lg:gap-20">
                <h2 className="section-title">{appData.featuresIntro.title}</h2>
                <p className="body-large max-w-2xl text-pretty text-[var(--slate)] lg:justify-self-end">
                  {appData.featuresIntro.description}
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

        {/* ── 3. How to Play ─────────────────────────────────────────────── */}
        <section
          id="how-to-play"
          className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--paper)]"
        >
          <Container className="section-pad">
            <Reveal>
              <SectionLabel>{appData.howToPlay.label}</SectionLabel>
              <h2 className="section-title mt-7">{appData.howToPlay.title}</h2>
            </Reveal>

            <div className="mt-14 grid items-center gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)] lg:gap-24">
              <ol className="border-t border-[var(--ink)]">
                {appData.howToPlay.steps.map((step, index) => (
                  <li key={step.number} className="border-b border-[var(--line)]">
                    <Reveal
                      delay={index * 0.08}
                      className="grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-6"
                    >
                      <span className="font-mono text-[0.62rem] font-semibold tracking-[0.15em] text-[var(--blue-deep)] sm:pt-3">
                        STEP {step.number}
                      </span>
                      <div>
                        <h3 className="text-balance text-[clamp(1.6rem,2.6vw,2.3rem)] leading-[1.05] font-medium tracking-[-0.045em] text-[var(--ink)]">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-pretty text-base leading-7 text-[var(--slate)]">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal delay={0.12}>
                <SlideIllustration />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── 4. The Garden ──────────────────────────────────────────────── */}
        <section
          id="garden"
          className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--paper-2)]"
        >
          <Container className="section-pad">
            <Reveal>
              <SectionLabel>{appData.garden.label}</SectionLabel>
              <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-end lg:gap-20">
                <h2 className="section-title">{appData.garden.title}</h2>
                <p className="body-large max-w-2xl text-pretty text-[var(--slate)] lg:justify-self-end">
                  {appData.garden.description}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid border-t border-[var(--ink)] sm:grid-cols-2 lg:mt-20">
              {appData.garden.highlights.map((highlight, index) => (
                <Reveal
                  key={highlight.number}
                  delay={index * 0.08}
                  className="border-b border-[var(--line)] py-9 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:first:pr-8 sm:[&:nth-child(2n+1)]:pr-8 sm:[&:nth-child(2n)]:pl-8 sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <article>
                    <div className="flex items-center gap-3">
                      <span className="flex size-7 items-center justify-center rounded-full border border-[#7a9c7e]/30 bg-white">
                        <Leaf aria-hidden="true" className="size-3.5 text-[#4d7a5e]" />
                      </span>
                      <span className="font-mono text-[0.62rem] font-semibold tracking-[0.15em] text-[var(--blue-deep)]">
                        {highlight.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-balance text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.08] font-medium tracking-[-0.04em] text-[var(--ink)]">
                      {highlight.title}
                    </h3>
                    <p className="mt-4 text-pretty text-base leading-7 text-[var(--slate)]">
                      {highlight.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="mt-12 border-t border-[var(--line)] pt-8 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[var(--muted)]">
                {appData.privacyTrustLine}
              </p>
            </Reveal>
          </Container>
        </section>

        {/* ── 5. Get the App / Download ───────────────────────────────────── */}
        <section
          id="download"
          className="scroll-mt-24 border-b border-[var(--line)] bg-[var(--paper)]"
        >
          <Container className="section-pad">
            <Reveal>
              <SectionLabel>{appData.download.label}</SectionLabel>
              <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-20">
                <div>
                  <h2 className="section-title">{appData.download.title}</h2>
                  <ul className="mt-8 space-y-4">
                    {appData.download.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="grid grid-cols-[1rem_1fr] gap-3 text-base leading-7 text-[var(--slate)] sm:text-lg"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.72rem] size-1.5 rounded-full bg-[var(--blue)]"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:justify-self-end">
                  <AppStoreCta />
                  <a
                    href={appData.supportHref}
                    className="group mt-6 flex w-fit items-center gap-2 rounded-sm text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
                  >
                    <Mail aria-hidden="true" className="size-4" strokeWidth={1.8} />
                    {appData.supportPrompt}
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ── 6. Built by Sixth Signal Labs ───────────────────────────────── */}
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
