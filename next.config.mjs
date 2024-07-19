import * as dotenv from 'dotenv';
dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains :['cdn.imagin.studio']
    }
};

export default nextConfig;
