/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/personal-website-linktree",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
