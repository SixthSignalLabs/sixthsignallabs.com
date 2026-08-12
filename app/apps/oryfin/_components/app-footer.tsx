import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import { oryfin } from "../_data/oryfin-data";

const footerLinks = [
  { label: "Oryfin", href: "/apps/oryfin" },
  { label: "Support", href: "/apps/oryfin/support" },
  { label: "Privacy", href: "/apps/oryfin/privacy" },
  { label: "Terms", href: "/apps/oryfin/terms" },
] as const;

export function AppFooter() {
  return (
    <footer className="oryfin-screen-only relative overflow-hidden bg-[var(--oryfin-navy)] text-white">
      <div aria-hidden="true" className="oryfin-arc-line absolute inset-x-0 top-0 h-1" />
      <Container className="relative py-12 sm:py-16">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href={{ pathname: "/apps/oryfin" }}
              className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a6df0] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--oryfin-navy)]"
            >
              <Image
                src={oryfin.darkLogoPath}
                alt="Oryfin"
                width={2400}
                height={600}
                sizes="160px"
                className="h-auto w-40"
              />
            </Link>
            <p className="mt-5 max-w-md text-pretty text-sm leading-6 text-white/65">
              Local-first money tracking for a clearer view of everyday finances.
            </p>
          </div>

          <nav aria-label="Oryfin footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={{ pathname: item.href }}
                    className="inline-flex min-h-11 items-center rounded-sm text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a6df0] motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {oryfin.developerName}</p>
          <a
            href={oryfin.developerUrl}
            className="group inline-flex min-h-11 w-fit items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7a6df0] motion-reduce:transition-none"
          >
            Built by {oryfin.developerName}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
