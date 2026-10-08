import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as instruments } from "./banco-DIFTZMZ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plataforma-BSklkerE.js
var import_jsx_runtime = require_jsx_runtime();
var modules = [
	{
		to: "/estudo",
		index: "01",
		title: "Estudo",
		text: "Paramentação, conduta na sala, tempos e o nome de cada peça. Leitura curta, do jeito da prova."
	},
	{
		to: "/instrumentos",
		index: "02",
		title: "Nomear",
		text: "A foto entra sem legenda. Você escreve o nome e confere na hora."
	},
	{
		to: "/flashcards",
		index: "03",
		title: "Cards",
		text: "Frente e verso. O que já sabe sai do caminho; o que errou volta."
	},
	{
		to: "/treino",
		index: "04",
		title: "Treino",
		text: "Pergunta e resposta juntas. Dá para esconder o gabarito e abrir só a questão."
	},
	{
		to: "/prova",
		index: "05",
		title: "Prova",
		text: "Discursiva, com tempo. Ver a resposta de cada item na hora e imprimir o gabarito no fim."
	}
];
function Plataforma() {
	const strip = instruments.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Simulado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl text-ink sm:text-5xl",
						children: "A mesa, antes da sala."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Os três temas da prova da LACIM: instrumentação, paramentação e boas práticas cirúrgicas. Questões curtas, no recorte de Goffi e da aula de tempos fundamentais."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: modules.map((mod) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: mod.to,
					className: "flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm text-accent",
							children: mod.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 font-display text-2xl text-ink",
							children: mod.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: mod.text
						})
					]
				}) }, mod.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: "Peças da mesa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/instrumentos",
						className: "text-sm font-medium text-primary",
						children: "Treinar os nomes"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-5",
					children: strip.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-2xl border border-line bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.image,
							alt: item.name,
							className: "aspect-square w-full bg-sheet object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-3 py-2 text-xs font-medium text-ink",
							children: item.name
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted",
					children: "Fotos reais, com o instrumento inteiro. O nome curto basta no treino."
				})
			] })
		]
	});
}
//#endregion
export { Plataforma as component };
