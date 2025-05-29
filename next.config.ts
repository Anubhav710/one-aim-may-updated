import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "oneaim-admin.utxotech.com",
      },

      // add more as needed
    ],
  },
};

export default nextConfig;
