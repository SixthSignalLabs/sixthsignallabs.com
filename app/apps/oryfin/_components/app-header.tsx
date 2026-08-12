import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

import { oryfin, oryfinPublishing } from "../_data/oryfin-data";
import { AppStoreCta } from "./app-store-cta";

const navigation = [
  { label: "Oryfin", href: "/apps/oryfin" },
  { label: "Support", href: "/apps/oryfin/support" },
  { label: "Privacy", href: "/apps/oryfin/privacy" },
  { label: "Terms", href: "/apps/oryfin/terms" },
] as const;

export function AppHeader() {
  return (
    <header className="oryfin-screen-only sticky top-0 z-50 border-b border-black/[0.07] bg-[var(--oryfin-page)]/95 backdrop-blur-xl">
      <Container className="flex min-h-[4.75rem] flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <Link
          href={{ pathname: "/apps/oryfin" }}
          aria-label="Oryfin home"
          className="flex min-h-11 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)] focus-visible:ring-offset-2"
        >
          <Image
            src={oryfin.logoPath}
            alt="Oryfin"
            width={760}
            height={256}
            priority
            sizes="132px"
            className="h-auto w-[132px]"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
          <nav aria-label="Oryfin navigation" className="min-w-0 overflow-x-auto">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={{ pathname: item.href }}
                    className="inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-semibold text-[var(--oryfin-copy)] transition-colors hover:text-[var(--oryfin-violet-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--oryfin-violet)] sm:px-3 sm:text-sm motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {oryfinPublishing.appStoreUrl ? <AppStoreCta compact /> : null}
        </div>
      </Container>
    </header>
  );
}
