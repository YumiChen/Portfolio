/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  // workaround for site to be accessible from /portfolio/public route
  basePath: isProd ? '/portfolio/public' : undefined,
  assetPrefix: isProd ? 'https://cdn.jsdelivr.net/gh/YumiChen/portfolio@gh-pages/public' : undefined,
  distDir: 'dist/public',
  images: { 
    unoptimized: true,
    loader: 'custom',
    loaderFile: 'src/utils/imageLoader.js'
  }
}

module.exports = nextConfig
