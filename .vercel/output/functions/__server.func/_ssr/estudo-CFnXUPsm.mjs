import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as lessons, r as instruments } from "./banco-DIFTZMZ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/estudo-CFnXUPsm.js
var import_jsx_runtime = require_jsx_runtime();
function Estudo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[200px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "no-print lg:sticky lg:top-24 lg:self-start",
			"aria-label": "Tópicos",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-semibold tracking-wide text-muted",
				children: "Nesta mesa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex gap-2 overflow-x-auto lg:flex-col",
				children: lessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${lesson.id}`,
					className: "block whitespace-nowrap rounded-full px-3 py-2 text-sm text-ink hover:bg-surface lg:whitespace-normal",
					children: lesson.title
				}) }, lesson.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Estudo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-4xl text-ink",
					children: "O que precisa estar na ponta da língua."
				})] }),
				lessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: lesson.id,
					className: "scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl text-ink",
							children: lesson.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-muted",
							children: lesson.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-4",
							children: lesson.blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-2xl border border-line bg-surface p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg text-ink",
									children: block.heading
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm leading-relaxed text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})]
							}, block.heading))
						})
					]
				}, lesson.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "atlas",
					className: "scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl text-ink",
							children: "Atlas rápido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "Nome e uso, para olhar antes de esconder a legenda no módulo Nomear."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: instruments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "overflow-hidden rounded-2xl border border-line bg-surface sm:grid sm:grid-cols-[140px_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.name,
									className: "h-40 w-full bg-sheet object-contain sm:h-full"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium text-accent",
											children: item.family
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 font-display text-lg text-ink",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-muted",
											children: item.use
										})
									]
								})]
							}, item.id))
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Estudo as component };
