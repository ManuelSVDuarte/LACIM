import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as members } from "./router-Zw-5QwZt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/diretoria-BXdkQjBW.js
var import_jsx_runtime = require_jsx_runtime();
function Diretoria() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-primary",
			children: "Diretoria"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl text-ink",
			children: "Quem conduz a liga"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
			children: "Os cartazes são a apresentação oficial. O texto embaixo deixa o essencial legível sem ampliar a imagem."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-6 lg:grid-cols-2",
			children: members.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "overflow-hidden rounded-2xl border border-line bg-sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: person.image,
					alt: `${person.name}, ${person.role} da LACIM`,
					className: "w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-ink",
							children: person.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-accent",
							children: person.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted",
							children: person.bio
						})
					]
				})]
			}, person.id))
		})
	] });
}
//#endregion
export { Diretoria as component };
