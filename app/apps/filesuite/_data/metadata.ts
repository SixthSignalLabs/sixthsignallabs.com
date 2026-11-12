import type { Metadata } from "next";
import { appData, getAppUrl } from "./app-data";

export function pageMetadata(title: string, description: string, suffix = ""): Metadata {
  const image = appData.socialImagePath ?? appData.appIconPath;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: getAppUrl(suffix) },
    openGraph: {
      type: "website", siteName: appData.name,
      title, description, url: getAppUrl(suffix),
      images: image ? [{ url: image, alt: "FileSuite – PDF & Photo Tools" }] : [],
    },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, images: image ? [image] : [] },
  };
}
