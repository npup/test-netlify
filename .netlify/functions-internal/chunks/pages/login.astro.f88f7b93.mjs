import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent } from '../astro.60e3a38d.mjs';
import 'html-escaper';
import { s as supabase, $ as $$Layout } from './dashboard.astro.55f17da1.mjs';
import { useEffect, useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                               */import '@supabase/supabase-js';

function LoginForm() {
  useEffect(() => {
    const hashParams = window.location.hash.substring(1).split("&").map((kv) => kv.split("="));
    const params = new Map(hashParams.map(([k, v]) => [k, v]));
    console.log(params.keys());
    const access_token = params.get("access_token");
    const expires_in = params.get("expires_in");
    const refresh_token = params.get("refresh_token");
    params.get("token_type");
    params.get("type");
    if (!(access_token && expires_in && refresh_token)) {
      return;
    }
    async function apiLogin({
      access_token: access_token2,
      expires_in: expires_in2,
      refresh_token: refresh_token2
    }) {
      const response = await fetch("/api/login.json", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        credentials: "same-origin",
        body: JSON.stringify({
          access_token: access_token2,
          expires_in: expires_in2,
          refresh_token: refresh_token2
        })
      });
      if (response.ok) {
        location.replace("/");
      }
    }
    apiLogin({
      access_token,
      expires_in,
      refresh_token
    });
  }, []);
  const emailRef = useRef(null);
  async function handleSubmit(e) {
    e.preventDefault();
    const {
      current: emailField
    } = emailRef;
    if (!emailField) {
      return;
    }
    const {
      value: email
    } = emailField;
    const {
      error
    } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000/login"
      }
    });
    if (error) {
      alert(`Email not sent (${error.message})`);
    } else {
      alert("Check your email for login link!");
    }
  }
  return /* @__PURE__ */ jsx("form", {
    onSubmit: handleSubmit,
    children: /* @__PURE__ */ jsxs("label", {
      children: [/* @__PURE__ */ jsx("input", {
        type: "email",
        ref: emailRef,
        defaultValue: "petter.envall@gmail.com"
      }), /* @__PURE__ */ jsx("button", {
        type: "submit",
        children: "Submit"
      })]
    })
  });
}
__astro_tag_component__(LoginForm, "@astrojs/react");

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/petter/dev/P/_astro/rogntodjuuu/src/components/LoginForm", "client:component-export": "LoginForm" })}
` })}`;
}, "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/login.astro");

const $$file = "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
