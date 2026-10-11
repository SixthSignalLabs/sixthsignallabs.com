import { ArrowUpRight, FileText } from "lucide-react";

import { Container } from "@/components/ui/container";

import {
  appData,
  getAppPath,
  type AppLegalBlock,
  type AppLegalDocument,
} from "../_data/app-data";
import { AppFooter } from "./app-footer";
import { AppHeader } from "./app-header";

function LegalBlock({ block }: { block: AppLegalBlock }) {
  if (block.type === "list") {
    return (
      <ul className="my-6 space-y-3 text-[1rem] leading-7 text-[var(--slate)] sm:text-[1.06rem]">
        {block.items.map((item) => (
          <li key={item} className="grid grid-cols-[1rem_1fr] gap-3">
            <span aria-hidden="true" className="mt-[0.72rem] size-1.5 rounded-full bg-[var(--blue)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "notice") {
    return (
      <p className="my-6 border-l-2 border-[var(--blue)] bg-[var(--paper-2)] px-5 py-4 font-mono text-[0.76rem] leading-6 tracking-[0.015em] text-[var(--blue-deep)] sm:px-6">
        {block.text}
      </p>
    );
  }

  return (
    <p className="my-5 text-pretty text-[1rem] leading-7 text-[var(--slate)] sm:text-[1.06rem] sm:leading-8">
      {block.text}
    </p>
  );
}

export function AppLegalPage({ document }: { document: AppLegalDocument }) {
  const counterpart =
    document.slug === "privacy"
      ? { label: "Terms of Service", href: getAppPath("/terms"), number: "02" }
      : { label: "Privacy Policy", href: getAppPath("/privacy"), number: "01" };

  return (
    <div id="top" className="min-h-screen bg-[var(--paper)]">
      <AppHeader activeLegalPage={document.slug} />

      <main id="main-content">
        <section className="signal-grid relative overflow-hidden border-b border-[var(--line)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 top-14 size-[30rem] rounded-full border border-[var(--blue)]/[0.08] [background:repeating-radial-gradient(circle_at_center,transparent_0,transparent_28px,rgba(14,138,204,0.055)_29px,transparent_30px)]"
          />
          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-3 font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-[var(--blue-deep)]">
                  <span className="flex size-7 items-center justify-center rounded-full border border-[var(--blue)]/25 bg-white">
                    <FileText aria-hidden="true" className="size-3.5" />
                  </span>
                  {appData.shortName} / Document {document.documentNumber}
                </div>
                <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.88] font-medium tracking-[-0.07em] text-[var(--ink)]">
                  {document.title}
                </h1>
              </div>
              <div className="border-t border-[var(--ink)] pt-5 lg:mb-2">
                <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  Effective date
                </p>
                <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-[var(--ink)]">
                  {document.effectiveDate}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <Container className="py-14 sm:py-20 lg:py-28">
          <div className="grid items-start gap-14 lg:grid-cols-[15rem_minmax(0,48rem)] lg:justify-between lg:gap-24 xl:grid-cols-[18rem_minmax(0,52rem)]">
            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                On this page
              </p>
              <nav aria-label={`${document.title} contents`} className="mt-6">
                <ol className="space-y-1 border-l border-[var(--line)]">
                  {document.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group grid grid-cols-[2rem_1fr] gap-2 border-l border-transparent py-2 pl-4 text-[0.78rem] leading-5 text-[var(--muted)] transition-colors hover:border-[var(--blue)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
                      >
                        <span className="font-mono text-[0.58rem] text-[var(--blue-deep)]">
                          {section.number}
                        </span>
                        <span>{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article aria-label={document.title}>
              <div className="border-b border-[var(--ink)] pb-12 sm:pb-16">
                <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--blue-deep)]">
                  Scope
                </p>
                <div className="mt-6">
                  {document.introduction.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-5 text-pretty text-xl leading-[1.55] tracking-[-0.025em] text-[var(--slate)] first:mt-0 sm:text-2xl"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {document.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-[var(--line)] py-12 last:border-b-0 sm:py-16"
                >
                  <div className="grid gap-4 sm:grid-cols-[3.25rem_1fr] sm:gap-6">
                    <span className="font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--blue-deep)] sm:pt-2">
                      {section.number}
                    </span>
                    <div>
                      <h2 className="max-w-2xl text-balance text-[clamp(2rem,4vw,3.4rem)] leading-[1] font-medium tracking-[-0.05em] text-[var(--ink)]">
                        {section.title}
                      </h2>
                      <div className="mt-7">
                        {section.blocks.map((block, index) => (
                          <LegalBlock key={`${block.type}-${index}`} block={block} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}

              <div className="mt-10 border-t border-[var(--ink)] pt-8">
                <a
                  href={counterpart.href}
                  className="group flex items-center justify-between gap-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
                >
                  <span>
                    <span className="block font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                      Legal / Document {counterpart.number}
                    </span>
                    <span className="mt-2 block text-2xl font-medium tracking-[-0.035em] text-[var(--ink)] sm:text-3xl">
                      {counterpart.label}
                    </span>
                  </span>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition-colors group-hover:border-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    />
                  </span>
                </a>
              </div>
            </article>
          </div>
        </Container>
      </main>

      <AppFooter />
    </div>
  );
}
