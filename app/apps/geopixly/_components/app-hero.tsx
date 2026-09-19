import Image from "next/image";
import { ArrowRight, Radio } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

import { appData } from "../_data/app-data";
import { AnimatedPinMark } from "./animated-pin-mark";

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
            aria-label={`${appData.name} Precision Optics mark with GPS lock`}
            className="relative aspect-square overflow-hidden rounded-[1.4rem] sm:rounded-[1.9rem]"
            style={{ background: "#090A0F" }}
          >
            <AnimatedPinMark className="absolute inset-[4%] sm:inset-[6%]" />

            {/* Stamp overlay chrome — product personality, not competing with the mark */}
            <div
              className="absolute bottom-4 left-4 right-4 max-w-[15rem] rounded-md border px-3 py-2.5 sm:bottom-5 sm:left-5 sm:px-3.5 sm:py-3"
              style={{
                borderColor: "rgba(180, 197, 255, 0.28)",
                background: "rgba(9, 10, 15, 0.78)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="font-mono text-[0.52rem] font-semibold tracking-[0.16em]"
                style={{ color: "#B4C5FF" }}
              >
                {appData.verifiedChromeCopy}
              </p>
              <p className="mt-2 font-mono text-[0.72rem] leading-5 tracking-[-0.01em] text-white/90">
                37.7749° N, 122.4194° W
              </p>
              <p className="mt-0.5 font-mono text-[0.62rem] leading-4 text-white/45">
                ±3.2 m · 42 m elev · stamp preview
              </p>
            </div>
          </div>
        )}
      </div>
      {!appData.productScreenshotPath ? (
        <p className="relative mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--muted)]">
          Precision Optics preview
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
            <p className="mt-8 max-w-[12ch] text-balance text-[clamp(4rem,9vw,9rem)] leading-[0.84] font-medium tracking-[-0.078em] text-[var(--ink)]">
              {appData.name}
            </p>
            <h1 className="mt-5 max-w-xl text-balance text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1.08] font-medium tracking-[-0.04em] text-[var(--ink)]">
              {appData.tagline}
            </h1>
            <p className="body-large mt-6 max-w-2xl text-pretty text-[var(--slate)] sm:mt-8">
              {appData.supportingSentence}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              {appData.privacyTrustLine}
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
