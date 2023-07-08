import type { APIRoute } from "astro";
const COOKIE_NAME = import.meta.env.PUBLIC_AUTH_COOKIE_NAME;

export const post: APIRoute = async ({ request }) => {
    const body = await request.json();
    const { access_token } = body;

    return new Response(
        JSON.stringify({
            message: `This was the POST! [${access_token}]`,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": `${COOKIE_NAME}=${access_token}; Path=/;`,
            },
        }
    );
};
