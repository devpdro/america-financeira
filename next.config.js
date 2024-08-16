/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  rewrites: async () => [{ source: '/', destination: '/presentation/pages' }],
}

module.exports = nextConfig
