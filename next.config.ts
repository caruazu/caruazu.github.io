import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
