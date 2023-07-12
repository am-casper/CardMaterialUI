/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/item/",
          destination: "http://localhost:8000/item/",
        },
      ];
    },}

module.exports = nextConfig
