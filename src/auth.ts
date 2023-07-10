import { createClient } from "@supabase/supabase-js";
import cookie from "cookie";

export const AUTH_COOKIE_NAME = import.meta.env.PUBLIC_AUTH_COOKIE_NAME;
export const AUTH_SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
export const AUTH_SUPABASE_KEY = import.meta.env.PUBLIC_SUPABASE_KEY;
export const AUTH_REDIRECT_URL = import.meta.env.PUBLIC_SUPABASE_REDIRECT_URL;

export const supabase = createClient(AUTH_SUPABASE_URL, AUTH_SUPABASE_KEY);

export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get("cookie") ?? "");
    if (!c[AUTH_COOKIE_NAME]) {
        return null;
    }

    const {
        data: { user },
    } = await supabase.auth.getUser(c[AUTH_COOKIE_NAME]);
    if (!user || user.role !== "authenticated") {
        return null;
    }
    return user;
}

export async function isLoggedIn(req: Request) {
    return (await getUser(req)) != null;
}
