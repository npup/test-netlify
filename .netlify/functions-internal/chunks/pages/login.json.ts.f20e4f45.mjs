const COOKIE_NAME = "sbat";
const post = async ({ request }) => {
  const body = await request.json();
  const { access_token } = body;
  return new Response(
    JSON.stringify({
      message: `This was the POST! [${access_token}]`
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `${COOKIE_NAME}=${access_token}; Path=/;`
      }
    }
  );
};

export { post };
