import type { ReactNode } from "react";
import { AppHeader } from "./_components/app-header";
import { AppFooter } from "./_components/app-footer";
import { appData, pageMetadata, publishing } from "./_data/app-data";
import "./hyperpulse.css";

export const dynamic = "force-static";
export const metadata = {
  ...pageMetadata(appData.tagline, appData.description),
  metadataBase: new URL(publishing.canonicalOrigin),
  applicationName: appData.name,
  icons: { icon: appData.appIconPath, apple: appData.appIconPath },
};

export default function AppMicrositeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="hp-site">
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
