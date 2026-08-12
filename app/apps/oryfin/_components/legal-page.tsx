import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Container } from "@/components/ui/container";

import type {
  LegalBlock,
  LegalDocument,
  LegalInline,
} from "../_data/legal-documents";
import { oryfinPublishing } from "../_data/oryfin-data";
import { PublicationNotice } from "./publication-notice";

function InlineContent({ content }: { content: readonly LegalInline[] }) {
  return content.map((item, index) => {
    if (typeof item === "string") return <span key={`${item}-${index}`}>{item}</span>;
    if (!item.href) return <span key={`${item.text}-${index}`}>{item.text}</span>;

    const external = item.href.startsWith("http");
    return (
      <a
        key={`${item.href}-${index}`}
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="font-medium text-[var(--oryfin-violet-dark)] underline decoration-[var(--oryfin-violet)]/35 underline-offset-4 hover:decoration-[var(--oryfin-violet)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]"
      >
        {item.text}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    );
  });
}

function DocumentBlock({ block }: { block: LegalBlock }) {
  if (block.type === "list") {
    return (
      <ul className="my-6 space-y-3 text-base leading-7 text-[var(--oryfin-copy)] sm:text-[1.06rem] sm:leading-8">
        {block.items.map((item, index) => (
          <li key={index} className="grid grid-cols-[1rem_1fr] gap-3">
            <span aria-hidden="true" className="mt-[0.78rem] size-1.5 rounded-full bg-[var(--oryfin-violet)]" />
            <span><InlineContent content={item} /></span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "notice") {
    return (
      <p className="my-6 border-l-2 border-[var(--oryfin-amber)] bg-[#fff8e8] px-5 py-4 text-sm leading-6 text-[#6f4b0f] sm:px-6">
        <InlineContent content={block.content} />
      </p>
    );
  }

  return (
    <p className="my-5 text-pretty text-base leading-7 text-[var(--oryfin-copy)] sm:text-[1.06rem] sm:leading-8">
      <InlineContent content={block.content} />
    </p>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  const counterpart =
    document.slug === "privacy"
      ? { number: "02", label: "Terms of Use", href: "/apps/oryfin/terms" as const }
      : { number: "01", label: "Privacy Policy", href: "/apps/oryfin/privacy" as const };

  return (
    <main id="main-content">
      <section className="oryfin-legal-hero oryfin-dot-grid border-b border-[var(--oryfin-line)] bg-white">
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-20">
            <div>
              <p className="flex items-center gap-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">
                <span className="flex size-8 items-center justify-center rounded-full border border-[var(--oryfin-violet)]/25 bg-white">
                  <FileText aria-hidden="true" className="size-4" />
                </span>
                Legal / Document {document.documentNumber}
              </p>
              <h1 className="mt-7 max-w-5xl text-balance text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] font-medium tracking-[-0.07em] text-[var(--oryfin-ink)]">
                {document.title}
              </h1>
            </div>
            <div className="border-t border-[var(--oryfin-ink)] pt-5">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-muted)]">
                Last updated
              </p>
              <p className="mt-3 text-lg font-semibold text-[var(--oryfin-ink)]">
                {oryfinPublishing.effectiveDate ?? "Pending legal approval"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="oryfin-legal-shell py-12 sm:py-16 lg:py-24">
        <PublicationNotice />
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[16rem_minmax(0,50rem)] lg:justify-between lg:gap-20">
          <aside className="oryfin-legal-toc hidden lg:sticky lg:top-28 lg:block">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-muted)]">
              On this page
            </p>
            <nav aria-label={`${document.title} contents`} className="mt-5">
              <ol className="space-y-0.5 border-l border-[var(--oryfin-line)]">
                {document.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="grid min-h-11 grid-cols-[2rem_1fr] items-center gap-2 border-l border-transparent py-2 pl-4 text-xs leading-5 text-[var(--oryfin-muted)] transition-colors hover:border-[var(--oryfin-violet)] hover:text-[var(--oryfin-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)] motion-reduce:transition-none"
                    >
                      <span className="font-mono text-[0.58rem] text-[var(--oryfin-violet-dark)]">
                        {section.number}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="oryfin-legal-article" aria-label={document.title}>
            <div className="border-b border-[var(--oryfin-ink)] pb-10 sm:pb-12">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-violet-dark)]">
                About this document
              </p>
              <p className="mt-5 text-pretty text-xl leading-8 tracking-[-0.025em] text-[var(--oryfin-copy)] sm:text-2xl sm:leading-9">
                {document.description}
              </p>
            </div>

            {document.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="oryfin-legal-section scroll-mt-28 border-b border-[var(--oryfin-line)] py-10 last:border-b-0 sm:py-14"
              >
                <div className="grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-[var(--oryfin-violet-dark)] sm:pt-2">
                    {section.number}
                  </span>
                  <div>
                    <h2 className="max-w-2xl text-balance text-[clamp(1.8rem,4vw,3.2rem)] leading-[1] font-medium tracking-[-0.05em] text-[var(--oryfin-ink)]">
                      {section.title}
                    </h2>
                    <div className="mt-6">
                      {section.blocks.map((block, index) => (
                        <DocumentBlock key={`${block.type}-${index}`} block={block} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            <div className="oryfin-screen-only mt-8 border-t border-[var(--oryfin-ink)] pt-6">
              <Link
                href={{ pathname: counterpart.href }}
                className="group flex min-h-20 items-center justify-between gap-6 rounded-sm py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)]"
              >
                <span>
                  <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--oryfin-muted)]">
                    Legal / Document {counterpart.number}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold tracking-[-0.035em] text-[var(--oryfin-ink)]">
                    {counterpart.label}
                  </span>
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[var(--oryfin-line)] transition-colors group-hover:border-[var(--oryfin-violet)] group-hover:bg-[var(--oryfin-violet)] group-hover:text-white motion-reduce:transition-none">
                  <ArrowUpRight aria-hidden="true" className="size-5" />
                </span>
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
