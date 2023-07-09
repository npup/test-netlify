import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, e as renderComponent, m as maybeRenderHead } from '../astro.60e3a38d.mjs';
import 'html-escaper';
/* empty css                               */import { createClient } from '@supabase/supabase-js';
import cookie from 'cookie';

const COOKIE_NAME = "sbat";
const supabase = createClient(
  "https://gscdjaswqwghgguoqpwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzY2RqYXN3cXdnaGdndW9xcHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NTk1NTIsImV4cCI6MjAwNDMzNTU1Mn0.jCdBUNHNdsLtwlzYWNT8jjSZTL2rnZeqyy2_SSq_nQY"
);
async function getUser(req) {
  const c = cookie.parse(req.headers.get("cookie") ?? "");
  if (!c[COOKIE_NAME]) {
    return null;
  }
  const {
    data: { user }
  } = await supabase.auth.getUser(c[COOKIE_NAME]);
  if (!user || user.role !== "authenticated") {
    return null;
  }
  return user;
}

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const user = await getUser(Astro2.request);
  const isShowLoginLink = Astro2.url.pathname != "/login";
  return renderTemplate`<html lang="en" class="astro-SCKKX6R4">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Astro description">
        <meta name="viewport" content="width=device-width">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <title>${title}</title>
    ${renderHead()}</head>
    <body class="ctg-root ctg-container ctg-theme--light astro-SCKKX6R4">
        <header class="astro-SCKKX6R4">
            <div class="header-toprow astro-SCKKX6R4">
                <h1 class="astro-SCKKX6R4">Rogntudjuuu</h1>
                ${user ? renderTemplate`<form action="/api/logout" method="POST" class="astro-SCKKX6R4">
                            <button id="apa" type="submit" class="astro-SCKKX6R4">
                                ${" "}
                                Logout
                            </button>
                        </form>` : isShowLoginLink && renderTemplate`<a href="/login" class="astro-SCKKX6R4">Login</a>`}
            </div>
            <nav class="astro-SCKKX6R4">
                <a href="/" class="astro-SCKKX6R4">Home</a>
                ${user && renderTemplate`<a href="/dashboard" class="astro-SCKKX6R4">Dashboard</a>`}
            </nav>
        </header>
        <main class="astro-SCKKX6R4">
            ${renderSlot($$result, $$slots["default"])}
        </main>
        <footer class="astro-SCKKX6R4"></footer>
    </body></html>`;
}, "/Users/petter/dev/P/_astro/rogntodjuuu/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const user = await getUser(Astro2.request);
  if (!user) {
    return Astro2.redirect("/login?need-auth");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<p>This is the secret dashboard</p>
` })}`;
}, "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/dashboard.astro");

const $$file = "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, dashboard as d, supabase as s };
