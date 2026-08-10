import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import type {
  LegalBlock,
  LegalDocument,
  LegalTextBlock,
} from "@/lib/legal-content";
import { siteData } from "@/lib/site-data";

const legalNavigation = [
  { label: "Privacy", href: "/privacy", slug: "privacy" },
  { label: "Terms", href: "/terms", slug: "terms" },
] as const;

function LegalText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);

  return (
    <>
      {parts.map((part, index) =>
        /^\[[^\]]+\]$/.test(part) ? (
          <span
            key={`${part}-${index}`}
            title="Draft placeholder — replace before publication"
            className="mx-0.5 inline rounded-md border border-[var(--blue)]/25 bg-[var(--blue)]/[0.08] px-1.5 py-0.5 font-mono text-[0.82em] font-medium text-[var(--blue-deep)]"
          >
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function TextBlock({ block }: { block: LegalTextBlock }) {
  if (block.type === "list") {
    return (
      <ul className="my-6 space-y-3 text-[1rem] leading-7 text-[var(--slate)] sm:text-[1.06rem]">
        {block.items.map((item) => (
          <li key={item} className="grid grid-cols-[1rem_1fr] gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.72rem] size-1.5 rounded-full bg-[var(--blue)]"
            />
            <span>
              <LegalText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="my-5 text-pretty text-[1rem] leading-7 text-[var(--slate)] sm:text-[1.06rem] sm:leading-8">
      <LegalText text={block.text} />
    </p>
  );
}

function DocumentBlock({ block }: { block: LegalBlock }) {
  if (block.type === "subsection") {
    return (
      <div className="mt-10 border-l border-[var(--line)] pl-5 sm:pl-7">
        <h3 className="text-xl font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-2xl">
          {block.title}
        </h3>
        <div className="mt-4">
          {block.blocks.map((child, index) => (
            <TextBlock key={`${child.type}-${index}`} block={child} />
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "contact") {
    return (
      <div>
        <p className="my-5 text-pretty text-[1rem] leading-7 text-[var(--slate)] sm:text-[1.06rem] sm:leading-8">
          <LegalText text={block.intro} />
        </p>
        <address className="mt-7 border-l-2 border-[var(--blue)] bg-[var(--paper-2)] px-5 py-5 not-italic sm:px-7">
          {block.lines.map((line) => (
            <p
              key={line}
              className="text-[0.96rem] leading-7 text-[var(--slate)] sm:text-[1.02rem]"
            >
              <LegalText text={line} />
            </p>
          ))}
        </address>
      </div>
    );
  }

  return <TextBlock block={block} />;
}

function LegalHeader({ activeSlug }: { activeSlug: LegalDocument["slug"] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[var(--paper)]/90 backdrop-blur-xl">
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${siteData.metadata.name}, home`}
          className="shrink-0 rounded-md bg-white p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
        >
          <Image
            src="/brand/sixth-signal-labs-lockup.png"
            alt={siteData.metadata.logoAlt}
            width={1280}
            height={420}
            priority
            sizes="(max-width: 640px) 142px, 176px"
            className="h-auto w-[142px] sm:w-[176px]"
          />
        </Link>

        <nav
          aria-label="Legal documents"
          className="hidden items-center rounded-full border border-black/[0.08] bg-white/70 p-1 sm:flex"
        >
          {legalNavigation.map((item) => {
            const isActive = item.slug === activeSlug;

            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 font-mono text-[0.64rem] font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] ${isActive
                  ? "bg-[var(--ink)] text-white"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-black/[0.1] px-3.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--ink)] transition-colors hover:border-[var(--blue)] hover:text-[var(--blue-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] sm:px-4"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-3.5 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none"
          />
          <span className="hidden min-[420px]:inline">Back to site</span>
          <span className="min-[420px]:hidden">Home</span>
        </Link>
      </Container>
    </header>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  const counterpart =
    document.slug === "privacy"
      ? { label: "Terms of Service", href: "/terms" as const, number: "02" }
      : { label: "Privacy Policy", href: "/privacy" as const, number: "01" };

  return (
    <div id="top" className="min-h-screen bg-[var(--paper)]">
      <LegalHeader activeSlug={document.slug} />

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
                  Legal / Document {document.documentNumber}
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
                  <LegalText text={document.effectiveDate} />
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
                      <LegalText text={paragraph} />
                    </p>
                  ))}
                </div>
              </div>

              <div>
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
                            <DocumentBlock
                              key={`${block.type}-${index}`}
                              block={block}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 border-t border-[var(--ink)] pt-8">
                <Link
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
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
