import Image from "next/image";
import { ArrowRight, Radio } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

import { appData } from "../_data/app-data";

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[38rem] lg:ml-auto">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-[var(--blue)]/[0.08] blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.09] bg-white p-3 shadow-[var(--shadow-float)] sm:rounded-[2.5rem] sm:p-4">
        {appData.productScreenshotPath ? (
          <Image
            src={appData.productScreenshotPath}
            alt={appData.productScreenshotAlt}
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 92vw, 44vw"
            className="h-auto w-full rounded-[1.4rem] border border-black/[0.06] object-cover sm:rounded-[1.9rem]"
          />
        ) : (
          <div
            role="img"
            aria-label={`${appData.name} product screenshot placeholder`}
            className="signal-grid relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-[var(--paper-2)] sm:rounded-[1.9rem]"
          >
            <div className="absolute inset-x-[9%] top-[11%] flex items-center justify-between border-b border-[var(--line)] pb-4">
              <span className="h-2 w-24 rounded-full bg-[var(--ink)]/75" />
              <span className="size-7 rounded-full bg-[var(--blue)]" />
            </div>
            <div className="absolute inset-x-[9%] bottom-[10%] top-[28%] grid grid-cols-[0.7fr_1fr] gap-3 sm:gap-4">
              <div className="rounded-2xl bg-[var(--ink)] p-4 sm:p-6">
                <span className="block size-8 rounded-full border border-white/20 bg-[var(--blue-bright)]" />
                <span className="mt-6 block h-2 w-3/4 rounded-full bg-white/65" />
                <span className="mt-2 block h-2 w-1/2 rounded-full bg-white/25" />
              </div>
              <div className="grid grid-rows-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-4">
                  <span className="block h-2 w-2/3 rounded-full bg-[var(--slate)]/40" />
                  <span className="mt-4 block h-8 w-1/3 rounded-lg bg-[var(--blue)]/20" />
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[45, 70, 52, 88, 64].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="flex-1 rounded-t-sm bg-[var(--blue)]/55"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!appData.productScreenshotPath ? (
        <p className="relative mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          Product preview placeholder
        </p>
      ) : null}
    </div>
  );
}

export function AppHero() {
  return (
    <section id="overview" className="signal-grid relative overflow-hidden border-b border-[var(--line)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 size-[34rem] rounded-full border border-[var(--blue)]/[0.08] [background:repeating-radial-gradient(circle_at_center,transparent_0,transparent_31px,rgba(14,138,204,0.06)_32px,transparent_33px)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(26rem,0.82fr)] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--blue-deep)]">
              <span className="flex size-8 items-center justify-center rounded-full border border-[var(--blue)]/25 bg-white">
                <Radio aria-hidden="true" className="size-4" />
              </span>
              An app by {appData.developerName}
            </div>
            <h1 className="mt-8 max-w-[10ch] text-balance text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[0.86] font-medium tracking-[-0.075em] text-[var(--ink)]">
              {appData.tagline}
            </h1>
            <p className="body-large mt-8 max-w-2xl text-pretty text-[var(--slate)] sm:mt-10">
              {appData.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <ButtonLink href={appData.primaryAction.href}>
                {appData.primaryAction.label}
              </ButtonLink>
              <a
                href="#features"
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm text-sm font-semibold text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              >
                Explore features
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ProductPreview />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
