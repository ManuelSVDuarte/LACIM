import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/liga/")({ component: Liga });

const pilares = ["Pessoas", "Conhecimento", "Cirurgia", "Grandes propósitos"];

function Liga() {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <section>
        <p className="text-sm font-medium text-primary">A liga</p>
        <h1 className="mt-2 text-4xl text-ink">Quem somos</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Liga Acadêmica de Cirurgia de Maricá. O foco principal é complementar a formação cirúrgica,
          desenvolver projetos científicos, acompanhar cirurgias, participar de eventos acadêmicos e
          realizar projetos de extensão, entre outras atividades.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {pilares.map((item) => (
            <li key={item} className="rounded-full border border-line bg-sheet px-3 py-2 text-sm font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/lacim/estatuto-lacim.pdf"
            download="Estatuto LACIM.pdf"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg"
          >
            Baixar o estatuto
          </a>
          <Link
            to="/liga/cronograma"
            className="inline-flex items-center justify-center border border-line bg-sheet px-5 py-3 text-sm font-medium text-ink"
          >
            Cronograma de eventos
          </Link>
        </div>
      </section>
      <figure className="overflow-hidden rounded-2xl border border-line bg-sheet">
        <img
          src="/lacim/centro-cirurgico.jpg"
          alt="Equipe em centro cirúrgico, no meio de uma cirurgia, sob o foco"
          className="w-full"
        />
      </figure>
    </div>
  );
}
