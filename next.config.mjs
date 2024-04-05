/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST_URL: process.env.HOST_URL,
    SERVER_URL: process.env.SERVER_URL,
  },
};

export default nextConfig;
