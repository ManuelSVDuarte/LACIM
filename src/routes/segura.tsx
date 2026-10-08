import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { safeQuestions } from "@/data/segura";

export const Route = createFileRoute("/segura")({ component: Segura });

function Segura() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hits, setHits] = useState(0);
  const [done, setDone] = useState(false);

  const question = safeQuestions[index];
  const revealed = picked != null;
  const correctIndex = question?.choices.findIndex((choice) => choice.correct) ?? -1;

  function choose(choice: number) {
    if (!question || revealed) return;
    setPicked(choice);
    if (question.choices[choice]?.correct) setHits((n) => n + 1);
  }

  function next() {
    if (index + 1 >= safeQuestions.length) {
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setPicked(null);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setHits(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl">
        <section className="rounded-2xl border border-line bg-surface p-6">
          <p className="text-sm font-medium text-primary">Cirurgia segura</p>
          <h1 className="mt-2 text-4xl text-ink">
            {hits} de {safeQuestions.length}
          </h1>
          <p className="mt-2 text-sm text-muted">
            Acertos de primeira. A explicação aparece assim que você marca uma alternativa.
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-5 min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
          >
            Refazer os 40 casos
          </button>
        </section>
      </div>
    );
  }

  if (!question) return null;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <header>
        <p className="text-sm font-medium text-primary">Protocolo de cirurgia segura</p>
        <h1 className="mt-1 text-4xl text-ink">Casos práticos</h1>
        <p className="mt-2 text-sm text-muted">
          {index + 1} de {safeQuestions.length}. Marque uma alternativa para ver o gabarito.
        </p>
      </header>

      <section className="space-y-4 rounded-2xl border border-line bg-surface p-5">
        <p className="text-base leading-relaxed text-ink">{question.prompt}</p>
        <ul className="space-y-2">
          {question.choices.map((choice, choiceIndex) => {
            const isCorrect = choice.correct;
            const isPicked = picked === choiceIndex;
            let tone = "border-line bg-sheet";
            if (revealed && isCorrect) tone = "border-primary bg-ok-soft";
            else if (revealed && isPicked) tone = "border-danger bg-warn-soft";
            return (
              <li key={choice.text}>
                <button
                  type="button"
                  disabled={revealed}
                  onClick={() => choose(choiceIndex)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm leading-relaxed disabled:cursor-default ${tone}`}
                >
                  {choice.text}
                </button>
              </li>
            );
          })}
        </ul>
        {revealed ? (
          <div className="space-y-2 text-sm leading-relaxed">
            {picked != null && !question.choices[picked]?.correct ? (
              <p className="text-danger">{question.choices[picked]?.why}</p>
            ) : null}
            <p className="text-ink">{question.choices[correctIndex]?.why}</p>
          </div>
        ) : null}
        {revealed ? (
          <button
            type="button"
            onClick={next}
            className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
          >
            {index + 1 >= safeQuestions.length ? "Ver o resultado" : "Próxima"}
          </button>
        ) : null}
      </section>
    </div>
  );
}
