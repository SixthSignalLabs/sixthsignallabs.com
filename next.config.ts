import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  trailingSlash: false,
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "sixthsignallabs.com" }],
      destination: "https://www.sixthsignallabs.com/:path*",
      permanent: true,
    }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
