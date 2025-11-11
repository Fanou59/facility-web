import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Forcer la résolution de better-auth
      "better-auth": "better-auth",
      "better-auth/*": "better-auth/*",
    },

    rules: {
      "*.prisma": {
        loaders: ["raw-loader"],
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
