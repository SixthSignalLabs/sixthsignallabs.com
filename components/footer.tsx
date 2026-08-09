import Image from "next/image";
import Link from "next/link";

import type { FooterLink } from "@/lib/site-data";
import { siteData } from "@/lib/site-data";

import { Container } from "./ui/container";

function FooterDestination({ link }: { link: FooterLink }) {
  if (!link.href) {
    return (
      <span
        className="flex min-h-8 items-center gap-2 text-sm text-white/62"
        aria-label={`${link.label}, placeholder; destination not yet available`}
      >
        <span>{link.label}</span>
        <span className="rounded-full border border-white/16 px-1.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-white/55">
          Placeholder
        </span>
      </span>
    );
  }

  return (
    <a
      href={link.href}
      className="group relative inline-flex min-h-8 w-fit items-center text-sm text-white/66 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-dark)]"
    >
      {link.label}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-[var(--blue-bright)] transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
      />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--surface-dark)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--blue-bright)]/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 size-[28rem] rounded-full border border-white/[0.035] opacity-70 [background:repeating-radial-gradient(circle_at_center,transparent_0,transparent_34px,rgba(255,255,255,0.035)_35px,transparent_36px)]"
      />

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:pb-20">
          <div>
            <Link
              href="/"
              aria-label={`${siteData.metadata.name}, home`}
              className="inline-flex rounded-lg bg-white p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-dark)]"
            >
              <span className="relative block w-[188px] sm:w-[210px]">
                <Image
                  src="/brand/sixth-signal-labs-lockup.png"
                  alt={siteData.metadata.logoAlt}
                  width={1280}
                  height={420}
                  sizes="(max-width: 640px) 188px, 210px"
                  className="h-auto w-full"
                />
              </span>
            </Link>

            <p className="mt-7 max-w-md text-balance text-2xl leading-[1.2] font-medium tracking-[-0.035em] text-white sm:text-3xl">
              {siteData.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/55">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--blue-bright)] opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--blue-bright)]" />
              </span>
              Independent product engineering studio
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <nav aria-label="Footer navigation">
              <h2 className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/55">
                Explore
              </h2>
              <ul className="mt-5 space-y-2">
                {siteData.footer.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-8 items-center text-sm text-white/66 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-dark)]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/55">
                Social
              </h2>
              <ul className="mt-5 space-y-2">
                {siteData.footer.socialLinks.map((link) => (
                  <li key={link.label}>
                    <FooterDestination link={link} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white/55">
                Legal
              </h2>
              <ul className="mt-5 space-y-2">
                {siteData.footer.legalLinks.map((link) => (
                  <li key={link.label}>
                    <FooterDestination link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteData.footer.copyright}</p>
          <a
            href="#top"
            className="group inline-flex w-fit items-center gap-3 rounded-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-dark)]"
          >
            Back to top
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ↑
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
