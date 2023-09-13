/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // workaround for site to be accessible from /portfolio/public route
  basePath: isProd ? '/portfolio/public' : undefined,
  assetPrefix: isProd ? 'https://cdn.jsdelivr.net/gh/YumiChen/portfolio@latest/dist/public' : undefined,
  distDir: 'dist/public'
}

module.exports = nextConfig
