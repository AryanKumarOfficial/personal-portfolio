/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                hostname:'plus.unsplash.com',
            }

        ],
    },
};

export default nextConfig;
