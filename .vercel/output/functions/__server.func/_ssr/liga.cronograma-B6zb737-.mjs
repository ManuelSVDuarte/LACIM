import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/liga.cronograma-B6zb737-.js
var import_jsx_runtime = require_jsx_runtime();
var meetings = [
	{
		n: "01",
		title: "Introdução à Cirurgia e ao Centro Cirúrgico",
		time: "1h",
		topics: [
			"Organização do centro cirúrgico",
			"Equipe cirúrgica",
			"Segurança do paciente",
			"Checklist de cirurgia segura",
			"Tempos cirúrgicos",
			"Terminologia cirúrgica",
			"Debate de um caso clínico"
		]
	},
	{
		n: "02",
		title: "Assepsia, antissepsia e paramentação",
		topics: [
			"Assepsia",
			"Antissepsia",
			"Degermação das mãos",
			"Paramentação",
			"Colocação de luvas estéreis",
			"Campos cirúrgicos",
			"Prevenção de infecção do sítio cirúrgico",
			"Debate de um caso clínico"
		]
	},
	{
		n: "03",
		title: "Oficina de fios, agulhas, nós e suturas",
		topics: [
			"Tipos de fios",
			"Fios absorvíveis e não absorvíveis",
			"Tipos de agulhas",
			"Escolha do fio",
			"Nós cirúrgicos",
			"Suturas simples",
			"Suturas contínuas",
			"Ponto Donati",
			"Ponto em X",
			"Técnicas básicas de fechamento de feridas"
		]
	},
	{
		n: "04",
		title: "Debate de casos sobre as principais intercorrências",
		topics: [
			"Cuidados pós-operatórios",
			"Dor",
			"Febre pós-operatória",
			"Sangramento",
			"Infecção",
			"Deiscência",
			"Seroma",
			"Hematoma",
			"Tromboembolismo",
			"Complicações respiratórias",
			"Debate de um caso clínico"
		]
	},
	{
		n: "05",
		title: "Oficina de instrumentação cirúrgica",
		topics: [
			"Instrumentais de diérese",
			"Instrumentais de hemostasia",
			"Instrumentais de preensão",
			"Instrumentais de síntese",
			"Afastadores",
			"Organização da mesa cirúrgica",
			"Manuseio correto dos instrumentos",
			"Debate de um caso clínico"
		]
	},
	{
		n: "06",
		title: "Oficina sobre risco cirúrgico",
		topics: [
			"Risco cirúrgico",
			"Avaliação clínica",
			"Exames pré-operatórios",
			"Jejum",
			"Profilaxia antibiótica",
			"Profilaxia de tromboembolismo",
			"Consentimento informado",
			"Debate de um caso clínico"
		]
	},
	{
		n: "07",
		title: "Debate de casos sobre abdome agudo",
		topics: [
			"Abdome agudo inflamatório",
			"Apendicite",
			"Colecistite",
			"Pancreatite",
			"Diverticulite",
			"Abdome agudo obstrutivo",
			"Abdome agudo perfurativo",
			"Abdome agudo hemorrágico"
		]
	},
	{
		n: "08",
		title: "Debate de casos de trauma e emergência cirúrgica",
		topics: [
			"Choque hemorrágico",
			"Trauma abdominal",
			"Trauma torácico",
			"Hemorragias"
		]
	}
];
function Cronograma() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-primary",
			children: "A liga"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl text-ink",
			children: "Cronograma de eventos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
			children: "Proposta do primeiro semestre. O estatuto pede pelo menos oito encontros, com no máximo quinze dias entre um e outro. Este plano ainda não fixa o dia de cada reunião."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 grid gap-4 sm:grid-cols-2",
			children: meetings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-2xl border border-line bg-sheet p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-primary",
						children: item.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl text-ink",
						children: item.title
					}), "time" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-accent",
						children: item.time
					}) : null] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-1 text-sm leading-relaxed text-muted",
					children: item.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: topic }, topic))
				})]
			}, item.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/liga",
			className: "mt-8 inline-block text-sm font-medium text-primary",
			children: "Voltar para a liga"
		})
	] });
}
//#endregion
export { Cronograma as component };
