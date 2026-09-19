import { ArrowUpRight } from "lucide-react";

import { appData } from "../_data/app-data";

type AppStoreCtaProps = {
  compact?: boolean;
  platform?: "play" | "ios" | "both";
};

export function AppStoreCta({ compact = false, platform = "both" }: AppStoreCtaProps) {
  const sizeClass = compact ? "px-4 text-xs" : "px-5 text-sm";
  const showPlay = platform === "play" || platform === "both";
  const showIos = platform === "ios" || platform === "both";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {showPlay ? (
        <a
          href={appData.storeLinks.playStore.href}
          className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--ink)] font-semibold text-white transition-colors hover:border-[var(--blue)] hover:bg-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 motion-reduce:transition-none ${sizeClass}`}
        >
          {appData.storeLinks.playStore.label}
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </a>
      ) : null}

      {showIos ? (
        appData.storeLinks.appStore ? (
          <a
            href={appData.storeLinks.appStore.href}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--ink)] font-semibold text-white transition-colors hover:border-[var(--blue)] hover:bg-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 motion-reduce:transition-none ${sizeClass}`}
          >
            {appData.storeLinks.appStore.label}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        ) : (
          <span
            role="status"
            className={`inline-flex min-h-11 items-center rounded-full border border-[var(--line)] bg-white font-semibold text-[var(--slate)] ${sizeClass}`}
          >
            iOS coming soon
          </span>
        )
      ) : null}
    </div>
  );
}
