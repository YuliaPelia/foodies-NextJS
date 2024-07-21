/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/foodies-NextJS' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/foodies-NextJS' : '',
  }
  
  module.exports = nextConfig