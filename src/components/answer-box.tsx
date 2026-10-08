export function AnswerBox({ text, note }: { text: string; note?: string }) {
  return (
    <div className="rounded-xl border border-primary/30 bg-ok-soft px-4 py-3">
      <p className="text-xs font-semibold tracking-wide text-primary">Resposta</p>
      <p className="mt-1 text-sm leading-relaxed text-ink">{text}</p>
      {note ? <p className="mt-2 text-xs text-muted">{note}</p> : null}
    </div>
  );
}
