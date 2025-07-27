import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/caruazu.github.io",
  assetPrefix: "/caruazu.github.io/",
  output: "export", // <=== enables static exports
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
