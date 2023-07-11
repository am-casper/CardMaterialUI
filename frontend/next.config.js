/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/item/",
          destination: "http://localhost:8000/item/",
        },
      ];
    },}

module.exports = nextConfig
