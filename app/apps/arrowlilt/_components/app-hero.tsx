import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

import { appData } from "../_data/app-data";
import { AppStoreCta } from "./app-store-cta";
import { BoardPreview } from "./board-preview";

function ProductPreview() {
  if (appData.productScreenshotPath) {
    return (
      <div className="relative mx-auto w-full max-w-[23rem]">
        <Image
          src={appData.productScreenshotPath}
          alt={appData.productScreenshotAlt}
          width={1080}
          height={2340}
          priority
          sizes="(max-width: 1024px) 92vw, 23rem"
          className="h-auto w-full rounded-[2.6rem] border border-black/[0.09] shadow-[var(--shadow-float)]"
        />
      </div>
    );
  }

  return <BoardPreview />;
}

export function AppHero() {
  return (
    <section id="overview" className="signal-grid relative overflow-hidden border-b border-[var(--line)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 size-[34rem] rounded-full border border-[var(--blue)]/[0.08] [background:repeating-radial-gradient(circle_at_center,transparent_0,transparent_31px,rgba(14,138,204,0.06)_32px,transparent_33px)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.8fr)] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--blue-deep)]">
              <span
                aria-hidden="true"
                className="grid size-8 grid-cols-2 gap-0.5 rounded-full border border-[var(--blue)]/25 bg-white p-[0.4rem]"
              >
                <span className="rounded-[2px] bg-[#7a9c7e]" />
                <span className="rounded-[2px] bg-[#4d7a5e]" />
                <span className="rounded-[2px] bg-[#b87050]" />
                <span className="rounded-[2px] bg-[#8aab4a]" />
              </span>
              {appData.genreLabel}
            </div>

            {/* Official App Logo from ArrowLilt assets */}
            <div className="mt-8 flex items-center gap-4 sm:gap-5">
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2rem] bg-[#7a9c7e]/20 blur-xl"
                />
                <Image
                  src="/apps/arrowlilt/arrowlilt-app-icon.png"
                  alt={`${appData.name} app icon`}
                  width={128}
                  height={128}
                  priority
                  className="relative size-16 rounded-[1.4rem] border border-black/[0.08] bg-[#E7EDDC] object-cover shadow-[0_12px_28px_rgba(48,93,69,0.18)] sm:size-20 sm:rounded-[1.6rem]"
                />
              </div>
              <Image
                src="/apps/arrowlilt/arrowlilt-wordmark-outlined.svg"
                alt={appData.name}
                width={1100}
                height={260}
                priority
                className="h-9 w-auto sm:h-12"
              />
            </div>

            <h1 className="mt-8 max-w-xl text-balance text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] font-medium tracking-[-0.05em] text-[var(--ink)]">
              {appData.tagline}
            </h1>
            <p className="body-large mt-6 max-w-2xl text-pretty text-[var(--slate)]">
              {appData.supportingSentence}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <AppStoreCta />
              <a
                href={appData.secondaryAction.href}
                className="group inline-flex min-h-12 items-center gap-3 rounded-sm text-sm font-semibold text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
              >
                {appData.secondaryAction.label}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-[8%] -inset-y-6 rounded-full bg-[#7a9c7e]/[0.12] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute right-[6%] top-[14%] size-24 rounded-full bg-[#b87050]/[0.12] blur-2xl"
              />
              <div className="relative">
                <ProductPreview />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
