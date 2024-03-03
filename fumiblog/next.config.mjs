/** @type {import('next').NextConfig} */
const nextConfig = {
  
  trailingSlash: true,
  images: {
    loader: "custom",
    domains: ["images.microcms-assets.io"],
  },
  
};

export default nextConfig;
