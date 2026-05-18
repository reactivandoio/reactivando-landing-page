import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['reactivando.io', 'www.reactivando.io'],
    },
  },
};

export default nextConfig;
