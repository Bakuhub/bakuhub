/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["bakuhub.s3.amazonaws.com"],
    },
};

module.exports = nextConfig;
