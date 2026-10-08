import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { cards, topics, type Topic } from "@/data/banco";

export const Route = createFileRoute("/flashcards")({ component: Flashcards });

const STORAGE = "bancada-cards";

function Flashcards() {
  const [topic, setTopic] = useState<Topic | "Todos">("Todos");
  const [marks, setMarks] = useState<Record<string, "sei" | "rever">>({});
  const [cursor, setCursor] = useState(0);
  const [face, setFace] = useState<"front" | "back">("front");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setMarks(JSON.parse(raw) as Record<string, "sei" | "rever">);
    } catch {
      /* ignore broken storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE, JSON.stringify(marks));
  }, [marks, ready]);

  const deck = useMemo(
    () => cards.filter((card) => topic === "Todos" || card.topic === topic),
    [topic],
  );
  const card = deck[cursor] ?? deck[0];

  function jumpTopic(next: Topic | "Todos") {
    setTopic(next);
    setCursor(0);
    setFace("front");
  }

  function mark(value: "sei" | "rever") {
    if (!card) return;
    setMarks((prev) => ({ ...prev, [card.id]: value }));
    setFace("front");
    setCursor((n) => (n + 1) % deck.length);
  }

  const known = cards.filter((card) => marks[card.id] === "sei").length;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <header>
        <p className="text-sm font-medium text-primary">Flashcards</p>
        <h1 className="mt-1 text-4xl text-ink">Vira, responde, segue.</h1>
        <p className="mt-2 text-sm text-muted">
          {known} de {cards.length} marcados como sei. Fica neste aparelho.
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Filtro">
        {(["Todos", ...topics] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => jumpTopic(item)}
            className={`shrink-0 rounded-full px-3 py-2 text-sm ${
              topic === item ? "bg-ink text-surface" : "bg-surface text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {card ? (
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setFace((f) => (f === "front" ? "back" : "front"))}
            className="w-full rounded-2xl border border-line bg-surface p-6 text-left"
            aria-pressed={face === "back"}
          >
            <p className="text-xs font-medium text-accent">{card.topic}</p>
            {card.image && face === "front" ? (
              <img src={card.image} alt="" className="mt-4 aspect-video w-full rounded-xl bg-sheet object-contain" />
            ) : null}
            <p className="mt-4 font-display text-2xl leading-snug text-ink">
              {face === "front" ? card.front : card.back}
            </p>
            <p className="mt-6 text-xs text-muted">
              {face === "front" ? "Toque para ver o verso" : "Verso — toque para voltar"}
            </p>
          </button>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">
              {cursor + 1} / {deck.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => mark("rever")}
                className="min-h-11 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink"
              >
                Rever
              </button>
              <button
                type="button"
                onClick={() => mark("sei")}
                className="min-h-11 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg"
              >
                Sei
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
