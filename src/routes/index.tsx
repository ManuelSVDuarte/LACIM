import { createFileRoute, Link } from "@tanstack/react-router";
import { INSTAGRAM_URL, inscricoesAbertas } from "@/data/lacim";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const abertas = inscricoesAbertas();

  return (
    <section className="relative flex flex-1 items-end sm:items-center">
      <img
        src="/lacim/hero.jpg"
        alt="Mesa cirúrgica com instrumental sobre campo verde, sob a luz do foco"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative w-full max-w-xl px-6 py-12 sm:px-12 sm:py-16">
        <p className="text-sm font-medium tracking-wide text-gold uppercase">Edital nº 02/2026</p>
        <h1 className="mt-3 text-4xl text-header-fg sm:text-6xl">5 vagas para novos ligantes</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-header-fg">
          {abertas
            ? "Inscrições abertas até 17 de outubro."
            : "As inscrições fecharam em 17 de outubro. O edital completo continua na página do processo."}
        </p>
        <dl className="mt-6 flex flex-wrap gap-6 text-sm text-header-fg">
          <div>
            <dt className="text-gold">Inscrições</dt>
            <dd className="mt-1 font-medium">até 17/10, 23h59</dd>
          </div>
          <div>
            <dt className="text-gold">Taxa</dt>
            <dd className="mt-1 font-medium">R$ 20</dd>
          </div>
          <div>
            <dt className="text-gold">Prova</dt>
            <dd className="mt-1 font-medium">19/10, 17h30</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/seletivo"
            className="inline-flex items-center justify-center border border-gold px-5 py-3 text-sm font-medium tracking-wide text-header-fg uppercase hover:bg-gold hover:text-ink"
          >
            Ver o processo
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide text-gold"
          >
            Instagram @LACIMRJ
          </a>
        </div>
      </div>
    </section>
  );
}
