import { createClient } from "@supabase/supabase-js";
import cookie from "cookie";
const COOKIE_NAME = import.meta.env.PUBLIC_AUTH_COOKIE_NAME;

export const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_KEY
);

export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get("cookie") ?? "");
    if (!c[COOKIE_NAME]) {
        return null;
    }

    const {
        data: { user },
    } = await supabase.auth.getUser(c[COOKIE_NAME]);
    if (!user || user.role !== "authenticated") {
        return null;
    }
    return user;
}

export async function isLoggedIn(req: Request) {
    return (await getUser(req)) != null;
}
