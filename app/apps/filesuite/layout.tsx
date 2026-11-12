import type { Metadata } from "next";
import type { ReactNode } from "react";
import { appData, deploymentSiteUrl } from "./_data/app-data";
import { pageMetadata } from "./_data/metadata";
import "./filesuite.css";

export const metadata: Metadata = {
  ...pageMetadata(appData.metadata.title, appData.metadata.description),
  metadataBase: new URL(deploymentSiteUrl),
  applicationName: appData.name,
  icons: appData.appIconPath ? { icon: appData.appIconPath, apple: appData.appIconPath } : undefined,
  robots: { index: true, follow: true },
};

export default function FileSuiteLayout({ children }: { children: ReactNode }) {
  return <div className="filesuite-site">{children}</div>;
}
