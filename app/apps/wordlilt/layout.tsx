import type { Metadata } from "next";
import type { ReactNode } from "react";

import { appData, deploymentSiteUrl, getAppUrl, isPublishingReady } from "./_data/app-data";

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
    default: appData.metadata.title,
    template: `%s | ${appData.name}`,
  },
  description: appData.metadata.description,
  alternates: {
    canonical: getAppUrl(),
  },
  openGraph: {
    type: "website",
    url: getAppUrl(),
    siteName: appData.name,
    title: appData.metadata.title,
    description: appData.metadata.description,
    images: socialImages,
  },
  twitter: {
    card: "summary",
    title: appData.metadata.title,
    description: appData.metadata.description,
    images: appData.appIconPath ? [appData.appIconPath] : undefined,
  },
  icons: appData.appIconPath
    ? {
        icon: appData.appIconPath,
        apple: appData.appIconPath,
      }
    : undefined,
  robots: {
    index: isPublishingReady,
    follow: true,
  },
};

export default function WordLiltLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
