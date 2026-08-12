import { ArrowUpRight } from "lucide-react";

import { oryfinPublishing } from "../_data/oryfin-data";

type AppStoreCtaProps = {
  compact?: boolean;
};

export function AppStoreCta({ compact = false }: AppStoreCtaProps) {
  if (!oryfinPublishing.appStoreUrl) {
    return (
      <span
        role="status"
        className={`inline-flex min-h-11 items-center rounded-full border border-[var(--oryfin-line)] bg-white font-semibold text-[var(--oryfin-copy)] ${compact ? "px-4 text-xs" : "px-5 text-sm"}`}
      >
        Coming to the App Store
      </span>
    );
  }

  return (
    <a
      href={oryfinPublishing.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--oryfin-violet)] font-semibold text-white transition-colors hover:bg-[var(--oryfin-violet-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)] focus-visible:ring-offset-2 motion-reduce:transition-none ${compact ? "px-4 text-xs" : "px-5 text-sm"}`}
    >
      View on the App Store
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
      />
    </a>
  );
}
