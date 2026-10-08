import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { EMAIL, INSTAGRAM_URL } from "@/data/lacim";

const studyPaths = ["/plataforma", "/introducao", "/estudo", "/instrumentos", "/flashcards", "/treino", "/prova", "/segura"];

const siteLinks = [
  { to: "/", label: "Início" },
  { to: "/liga", label: "A liga" },
  { to: "/diretoria", label: "Diretoria" },
  { to: "/seletivo", label: "Editais" },
  { to: "/atualidades", label: "Atualidades" },
  { to: "/plataforma", label: "Simulado" },
] as const;

const studyLinks = [
  { to: "/introducao", label: "Provas" },
  { to: "/estudo", label: "Estudo" },
  { to: "/instrumentos", label: "Nomear" },
  { to: "/flashcards", label: "Cards" },
  { to: "/treino", label: "Treino" },
  { to: "/prova", label: "Prova" },
  { to: "/segura", label: "Casos" },
] as const;

function onStudy(path: string) {
  return studyPaths.some((item) => path === item || path.startsWith(`${item}/`));
}

function isCurrent(path: string, to: string) {
  if (to === "/") return path === "/";
  if (to === "/plataforma") return onStudy(path);
  return path === to || path.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const study = onStudy(path);
  const home = path === "/";

  return (
    <div className={`flex min-h-screen flex-col ${study ? "bg-bg" : "bg-sheet"}`}>
      <header className="no-print sticky top-0 z-20 bg-header text-header-fg">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-1 sm:px-5">
          <Link to="/" className="mr-auto shrink-0 py-1">
            <img src="/lacim/logo-mark.png" alt="LACIM" className="h-14 w-auto sm:h-16" />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-1" aria-label="Seções">
            {siteLinks.map((link) => {
              const active = isCurrent(path, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-2 py-3 text-xs font-medium tracking-wide uppercase sm:text-sm ${
                    active ? "text-gold" : "text-header-fg hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        {study ? (
          <nav className="flex flex-wrap gap-1 border-t border-header-fg/15 bg-bg px-3 py-2 sm:px-5" aria-label="Módulos">
            {studyLinks.map((link) => {
              const active = path.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-full px-3 py-2 text-sm font-medium ${
                    active ? "bg-primary text-primary-fg" : "text-ink hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </header>
      <main className={home ? "flex flex-1 flex-col" : "mx-auto w-full max-w-5xl flex-1 px-4 py-8"}>{children}</main>
      {study ? null : (
        <footer className="border-t border-line bg-sheet px-4 py-4 text-sm text-muted">
          <div className="mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-1">
            <span className="font-medium text-ink">LACIM · Liga Acadêmica de Cirurgia de Maricá</span>
            <a className="text-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="text-primary" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              @LACIMRJ
            </a>
          </div>
        </footer>
      )}
    </div>
  );
}
