import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  introAxes,
  introById,
  introExams,
  introQuestions,
  p1QuestionIds,
  questionsForExam,
  type IntroLetter,
} from "@/data/intro";

export const Route = createFileRoute("/introducao")({ component: Introducao });

const LETTERS: IntroLetter[] = ["A", "B", "C", "D"];
const LIMIT = 60 * 60 * 1000;
const STORAGE = "lacim-intro-v1";

type Reveal = "agora" | "final";

type Attempt = {
  id: string;
  title: string;
  mode: "simulado" | "eixos" | "prova";
  reveal: Reveal;
  examId: string | null;
  questionIds: string[];
  optionOrders?: Record<string, IntroLetter[]>;
  index: number;
  phase: "pick" | "feedback";
  selections: Record<string, IntroLetter>;
  startedAt: number;
  finishedAt: number | null;
  status: "active" | "done";
};

type Saved = { attempt: Attempt | null; history: Attempt[] };

function shuffle<T>(list: T[]) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function orderOf(attempt: Attempt, id: string) {
  const order = attempt.optionOrders?.[id];
  if (!order || order.length !== 4 || new Set(order).size !== 4) return LETTERS;
  return order;
}

function shownAnswer(id: string, order: readonly IntroLetter[]) {
  const question = introById.get(id);
  if (!question?.answer) return null;
  const index = order.indexOf(question.answer);
  return index < 0 ? question.answer : LETTERS[index];
}

function score(attempt: Attempt) {
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  let annulled = 0;
  for (const id of attempt.questionIds) {
    const question = introById.get(id);
    if (!question || question.answer === null) {
      annulled += 1;
      continue;
    }
    const picked = attempt.selections[id];
    const answer = shownAnswer(id, orderOf(attempt, id));
    if (!picked) blank += 1;
    else if (picked === answer) correct += 1;
    else wrong += 1;
  }
  const graded = correct + wrong + blank;
  return {
    correct,
    wrong,
    blank,
    annulled,
    graded,
    percent: graded === 0 ? 0 : Math.round((correct / graded) * 100),
  };
}

function clock(ms: number) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function readSaved(): Saved {
  try {
    const raw = localStorage.getItem(STORAGE);
    if (!raw) return { attempt: null, history: [] };
    const saved = JSON.parse(raw) as Saved;
    return { attempt: saved.attempt ?? null, history: saved.history ?? [] };
  } catch {
    return { attempt: null, history: [] };
  }
}

