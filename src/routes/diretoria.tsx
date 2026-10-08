import { createFileRoute } from "@tanstack/react-router";
import { members } from "@/data/lacim";

export const Route = createFileRoute("/diretoria")({ component: Diretoria });

function Diretoria() {
  return (
    <section>
      <p className="text-sm font-medium text-primary">Diretoria</p>
      <h1 className="mt-2 text-4xl text-ink">Quem conduz a liga</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
        Os cartazes são a apresentação oficial. O texto embaixo deixa o essencial legível sem ampliar a imagem.
      </p>
      <ul className="mt-8 grid gap-6 lg:grid-cols-2">
        {members.map((person) => (
          <li key={person.id} className="overflow-hidden rounded-2xl border border-line bg-sheet">
            <img src={person.image} alt={`${person.name}, ${person.role} da LACIM`} className="w-full" />
            <div className="space-y-2 p-5">
              <h2 className="text-2xl text-ink">{person.name}</h2>
              <p className="text-sm font-medium text-accent">{person.role}</p>
              <p className="text-sm leading-relaxed text-muted">{person.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
