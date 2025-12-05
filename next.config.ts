import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    // Image optimization settings
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85, 90, 100],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/projects",
        destination: "/",
      },
      {
        source: "/experience",
        destination: "/",
      },
      {
        source: "/education",
        destination: "/",
      },
      {
        source: "/testimonials",
        destination: "/",
      },
      {
        source: "/intro",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
