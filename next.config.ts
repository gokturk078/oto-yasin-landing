import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: "export",

  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export / Cloudflare Pages
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slashes for consistent URLs
  trailingSlash: false,
};

export default nextConfig;
