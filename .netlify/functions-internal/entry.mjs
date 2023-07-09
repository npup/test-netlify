import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { f as deserializeManifest } from './chunks/astro.60e3a38d.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'react';
import 'react-dom/server';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.669fe951.mjs');
const _page1  = () => import('./chunks/dashboard@_@astro.4a61f7fb.mjs');
const _page2  = () => import('./chunks/login@_@astro.b5b4dd2d.mjs');
const _page3  = () => import('./chunks/login.ec617d5e.mjs');
const _page4  = () => import('./chunks/logout@_@ts.8686ccd9.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/dashboard.astro", _page1],["src/pages/login.astro", _page2],["src/pages/api/login.json.ts", _page3],["src/pages/api/logout.ts", _page4]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.4fa96f09.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.4fa96f09.css"}],"routeData":{"route":"/dashboard","type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.4fa96f09.css"}],"routeData":{"route":"/login","type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login.json","type":"endpoint","pattern":"^\\/api\\/login\\.json$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.json.ts","pathname":"/api/login.json","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/logout","type":"endpoint","pattern":"^\\/api\\/logout$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/logout.ts","pathname":"/api/logout","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/petter/dev/P/_astro/rogntodjuuu/src/pages/login.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.7f79c5bc.mjs","/src/pages/login.astro":"chunks/pages/login.astro.f88f7b93.mjs","/src/pages/api/login.json.ts":"chunks/pages/login.json.ts.f20e4f45.mjs","/src/pages/api/logout.ts":"chunks/pages/logout.ts.78fbe4f2.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.669fe951.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"chunks/dashboard@_@astro.4a61f7fb.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login@_@astro.b5b4dd2d.mjs","\u0000@astro-page:src/pages/api/login.json@_@ts":"chunks/login.ec617d5e.mjs","\u0000@astro-page:src/pages/api/logout@_@ts":"chunks/logout@_@ts.8686ccd9.mjs","/Users/petter/dev/P/_astro/rogntodjuuu/src/components/LoginForm":"_astro/LoginForm.aa087e18.js","@astrojs/react/client.js":"_astro/client.2ce19805.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/dashboard.4fa96f09.css","/favicon.svg","/_astro/LoginForm.aa087e18.js","/_astro/client.2ce19805.js","/_astro/index.ed373d49.js"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
