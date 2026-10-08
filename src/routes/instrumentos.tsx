import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { instruments } from "@/data/banco";
import { matchId } from "@/lib/grade";

export const Route = createFileRoute("/instrumentos")({ component: Nomear });

function shuffle<T>(list: T[]) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function Nomear() {
  const [order, setOrder] = useState(() => shuffle(instruments).map((item) => item.id));
  const [index, setIndex] = useState(0);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "no">("idle");
  const [revealed, setRevealed] = useState(false);
  const [hits, setHits] = useState(0);
  const [done, setDone] = useState(false);
  const [counted, setCounted] = useState(false);

  const current = instruments.find((item) => item.id === order[index]);

  const progress = `${index + 1} / ${order.length}`;

  function check(event: FormEvent) {
    event.preventDefault();
    if (!current || revealed || status === "ok") return;
    const id = matchId(draft, instruments);
    if (id === current.id) {
      setStatus("ok");
      setRevealed(true);
      if (!counted) setHits((n) => n + 1);
      setCounted(true);
    } else {
      setStatus("no");
    }
  }

  function reveal() {
    if (!current || revealed) return;
    setRevealed(true);
    setCounted(true);
  }

  function next() {
    if (index + 1 >= order.length) {
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setDraft("");
    setStatus("idle");
    setRevealed(false);
    setCounted(false);
  }

  function restart() {
    setOrder(shuffle(instruments).map((item) => item.id));
    setIndex(0);
    setDraft("");
    setStatus("idle");
    setRevealed(false);
    setCounted(false);
    setHits(0);
    setDone(false);
  }

  if (!current) return null;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <header>
        <p className="text-sm font-medium text-primary">Nomear o instrumental</p>
        <h1 className="mt-1 text-4xl text-ink">Escreva o nome.</h1>
        <p className="mt-2 text-sm text-muted">
          Aceita o nome curto. Mayo, Backhaus, Veress e bisturi elétrico já bastam.
        </p>
      </header>

      {done ? (
        <section className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="text-3xl text-ink">
            {hits} de {order.length}
          </h2>
          <p className="mt-2 text-sm text-muted">
            Acertos de primeira conta. Ver o nome sem acertar entra como revisão, não como ponto.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => restart()}
              className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg"
            >
              De novo, outra ordem
            </button>
          </div>
        </section>
      ) : (
        <section className="space-y-4">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>{progress}</span>
            <span>
              {hits} certos
            </span>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
            <img
              src={current.image}
              alt={revealed ? current.name : "Instrumento cirúrgico sem legenda"}
              className="aspect-square w-full bg-sheet object-contain"
            />
          </figure>

          <form onSubmit={check} className="space-y-3">
            <label className="block text-sm font-medium text-ink" htmlFor="nome">
              Nome do instrumento
            </label>
            <input
              id="nome"
              value={draft}
              onChange={(event) => {
                setDraft(event.target.value);
                if (status === "no") setStatus("idle");
              }}
              disabled={revealed}
              autoComplete="off"
              className="min-h-11 w-full rounded-xl border border-line bg-surface px-4 text-ink"
              placeholder="Ex.: pinça de Mixter"
            />
            <div className="flex flex-wrap gap-2">
              <button
                type="submit"
                disabled={revealed || draft.trim().length < 3}
                className="min-h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-fg disabled:opacity-50"
              >
                Conferir
              </button>
              <button
                type="button"
                onClick={reveal}
                disabled={revealed}
                className="min-h-11 rounded-full bg-accent px-5 text-sm font-medium text-accent-fg disabled:opacity-50"
              >
                Ver nome agora
              </button>
              {revealed ? (
                <button
                  type="button"
                  onClick={next}
                  className="min-h-11 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink"
                >
                  {index + 1 === order.length ? "Fechar série" : "Próximo"}
                </button>
              ) : null}
            </div>
          </form>

          {status === "no" && !revealed ? (
            <p className="text-sm text-danger" role="status">
              Não é esse. Tente o nome da peça, ou abra a resposta.
            </p>
          ) : null}
          {status === "ok" ? (
            <p className="text-sm font-medium text-primary" role="status">
              Certo.
            </p>
          ) : null}
          {revealed ? (
            <div className="rounded-xl border border-primary/30 bg-ok-soft px-4 py-3">
              <p className="font-display text-xl text-ink">{current.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{current.use}</p>
            </div>
          ) : null}
        </section>
      )}
    </div>
  );
}
