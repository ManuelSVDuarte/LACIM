import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Zw-5QwZt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var FORM_URL = "https://forms.gle/3BgQyo9GguP6StRQ8";
var INSTAGRAM_URL = "https://www.instagram.com/lacimrj/";
var WHATSAPP_URL = "https://wa.me/5522997626108";
var EMAIL = "contato@lacim.com.br";
var INSCRICAO_ATE = /* @__PURE__ */ new Date("2026-10-07T23:59:59-03:00");
function inscricoesAbertas(now = /* @__PURE__ */ new Date()) {
	return now.getTime() <= INSCRICAO_ATE.getTime();
}
var members = [
	{
		id: "fabiola",
		name: "Fabíola Rocha",
		role: "Presidente",
		image: "/lacim/fabiola.jpg",
		bio: "Formada em Direito, Perícia Criminal e Investigação Forense. Cursa o 6º período de Medicina e é monitora de Fundamentos de Cirurgia."
	},
	{
		id: "bruno",
		name: "Bruno Rocha",
		role: "Vice-presidente",
		image: "/lacim/bruno.jpg",
		bio: "Formado em Engenharia de Produção. Cursa o 4º período de Medicina e é monitor de Fisiologia 2."
	},
	{
		id: "asley",
		name: "Asley Rafaella",
		role: "Tesoureira",
		image: "/lacim/asley.jpg",
		bio: "Advogada e estudante de Medicina no 6º período. Entrou na liga para aprender cirurgia, dividir experiência e construir a equipe junto com os demais."
	},
	{
		id: "karolayne",
		name: "Karolayne",
		role: "Secretária",
		image: "/lacim/karolayne.jpg",
		bio: "Formada em Biologia, no 4º período de Medicina e monitora de Fisiologia 2. A cirurgia chamou a atenção desde o começo da graduação, pela prática e pelas possibilidades da especialidade."
	},
	{
		id: "manuel",
		name: "Manuel Duarte",
		role: "Diretor científico e de eventos",
		image: "/lacim/manuel.jpg",
		bio: "Engenheiro da computação e estudante de Medicina no 4º período. Tem iniciação científica no CBPF, trabalhos apresentados em congressos e outras atividades de pesquisa e inovação."
	},
	{
		id: "jessica",
		name: "Dra. Jessica Pereira Manso",
		role: "Coordenadora",
		image: "/lacim/jessica.jpg",
		bio: "Medicina pela Universidade Estácio de Sá (2016). Residência em Cirurgia Geral pelo Hospital Municipal Salgado Filho (2019) e em Cirurgia Oncológica pelo Instituto Nacional do Câncer (2022)."
	}
];
var news = [
	{
		date: "28 ago 2026",
		title: "A definição de infarto muda: três tipos, não cinco",
		text: "A 5ª Definição Universal, da ESC com ACC, AHA e WHF, saiu no European Heart Journal. O infarto passa a ser primário, secundário ou relacionado a procedimento. A troponina ganha referência diferente para mulheres, para não perder caso.",
		href: "https://www.estadao.com.br/pulsa/medicina-e-estudos/quais-sao-os-tipos-de-infarto-nova-classificacao-europeia-muda-divisao-dos-casos/",
		source: "Estadão"
	},
	{
		date: "8 ago 2026",
		title: "Brasil clona o primeiro porco para transplante de órgãos",
		text: "A USP produziu o animal em abril, em Piracicaba, como passo para o xenotransplante. O transplante em humanos ainda não foi feito. Em agosto, o g1 registrou que esse primeiro clone foi eutanasiado no fim de julho, por corte de verba do projeto.",
		href: "https://g1.globo.com/sp/piracicaba-regiao/noticia/2026/08/08/morre-primeiro-porco-clonado-no-brasil-para-transplante-de-orgaos-animal-sera-exposto-em-museu-de-zoologia.ghtml",
		source: "g1"
	},
	{
		date: "27 jun 2026",
		title: "Primeira cirurgia de joelho com robô chinês e implante brasileiro",
		text: "O procedimento foi feito em hospital público. A plataforma, registrada na Anvisa, também se presta a quadril e coluna. É um caminho para a robótica ortopédica no SUS.",
		href: "https://www.cnnbrasil.com.br/saude/cirurgia-inedita-com-robo-chines-que-pode-mudar-tratamento-no-sus-veja/",
		source: "CNN Brasil"
	},
	{
		date: "24 set 2026",
		title: "Catarata e glaucoma no mesmo ato cirúrgico entram no SUS",
		text: "A portaria saiu em 17 de setembro. A oferta na rede pública está prevista a partir de março de 2027, para glaucoma de ângulo aberto em estágio inicial ou moderado.",
		href: "https://www.otempo.com.br/saude-e-bem-estar/2026/9/24/cirurgia-para-tratar-catarata-e-glaucoma-ao-mesmo-tempo-sera-ofertada-pelo-sus",
		source: "O Tempo / Folhapress"
	},
	{
		date: "14 set 2026",
		title: "Mil cirurgias robóticas pelo SUS em um hospital público",
		text: "O Hospital Municipal Vila Santa Catarina, em São Paulo, chegou a essa marca e passou a formar profissionais na plataforma. A robótica no SUS deixa de ser exceção isolada.",
		href: "https://veja.abril.com.br/saude/o-avanco-das-cirurgias-roboticas-no-vila-santa-catarina-gerido-pelo-einstein-hospital-israelita/",
		source: "VEJA"
	},
	{
		date: "15 set 2026",
		title: "O SUS fez mais de 7,5 milhões de cirurgias eletivas no semestre",
		text: "São 8% a mais do que no mesmo período de 2025, em 20 estados. Desse volume, 2,92 milhões entraram pelo programa Agora Tem Especialistas.",
		href: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/cirurgias-eletivas-pelo-sus-passam-de-75-milhoes-no-primeiro-semestre",
		source: "Agência Brasil"
	}
];
var studyPaths = [
	"/plataforma",
	"/estudo",
	"/instrumentos",
	"/flashcards",
	"/treino",
	"/prova"
];
var siteLinks = [
	{
		to: "/",
		label: "Início"
	},
	{
		to: "/liga",
		label: "A liga"
	},
	{
		to: "/diretoria",
		label: "Diretoria"
	},
	{
		to: "/seletivo",
		label: "Editais"
	},
	{
		to: "/atualidades",
		label: "Atualidades"
	},
	{
		to: "/plataforma",
		label: "Simulado"
	}
];
var studyLinks = [
	{
		to: "/estudo",
		label: "Estudo"
	},
	{
		to: "/instrumentos",
		label: "Nomear"
	},
	{
		to: "/flashcards",
		label: "Cards"
	},
	{
		to: "/treino",
		label: "Treino"
	},
	{
		to: "/prova",
		label: "Prova"
	}
];
function onStudy(path) {
	return studyPaths.some((item) => path === item || path.startsWith(`${item}/`));
}
function isCurrent(path, to) {
	if (to === "/") return path === "/";
	if (to === "/plataforma") return onStudy(path);
	return path === to || path.startsWith(`${to}/`);
}
function AppShell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const study = onStudy(path);
	const home = path === "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex min-h-screen flex-col ${study ? "bg-bg" : "bg-sheet"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print sticky top-0 z-20 bg-header text-header-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-1 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mr-auto shrink-0 py-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/lacim/logo-mark.png",
							alt: "LACIM",
							className: "h-14 w-auto sm:h-16"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-wrap items-center gap-x-1",
						"aria-label": "Seções",
						children: siteLinks.map((link) => {
							const active = isCurrent(path, link.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: `px-2 py-3 text-xs font-medium tracking-wide uppercase sm:text-sm ${active ? "text-gold" : "text-header-fg hover:text-gold"}`,
								children: link.label
							}, link.to);
						})
					})]
				}), study ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap gap-1 border-t border-header-fg/15 bg-bg px-3 py-2 sm:px-5",
					"aria-label": "Módulos",
					children: studyLinks.map((link) => {
						const active = path.startsWith(link.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: `rounded-full px-3 py-2 text-sm font-medium ${active ? "bg-primary text-primary-fg" : "text-ink hover:bg-surface"}`,
							children: link.label
						}, link.to);
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: home ? "flex flex-1 flex-col" : "mx-auto w-full max-w-5xl flex-1 px-4 py-8",
				children
			}),
			study ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line bg-sheet px-4 py-4 text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "LACIM · Liga Acadêmica de Cirurgia de Maricá"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary",
							href: `mailto:${EMAIL}`,
							children: EMAIL
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary",
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "(22) 99762-6108"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary",
							href: INSTAGRAM_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "@LACIMRJ"
						})
					]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-zXoBnl4x.css";
