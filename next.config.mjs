/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com" },
            { hostname: "i.pinimg.com" }
        ]
    },
    experimental: {
        serverActions: true,
    },
};

export default nextConfig;
