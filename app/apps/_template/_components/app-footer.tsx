import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import { appData, getAppPath } from "../_data/app-data";

const legalLinks = [
  { label: "Privacy", href: getAppPath("/privacy") },
  { label: "Terms", href: getAppPath("/terms") },
] as const;

export function AppFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--surface-dark)] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--blue-bright)]/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="signal-grid-dark pointer-events-none absolute inset-0 opacity-35"
      />

      <Container className="relative py-12 sm:py-14">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href={getAppPath()}
              className="inline-flex rounded-md text-xl font-semibold tracking-[-0.035em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-dark)]"
            >
              {appData.name}
            </a>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              {appData.description}
            </p>
          </div>

          <nav aria-label="App footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${appData.supportEmail}`}
                  className="text-sm text-white/65 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)]"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-7 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {appData.developerName}</p>
          <a
            href={appData.developerUrl}
            className="group inline-flex w-fit items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)]"
          >
            Built by {appData.developerName}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
