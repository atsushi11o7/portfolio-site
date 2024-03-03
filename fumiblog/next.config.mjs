/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'https://fumiblog.com',
  trailingSlash: true,
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
  output: 'export',
};

export default nextConfig;
