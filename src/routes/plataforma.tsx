import { createFileRoute, Link } from "@tanstack/react-router";
import { instruments } from "@/data/banco";

export const Route = createFileRoute("/plataforma")({ component: Plataforma });

const modules = [
  {
    to: "/estudo",
    index: "01",
    title: "Estudo",
    text: "Paramentação, conduta na sala, tempos e o nome de cada peça. Leitura curta, do jeito da prova.",
  },
  {
    to: "/instrumentos",
    index: "02",
    title: "Nomear",
    text: "A foto entra sem legenda. Você escreve o nome e confere na hora.",
  },
  {
    to: "/flashcards",
    index: "03",
    title: "Cards",
    text: "Frente e verso. O que já sabe sai do caminho; o que errou volta.",
  },
  {
    to: "/treino",
    index: "04",
    title: "Treino",
    text: "Pergunta e resposta juntas. Dá para esconder o gabarito e abrir só a questão.",
  },
  {
    to: "/prova",
    index: "05",
    title: "Prova",
    text: "Discursiva, com tempo. Ver a resposta de cada item na hora e imprimir o gabarito no fim.",
  },
  {
    to: "/segura",
    index: "06",
    title: "Cirurgia segura",
    text: "40 casos do protocolo: lista de verificação, pausa cirúrgica e as três fases. A resposta sai na hora.",
  },
] as const;

function Plataforma() {
  const strip = instruments.slice(0, 5);

  return (
    <div className="space-y-10">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Simulado</p>
        <h1 className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-4xl text-ink sm:text-5xl">
          Introdução à Cirurgia
          <span className="text-lg font-medium tracking-wide text-accent uppercase sm:text-xl">prévia</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          O banco das provas P1: 120 questões com gabarito, simulados de 25 e mais 160 por eixo. O
          relógio marca 60 minutos. Dá para corrigir cada questão ou ver o gabarito só no fim.
        </p>
        <aside className="mt-5 rounded-2xl border border-line bg-warn-soft p-4 text-sm leading-relaxed text-ink">
          <p className="font-medium">Observação</p>
          <p className="mt-1">
            Este simulado é para reforçar o estudo e pode ser uma boa base para a prova da liga. Ele
            também traz muitos temas da disciplina Fundamentos da Cirurgia, então vale um cuidado: o
            conteúdo não é exatamente o mesmo da prova. Treine com calma e confira o edital para ver o
            que cai de fato.
          </p>
        </aside>
        <Link
          to="/introducao"
          className="mt-5 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
        >
          Abrir os simulados
        </Link>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Treino complementar</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {modules.map((mod) => (
          <li key={mod.to}>
            <Link
              to={mod.to}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-primary"
            >
              <span className="font-display text-sm text-accent">{mod.index}</span>
              <span className="mt-2 font-display text-2xl text-ink">{mod.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-muted">{mod.text}</span>
            </Link>
          </li>
        ))}
        </ul>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between gap-4">
          <h2 className="text-2xl text-ink">Peças da mesa</h2>
          <Link to="/instrumentos" className="text-sm font-medium text-primary">
            Treinar os nomes
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {strip.map((item) => (
            <figure key={item.id} className="overflow-hidden rounded-2xl border border-line bg-surface">
              <img src={item.image} alt={item.name} className="aspect-square w-full bg-sheet object-contain" />
              <figcaption className="px-3 py-2 text-xs font-medium text-ink">{item.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          Fotos reais, com o instrumento inteiro. O nome curto basta no treino.
        </p>
      </section>
    </div>
  );
}
