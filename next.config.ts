import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    allowedDevOrigins:['192.168.1.105'],
    images: {
            remotePatterns: [
                {
                    protocol: "https",
                    hostname: "places.googleapis.com"
                }
            ]
        }
};

export default nextConfig;
