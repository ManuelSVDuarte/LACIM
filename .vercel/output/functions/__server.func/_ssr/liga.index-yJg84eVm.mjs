import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/liga.index-yJg84eVm.js
var import_jsx_runtime = require_jsx_runtime();
var pilares = [
	"Pessoas",
	"Conhecimento",
	"Cirurgia",
	"Grandes propósitos"
];
function Liga() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-primary",
				children: "A liga"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-ink",
				children: "Quem somos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: "Liga Acadêmica de Cirurgia de Maricá. O foco principal é complementar a formação cirúrgica, desenvolver projetos científicos, acompanhar cirurgias, participar de eventos acadêmicos e realizar projetos de extensão, entre outras atividades."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 flex flex-wrap gap-2",
				children: pilares.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-line bg-sheet px-3 py-2 text-sm font-medium text-ink",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/lacim/estatuto-lacim.pdf",
					download: "Estatuto LACIM.pdf",
					className: "inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg",
					children: "Baixar o estatuto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/liga/cronograma",
					className: "inline-flex items-center justify-center border border-line bg-sheet px-5 py-3 text-sm font-medium text-ink",
					children: "Cronograma de eventos"
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
			className: "overflow-hidden rounded-2xl border border-line bg-sheet",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/lacim/centro-cirurgico.jpg",
				alt: "Equipe em centro cirúrgico, no meio de uma cirurgia, sob o foco",
				className: "w-full"
			})
		})]
	});
}
//#endregion
export { Liga as component };
