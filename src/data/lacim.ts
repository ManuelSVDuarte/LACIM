export const FORM_URL = "https://forms.gle/VwNHcDkMVzgHt5Y39";
export const INSTAGRAM_URL = "https://www.instagram.com/lacimrj/";
export const EMAIL = "contato@lacim.com.br";

export const INSCRICAO_ATE = new Date("2026-10-17T23:59:59-03:00");

export function inscricoesAbertas(now = new Date()) {
  return now.getTime() <= INSCRICAO_ATE.getTime();
}

export const members = [
  {
    id: "fabiola",
    name: "Fabíola Rocha",
    role: "Presidente",
    image: "/lacim/fabiola.jpg",
    bio: "Formada em Direito, Perícia Criminal e Investigação Forense. Cursa o 6º período de Medicina e é monitora de Fundamentos de Cirurgia.",
  },
  {
    id: "bruno",
    name: "Bruno Rocha",
    role: "Vice-presidente",
    image: "/lacim/bruno.jpg",
    bio: "Formado em Engenharia de Produção. Cursa o 4º período de Medicina e é monitor de Fisiologia 2.",
  },
  {
    id: "asley",
    name: "Asley Rafaella",
    role: "Tesoureira",
    image: "/lacim/asley.jpg",
    bio: "Advogada e estudante de Medicina no 6º período. Entrou na liga para aprender cirurgia, dividir experiência e construir a equipe junto com os demais.",
  },
  {
    id: "karolayne",
    name: "Karolayne",
    role: "Secretária",
    image: "/lacim/karolayne.jpg",
    bio: "Formada em Biologia, no 4º período de Medicina e monitora de Fisiologia 2. A cirurgia chamou a atenção desde o começo da graduação, pela prática e pelas possibilidades da especialidade.",
  },
  {
    id: "manuel",
    name: "Manuel Duarte",
    role: "Diretor científico e de eventos",
    image: "/lacim/manuel.jpg",
    bio: "Engenheiro da computação e estudante de Medicina no 4º período. Tem iniciação científica no CBPF, trabalhos apresentados em congressos e outras atividades de pesquisa e inovação.",
  },
  {
    id: "jessica",
    name: "Dra. Jessica Pereira Manso",
    role: "Coordenadora",
    image: "/lacim/jessica.jpg",
    bio: "Medicina pela Universidade Estácio de Sá (2016). Residência em Cirurgia Geral pelo Hospital Municipal Salgado Filho (2019) e em Cirurgia Oncológica pelo Instituto Nacional do Câncer (2022).",
  },
] as const;

export const news = [
  {
    date: "28 ago 2026",
    title: "A definição de infarto muda: três tipos, não cinco",
    text: "A 5ª Definição Universal, da ESC com ACC, AHA e WHF, saiu no European Heart Journal. O infarto passa a ser primário, secundário ou relacionado a procedimento. A troponina ganha referência diferente para mulheres, para não perder caso.",
    href: "https://www.estadao.com.br/pulsa/medicina-e-estudos/quais-sao-os-tipos-de-infarto-nova-classificacao-europeia-muda-divisao-dos-casos/",
    source: "Estadão",
  },
  {
    date: "27 jun 2026",
    title: "Primeira cirurgia de joelho com robô chinês e implante brasileiro",
    text: "O procedimento foi feito em hospital público. A plataforma, registrada na Anvisa, também se presta a quadril e coluna. É um caminho para a robótica ortopédica no SUS.",
    href: "https://www.cnnbrasil.com.br/saude/cirurgia-inedita-com-robo-chines-que-pode-mudar-tratamento-no-sus-veja/",
    source: "CNN Brasil",
  },
  {
    date: "24 set 2026",
    title: "Catarata e glaucoma no mesmo ato cirúrgico entram no SUS",
    text: "A portaria saiu em 17 de setembro. A oferta na rede pública está prevista a partir de março de 2027, para glaucoma de ângulo aberto em estágio inicial ou moderado.",
    href: "https://www.otempo.com.br/saude-e-bem-estar/2026/9/24/cirurgia-para-tratar-catarata-e-glaucoma-ao-mesmo-tempo-sera-ofertada-pelo-sus",
    source: "O Tempo / Folhapress",
  },
  {
    date: "14 set 2026",
    title: "Mil cirurgias robóticas pelo SUS em um hospital público",
    text: "O Hospital Municipal Vila Santa Catarina, em São Paulo, chegou a essa marca e passou a formar profissionais na plataforma. A robótica no SUS deixa de ser exceção isolada.",
    href: "https://veja.abril.com.br/saude/o-avanco-das-cirurgias-roboticas-no-vila-santa-catarina-gerido-pelo-einstein-hospital-israelita/",
    source: "VEJA",
  },
  {
    date: "15 set 2026",
    title: "O SUS fez mais de 7,5 milhões de cirurgias eletivas no semestre",
    text: "São 8% a mais do que no mesmo período de 2025, em 20 estados. Desse volume, 2,92 milhões entraram pelo programa Agora Tem Especialistas.",
    href: "https://agenciabrasil.ebc.com.br/saude/noticia/2026-09/cirurgias-eletivas-pelo-sus-passam-de-75-milhoes-no-primeiro-semestre",
    source: "Agência Brasil",
  },
] as const;
