/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/quotify",
  assetPrefix: "/quotify",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
