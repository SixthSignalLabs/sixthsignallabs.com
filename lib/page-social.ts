import type { Metadata } from "next";
import dimensions from "./image-dimensions.json";

// Metadata nested fields replace their parents in Next.js; set page-specific
// social text and images together so legal pages never advertise the homepage.
export function withPageSocial(metadata: Metadata, image = "/brand/sixth-signal-labs-logo.png"): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : metadata.title && "absolute" in metadata.title ? metadata.title.absolute : undefined;
  const description = metadata.description ?? undefined;
  const size = dimensions[image as keyof typeof dimensions];
  const images = [{ url: image, ...size, alt: title ?? "Sixth Signal Labs" }];
  return { ...metadata,
    openGraph: { type: "website", ...metadata.openGraph, title, description, images },
    twitter: { card: size && size.width / size.height > 1.5 ? "summary_large_image" : "summary", title, description, images: [image] },
  };
}
