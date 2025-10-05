import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
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
  },
};

export default nextConfig;
