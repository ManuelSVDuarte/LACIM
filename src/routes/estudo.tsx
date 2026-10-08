import { createFileRoute } from "@tanstack/react-router";
import { instruments, lessons } from "@/data/banco";

export const Route = createFileRoute("/estudo")({ component: Estudo });

function Estudo() {
  return (
    <div className="grid gap-8 lg:grid-cols-[200px_1fr]">
      <nav className="no-print lg:sticky lg:top-24 lg:self-start" aria-label="Tópicos">
        <p className="mb-2 text-xs font-semibold tracking-wide text-muted">Nesta mesa</p>
        <ul className="flex gap-2 overflow-x-auto lg:flex-col">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <a
                href={`#${lesson.id}`}
                className="block whitespace-nowrap rounded-full px-3 py-2 text-sm text-ink hover:bg-surface lg:whitespace-normal"
              >
                {lesson.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-12">
        <header>
          <p className="text-sm font-medium text-primary">Estudo</p>
          <h1 className="mt-1 text-4xl text-ink">O que precisa estar na ponta da língua.</h1>
        </header>

        {lessons.map((lesson) => (
          <article key={lesson.id} id={lesson.id} className="scroll-mt-24">
            <h2 className="text-3xl text-ink">{lesson.title}</h2>
            <p className="mt-2 max-w-2xl text-muted">{lesson.lead}</p>
            <div className="mt-5 space-y-4">
              {lesson.blocks.map((block) => (
                <section key={block.heading} className="rounded-2xl border border-line bg-surface p-5">
                  <h3 className="text-lg text-ink">{block.heading}</h3>
                  <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}

        <section id="atlas" className="scroll-mt-24">
          <h2 className="text-3xl text-ink">Atlas rápido</h2>
          <p className="mt-2 text-muted">Nome e uso, para olhar antes de esconder a legenda no módulo Nomear.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {instruments.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-2xl border border-line bg-surface sm:grid sm:grid-cols-[140px_1fr]">
                <img src={item.image} alt={item.name} className="h-40 w-full bg-sheet object-contain sm:h-full" />
                <figcaption className="p-4">
                  <p className="text-xs font-medium text-accent">{item.family}</p>
                  <p className="mt-1 font-display text-lg text-ink">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.use}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
