declare namespace NodeJS {
    export interface ProcessEnv {
        MONGO_USER: string;
        MONGO_PASS: string;
        MONGO_URI: string;
        URL: string;
        NEXTAUTH_SECRET: string;
        UNSPLASH_CLIENT_ID: string;
        UNSPLASH_ACCESS_KEY: string;
        UNSPLASH_SECRET_KEY: string;
        FUEL_KEY:string;
    }
}


