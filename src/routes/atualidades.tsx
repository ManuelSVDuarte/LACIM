import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { news } from "@/data/lacim";

export const Route = createFileRoute("/atualidades")({ component: Atualidades });

function Atualidades() {
  return (
    <section>
      <h1 className="text-4xl text-ink">Atualidades</h1>

      <article className="mt-8 max-w-3xl rounded-2xl border border-line bg-sheet p-6 sm:p-8">
        <p className="text-xs font-medium text-accent">Artigo</p>
        <h2 className="mt-2 text-3xl text-ink">
          O Nascimento da Optogenética: Da Biologia Básica ao Controle Neural
        </h2>

        <h3 className="mt-8 text-xl text-ink">O que é a optogenética?</h3>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink">
          <p>
            A optogenética é uma técnica biológica revolucionária que combina genética e óptica (luz)
            para controlar a atividade de células individuais em tecidos vivos, especialmente neurônios.
            O princípio básico funciona assim: os cientistas inserem genes retirados de organismos
            fotossensíveis (como algas) no DNA de células de mamíferos (como neurônios no cérebro de um
            camundongo). Esses genes fazem com que os neurônios produzam canais iônicos sensíveis à luz
            em suas membranas.
          </p>
          <p>
            Uma vez que essas proteínas estão presentes, os cientistas podem acender um feixe de luz
            (geralmente via fibra óptica) diretamente no tecido para abrir esses canais, ativando ou
            silenciando circuitos neurais específicos com uma precisão de milissegundos. Isso permitiu
            um avanço sem precedentes no mapeamento do cérebro e na compreensão de doenças neurológicas
            e psiquiátricas.
          </p>
        </div>

        <h3 className="mt-8 text-xl text-ink">Os 3 artigos fundamentais que guiaram o prêmio</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink">
          Os três artigos representam o caminho desde a descoberta curiosa de como as algas se movem em
          direção à luz até a aplicação dessa biologia no controle do cérebro de mamíferos.
        </p>

        <ol className="mt-6 space-y-6">
          <li>
            <h4 className="text-base font-medium text-ink">1. A descoberta do primeiro canal (2002)</h4>
            <p className="mt-1 text-sm text-ink">
              Channelrhodopsin-1: A Light-Gated Proton Channel in Green Algae (Science, 2002).{" "}
              <a
                href="https://doi.org/10.1126/science.1072068"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary"
              >
                DOI: 10.1126/science.1072068
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Há muito tempo sabia-se que as respostas fototáxicas (movimento em direção à luz) das algas
              verdes dependiam de correntes geradas por fotorreceptores visuais conhecidos como
              rodopsinas. Neste artigo, os pesquisadores demonstraram a existência da Channelrhodopsin-1
              (ChR1). O estudo caracterizou essa proteína mostrando que ela funciona como um canal de
              prótons ativado diretamente pela luz quando expressa em células (oócitos de rã) no
              laboratório, elucidando o mecanismo básico de visão e movimentação da alga.
            </p>
          </li>
          <li>
            <h4 className="text-base font-medium text-ink">2. O canal perfeito para a optogenética (2003)</h4>
            <p className="mt-1 text-sm text-ink">
              Channelrhodopsin-2, a directly light-gated cation-selective membrane channel (PNAS, 2003).{" "}
              <a
                href="https://doi.org/10.1073/pnas.1936192100"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary"
              >
                DOI: 10.1073/pnas.1936192100
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Este trabalho expandiu a descoberta anterior detalhando uma segunda proteína na mesma alga,
              chamada Channelrhodopsin-2 (ChR2). O resumo do estudo destaca que, ao expressar essa
              proteína em oócitos de rã e em células de mamíferos, a equipe descobriu que a ChR2 age como
              um canal permeável a cátions (íons com carga positiva, como o sódio). Ao serem iluminados
              com luz azul, os canais se abriam e permitiam a rápida entrada de cátions na célula,
              alterando a voltagem da membrana em alta velocidade. Diferente da ChR1, a seletividade da
              ChR2 aos cátions a tornava perfeita para ligar células excitáveis.
            </p>
          </li>
          <li>
            <h4 className="text-base font-medium text-ink">3. A aplicação nos neurônios (2005)</h4>
            <p className="mt-1 text-sm text-ink">
              Millisecond-timescale, genetically targeted optical control of neural activity (Nature
              Neuroscience, 2005).{" "}
              <a
                href="https://doi.org/10.1038/nn1525"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary"
              >
                DOI: 10.1038/nn1525
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Este é o artigo que efetivamente inaugurou a optogenética. O resumo do estudo relata que,
              até aquele momento, não existia uma forma confiável, rápida e não invasiva de controlar a
              atividade elétrica de neurônios geneticamente direcionados. A equipe solucionou este
              problema inserindo o gene do ChR2 (descoberto no artigo de 2003) em neurônios de mamíferos.
              O artigo demonstra que iluminar esses neurônios com breves pulsos de luz azul ativava o
              canal ChR2, resultando no disparo confiável de potenciais de ação (sinais neurais) em uma
              escala de tempo precisa de milissegundos.
            </p>
          </li>
        </ol>
      </article>

      <ArtigoExpansivel
        date="24 jan 2025"
        title="Copilotos de IA para o padrão de crescimento da metástase hepática colorretal"
        resumo="Pesquisadores criaram o COFFEE, um modelo de inteligência artificial que lê a lâmina digital e classifica o padrão de crescimento da metástase hepática do câncer colorretal. Em 431 pacientes, o padrão desmoplásico se ligou a mais tempo de vida e mais tempo sem a doença avançar. O modelo fez essa leitura com alta precisão, também num grupo acompanhado de forma prospectiva. Com a ferramenta, patologistas em formação erraram menos e fecharam o laudo mais rápido."
        href="https://annalsofsurgery.org/online/ai-powered-copilots-for-precision-diagnosis_ANN-2024-11-105"
        source="Annals of Surgery Open"
      >
        <p>
          O câncer colorretal é uma das principais causas de morte por câncer na China, e a metástase
          piora muito o prognóstico. O modo como a metástase cresce no fígado, o chamado padrão de
          crescimento histopatológico, ajuda a estimar a evolução. O problema é que há poucos
          patologistas para ler todas as lâminas. O estudo propõe o COFFEE como um copiloto dessa
          leitura, não como um laudo automático no lugar da pessoa.
        </p>
        <p>
          O modelo é de aprendizado profundo, do tipo transformer. Primeiro aprendeu a olhar lâminas
          inteiras em 1.442 imagens do banco TCGA-COAD. Depois foi treinado para dizer se a metástase é
          desmoplásica ou não e, numa segunda tarefa, para separar quatro classes de padrão. Entraram
          431 pacientes: 297 no treino, 104 no teste e 30 numa coorte prospectiva.
        </p>
        <p>
          Quem tinha tumor desmoplásico viveu mais: sobrevida global de 53,6 meses, contra 31,9 nos
          demais (p = 0,002). O tempo sem progressão também foi maior, 25,2 contra 10,7 meses
          (p {"<"} 0,001). Na classificação desmoplásico ou não, a área sob a curva foi 0,961 no treino, 0,935 no
          teste e 1,000 na coorte prospectiva. Nas quatro classes, foi 0,961, 0,966 e 0,985.
        </p>
        <p>
          No grupo prospectivo, patologistas juniores chegaram a 94,7% de acerto com a ajuda do modelo,
          contra 85,9% sozinhos, e gastaram 36% menos tempo. Os autores apresentam esse resultado como
          o primeiro modelo de inteligência artificial para essa classificação e como um apoio para
          pensar a conduta depois da ressecção. A amostra prospectiva ainda é pequena, de 30 pessoas, e
          a ferramenta não substitui o patologista.
        </p>
      </ArtigoExpansivel>

      <h2 className="mt-10 text-2xl text-ink">Notas</h2>
      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {news.map((item) => (
          <li key={item.href} className="flex flex-col rounded-2xl border border-line bg-sheet p-5">
            <p className="text-xs font-medium text-accent">{item.date}</p>
            <h2 className="mt-2 text-xl text-ink">{item.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.text}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-primary"
            >
              {item.source}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ArtigoExpansivel({
  date,
  title,
  resumo,
  href,
  source,
  children,
}: {
  date: string;
  title: string;
  resumo: string;
  href: string;
  source: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="mt-4 max-w-3xl rounded-2xl border border-line bg-sheet p-6 sm:p-8">
      <p className="text-xs font-medium text-accent">{date}</p>
      <h2 className="mt-2 text-3xl text-ink">{title}</h2>
      <p className={`mt-4 text-sm leading-relaxed text-ink ${open ? "" : "line-clamp-4"}`}>{resumo}</p>
      {open ? <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink">{children}</div> : null}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-sm font-medium text-primary"
        >
          {open ? "Fechar" : "Ler o artigo"}
        </button>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary">
          {source}
        </a>
      </div>
    </article>
  );
}
