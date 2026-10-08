import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as trainItems } from "./banco-DIFTZMZ5.mjs";
import { t as AnswerBox } from "./answer-box-NtEghyFl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/treino-CEtnxEnx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Treino() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [hide, setHide] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)({});
	const item = trainItems[index];
	const visible = !hide || open[item.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Treino"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-4xl text-ink",
					children: "Pergunta com a resposta do lado."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setHide((v) => !v),
					className: "min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink",
					children: hide ? "Mostrar respostas" : "Esconder respostas"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "space-y-4 rounded-2xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-accent",
							children: item.topic
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								index + 1,
								" / ",
								trainItems.length
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: item.prompt
					}),
					item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: "aspect-square w-full rounded-xl bg-sheet object-contain"
					}) : null,
					visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerBox, { text: item.answer }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((prev) => ({
							...prev,
							[item.id]: true
						})),
						className: "min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg",
						children: "Ver resposta agora"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIndex((n) => Math.max(0, n - 1)),
					disabled: index === 0,
					className: "min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink disabled:opacity-40",
					children: "Anterior"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIndex((n) => Math.min(trainItems.length - 1, n + 1)),
					disabled: index === trainItems.length - 1,
					className: "min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg disabled:opacity-40",
					children: "Próxima"
				})]
			})
		]
	});
}
//#endregion
export { Treino as component };
