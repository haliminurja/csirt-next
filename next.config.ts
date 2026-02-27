import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
  productionBrowserSourceMaps: false,
  pageExtensions: ['tsx', 'ts'],
  compress: true,
  experimental: {
    optimizePackageImports: ['zustand'],
  }
};

export default nextConfig;
