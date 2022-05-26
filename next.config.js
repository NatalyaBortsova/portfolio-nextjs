/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai"
  },
  basePath: "/portfolio-nextjs",
  assetPrefix: "/portfolio-nextjs",
}

module.exports = nextConfig
