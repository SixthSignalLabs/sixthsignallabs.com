import Image from "next/image";
import { ArrowDown, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { appData } from "../_data/app-data";
import { AppStoreCta } from "./app-store-cta";

export function AppHero() {
  return (
    <section className="signal-grid relative overflow-hidden border-b border-[var(--line)]">
      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <SectionLabel>FileSuite / PDF &amp; Photo Tools</SectionLabel>
          <h1 className="mt-8 max-w-3xl text-balance text-[clamp(3.2rem,6.4vw,6.5rem)] leading-[0.98] font-medium tracking-[-0.065em] text-[var(--ink)]">{appData.headline}</h1>
          <p className="body-large mt-7 max-w-xl text-pretty text-[var(--slate)]">{appData.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <AppStoreCta />
            <a href="#features" className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--blue-deep)]">Explore the tools <ArrowDown aria-hidden="true" className="size-4" /></a>
          </div>
          <p className="mt-7 max-w-lg text-sm leading-6 text-[var(--muted)]">{appData.brandMessage}</p>
        </div>
        {appData.productScreenshotPath ? (
          <Image src={appData.productScreenshotPath} alt={appData.productScreenshotAlt} width={1080} height={1920} sizes="(max-width: 375px) 90vw, 320px" priority className="mx-auto h-auto w-full max-w-xs rounded-[var(--radius-panel)] border border-[var(--line)] shadow-[var(--shadow-float)]" />
        ) : (
          <aside aria-label="FileSuite tools overview" className="filesuite-tool-index min-w-0 rounded-[var(--radius-panel)] px-6 py-8 shadow-[var(--shadow-tight)] sm:p-10">
            <div className="flex items-center gap-4 border-b border-[var(--line)] pb-7">
              <FileText aria-hidden="true" className="size-8 text-[var(--blue)]" strokeWidth={1.5} />
              <div><p className="text-xl font-semibold tracking-tight">One everyday toolkit.</p><p className="mt-1 text-sm text-[var(--muted)]">Photos. Images. Documents.</p></div>
            </div>
            <ol className="divide-y divide-[var(--line)]">
              {appData.features.map(feature => <li key={feature.number} className="flex items-center gap-5 py-5"><span className="font-mono text-xs text-[var(--blue-deep)]">{feature.number}</span><span className="text-lg font-medium tracking-tight">{feature.title}</span></li>)}
            </ol>
            <p className="border-t border-[var(--line)] pt-5 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">Designed for Android</p>
          </aside>
        )}
      </Container>
    </section>
  );
}
