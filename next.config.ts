import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean output for deployment
  output: "standalone",
  // Strict mode for better React practices
  reactStrictMode: true,
};

export default nextConfig;
