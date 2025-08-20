import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 或者 'http'，根据实际情况选择
        hostname: 'icon.jobleap4u.com',
        port: '', // 端口，如果不需要可以留空
        pathname: '/**', // 允许该域名下的所有路径
      },
    ],
  },
};

export default nextConfig;
