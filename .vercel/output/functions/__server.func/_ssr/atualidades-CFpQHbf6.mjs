import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as news } from "./router-Zw-5QwZt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/atualidades-CFpQHbf6.js
var import_jsx_runtime = require_jsx_runtime();
function Atualidades() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-primary",
			children: "Setembro de 2026"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl text-ink",
			children: "O que muda na cirurgia agora"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
			children: "A nova definição de infarto, cirurgias que entram no SUS e o primeiro porco clonado no Brasil para transplante de órgãos. Cada nota traz a fonte."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-3 lg:grid-cols-3",
			children: news.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col rounded-2xl border border-line bg-sheet p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-accent",
						children: item.date
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl text-ink",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
						children: item.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-4 text-sm font-medium text-primary",
						children: item.source
					})
				]
			}, item.href))
		})
	] });
}
//#endregion
export { Atualidades as component };
