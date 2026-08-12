import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import { appData, getAppPath } from "../_data/app-data";

type AppHeaderProps = {
  activeLegalPage?: "privacy" | "terms";
};

export function AppHeader({ activeLegalPage }: AppHeaderProps) {
  const homePath = getAppPath();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[var(--paper)]/90 backdrop-blur-xl">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4 py-2">
        <a
          href={homePath}
          aria-label={`${appData.name}, home`}
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-4"
        >
          {appData.appIconPath ? (
            <Image
              src={appData.appIconPath}
              alt=""
              width={48}
              height={48}
              priority
              className="size-10 shrink-0 rounded-xl border border-black/[0.08] object-cover shadow-[var(--shadow-tight)]"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] font-mono text-[0.68rem] font-semibold tracking-[0.08em] text-white shadow-[var(--shadow-tight)]"
            >
              {appData.shortName.slice(0, 3)}
            </span>
          )}
          <span className="truncate text-[0.95rem] font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-base">
            {appData.name}
          </span>
        </a>

        <nav aria-label={`${appData.name} navigation`} className="flex items-center gap-1">
          <a
            href={activeLegalPage ? homePath : "#features"}
            className="hidden min-h-10 items-center rounded-full px-3 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] sm:inline-flex"
          >
            {activeLegalPage ? "App home" : "Features"}
          </a>
          <a
            href={`mailto:${appData.supportEmail}`}
            className="hidden min-h-10 items-center rounded-full px-3 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] md:inline-flex"
          >
            Support
          </a>
          <a
            href={appData.primaryAction.href}
            className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--ink)] px-3.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--blue)] hover:bg-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 sm:px-4"
          >
            {appData.primaryAction.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </nav>
      </Container>
    </header>
  );
}
