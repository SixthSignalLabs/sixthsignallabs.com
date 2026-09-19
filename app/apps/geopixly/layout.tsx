import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appData, deploymentSiteUrl, getAppUrl } from "./_data/app-data";

const socialImages = appData.appIconPath
  ? [
      {
        url: appData.appIconPath,
        alt: `${appData.name} icon`,
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentSiteUrl),
  applicationName: appData.name,
  title: {
    default: `${appData.name} — ${appData.tagline}`,
    template: `%s | ${appData.name}`,
  },
  description: appData.description,
  alternates: {
    canonical: getAppUrl(),
  },
  openGraph: {
    type: "website",
    url: getAppUrl(),
    siteName: appData.name,
    title: `${appData.name} — ${appData.tagline}`,
    description: appData.description,
    images: socialImages,
  },
  twitter: {
    card: "summary_large_image",
    title: `${appData.name} — ${appData.tagline}`,
    description: appData.description,
    images: appData.appIconPath ? [appData.appIconPath] : undefined,
  },
  icons: appData.appIconPath
    ? {
        icon: appData.appIconPath,
        apple: appData.appIconPath,
      }
    : undefined,
};

export default function AppMicrositeLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
