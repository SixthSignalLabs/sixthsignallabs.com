import { ArrowUpRight, Smartphone } from "lucide-react";

import { appData } from "../_data/app-data";

export function AppStoreCta() {
  const { playStoreUrl, playStoreLabel, unavailableLabel } = appData.availability;

  if (!playStoreUrl) {
    return (
      <span className="inline-flex min-h-12 w-fit items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--slate)]">
        <Smartphone aria-hidden="true" className="size-4 text-[var(--blue-deep)]" strokeWidth={1.8} />
        {unavailableLabel}
      </span>
    );
  }

  return (
    <a
      href={playStoreUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-12 w-fit items-center justify-center gap-2.5 rounded-full border border-[var(--ink)] bg-[var(--ink)] px-5 text-sm font-semibold text-white transition-colors hover:border-[var(--blue)] hover:bg-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-bright)] focus-visible:ring-offset-2 motion-reduce:transition-none"
    >
      {playStoreLabel}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
      />
    </a>
  );
}
