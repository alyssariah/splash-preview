/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack: (config, { isServer }) => {
    return config;
  },

};

module.exports = nextConfig;
