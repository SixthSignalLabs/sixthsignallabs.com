import Image from "next/image";
import { AppStoreCta } from "./app-store-cta";

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
          <Image
            src={appData.wordmarkPath}
            alt=""
            width={2172}
            height={724}
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 176px, 208px"
            priority
            className="h-auto w-28 shrink-0 sm:w-44 lg:w-52"
          />
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
          <AppStoreCta />
        </nav>
      </Container>
    </header>
  );
}
