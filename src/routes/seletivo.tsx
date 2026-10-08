import { createFileRoute, Link } from "@tanstack/react-router";
import { EMAIL, FORM_URL, INSTAGRAM_URL, inscricoesAbertas } from "@/data/lacim";

export const Route = createFileRoute("/seletivo")({ component: Seletivo });

const temas = [
  "Paramentação cirúrgica",
  "Instrumentação cirúrgica",
  "Protocolo para cirurgia segura",
  "Nomenclatura cirúrgica",
  "Técnicas cirúrgicas básicas",
];

function Seletivo() {
  const abertas = inscricoesAbertas();

  return (
    <div className="space-y-10">
      <section className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Edital nº 02/2026</p>
        <h1 className="mt-2 text-4xl text-ink sm:text-5xl">Processo seletivo</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Seja bem-vindo. A LACIM abre 5 vagas para novos ligantes no período 2026.2. A inscrição
          é pelo formulário, com a taxa e o comprovante. Leia o edital antes de enviar.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg"
          >
            Inscrição
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-line bg-sheet px-5 py-3 text-sm font-medium text-ink"
          >
            Instagram @LACIMRJ
          </a>
        </div>
        <p className="mt-3 text-sm text-accent">
          {abertas
            ? "Inscrições abertas até 23h59 de 17 de outubro de 2026."
            : "Inscrições encerradas em 17 de outubro de 2026."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-line bg-sheet p-5">
          <h2 className="text-xl text-ink">Vagas</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            5 vagas iniciais. A liga pode ampliar o número no 2026.2, sempre pela ordem de classificação.
          </p>
        </article>
        <article className="rounded-2xl border border-line bg-sheet p-5">
          <h2 className="text-xl text-ink">Inscrições</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Até 23h59 de 17 de outubro de 2026. Taxa de R$ 20, por PIX. A chave será informada pela
            liga. O comprovante vai no formulário.
          </p>
        </article>
        <article className="rounded-2xl border border-line bg-sheet p-5">
          <h2 className="text-xl text-ink">Prova</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            19 de outubro de 2026, às 17h30, com 1h30 de duração. A sala sai depois, pelos canais oficiais.
          </p>
        </article>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Quem pode se inscrever</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Estudantes regularmente matriculados em Medicina na Facmar, a partir do 1º período.
          Entrar na liga dá acesso às atividades de ensino, pesquisa e extensão. A carga mínima é
          de 1 hora por semana, em geral na Facmar, com possibilidade de acompanhamento em
          hospitais parceiros.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Conteúdo da prova</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {temas.map((tema) => (
            <li key={tema} className="rounded-xl bg-ok-soft px-4 py-3 text-sm font-medium text-ink">
              {tema}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          A base são as referências do drive divulgado pela liga. Os simulados de Introdução à
          Cirurgia repetem as provas P1. O treino de paramentação, instrumentação e cirurgia segura
          continua separado.
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <Link to="/plataforma" className="text-sm font-medium text-primary">
            Ir para o simulado
          </Link>
          <Link to="/introducao" className="text-sm font-medium text-primary">
            Provas de Introdução à Cirurgia
          </Link>
          <Link to="/segura" className="text-sm font-medium text-primary">
            Casos de cirurgia segura
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Como a prova vale</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
          <li className="rounded-2xl border border-line bg-sheet p-5">
            20 questões objetivas, 0,5 ponto cada, somando 10 pontos.
          </li>
          <li className="rounded-2xl border border-line bg-sheet p-5">
            1 questão discursiva, só para desempate. Ela não soma na nota.
          </li>
          <li className="rounded-2xl border border-line bg-sheet p-5">
            Aprovado quem tiver nota final igual ou superior a 6,0 na prova objetiva. A nota mínima
            não garante vaga se houver mais aprovados do que vagas. A ordem é da maior nota para a
            menor. No empate, vale, nesta ordem: a maior nota da discursiva, o período mais avançado
            em Medicina e a maior idade.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl text-ink">Depois da prova</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          O resultado sai em até 48 horas, pelos canais oficiais. Quem ficar dentro das vagas é
          convocado para a posse e para a primeira atividade. Faltar sem justificativa pode eliminar
          e chamar o próximo da lista.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-ok-soft p-6">
        <h2 className="text-2xl text-ink">Dúvidas</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">Fale com a diretoria durante a inscrição.</p>
        <ul className="mt-4 space-y-1 text-sm">
          <li>
            <a className="font-medium text-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Agradecemos a participação e a dedicação. Bom preparo e boa sorte em todas as etapas.
          Atenciosamente, Diretoria LACIM.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center bg-primary px-5 py-3 text-sm font-medium text-primary-fg"
        >
          Abrir o formulário
        </a>
      </section>
    </div>
  );
}
