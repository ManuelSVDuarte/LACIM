import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as WHATSAPP_URL, i as INSTAGRAM_URL, n as EMAIL, o as inscricoesAbertas, r as FORM_URL } from "./router-Zw-5QwZt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seletivo-Cv7KJ9SV.js
var import_jsx_runtime = require_jsx_runtime();
var temas = [
	"Instrumentação cirúrgica",
	"Paramentação cirúrgica",
	"Boas práticas cirúrgicas"
];
function Seletivo() {
	const abertas = inscricoesAbertas();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Edital 2026.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl text-ink sm:text-5xl",
						children: "Processo seletivo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Seja bem-vindo. Ficamos felizes com o seu interesse em integrar a equipe e dar mais um passo na formação cirúrgica. Preencha o formulário com atenção para garantir a inscrição."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: FORM_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg",
							children: "Abrir o formulário"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center justify-center border border-line bg-sheet px-5 py-3 text-sm font-medium text-ink",
							children: "Instagram @LACIMRJ"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-accent",
						children: abertas ? "Inscrições abertas até 7 de outubro de 2026." : "Inscrições encerradas em 7 de outubro de 2026."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-sheet p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-ink",
							children: "Vagas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "5 vagas para membros ligantes."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-sheet p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-ink",
							children: "Inscrições"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Abertas até 7 de outubro de 2026."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-line bg-sheet p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-ink",
							children: "Prova"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "Teórica, com base no conteúdo e na aula preparatória."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-ink",
					children: "Conteúdo da prova"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2 sm:grid-cols-3",
					children: temas.map((tema) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl bg-ok-soft px-4 py-3 text-sm font-medium text-ink",
						children: tema
					}, tema))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: "O simulado cobre esses três temas. Dá para revisar antes da aula."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/plataforma",
					className: "mt-2 inline-block text-sm font-medium text-primary",
					children: "Ir para o simulado"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl text-ink",
				children: "Cronograma"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 space-y-4 text-sm leading-relaxed text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-sheet p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "10 de outubro"
					}), " — Aula preparatória online, no Google Meet, com todo o conteúdo. O link sai por e-mail e WhatsApp para quem se inscrever."]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-sheet p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "15 de outubro"
					}), " — Prova do processo seletivo."]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-line bg-ok-soft p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: "Dúvidas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "Fale com a diretoria durante a inscrição."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-medium text-primary",
							href: `mailto:${EMAIL}`,
							children: EMAIL
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "font-medium text-primary",
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "WhatsApp (22) 99762-6108"
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Agradecemos a participação e a dedicação. Bom preparo e boa sorte em todas as etapas. Atenciosamente, Diretoria LACIM."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: FORM_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-5 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg",
						children: "Abrir o formulário"
					})
				]
			})
		]
	});
}
//#endregion
export { Seletivo as component };
