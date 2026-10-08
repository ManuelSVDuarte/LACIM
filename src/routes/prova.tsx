import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnswerBox } from "@/components/answer-box";
import { examQuestions } from "@/data/banco";
import { keywordHits } from "@/lib/grade";

export const Route = createFileRoute("/prova")({ component: Prova });

const STORAGE = "bancada-prova";
const CHOICES = [15, 25, 40];

type Draft = {
  endsAt: number;
  answers: Record<string, string>;
  shown: Record<string, boolean>;
  minutes: number;
};

function format(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function Prova() {
  const [phase, setPhase] = useState<"setup" | "run">("setup");
  const [minutes, setMinutes] = useState(25);
  const [endsAt, setEndsAt] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const [now, setNow] = useState(() => Date.now());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const draft = JSON.parse(raw) as Draft;
        if (draft.endsAt) {
          setPhase("run");
          setEndsAt(draft.endsAt);
          setAnswers(draft.answers ?? {});
          setShown(draft.shown ?? {});
          setMinutes(draft.minutes ?? 25);
        }
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || phase !== "run" || endsAt == null) return;
    const draft: Draft = { endsAt, answers, shown, minutes };
    localStorage.setItem(STORAGE, JSON.stringify(draft));
  }, [answers, endsAt, minutes, phase, ready, shown]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = endsAt == null ? 0 : Math.max(0, endsAt - now);
  const locked = phase === "run" && endsAt != null && remaining <= 0;
  const filled = examQuestions.filter((q) => (answers[q.id] ?? "").trim().length > 0).length;

  function start(fresh: boolean) {
    if (!fresh && endsAt) {
      setPhase("run");
      return;
    }
    const nextEnd = Date.now() + minutes * 60 * 1000;
    setAnswers({});
    setShown({});
    setEndsAt(nextEnd);
    setPhase("run");
  }

  function reset() {
    const dirty = Object.values(answers).some((value) => value.trim());
    if (dirty && !window.confirm("Apagar o que você escreveu e começar outra prova?")) return;
    localStorage.removeItem(STORAGE);
    setPhase("setup");
    setEndsAt(null);
    setAnswers({});
    setShown({});
  }

  return (
    <div className="space-y-6">
      <header className="no-print flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Prova discursiva</p>
          <h1 className="mt-1 text-4xl text-ink">Escreve. Confere quando quiser.</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Doze questões curtas. O gabarito de cada uma abre na hora — não fica preso até o fim.
            A impressão sai com as questões e as respostas no final.
          </p>
        </div>
        {phase === "run" ? (
          <div className="flex flex-wrap items-center gap-2">
            <p
              className={`min-w-24 rounded-full px-4 py-2 text-center font-display text-2xl ${
                locked || remaining < 60_000
                  ? "bg-accent text-accent-fg"
                  : "bg-ink text-surface"
              }`}
              aria-live="polite"
            >
              {locked ? "00:00" : format(remaining)}
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              Imprimir questões e gabarito
            </button>
          </div>
        ) : null}
      </header>

      {phase === "setup" ? (
        <section className="no-print max-w-xl space-y-5 rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-2xl text-ink">Tempo da prova</h2>
          <div className="flex flex-wrap gap-2">
            {CHOICES.map((choice) => (
              <button
                key={choice}
                type="button"
                onClick={() => setMinutes(choice)}
                className={`min-h-11 rounded-full px-4 text-sm font-medium ${
                  minutes === choice ? "bg-primary text-primary-fg" : "border border-line text-ink"
                }`}
              >
                {choice} min
              </button>
            ))}
          </div>
          <p className="text-sm text-muted">
            Quando o tempo acaba, a escrita trava. Ver resposta e imprimir continuam liberados.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => start(true)}
              className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
            >
              Começar
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-full border border-line px-5 text-sm font-medium text-ink"
            >
              Imprimir questões e gabarito
            </button>
          </div>
        </section>
      ) : (
        <div className="no-print space-y-4">
          {locked ? (
            <p className="rounded-xl bg-warn-soft px-4 py-3 text-sm text-ink" role="status">
              Tempo esgotado. As respostas que você escreveu ficam para a impressão. Dá para abrir o gabarito de cada questão.
            </p>
          ) : (
            <p className="text-sm text-muted">
              {filled} de {examQuestions.length} com texto.
            </p>
          )}

          {examQuestions.map((question, index) => {
            const text = answers[question.id] ?? "";
            const open = shown[question.id];
            const hits = keywordHits(text, question.keywords);
            return (
              <article key={question.id} id={question.id} className="scroll-mt-28 rounded-2xl border border-line bg-surface p-5">
                <p className="text-xs font-medium text-accent">
                  {index + 1}. {question.topic}
                </p>
                <h2 className="mt-2 text-xl text-ink">{question.prompt}</h2>
                <label className="mt-4 block text-sm font-medium text-ink" htmlFor={question.id}>
                  Sua resposta
                </label>
                <textarea
                  id={question.id}
                  value={text}
                  disabled={locked}
                  onChange={(event) =>
                    setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))
                  }
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2 text-sm text-ink"
                />
                <div className="mt-3">
                  {open ? (
                    <AnswerBox
                      text={question.answer}
                      note={
                        text.trim()
                          ? `Sua resposta tocou ${hits.length} de ${question.keywords.length} pontos esperados. Compare com o texto, não é nota automática.`
                          : undefined
                      }
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShown((prev) => ({ ...prev, [question.id]: true }))}
                      className="min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg"
                    >
                      Ver resposta agora
                    </button>
                  )}
                </div>
              </article>
            );
          })}

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
            >
              Imprimir questões e gabarito
            </button>
            <button
              type="button"
              onClick={reset}
              className="min-h-11 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
            >
              Nova prova
            </button>
          </div>
        </div>
      )}

      <article className="print-only print-sheet">
        <h1 className="text-3xl">Bancada — prova</h1>
        <p className="mt-2 text-sm">Questões. O gabarito está no final.</p>
        <ol className="mt-6 space-y-4">
          {examQuestions.map((question) => (
            <li key={question.id}>
              <p className="text-xs">{question.topic}</p>
              <p className="text-base">{question.prompt}</p>
            </li>
          ))}
        </ol>
        <h2 className="page-break mt-8 text-2xl">Gabarito</h2>
        <ol className="mt-4 space-y-4">
          {examQuestions.map((question) => (
            <li key={`${question.id}-g`}>
              <p className="text-sm font-medium">{question.prompt}</p>
              <p className="mt-1 text-sm">{question.answer}</p>
              {(answers[question.id] ?? "").trim() ? (
                <p className="mt-1 text-sm">Você escreveu: {answers[question.id]}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
