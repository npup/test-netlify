/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SUPABASE_URL: string;
    readonly PUBLIC_SUPABASE_KEY: string;
    readonly PUBLIC_AUTH_COOKIE_NAME: string;
    readonly PUBLIC_SUPABASE_REDIRECT_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
