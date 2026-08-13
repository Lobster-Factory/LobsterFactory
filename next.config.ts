import type { NextConfig } from "next";

// GitHub Pages serves this as a project site at /LobsterFactory/, so paths need that prefix there.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
};

export default nextConfig;
