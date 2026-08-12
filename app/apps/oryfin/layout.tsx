import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppFooter } from "./_components/app-footer";
import { AppHeader } from "./_components/app-header";
import {
  getOryfinUrl,
  isPublishingReady,
  metadataOrigin,
  oryfin,
} from "./_data/oryfin-data";

import "./oryfin.css";

export const metadata: Metadata = {
  metadataBase: new URL(metadataOrigin),
  applicationName: oryfin.name,
  title: {
    default: `${oryfin.name} — ${oryfin.tagline}`,
    template: `%s | ${oryfin.name}`,
  },
  description: oryfin.description,
  alternates: {
    canonical: getOryfinUrl(),
  },
  openGraph: {
    type: "website",
    url: getOryfinUrl(),
    siteName: oryfin.name,
    title: `${oryfin.name} — ${oryfin.tagline}`,
    description: oryfin.description,
    images: [{ url: oryfin.appIconPath, width: 1024, height: 1024, alt: "Oryfin app icon" }],
  },
  twitter: {
    card: "summary",
    title: `${oryfin.name} — ${oryfin.tagline}`,
    description: oryfin.description,
    images: [oryfin.appIconPath],
  },
  robots: {
    index: isPublishingReady,
    follow: true,
  },
};

export default function OryfinLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="oryfin-top" className="oryfin-site">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
