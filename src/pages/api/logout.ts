import type { APIRoute } from "astro";
const COOKIE_NAME = import.meta.env.PUBLIC_AUTH_COOKIE_NAME;

export const post: APIRoute = async () => {
    return new Response("", {
        status: 303,
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `${COOKIE_NAME}=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`,
            Location: "/login",
        },
    });
};
