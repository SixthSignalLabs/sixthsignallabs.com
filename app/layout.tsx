import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { MotionProvider } from "@/components/motion-provider";
import { siteData } from "@/lib/site-data";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sixthsignallabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteData.metadata.title,
  description: siteData.metadata.description,
  applicationName: siteData.metadata.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteData.metadata.name,
    title: siteData.metadata.title,
    description: siteData.metadata.description,
    images: [
      {
        url: "/brand/sixth-signal-labs-logo.png",
        width: 1280,
        height: 720,
        alt: siteData.metadata.logoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.metadata.title,
    description: siteData.metadata.description,
    images: ["/brand/sixth-signal-labs-logo.png"],
  },
  icons: {
    icon: "/brand/sixth-signal-mark.png",
    apple: "/brand/sixth-signal-mark.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080b0e" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
