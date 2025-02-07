import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default withContentlayer(nextConfig);