function Introducao() {
  const [reveal, setReveal] = useState<Reveal>("agora");
  const [axes, setAxes] = useState<string[]>(() => introAxes.map((axis) => axis.id));
  const [saved, setSaved] = useState<Saved>({ attempt: null, history: [] });
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [confirmEnd, setConfirmEnd] = useState(false);
  const [printing, setPrinting] = useState<string | null>(null);
  const [onlyMisses, setOnlyMisses] = useState(false);

  useEffect(() => {
    setSaved(readSaved());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE, JSON.stringify(saved));
  }, [ready, saved]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const attempt = saved.attempt;
  const eixoPool = introQuestions.filter((question) => axes.includes(question.examId));

  function store(next: Attempt | null, archive = false) {
    setSaved((current) => {
      const history =
        archive && current.attempt
          ? [current.attempt, ...current.history.filter((item) => item.id !== current.attempt?.id)].slice(0, 8)
          : current.history;
      return { attempt: next, history };
    });
  }

  function begin(next: Attempt) {
    setOnlyMisses(false);
    setConfirmEnd(false);
    setPrinting(null);
    setSaved((current) => ({ ...current, attempt: next }));
  }

  function startSimulado() {
    begin({
      id: String(Date.now()),
      title: "Simulado · 25 questões",
      mode: "simulado",
      reveal,
      examId: null,
      questionIds: shuffle(p1QuestionIds).slice(0, 25),
      index: 0,
      phase: "pick",
      selections: {},
      startedAt: Date.now(),
      finishedAt: null,
      status: "active",
    });
  }

  function startEixos() {
    if (eixoPool.length < 20) return;
    const fromAxes = shuffle(eixoPool.map((question) => question.id)).slice(0, 20);
    const fromP1 = shuffle(p1QuestionIds).slice(0, 5);
    const questionIds = shuffle([...fromAxes, ...fromP1]);
    const optionOrders: Record<string, IntroLetter[]> = {};
    for (const id of questionIds) optionOrders[id] = shuffle(LETTERS);
    const titles = introAxes.filter((axis) => axes.includes(axis.id)).map((axis) => axis.title);
    begin({
      id: String(Date.now()),
      title: titles.length === 1 ? `Simulado · ${titles[0]}` : `Simulado · ${titles.length} eixos`,
      mode: "eixos",
      reveal,
      examId: null,
      questionIds,
      optionOrders,
      index: 0,
      phase: "pick",
      selections: {},
      startedAt: Date.now(),
      finishedAt: null,
      status: "active",
    });
  }

  function startExam(examId: string) {
    const exam = introExams.find((item) => item.id === examId);
    begin({
      id: String(Date.now()),
      title: exam?.title ?? "Prova",
      mode: "prova",
      reveal,
      examId,
      questionIds: questionsForExam(examId).map((question) => question.id),
      index: 0,
      phase: "pick",
      selections: {},
      startedAt: Date.now(),
      finishedAt: null,
      status: "active",
    });
  }

  function patch(id: string, update: (item: Attempt) => Attempt) {
    setSaved((current) => ({
      ...current,
      attempt: current.attempt && current.attempt.id === id ? update(current.attempt) : current.attempt,
    }));
  }

  function finish(id: string) {
    patch(id, (item) =>
      item.status === "done" ? item : { ...item, status: "done", finishedAt: Date.now(), phase: "feedback" },
    );
  }

  const remaining = attempt ? Math.max(0, attempt.startedAt + LIMIT - now) : 0;

  useEffect(() => {
    if (!attempt || attempt.status !== "active" || remaining > 0) return;
    finish(attempt.id);
  }, [attempt, remaining]);

  if (printing) {
    const exam = introExams.find((item) => item.id === printing);
    const questions = questionsForExam(printing);
    return (
      <div>
        <div className="no-print mb-4 flex items-center justify-between gap-3">
          <button type="button" onClick={() => setPrinting(null)} className="text-sm font-medium text-primary">
            Voltar
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg"
          >
            Imprimir prova
          </button>
        </div>
        <article className="print-sheet mx-auto max-w-3xl space-y-5">
          <header>
            <p className="text-sm font-medium text-primary">Introdução à Cirurgia</p>
            <h1 className="text-3xl text-ink">{exam?.title}</h1>
            <p className="mt-1 text-sm text-muted">{questions.length} questões · 60 minutos · sem gabarito</p>
          </header>
          {questions.map((question) => (
            <section key={question.id} className="break-inside-avoid">
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-medium">{question.number}. </span>
                {question.stem}
              </p>
              <ol className="mt-2 space-y-1 text-sm text-ink">
                {LETTERS.map((letter) => (
                  <li key={letter}>
                    {letter}) {question.options[letter]}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </article>
      </div>
    );
  }

  if (attempt?.status === "done") {
    const result = score(attempt);
    const rows = attempt.questionIds.filter((id) => {
      if (!onlyMisses) return true;
      const question = introById.get(id);
      if (!question || question.answer === null) return false;
      return attempt.selections[id] !== shownAnswer(id, orderOf(attempt, id));
    });
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="no-print">
          <p className="text-sm font-medium text-primary">Introdução à Cirurgia</p>
          <h1 className="mt-1 text-4xl text-ink">{result.percent}%</h1>
          <p className="mt-2 text-sm text-muted">
            {result.correct} certas · {result.wrong} erradas · {result.blank} em branco
            {result.annulled ? ` · ${result.annulled} anulada` : ""}. {attempt.title}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => store(null, true)}
              className="min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg"
            >
              Voltar ao banco
            </button>
            <button
              type="button"
              onClick={() => setOnlyMisses((value) => !value)}
              className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium"
            >
              {onlyMisses ? "Ver a prova inteira" : "Ver só os erros"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium"
            >
              Imprimir gabarito
            </button>
          </div>
        </header>
        <ol className="space-y-4">
          {rows.map((id) => {
            const question = introById.get(id);
            if (!question) return null;
            const order = orderOf(attempt, id);
            const answer = shownAnswer(id, order);
            const picked = attempt.selections[id];
            const number = attempt.questionIds.indexOf(id) + 1;
            return (
              <li key={id} className="break-inside-avoid rounded-2xl border border-line bg-surface p-4">
                <p className="text-sm leading-relaxed text-ink">
                  <span className="font-medium">{number}. </span>
                  {question.stem}
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  {LETTERS.map((letter) => {
                    const original = order[LETTERS.indexOf(letter)];
                    const isAnswer = answer === letter;
                    const isPicked = picked === letter;
                    return (
                      <li
                        key={letter}
                        className={
                          isAnswer ? "text-primary" : isPicked ? "text-danger" : "text-muted"
                        }
                      >
                        {letter}) {question.options[original]}
                        {isAnswer ? " · gabarito" : ""}
                        {isPicked && !isAnswer ? " · sua marca" : ""}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-2 text-sm leading-relaxed text-ink">{question.explanation}</p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  if (attempt?.status === "active") {
    const id = attempt.questionIds[attempt.index];
    const question = id ? introById.get(id) : undefined;
    if (!question) return null;
    const order = orderOf(attempt, id);
    const picked = attempt.selections[id];
    const answer = shownAnswer(id, order);
    const last = attempt.index === attempt.questionIds.length - 1;
    const low = remaining < 5 * 60 * 1000;
    const open = attempt.questionIds.filter((item) => !attempt.selections[item]).length;
    const finalMode = attempt.reveal === "final";

    return (
      <div className="mx-auto max-w-3xl space-y-5">
        <header className="no-print flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-primary">{attempt.title}</p>
            <h1 className="mt-1 text-2xl text-ink">
              {attempt.index + 1} de {attempt.questionIds.length}
            </h1>
          </div>
          <p className={`font-display text-3xl ${low ? "text-danger" : "text-ink"}`} aria-live="polite">
            {clock(remaining)}
          </p>
        </header>
        {finalMode ? (
          <div className="no-print flex flex-wrap gap-1">
            {attempt.questionIds.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  patch(attempt.id, (current) => ({ ...current, index, phase: "pick" }))
                }
                className={`min-h-9 min-w-9 rounded-full border px-2 text-xs font-medium ${
                  index === attempt.index
                    ? "border-primary bg-primary text-primary-fg"
                    : attempt.selections[item]
                      ? "border-ink bg-surface text-ink"
                      : "border-line bg-surface text-muted"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        ) : null}
        <section className="rounded-2xl border border-line bg-surface p-5">
          <p className="text-base leading-relaxed text-ink">{question.stem}</p>
          <div className="mt-4 space-y-2" role="radiogroup" aria-label="Alternativas">
            {LETTERS.map((letter) => {
              const original = order[LETTERS.indexOf(letter)];
              const selected = picked === letter;
              const revealed = attempt.phase === "feedback";
              let tone = "border-line bg-sheet";
              if (revealed && answer === letter) tone = "border-primary bg-ok-soft";
              else if (revealed && selected) tone = "border-danger bg-warn-soft";
              else if (selected) tone = "border-ink bg-sheet";
              return (
                <button
                  key={letter}
                  type="button"
                  disabled={attempt.phase === "feedback"}
                  onClick={() =>
                    patch(attempt.id, (current) =>
                      current.phase !== "pick"
                        ? current
                        : { ...current, selections: { ...current.selections, [id]: letter } },
                    )
                  }
                  className={`flex w-full gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-relaxed disabled:cursor-default ${tone}`}
                >
                  <span className="font-medium">{letter}</span>
                  <span>{question.options[original]}</span>
                </button>
              );
            })}
          </div>
          {attempt.phase === "feedback" ? (
            <div className="mt-4 text-sm leading-relaxed">
              {question.answer === null ? (
                <p className="font-medium text-ink">Questão anulada. Não entra na pontuação.</p>
              ) : picked === answer ? (
                <p className="font-medium text-primary">Resposta certa.</p>
              ) : (
                <p className="font-medium text-danger">Resposta incorreta · gabarito {answer}</p>
              )}
              <p className="mt-1 text-ink">{question.explanation}</p>
            </div>
          ) : null}
        </section>
        <div className="no-print flex flex-wrap items-center justify-between gap-2">
          <button type="button" onClick={() => setConfirmEnd(true)} className="text-sm font-medium text-muted">
            Encerrar prova
          </button>
          {finalMode ? (
            <div className="flex gap-2">
              <button
                type="button"
                disabled={attempt.index === 0}
                onClick={() =>
                  patch(attempt.id, (current) => ({ ...current, index: current.index - 1, phase: "pick" }))
                }
                className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium disabled:opacity-40"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!last) {
                    patch(attempt.id, (current) => ({ ...current, index: current.index + 1, phase: "pick" }));
                    return;
                  }
                  if (open > 0) setConfirmEnd(true);
                  else finish(attempt.id);
                }}
                className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
              >
                {last ? "Ver gabarito" : "Próxima"}
              </button>
            </div>
          ) : attempt.phase === "pick" ? (
            <button
              type="button"
              disabled={!picked}
              onClick={() =>
                patch(attempt.id, (current) =>
                  current.selections[id] ? { ...current, phase: "feedback" } : current,
                )
              }
              className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg disabled:opacity-40"
            >
              Corrigir
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (last) finish(attempt.id);
                else patch(attempt.id, (current) => ({ ...current, index: current.index + 1, phase: "pick" }));
              }}
              className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
            >
              {last ? "Ver resultado" : "Próxima"}
            </button>
          )}
        </div>
        {confirmEnd ? (
          <div className="no-print rounded-2xl border border-line bg-warn-soft p-4 text-sm">
            <p>Questões sem correção contam como em branco. O tempo para de correr.</p>
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={() => setConfirmEnd(false)} className="min-h-11 px-3 font-medium">
                Continuar
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirmEnd(false);
                  finish(attempt.id);
                }}
                className="min-h-11 rounded-full bg-primary px-4 font-medium text-primary-fg"
              >
                Encerrar prova
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Simulados da disciplina</p>
        <h1 className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-4xl text-ink sm:text-5xl">
          Introdução à Cirurgia
          <span className="text-lg font-medium tracking-wide text-accent uppercase sm:text-xl">prévia</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          6 provas, {p1QuestionIds.length} questões com gabarito, mais 160 nos eixos. Faça um simulado
          sorteado ou repita uma prova inteira. Nos dois modos o relógio marca 60 minutos.
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
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setReveal("agora")}
          className={`rounded-2xl border p-5 text-left ${reveal === "agora" ? "border-primary bg-ok-soft" : "border-line bg-surface"}`}
        >
          <span className="font-display text-2xl text-ink">Corrigir agora</span>
          <span className="mt-2 block text-sm leading-relaxed text-muted">
            Marca a alternativa, vê a resposta e só então segue.
          </span>
        </button>
        <button
          type="button"
          onClick={() => setReveal("final")}
          className={`rounded-2xl border p-5 text-left ${reveal === "final" ? "border-primary bg-ok-soft" : "border-line bg-surface"}`}
        >
          <span className="font-display text-2xl text-ink">Ver no final</span>
          <span className="mt-2 block text-sm leading-relaxed text-muted">
            Responde todas as questões e só depois abre o gabarito.
          </span>
        </button>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-5">
        <h2 className="text-2xl text-ink">Simulado de 25 questões</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Sorteio das provas P1. As alternativas da prova original não mudam de ordem.
        </p>
        <button
          type="button"
          onClick={startSimulado}
          className="mt-4 min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
        >
          Começar simulado
        </button>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Simulado por eixo</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          25 questões e 60 minutos. 20 saem dos eixos marcados e 5 das provas P1. As alternativas mudam
          de ordem a cada tentativa.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {introAxes.map((axis) => {
            const count = introQuestions.filter((question) => question.examId === axis.id).length;
            const on = axes.includes(axis.id);
            return (
              <li key={axis.id}>
                <button
                  type="button"
                  onClick={() =>
                    setAxes((current) =>
                      current.includes(axis.id) ? current.filter((id) => id !== axis.id) : [...current, axis.id],
                    )
                  }
                  className={`h-full w-full rounded-2xl border p-4 text-left ${on ? "border-primary bg-ok-soft" : "border-line bg-surface"}`}
                >
                  <span className="block font-medium text-ink">{axis.title}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {count} questões · {axis.blurb}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          disabled={eixoPool.length < 20}
          onClick={startEixos}
          className="mt-4 min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg disabled:opacity-40"
        >
          Começar simulado · {Math.min(20, eixoPool.length)} dos eixos e 5 das provas · {eixoPool.length}{" "}
          disponíveis
        </button>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Escolher uma prova</h2>
        <p className="mt-2 text-sm text-muted">A ordem e as alternativas são as da prova original.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {introExams.map((exam) => (
            <li key={exam.id} className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm font-medium text-accent">P1 {exam.code}</p>
              <h3 className="mt-1 font-display text-2xl text-ink">{exam.title}</h3>
              <p className="mt-2 text-sm text-muted">20 questões · {exam.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" onClick={() => startExam(exam.id)} className="text-sm font-medium text-primary">
                  Fazer prova
                </button>
                <button type="button" onClick={() => setPrinting(exam.id)} className="text-sm font-medium text-primary">
                  Imprimir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {saved.history.length > 0 ? (
        <section>
          <h2 className="text-2xl text-ink">Tentativas</h2>
          <ul className="mt-3 space-y-2">
            {saved.history.map((item) => {
              const result = score(item);
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => store(item)}
                    className="flex w-full items-baseline justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3 text-left text-sm"
                  >
                    <span className="text-ink">{item.title}</span>
                    <span className="text-muted">{result.percent}%</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <p className="text-sm text-muted">
        O treino de instrumental, cards e cirurgia segura continua em{" "}
        <Link to="/plataforma" className="font-medium text-primary">
          Simulado
        </Link>
        .
      </p>
    </div>
  );
}
