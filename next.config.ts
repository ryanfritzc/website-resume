import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/website-resume",
  assetPrefix: "/website-resume/",
};

export default nextConfig;
