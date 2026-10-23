import type { NextConfig } from "next";

const isHostinger = process.env.HOSTINGER_BUILD === "true";

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
  // reactCompiler adds significant memory overhead — disabled on constrained
  // build environments (e.g. Hostinger). Enable locally as needed.
  reactCompiler: !isHostinger,
  // turbopack config is dev-only; production `next build` uses Webpack.
  // Keeping this block causes Hostinger's build container to OOM-kill the
  // process after ~15 minutes with no error message printed.
  ...(!isHostinger && {
    turbopack: {
      rules: {
        "*.css": {
          loaders: ["@tailwindcss/turbopack"],
          as: "*.css",
        },
      },
    },
  }),
};

export default nextConfig;
