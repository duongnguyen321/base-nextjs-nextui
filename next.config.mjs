/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAIN_URL: process.env.MAIN_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
