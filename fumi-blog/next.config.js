/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: 'https://www.fumiblog.com/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
  output: 'export',
}

module.exports = nextConfig
