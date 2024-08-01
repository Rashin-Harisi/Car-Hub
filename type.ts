declare namespace NodeJS {
    export interface ProcessEnv {
        MONGO_USER: string;
        MONGO_PASS: string;
        MONGO_URI: string;
        URL: string;
        NEXTAUTH_SECRET: string;
       
    }
}


