import { createFileRoute, Link } from "@tanstack/react-router";
import { meetings } from "@/data/cronograma";

export const Route = createFileRoute("/liga/cronograma")({ component: Cronograma });

function Cronograma() {
  return (
    <section>
      <p className="text-sm font-medium text-primary">A liga</p>
      <h1 className="mt-2 text-4xl text-ink">Cronograma de eventos</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Proposta do primeiro semestre. O estatuto pede pelo menos oito encontros, com no máximo
        quinze dias entre um e outro. Este plano ainda não fixa o dia de cada reunião.
      </p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {meetings.map((item) => (
          <li key={item.n} className="rounded-2xl border border-line bg-sheet p-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl text-primary">{item.n}</span>
              <div>
                <h2 className="text-xl text-ink">{item.title}</h2>
                {"time" in item ? <p className="text-sm text-accent">{item.time}</p> : null}
              </div>
            </div>
            <ul className="mt-4 space-y-1 text-sm leading-relaxed text-muted">
              {item.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <Link to="/liga" className="mt-8 inline-block text-sm font-medium text-primary">
        Voltar para a liga
      </Link>
    </section>
  );
}
