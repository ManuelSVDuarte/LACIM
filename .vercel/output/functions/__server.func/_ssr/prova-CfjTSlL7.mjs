import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as examQuestions } from "./banco-DIFTZMZ5.mjs";
import { t as keywordHits } from "./grade-C-0RDmKX.mjs";
import { t as AnswerBox } from "./answer-box-NtEghyFl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prova-CfjTSlL7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE = "bancada-prova";
var CHOICES = [
	15,
	25,
	40
];
function format(ms) {
	const total = Math.max(0, Math.ceil(ms / 1e3));
	const m = Math.floor(total / 60);
	const s = total % 60;
	return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function Prova() {
	const [phase, setPhase] = (0, import_react.useState)("setup");
	const [minutes, setMinutes] = (0, import_react.useState)(25);
	const [endsAt, setEndsAt] = (0, import_react.useState)(null);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [shown, setShown] = (0, import_react.useState)({});
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE);
			if (raw) {
				const draft = JSON.parse(raw);
				if (draft.endsAt) {
					setPhase("run");
					setEndsAt(draft.endsAt);
					setAnswers(draft.answers ?? {});
					setShown(draft.shown ?? {});
					setMinutes(draft.minutes ?? 25);
				}
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready || phase !== "run" || endsAt == null) return;
		const draft = {
			endsAt,
			answers,
			shown,
			minutes
		};
		localStorage.setItem(STORAGE, JSON.stringify(draft));
	}, [
		answers,
		endsAt,
		minutes,
		phase,
		ready,
		shown
	]);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	const remaining = endsAt == null ? 0 : Math.max(0, endsAt - now);
	const locked = phase === "run" && endsAt != null && remaining <= 0;
	const filled = examQuestions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;
	function start(fresh) {
		if (!fresh && endsAt) {
			setPhase("run");
			return;
		}
		const nextEnd = Date.now() + minutes * 60 * 1e3;
		setAnswers({});
		setShown({});
		setEndsAt(nextEnd);
		setPhase("run");
	}
	function reset() {
		if (Object.values(answers).some((value) => value.trim()) && !window.confirm("Apagar o que você escreveu e começar outra prova?")) return;
		localStorage.removeItem(STORAGE);
		setPhase("setup");
		setEndsAt(null);
		setAnswers({});
		setShown({});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Prova discursiva"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-4xl text-ink",
						children: "Escreve. Confere quando quiser."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: "Doze questões curtas. O gabarito de cada uma abre na hora — não fica preso até o fim. A impressão sai com as questões e as respostas no final."
					})
				] }), phase === "run" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `min-w-24 rounded-full px-4 py-2 text-center font-display text-2xl ${locked || remaining < 6e4 ? "bg-accent text-accent-fg" : "bg-ink text-surface"}`,
						"aria-live": "polite",
						children: locked ? "00:00" : format(remaining)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg",
						children: "Imprimir questões e gabarito"
					})]
				}) : null]
			}),
			phase === "setup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "no-print max-w-xl space-y-5 rounded-2xl border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: "Tempo da prova"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: CHOICES.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setMinutes(choice),
							className: `min-h-11 rounded-full px-4 text-sm font-medium ${minutes === choice ? "bg-primary text-primary-fg" : "border border-line text-ink"}`,
							children: [choice, " min"]
						}, choice))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Quando o tempo acaba, a escrita trava. Ver resposta e imprimir continuam liberados."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => start(true),
							className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg",
							children: "Começar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => window.print(),
							className: "min-h-11 rounded-full border border-line px-5 text-sm font-medium text-ink",
							children: "Imprimir questões e gabarito"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print space-y-4",
				children: [
					locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-xl bg-warn-soft px-4 py-3 text-sm text-ink",
						role: "status",
						children: "Tempo esgotado. As respostas que você escreveu ficam para a impressão. Dá para abrir o gabarito de cada questão."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							filled,
							" de ",
							examQuestions.length,
							" com texto."
						]
					}),
					examQuestions.map((question, index) => {
						const text = answers[question.id] ?? "";
						const open = shown[question.id];
						const hits = keywordHits(text, question.keywords);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							id: question.id,
							className: "scroll-mt-28 rounded-2xl border border-line bg-surface p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium text-accent",
									children: [
										index + 1,
										". ",
										question.topic
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-xl text-ink",
									children: question.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mt-4 block text-sm font-medium text-ink",
									htmlFor: question.id,
									children: "Sua resposta"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: question.id,
									value: text,
									disabled: locked,
									onChange: (event) => setAnswers((prev) => ({
										...prev,
										[question.id]: event.target.value
									})),
									rows: 4,
									className: "mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm text-ink"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerBox, {
										text: question.answer,
										note: text.trim() ? `Sua resposta tocou ${hits.length} de ${question.keywords.length} pontos esperados. Compare com o texto, não é nota automática.` : void 0
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShown((prev) => ({
											...prev,
											[question.id]: true
										})),
										className: "min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg",
										children: "Ver resposta agora"
									})
								})
							]
						}, question.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => window.print(),
							className: "min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg",
							children: "Imprimir questões e gabarito"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							className: "min-h-11 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink",
							children: "Nova prova"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "print-only print-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl",
						children: "Bancada — prova"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "Questões. O gabarito está no final."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-4",
						children: examQuestions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs",
							children: question.topic
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base",
							children: question.prompt
						})] }, question.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "page-break mt-8 text-2xl",
						children: "Gabarito"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-4",
						children: examQuestions.map((question) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: question.prompt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: question.answer
							}),
							(answers[question.id] ?? "").trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm",
								children: ["Você escreveu: ", answers[question.id]]
							}) : null
						] }, `${question.id}-g`))
					})
				]
			})
		]
	});
}
//#endregion
export { Prova as component };
