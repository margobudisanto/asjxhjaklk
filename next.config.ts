import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  experimental: {
    allowedDevOrigins: ['127.0.0.1', 'localhost'],
  },
};

export default nextConfig;
