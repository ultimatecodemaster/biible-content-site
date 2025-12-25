import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_BZ_Se_5k.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [{ params: { slug: "test" }, props: { title: "Test" } }];
}
const $$Test = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1>${title}</h1>`;
}, "/Users/ryanmartin/biible-content-site/src/pages/test.astro", void 0);

const $$file = "/Users/ryanmartin/biible-content-site/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
