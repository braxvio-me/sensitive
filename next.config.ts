import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: let phones and other devices on the local network load the dev
  // server's scripts. Without this, `next dev` blocks them and pages opened by
  // IP (e.g. http://172.20.10.5:3000) render but never become interactive.
  allowedDevOrigins: ["172.20.10.*", "192.168.*.*", "10.*.*.*"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
