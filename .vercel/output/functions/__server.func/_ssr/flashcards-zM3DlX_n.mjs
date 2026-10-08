import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as topics, t as cards } from "./banco-DIFTZMZ5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flashcards-zM3DlX_n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE = "bancada-cards";
function Flashcards() {
	const [topic, setTopic] = (0, import_react.useState)("Todos");
	const [marks, setMarks] = (0, import_react.useState)({});
	const [cursor, setCursor] = (0, import_react.useState)(0);
	const [face, setFace] = (0, import_react.useState)("front");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE);
			if (raw) setMarks(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE, JSON.stringify(marks));
	}, [marks, ready]);
	const deck = (0, import_react.useMemo)(() => cards.filter((card) => topic === "Todos" || card.topic === topic), [topic]);
	const card = deck[cursor] ?? deck[0];
	function jumpTopic(next) {
		setTopic(next);
		setCursor(0);
		setFace("front");
	}
	function mark(value) {
		if (!card) return;
		setMarks((prev) => ({
			...prev,
			[card.id]: value
		}));
		setFace("front");
		setCursor((n) => (n + 1) % deck.length);
	}
	const known = cards.filter((card) => marks[card.id] === "sei").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Flashcards"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-4xl text-ink",
					children: "Vira, responde, segue."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						known,
						" de ",
						cards.length,
						" marcados como sei. Fica neste aparelho."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				role: "tablist",
				"aria-label": "Filtro",
				children: ["Todos", ...topics].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => jumpTopic(item),
					className: `shrink-0 rounded-full px-3 py-2 text-sm ${topic === item ? "bg-ink text-surface" : "bg-surface text-ink"}`,
					children: item
				}, item))
			}),
			card ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFace((f) => f === "front" ? "back" : "front"),
					className: "w-full rounded-2xl border border-line bg-surface p-6 text-left",
					"aria-pressed": face === "back",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-accent",
							children: card.topic
						}),
						card.image && face === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: card.image,
							alt: "",
							className: "mt-4 aspect-video w-full rounded-xl bg-sheet object-contain"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-2xl leading-snug text-ink",
							children: face === "front" ? card.front : card.back
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted",
							children: face === "front" ? "Toque para ver o verso" : "Verso — toque para voltar"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							cursor + 1,
							" / ",
							deck.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => mark("rever"),
							className: "min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink",
							children: "Rever"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => mark("sei"),
							className: "min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg",
							children: "Sei"
						})]
					})]
				})]
			}) : null
		]
	});
}
//#endregion
export { Flashcards as component };
