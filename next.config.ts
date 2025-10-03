import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // wymusza generowanie do /out
  basePath: process.env.NEXT_PUBLIC_BASE_DIR, // nazwa repozytorium
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX, // GitHub Pages wymaga ścieżki bezwzględnej do zasobów
  images: {
    unoptimized: true, // bo GitHub Pages nie wspiera Image Optimization
  },
};

export default nextConfig;
