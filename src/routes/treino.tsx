import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnswerBox } from "@/components/answer-box";
import { trainItems } from "@/data/banco";

export const Route = createFileRoute("/treino")({ component: Treino });

function Treino() {
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const item = trainItems[index];
  const visible = !hide || open[item.id];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Treino</p>
          <h1 className="mt-1 text-4xl text-ink">Pergunta com a resposta do lado.</h1>
        </div>
        <button
          type="button"
          onClick={() => setHide((v) => !v)}
          className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink"
        >
          {hide ? "Mostrar respostas" : "Esconder respostas"}
        </button>
      </header>

      <article className="space-y-4 rounded-2xl border border-line bg-surface p-5">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-accent">{item.topic}</span>
          <span className="text-muted">
            {index + 1} / {trainItems.length}
          </span>
        </div>
        <h2 className="text-2xl text-ink">{item.prompt}</h2>
        {item.image ? (
          <img src={item.image} alt="" className="aspect-square w-full rounded-xl bg-sheet object-contain" />
        ) : null}
        {visible ? (
          <AnswerBox text={item.answer} />
        ) : (
          <button
            type="button"
            onClick={() => setOpen((prev) => ({ ...prev, [item.id]: true }))}
            className="min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
          >
            Ver resposta agora
          </button>
        )}
      </article>

      <div className="flex justify-between gap-2">
        <button
          type="button"
          onClick={() => setIndex((n) => Math.max(0, n - 1))}
          disabled={index === 0}
          className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink disabled:opacity-40"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => setIndex((n) => Math.min(trainItems.length - 1, n + 1))}
          disabled={index === trainItems.length - 1}
          className="min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg disabled:opacity-40"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
