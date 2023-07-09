import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro.60e3a38d.mjs';
import 'html-escaper';
import { $ as $$Layout } from './dashboard.astro.55f17da1.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                               */import '@supabase/supabase-js';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<h2>Welcome</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti
        soluta ex aspernatur itaque quia corrupti vero earum, voluptates iure
        explicabo, voluptate amet sequi officia expedita molestias atque
        repudiandae eveniet!
    </p>
` })}`;
}, "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/index.astro");

const $$file = "/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
