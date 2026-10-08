import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as instruments } from "./banco-DIFTZMZ5.mjs";
import { n as matchId } from "./grade-C-0RDmKX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/instrumentos-D28aOBX1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function shuffle(list) {
	const next = [...list];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	return next;
}
function Nomear() {
	const [order, setOrder] = (0, import_react.useState)(() => shuffle(instruments).map((item) => item.id));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [counted, setCounted] = (0, import_react.useState)(false);
	const current = instruments.find((item) => item.id === order[index]);
	const progress = `${index + 1} / ${order.length}`;
	function check(event) {
		event.preventDefault();
		if (!current || revealed || status === "ok") return;
		if (matchId(draft, instruments) === current.id) {
			setStatus("ok");
			setRevealed(true);
			if (!counted) setHits((n) => n + 1);
			setCounted(true);
		} else setStatus("no");
	}
	function reveal() {
		if (!current || revealed) return;
		setRevealed(true);
		setCounted(true);
	}
	function next() {
		if (index + 1 >= order.length) {
			setDone(true);
			return;
		}
		setIndex((n) => n + 1);
		setDraft("");
		setStatus("idle");
		setRevealed(false);
		setCounted(false);
	}
	function restart() {
		setOrder(shuffle(instruments).map((item) => item.id));
		setIndex(0);
		setDraft("");
		setStatus("idle");
		setRevealed(false);
		setCounted(false);
		setHits(0);
		setDone(false);
	}
	if (!current) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-primary",
				children: "Nomear o instrumental"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-4xl text-ink",
				children: "Escreva o nome."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Aceita o nome curto. Mayo, Backhaus, Veress e bisturi elétrico já bastam."
			})
		] }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl border border-line bg-surface p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl text-ink",
					children: [
						hits,
						" de ",
						order.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Acertos de primeira conta. Ver o nome sem acertar entra como revisão, não como ponto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => restart(),
						className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg",
						children: "De novo, outra ordem"
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: progress }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [hits, " certos"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "overflow-hidden rounded-2xl border border-line bg-surface",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.image,
						alt: revealed ? current.name : "Instrumento cirúrgico sem legenda",
						className: "aspect-square w-full bg-sheet object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: check,
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-medium text-ink",
							htmlFor: "nome",
							children: "Nome do instrumento"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "nome",
							value: draft,
							onChange: (event) => {
								setDraft(event.target.value);
								if (status === "no") setStatus("idle");
							},
							disabled: revealed,
							autoComplete: "off",
							className: "min-h-11 w-full rounded-xl border border-line bg-surface px-4 text-ink",
							placeholder: "Ex.: pinça de Mixter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: revealed || draft.trim().length < 3,
									className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg disabled:opacity-50",
									children: "Conferir"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: reveal,
									disabled: revealed,
									className: "min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg disabled:opacity-50",
									children: "Ver nome agora"
								}),
								revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: next,
									className: "min-h-11 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink",
									children: index + 1 === order.length ? "Fechar série" : "Próximo"
								}) : null
							]
						})
					]
				}),
				status === "no" && !revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-danger",
					role: "status",
					children: "Não é esse. Tente o nome da peça, ou abra a resposta."
				}) : null,
				status === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					role: "status",
					children: "Certo."
				}) : null,
				revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-primary/30 bg-ok-soft px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-ink",
						children: current.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-ink",
						children: current.use
					})]
				}) : null
			]
		})]
	});
}
//#endregion
export { Nomear as component };
