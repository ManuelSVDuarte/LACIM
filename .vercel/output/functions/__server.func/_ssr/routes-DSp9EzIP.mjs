import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as INSTAGRAM_URL, o as inscricoesAbertas } from "./router-Zw-5QwZt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DSp9EzIP.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const abertas = inscricoesAbertas();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex flex-1 items-end sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/lacim/hero.jpg",
				alt: "Mesa cirúrgica com instrumental sobre campo verde, sob a luz do foco",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-xl px-6 py-12 sm:px-12 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-wide text-gold uppercase",
						children: "Processo seletivo 2026.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl text-header-fg sm:text-6xl",
						children: "5 vagas para novos ligantes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-base leading-relaxed text-header-fg",
						children: abertas ? "Inscrições abertas até 7 de outubro. Uma prévia do edital — o passo a passo e o formulário estão na página do processo." : "As inscrições fecharam em 7 de outubro. O edital completo continua na página do processo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 flex flex-wrap gap-6 text-sm text-header-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-gold",
								children: "Inscrições"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "até 07/10"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-gold",
								children: "Aula"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "10/10"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-gold",
								children: "Prova"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium",
								children: "15/10"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/seletivo",
							className: "inline-flex items-center justify-center border border-gold px-5 py-3 text-sm font-medium tracking-wide text-header-fg uppercase hover:bg-gold hover:text-ink",
							children: "Ver o processo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm font-medium tracking-wide text-gold",
							children: "Instagram @LACIMRJ"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