var APP_NAME = "LACIM";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Liga Acadêmica de Cirurgia de Maricá. Processo seletivo e treino de paramentação, instrumentação e boas práticas."
			},
			{
				name: "theme-color",
				content: "#0e6b56"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,650&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$12 = () => import("./routes-DSp9EzIP.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./atualidades-CFpQHbf6.mjs");
var Route$11 = createFileRoute("/atualidades")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./diretoria-BXdkQjBW.mjs");
var Route$10 = createFileRoute("/diretoria")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./estudo-CFnXUPsm.mjs");
var Route$9 = createFileRoute("/estudo")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./flashcards-zM3DlX_n.mjs");
var Route$8 = createFileRoute("/flashcards")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./instrumentos-D28aOBX1.mjs");
var Route$7 = createFileRoute("/instrumentos")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./liga-ma6u9KQO.mjs");
var Route$6 = createFileRoute("/liga")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./plataforma-BSklkerE.mjs");
var Route$5 = createFileRoute("/plataforma")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./prova-CfjTSlL7.mjs");
var Route$4 = createFileRoute("/prova")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./seletivo-Cv7KJ9SV.mjs");
var Route$3 = createFileRoute("/seletivo")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./treino-CEtnxEnx.mjs");
var Route$2 = createFileRoute("/treino")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./liga.index-yJg84eVm.mjs");
var Route$1 = createFileRoute("/liga/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./liga.cronograma-B6zb737-.mjs");
var Route = createFileRoute("/liga/cronograma")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AtualidadesRoute = Route$11.update({
	id: "/atualidades",
	path: "/atualidades",
	getParentRoute: () => Route$13
});
var DiretoriaRoute = Route$10.update({
	id: "/diretoria",
	path: "/diretoria",
	getParentRoute: () => Route$13
});
var EstudoRoute = Route$9.update({
	id: "/estudo",
	path: "/estudo",
	getParentRoute: () => Route$13
});
var FlashcardsRoute = Route$8.update({
	id: "/flashcards",
	path: "/flashcards",
	getParentRoute: () => Route$13
});
var InstrumentosRoute = Route$7.update({
	id: "/instrumentos",
	path: "/instrumentos",
	getParentRoute: () => Route$13
});
var LigaRoute = Route$6.update({
	id: "/liga",
	path: "/liga",
	getParentRoute: () => Route$13
});
var PlataformaRoute = Route$5.update({
	id: "/plataforma",
	path: "/plataforma",
	getParentRoute: () => Route$13
});
var ProvaRoute = Route$4.update({
	id: "/prova",
	path: "/prova",
	getParentRoute: () => Route$13
});
var SeletivoRoute = Route$3.update({
	id: "/seletivo",
	path: "/seletivo",
	getParentRoute: () => Route$13
});
var TreinoRoute = Route$2.update({
	id: "/treino",
	path: "/treino",
	getParentRoute: () => Route$13
});
var LigaIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => LigaRoute
});
var LigaRouteChildren = {
	LigaCronogramaRoute: Route.update({
		id: "/cronograma",
		path: "/cronograma",
		getParentRoute: () => LigaRoute
	}),
	LigaIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AtualidadesRoute,
	DiretoriaRoute,
	EstudoRoute,
	FlashcardsRoute,
	InstrumentosRoute,
	LigaRoute: LigaRoute._addFileChildren(LigaRouteChildren),
	PlataformaRoute,
	ProvaRoute,
	SeletivoRoute,
	TreinoRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { WHATSAPP_URL as a, news as c, INSTAGRAM_URL as i, EMAIL as n, inscricoesAbertas as o, FORM_URL as r, members as s, router_exports as t };
