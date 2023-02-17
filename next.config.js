/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
