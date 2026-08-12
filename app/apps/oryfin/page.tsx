import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ListChecks, ShieldCheck, Target } from "lucide-react";

import { Container } from "@/components/ui/container";

import { AppStoreCta } from "./_components/app-store-cta";
import {
  getOryfinUrl,
  landingFeatureGroups,
  oryfin,
  verifiedCapabilities,
} from "./_data/oryfin-data";

export const metadata: Metadata = {
  title: { absolute: `${oryfin.name} — ${oryfin.tagline}` },
  description: oryfin.description,
  alternates: { canonical: getOryfinUrl() },
  openGraph: {
    url: getOryfinUrl(),
    title: `${oryfin.name} — ${oryfin.tagline}`,
    description: oryfin.description,
  },
};

const planHighlights = [
  { label: "Free", detail: "Everyday tracking, recurring schedules, security, three monthly budgets, one goal, and six-month insights." },
  { label: "Pro", detail: "Unlimited budgets and goals, twelve-month insights, and user-initiated transaction CSV sharing." },
] as const;

export default function OryfinLandingPage() {
  return (
    <main id="main-content">
      <section className="oryfin-dot-grid relative overflow-hidden border-b border-[var(--oryfin-line)] bg-white">
        <div aria-hidden="true" className="absolute -right-32 top-20 size-[34rem] rounded-full bg-[var(--oryfin-violet-soft)]/60 blur-3xl" />
        <Container className="relative py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">
                Local-first personal money tracker
              </p>
              <h1 className="mt-7 max-w-[10ch] text-balance text-[clamp(4rem,9vw,9rem)] leading-[0.84] font-medium tracking-[-0.078em] text-[var(--oryfin-ink)]">
                {oryfin.tagline}
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-[var(--oryfin-copy)] sm:text-xl">
                Understand spending, plan category budgets, follow savings goals, and estimate what may be safe to spend—with financial records kept on your device in this release.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <AppStoreCta />
                <Link
                  href={{ pathname: "/apps/oryfin/support" }}
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold text-[var(--oryfin-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]"
                >
                  Explore support
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[30rem]">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/[0.08] bg-[var(--oryfin-navy)] p-6 shadow-[0_28px_80px_rgba(11,15,27,0.2)] sm:p-8">
                <div aria-hidden="true" className="oryfin-arc-line absolute inset-x-0 top-0 h-1.5" />
                <Image
                  src={oryfin.appIconPath}
                  alt="Oryfin app icon featuring the Forward Arc"
                  width={1024}
                  height={1024}
                  priority
                  sizes="112px"
                  className="size-24 rounded-[1.4rem] sm:size-28"
                />
                <p className="mt-10 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                  Track. Plan. Understand.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    [ListChecks, "Everyday records"],
                    [CalendarDays, "Monthly plans"],
                    [Target, "Savings goals"],
                  ].map(([Icon, label]) => (
                    <div key={label as string} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <Icon aria-hidden="true" className="size-5 text-[#a99ef9]" />
                      <p className="mt-5 text-sm leading-5 text-white/72">{label as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--oryfin-line)]">
        <Container className="section-pad">
          <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">
            A clearer routine
          </p>
          <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <h2 className="section-title text-[var(--oryfin-ink)]">Built for your real numbers.</h2>
            <p className="body-large max-w-2xl text-pretty text-[var(--oryfin-copy)] lg:justify-self-end">
              Oryfin is a manual planning tool: you choose what to record, and the app turns those entries into a useful view of the month.
            </p>
          </div>
          <div className="mt-14 grid border-t border-[var(--oryfin-ink)] md:grid-cols-3 lg:mt-20">
            {landingFeatureGroups.map((feature) => (
              <article key={feature.number} className="border-b border-[var(--oryfin-line)] py-8 md:border-r md:border-b-0 md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="font-mono text-[0.62rem] font-semibold tracking-[0.15em] text-[var(--oryfin-violet-dark)]">
                  {feature.number}
                </span>
                <h3 className="mt-9 text-balance text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] font-medium tracking-[-0.05em] text-[var(--oryfin-ink)]">
                  {feature.title}
                </h3>
                <p className="mt-5 text-pretty text-base leading-7 text-[var(--oryfin-copy)]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--oryfin-navy)] text-white">
        <Container className="section-pad">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <ShieldCheck aria-hidden="true" className="size-8 text-[#a99ef9]" />
              <h2 className="mt-7 max-w-lg text-balance text-[clamp(2.8rem,6vw,6rem)] leading-[0.92] font-medium tracking-[-0.06em]">
                Local means local.
              </h2>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-white/68">
                Financial records remain on the device. They are not uploaded to Supabase or RevenueCat in this release.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {verifiedCapabilities.map((capability, index) => (
                <div key={capability} className="flex gap-4 border-t border-white/12 py-5">
                  <span className="font-mono text-[0.6rem] text-[#a99ef9]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-white/75">{capability}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border border-white/12 bg-white/[0.045] p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.03em]">Important release limitations</h3>
            <div className="mt-5 grid gap-5 text-sm leading-6 text-white/68 md:grid-cols-2">
              <p>There is no Oryfin cloud backup or multi-device synchronization. Oryfin does not connect to banks or automatically import transactions.</p>
              <p>Local records are not separately encrypted by Oryfin. Device or platform storage protection and the optional biometric lock are the available protections.</p>
              <p>Oryfin does not process payments, trade investments, or provide tax, accounting, or financial advice.</p>
              <p>Calculations and insights depend on user-entered information and are estimates, not guarantees or verified balances.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--oryfin-line)] bg-white">
        <Container className="section-pad">
          <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">Free and Pro</p>
          <h2 className="mt-7 max-w-4xl text-balance text-[clamp(2.8rem,6vw,6rem)] leading-[0.92] font-medium tracking-[-0.06em] text-[var(--oryfin-ink)]">
            Start with the essentials. Expand when useful.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {planHighlights.map((plan, index) => (
              <article key={plan.label} className={`border p-7 sm:p-9 ${index === 1 ? "border-[var(--oryfin-violet)] bg-[var(--oryfin-violet-soft)]/45" : "border-[var(--oryfin-line)] bg-[var(--oryfin-page)]"}`}>
                <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">{plan.label}</p>
                <p className="mt-6 text-xl leading-8 tracking-[-0.025em] text-[var(--oryfin-copy)]">{plan.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-4xl text-sm leading-6 text-[var(--oryfin-muted)]">
            Available plans, localized pricing, renewal periods, and trial eligibility are shown by the App Store before purchase. Pro does not include cloud backup or synchronization.
          </p>
        </Container>
      </section>
    </main>
  );
}
