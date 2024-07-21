/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: 'dist',
    images: {
        unoptimized: true,
    },

}

if (process.env.NODE_ENV === 'production') {
    nextConfig.basePath = '/foodies-NextJS'
    nextConfig.assetPrefix = '/foodies-NextJS/'
}

module.exports = nextConfig
