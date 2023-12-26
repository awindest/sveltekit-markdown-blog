import { c as create_ssr_component, e as escape, a as compute_rest_props, b as spread, d as escape_object, f as escape_attribute_value, g as each, v as validate_component, h as subscribe } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
import NProgress from "nprogress";
import { n as navigating } from "../../chunks/stores.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const browser = BROWSER;
const footer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "footer.svelte-k2ae0s{padding-block:var(--size-7);border-top:1px solid var(--border)}p.svelte-k2ae0s{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<footer class="svelte-k2ae0s"><p class="svelte-k2ae0s">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p> </footer>`;
});
/**
 * @license lucide-svelte v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
const Rss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M4 11a9 9 0 0 1 9 9" }],
    ["path", { "d": "M4 4a16 16 0 0 1 16 16" }],
    ["circle", { "cx": "5", "cy": "19", "r": "1" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "rss" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Rss$1 = Rss;
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const userTheme = browser;
const theme = writable(userTheme);
const toggle_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "button.svelte-114mtci.svelte-114mtci{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-114mtci>.svelte-114mtci{display:flex;gap:var(--size-2)}",
  map: null
};
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$4);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-114mtci">${$theme === "dark" ? `<div class="svelte-114mtci">${validate_component(Sun$1, "Sun").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-30gjga">Light</span></div>` : `<div class="svelte-114mtci">${validate_component(Moon$1, "Moon").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-397x2m">Dark</span></div>`} </button>`;
});
const rss_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "button.svelte-idazz7.svelte-idazz7{padding:0;font-weight:inherit;background:none;border:2px;box-shadow:none;overflow:hidden;color:inherit}button.svelte-idazz7>.svelte-idazz7{display:flex;gap:var(--size-2)}",
  map: null
};
const Rss_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<a href="/rss.xml" target="_blank"><button aria-label="RSS feed" class="svelte-idazz7"><div class="svelte-idazz7">${validate_component(Rss$1, "Rss").$$render($$result, {}, {}, {})} <span data-svelte-h="svelte-1u97bkq">RSS</span></div></button> </a>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-1s2ozfw{padding-block:var(--size-7)}.links.svelte-1s2ozfw{margin-block:var(--size-7)}a.svelte-1s2ozfw{color:inherit;text-decoration:none}@media(min-width: 768px){nav.svelte-1s2ozfw{display:flex;justify-content:space-between}.links.svelte-1s2ozfw{display:flex;gap:var(--size-7);margin-block:0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="svelte-1s2ozfw"><a href="/" class="title svelte-1s2ozfw"><b>${escape(title)}</b></a> <ul class="links svelte-1s2ozfw"><li data-svelte-h="svelte-4dteop"><a href="/about" class="svelte-1s2ozfw">About</a></li> <li data-svelte-h="svelte-y1z403"><a href="/contact" class="svelte-1s2ozfw">Contact</a></li> <li>${validate_component(Rss_1, "Rss").$$render($$result, {}, {}, {})}</li></ul> ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {})} </nav>`;
});
const transition_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".transition.svelte-vcdv4c{height:100%}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$1);
  return `<div class="transition svelte-vcdv4c">${slots.default ? slots.default({}) : ``}</div>`;
});
const openProps_min = "";
const normalize_min = "";
const buttons_min = "";
const app = "";
const nprogress = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-n9ze3t{height:100%;max-inline-size:1440px;display:grid;grid-template-rows:auto 1fr auto;margin-inline:auto;padding-inline:var(--size-7)}main.svelte-n9ze3t{padding-block:var(--size-9)}@media(min-width: 1440px){.layout.svelte-n9ze3t{padding-inline:0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let { data } = $$props;
  NProgress.configure({
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      if ($navigating) {
        NProgress.start();
      } else {
        NProgress.done();
        console.log("done");
      }
    }
  }
  $$unsubscribe_navigating();
  return `<div class="layout svelte-n9ze3t">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-n9ze3t">${validate_component(Transition, "PageTransition").$$render($$result, { url: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
