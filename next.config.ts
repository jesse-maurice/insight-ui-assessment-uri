/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true, // Enable Emotion CSS-in-JS
  },
};

module.exports = nextConfig;
