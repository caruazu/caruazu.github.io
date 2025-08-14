import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true, // ajuda no Pages
  reactStrictMode: true,
};

export default nextConfig;
