/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pontislabs-website',
  assetPrefix: '/pontislabs-website/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
