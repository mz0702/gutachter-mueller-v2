/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/gutachter-mueller-v2" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
