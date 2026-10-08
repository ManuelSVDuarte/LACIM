export type SafeChoice = { text: string; correct: boolean; why: string };

export type SafeQ = {
  id: string;
  prompt: string;
  choices: SafeChoice[];
}

export const safeQuestions: SafeQ[] = [
  {
    id: "s1",
    prompt: "A paciente Lúcia está agendada para uma broncoscopia diagnóstica no ambulatório. A equipe técnica questiona se o Protocolo de Cirurgia Segura deve ser aplicado, já que não haverá incisão cutânea. Qual é a diretriz oficial para este caso?",
    choices: [
      { text: "É de aplicação obrigatória.", correct: true, why: "O protocolo abrange procedimentos terapêuticos e diagnósticos que impliquem incisão ou introdução de endoscópios, dentro ou fora do centro cirúrgico." },
      { text: "É de aplicação opcional.", correct: false, why: "A diretriz não coloca o uso como opcional para procedimentos com endoscópios." },
      { text: "É totalmente dispensável.", correct: false, why: "O uso de equipamentos endoscópios exige a aplicação obrigatória do protocolo." },
      { text: "É restrito ao centro cirúrgico.", correct: false, why: "O protocolo aplica-se dentro ou fora do centro cirúrgico." },
    ],
  },
  {
    id: "s2",
    prompt: "O enfermeiro Carlos e o cirurgião Dr. Mendes discutem quem deve ler as perguntas da Lista de Verificação durante uma apendicectomia. Segundo as definições do protocolo, quem assume o papel de 'Condutor'?",
    choices: [
      { text: "O cirurgião titular.", correct: false, why: "O cirurgião titular não é o único que pode conduzir a lista." },
      { text: "Qualquer profissional participante.", correct: true, why: "O condutor pode ser qualquer profissional de saúde (médico ou enfermeiro) que esteja participando da cirurgia e seja designado pela instituição." },
      { text: "O médico anestesiologista.", correct: false, why: "Embora o anestesiologista possa ser o condutor, essa não é uma função exclusiva dele." },
      { text: "O coordenador do setor.", correct: false, why: "O condutor deve ser alguém que esteja ativamente participando da cirurgia naquele momento." },
    ],
  },
  {
    id: "s3",
    prompt: "Na Fase I do protocolo, a técnica de enfermagem nota que o paciente não possui a demarcação de lateralidade no joelho esquerdo. O que o Condutor da Lista de Verificação deve fazer?",
    choices: [
      { text: "Prosseguir para a próxima etapa.", correct: false, why: "Prosseguir com uma não conformidade anula o propósito de segurança da lista." },
      { text: "Interromper a verificação imediatamente.", correct: true, why: "Se algum item não estiver em conformidade, a verificação deve ser interrompida até a sua total solução." },
      { text: "Anotar o erro no prontuário.", correct: false, why: "Anotar o erro não previne o evento adverso iminente; a checagem deve parar." },
      { text: "Delegar a marcação ao circulante.", correct: false, why: "A marcação deve ser feita por um médico membro da equipe cirúrgica, não pelo circulante de enfermagem." },
    ],
  },
  {
    id: "s4",
    prompt: "A paciente idosa dona Marina está prestes a receber anestesia para uma correção de fratura. O condutor inicia a leitura. Como o protocolo denomina a fase que ocorre exatamente neste momento?",
    choices: [
      { text: "Antes da incisão cirúrgica.", correct: false, why: "Esta é a Fase II, que ocorre após a indução anestésica e imediatamente antes do corte." },
      { text: "Pausa Cirúrgica.", correct: false, why: "Pausa Cirúrgica é sinônimo da Fase II (Antes da incisão cirúrgica)." },
      { text: "Antes de sair da sala.", correct: false, why: "Esta é a Fase III, realizada ao final do procedimento." },
      { text: "Antes da indução anestésica.", correct: true, why: "A Fase I engloba as verificações feitas antes de o paciente ser anestesiado." },
    ],
  },
  {
    id: "s5",
    prompt: "O paciente Fernando aguarda na maca da sala de cirurgia. O enfermeiro, atuando como condutor na Fase I, precisa checar a identidade e o procedimento. Com quem essa confirmação deve ser preferencialmente realizada?",
    choices: [
      { text: "Com o próprio paciente.", correct: true, why: "Sempre que possível, a identificação deve ser revisada verbalmente com o próprio paciente consciente." },
      { text: "Com o cirurgião titular.", correct: false, why: "O cirurgião confirma os dados depois, mas a identificação inicial busca envolver ativamente o paciente." },
      { text: "Com o médico plantonista.", correct: false, why: "A fonte primária de confirmação, quando possível, deve ser o paciente." },
      { text: "Com o familiar aguardando.", correct: false, why: "A família só é acionada caso o paciente esteja incapacitado de responder." },
    ],
  },
  {
    id: "s6",
    prompt: "Uma menina de 4 anos será submetida a uma amigdalectomia. Durante a Fase I, não é possível obter a confirmação verbal detalhada da criança. Quem deve assumir a função de confirmar a identidade e o procedimento?",
    choices: [
      { text: "O cirurgião pediátrico.", correct: false, why: "Embora o cirurgião saiba o procedimento, o protocolo exige a figura do responsável legal na ausência da resposta do paciente." },
      { text: "O anestesiologista.", correct: false, why: "O anestesiologista não substitui o consentimento e a identificação do representante do paciente." },
      { text: "Um tutor ou familiar.", correct: true, why: "Em casos de crianças ou pacientes incapacitados, um tutor ou familiar assume a função de confirmação verbal." },
      { text: "O diretor do hospital.", correct: false, why: "A confirmação é feita por quem detém a responsabilidade legal imediata pelo menor." },
    ],
  },
  {
    id: "s7",
    prompt: "O paciente Ricardo assina os Termos de Consentimento Informado para uma colecistectomia. Segundo o protocolo, em qual momento cronológico máximo essas assinaturas devem ser colhidas?",
    choices: [
      { text: "Durante a indução anestésica.", correct: false, why: "O paciente precisa estar plenamente consciente ao assinar, o que exclui o momento da indução." },
      { text: "Durante a Pausa Cirúrgica.", correct: false, why: "Nesta fase, o paciente já está anestesiado e incapaz de assinar documentos." },
      { text: "Após a alta hospitalar.", correct: false, why: "O consentimento deve ser prévio ao ato cirúrgico." },
      { text: "Antes do encaminhamento ao local.", correct: true, why: "A assinatura dos termos deve ocorrer após os esclarecimentos médicos e antes do paciente ser encaminhado ao local do procedimento." },
    ],
  },
  {
    id: "s8",
    prompt: "Dona Silvia fará uma cirurgia de catarata no olho esquerdo. A equipe de enfermagem prepara o material de demarcação. De acordo com as diretrizes, qual categoria profissional deve realizar a marcação do sítio cirúrgico?",
    choices: [
      { text: "Enfermeiro circulante.", correct: false, why: "O enfermeiro não tem a atribuição de demarcar o sítio cirúrgico." },
      { text: "Médico membro da equipe cirúrgica.", correct: true, why: "O protocolo estabelece explicitamente que a identificação (demarcação) do sítio deve ser feita por médico membro da equipe cirúrgica." },
      { text: "Técnico de enfermagem.", correct: false, why: "O técnico apoia a cirurgia, mas a marcação clínica é ato médico neste contexto." },
      { text: "Condutor da Lista de Verificação.", correct: false, why: "O condutor apenas checa se a marcação foi feita; ele não a executa (a menos que ele mesmo seja o cirurgião)." },
    ],
  },
  {
    id: "s9",
    prompt: "Dr. Augusto vai demarcar o local da cirurgia de hérnia inguinal do paciente. Qual deve ser o estado neurológico do paciente durante este procedimento de demarcação, sempre que possível?",
    choices: [
      { text: "Sedado superficialmente.", correct: false, why: "A sedação prejudica a capacidade do paciente de confirmar ativamente o local." },
      { text: "Acordado e consciente.", correct: true, why: "A demarcação deve ser realizada com o paciente acordado e consciente para que ele mesmo confirme o local da intervenção." },
      { text: "Sob anestesia geral.", correct: false, why: "Se o paciente estiver anestesiado, a dupla checagem com ele se torna impossível." },
      { text: "Em coma induzido.", correct: false, why: "A demarcação busca justamente a participação do paciente, incompatível com o coma." },
    ],
  },
  {
    id: "s10",
    prompt: "Um paciente recusa veementemente a marcação com caneta em sua pele por motivos religiosos antes de uma cirurgia renal. Como a instituição deve proceder segundo o protocolo?",
    choices: [
      { text: "Cancelar o procedimento cirúrgico.", correct: false, why: "O protocolo prevê lidar com exceções de forma segura, não exigindo o cancelamento automático." },
      { text: "Aplicar processos definidos por escrito.", correct: true, why: "O protocolo determina que a instituição deve ter processos definidos por escrito para lidar com exceções, como a recusa documentada." },
      { text: "Sedá-lo e marcar escondido.", correct: false, why: "Isso fere o princípio do consentimento e da ética médica." },
      { text: "Marcar o lençol da maca.", correct: false, why: "Marcas fora do corpo do paciente (em objetos móveis) não são aceitas pelo protocolo como substituto." },
    ],
  },
  {
    id: "s11",
    prompt: "Ao demarcar a perna direita para uma amputação, o residente de cirurgia pergunta qual desenho fazer. Segundo o protocolo, qual marcação deve ser expressamente evitada por ser ambígua?",
    choices: [
      { text: "O sinal de X.", correct: true, why: "O sinal de 'X' deve ser evitado pois pode ser interpretado ambiguamente como 'não operar aqui' ou 'operar aqui'." },
      { text: "O sinal de alvo.", correct: false, why: "O sinal de alvo é citado no protocolo como um exemplo de marcação recomendada e segura." },
      { text: "As iniciais do médico.", correct: false, why: "Embora algumas instituições usem, o protocolo cita especificamente o 'X' como o símbolo ambíguo a ser evitado." },
      { text: "A linha de incisão.", correct: false, why: "A linha de incisão não é classificada como o símbolo ambíguo primário a ser evitado." },
    ],
  },
  {
    id: "s12",
    prompt: "A enfermeira Joana assume a condução da Fase I. Ela vira-se para o anestesiologista para verificar a funcionalidade de um equipamento crítico de suporte à vida. Qual equipamento o protocolo exige que esteja no paciente e funcionando?",
    choices: [
      { text: "O eletrocardiógrafo.", correct: false, why: "Embora usado, o protocolo especifica um equipamento mais completo para esta checagem." },
      { text: "O monitor multiparamétrico.", correct: true, why: "O protocolo exige a confirmação de que um monitor multiparamétrico tenha sido posicionado e esteja funcionando corretamente." },
      { text: "O termômetro esofágico.", correct: false, why: "Não é o equipamento primário exigido nominalmente no checklist." },
      { text: "O desfibrilador cardíaco.", correct: false, why: "O desfibrilador deve estar acessível, mas a checagem no paciente foca na monitorização contínua." },
    ],
  },
  {
    id: "s13",
    prompt: "Durante a indução para uma craniotomia, o anestesiologista Dr. Felipe deve confirmar a conclusão da verificação da máquina de anestesia e medicações. Qual termo o protocolo utiliza para esse conjunto de ações?",
    choices: [
      { text: "Segurança Cirúrgica.", correct: false, why: "Termo genérico para o protocolo inteiro, não para as ações específicas do anestesiologista." },
      { text: "Segurança Anestésica.", correct: true, why: "Segurança Anestésica é definida como a inspeção formal do equipamento, checagem de medicamentos e risco antes da cirurgia." },
      { text: "Pausa Anestésica.", correct: false, why: "Este termo não existe nas definições oficiais do protocolo." },
      { text: "Controle de Equipamentos.", correct: false, why: "A definição engloba medicamentos e risco do paciente, não apenas equipamentos." },
    ],
  },
  {
    id: "s14",
    prompt: "O paciente Marcos relata ser alérgico a látex. O enfermeiro condutor da lista já conhece essa informação pelo prontuário. Na Fase I, como o enfermeiro deve proceder a respeito das alergias?",
    choices: [
      { text: "Pular a pergunta verbal.", correct: false, why: "Nenhuma pergunta da lista pode ser pulada." },
      { text: "Perguntar ou confirmar em voz alta.", correct: true, why: "O condutor deve perguntar/confirmar alergias mesmo tendo conhecimento prévio, garantindo que o anestesiologista também saiba." },
      { text: "Anotar o risco silenciosamente.", correct: false, why: "A comunicação verbal falha neste cenário; o protocolo exige verificação em voz alta." },
      { text: "Delegar a checagem ao cirurgião.", correct: false, why: "É responsabilidade do condutor confirmar isso durante a fase I." },
    ],
  },
  {
    id: "s15",
    prompt: "Na avaliação pré-anestésica de um paciente obeso mórbido, o condutor pergunta ao anestesiologista sobre a intubação. Qual risco específico associado à via aérea também deve ser avaliado nesta etapa?",
    choices: [
      { text: "Risco de hipotermia.", correct: false, why: "Hipotermia é um risco geral, não anatomicamente vinculado ao manejo primário da via aérea no checklist." },
      { text: "Risco de aspiração.", correct: true, why: "O condutor deve confirmar se o paciente possui via aérea difícil e se o risco de aspiração foi levado em consideração." },
      { text: "Risco de infecção.", correct: false, why: "A prevenção de infecção é tratada na antibioticoprofilaxia, não na avaliação da via aérea." },
      { text: "Risco de sangramento.", correct: false, why: "Sangramento é o próximo item do checklist, avaliado separadamente da via aérea." },
    ],
  },
  {
    id: "s16",
    prompt: "Para uma hepatectomia extensa em paciente adulto, o condutor verifica o risco de perda sanguínea para acionar o preparo de fluidos. O protocolo define como risco uma perda superior a qual volume?",
    choices: [
      { text: "Duzentos mililitros.", correct: false, why: "Este volume é muito baixo e rotineiro na maioria das cirurgias de médio porte." },
      { text: "Quinhentos mililitros.", correct: true, why: "O protocolo orienta perguntar se há risco de perder mais de meio litro (500 ml) de sangue em adultos." },
      { text: "Oitocentos mililitros.", correct: false, why: "O ponto de corte estabelecido pelo protocolo da OMS/MS é menor." },
      { text: "Mil mililitros.", correct: false, why: "Aguardar um risco de perda de 1 litro para acionar o protocolo seria arriscado." },
    ],
  },
  {
    id: "s17",
    prompt: "Um menino de 8 anos fará uma cirurgia de correção de escoliose. O anestesiologista avalia o risco de choque hipovolêmico. Para crianças, o protocolo alerta para uma perda sanguínea superior a qual proporção?",
    choices: [
      { text: "Cinco mililitros por quilo.", correct: false, why: "Este limiar é inferior ao estipulado pela diretriz." },
      { text: "Sete mililitros por quilo.", correct: true, why: "Em crianças, a equipe deve reconhecer e se preparar para perdas superiores a 7 ml/kg de peso corporal." },
      { text: "Dez mililitros por quilo.", correct: false, why: "O protocolo adota um limiar de segurança mais sensível." },
      { text: "Quinze mililitros por quilo.", correct: false, why: "Uma perda dessa magnitude já representa um evento hemorrágico severo não previsto inicialmente." },
    ],
  },
  {
    id: "s18",
    prompt: "O paciente já está posicionado e anestesiado. O cirurgião está com o bisturi nas mãos. O enfermeiro anuncia o início da Fase II do protocolo. Qual é a denominação específica desta fase?",
    choices: [
      { text: "Avaliação Pós-Indução.", correct: false, why: "Este não é o nome formal estabelecido pelo protocolo." },
      { text: "Pausa Cirúrgica.", correct: true, why: "A Fase II, executada imediatamente antes da incisão, é denominada 'Pausa Cirúrgica' (Time Out)." },
      { text: "Verificação Final.", correct: false, why: "A verificação continua após a cirurgia (Fase III)." },
      { text: "Controle Operatório.", correct: false, why: "Não reflete o jargão do protocolo da OMS adotado pelo Ministério da Saúde." },
    ],
  },
  {
    id: "s19",
    prompt: "Durante a Pausa Cirúrgica de um plantão noturno, novos técnicos de enfermagem integram a sala para render a equipe anterior. Qual deve ser o primeiro passo executado pelo condutor da lista nesta fase?",
    choices: [
      { text: "A apresentação dos membros da equipe.", correct: true, why: "O primeiro passo da Fase II é garantir que cada pessoa na sala se apresente pelo nome e função, especialmente útil em trocas de turno." },
      { text: "A contagem de compressas e gazes.", correct: false, why: "A contagem só é verificada na Fase III, antes do paciente sair da sala." },
      { text: "A verificação da conta do hospital.", correct: false, why: "Questões financeiras não fazem parte do protocolo de segurança." },
      { text: "A revisão do plano de recuperação.", correct: false, why: "A revisão do plano de recuperação pós-operatória pertence à Fase III." },
    ],
  },
  {
    id: "s20",
    prompt: "Imediatamente antes do cirurgião realizar a incisão para a extração de um tumor, a equipe precisa confirmar as diretrizes básicas. Quais três elementos fundamentais são confirmados verbalmente em conjunto nesta etapa?",
    choices: [
      { text: "Nome do cirurgião, nome do hospital e técnica.", correct: false, why: "O foco é o paciente e o procedimento, não a instituição." },
      { text: "Identidade do paciente, sítio cirúrgico e procedimento.", correct: true, why: "A tríade de confirmação final da Fase II envolve a identidade do paciente, o sítio (local) e o procedimento a ser realizado." },
      { text: "Via de acesso, tempo de cirurgia e fios de sutura.", correct: false, why: "O tempo é discutido depois, e fios não são foco central da confirmação de identidade." },
      { text: "Assinatura do termo, tipagem sanguínea e alergias.", correct: false, why: "Esses elementos já foram verificados exaustivamente na Fase I." },
    ],
  },
  {
    id: "s21",
    prompt: "Na discussão de eventos críticos previstos da Fase II, o cirurgião principal deve se manifestar. Qual informação específica é de responsabilidade primária do cirurgião compartilhar com a equipe neste momento?",
    choices: [
      { text: "O resultado do indicador de esterilização.", correct: false, why: "Esta é responsabilidade do instrumentador ou técnico de enfermagem." },
      { text: "As etapas críticas e perda sanguínea prevista.", correct: true, why: "O cirurgião deve informar quais são as etapas críticas da operação, a duração e a perda sanguínea esperada." },
      { text: "O plano de ressuscitação cardiopulmonar.", correct: false, why: "O plano de ressuscitação é preocupação específica do anestesiologista." },
      { text: "As medidas de recuperação pós-operatória.", correct: false, why: "Este planejamento é feito na Fase III, após a cirurgia." },
    ],
  },
  {
    id: "s22",
    prompt: "Ainda na discussão de eventos críticos da Pausa Cirúrgica, o anestesiologista revisa as condições do paciente cardiopata. Qual item deve ser obrigatoriamente pautado por ele?",
    choices: [
      { text: "Preocupações específicas para ressuscitação.", correct: true, why: "O anestesiologista deve revisar em voz alta o planejamento e preocupações específicas para ressuscitação cardiopulmonar e uso de hemoderivados." },
      { text: "Duração estimada do procedimento cirúrgico.", correct: false, why: "A previsão do tempo de duração da cirurgia é papel do cirurgião." },
      { text: "Disponibilidade dos exames de imagem na sala.", correct: false, why: "A visualização de imagens cirúrgicas é confirmada junto ao cirurgião." },
      { text: "O nome da cirurgia que será executada.", correct: false, why: "A confirmação do nome da cirurgia envolve toda a equipe coletivamente." },
    ],
  },
  {
    id: "s23",
    prompt: "O instrumentador cirúrgico prepara a mesa para o procedimento. O condutor inicia a revisão da enfermagem na Fase II. Como a enfermagem comprova que os materiais cirúrgicos estão adequados?",
    choices: [
      { text: "Confirmando visualmente as datas nas caixas.", correct: false, why: "Apenas ver a data não garante o processo; o protocolo exige leitura de um mecanismo específico." },
      { text: "Confirmando verbalmente o indicador de esterilização.", correct: true, why: "O profissional deve confirmar verbalmente a esterilização por meio da leitura do indicador químico de esterilização na sala." },
      { text: "Confirmando a temperatura da autoclave externa.", correct: false, why: "A autoclave fica na CME; na sala, avalia-se o produto final (indicador)." },
      { text: "Confirmando a limpeza manual com o microscópio.", correct: false, why: "Não é uma prática descrita ou exigida nesta fase do protocolo." },
    ],
  },
  {
    id: "s24",
    prompt: "Para evitar infecções de sítio cirúrgico, o protocolo exige a checagem da profilaxia antimicrobiana. Em relação à incisão da pele, qual é o limite de tempo aceitável para a administração do antibiótico preventivo?",
    choices: [
      { text: "Nos últimos dez minutos.", correct: false, why: "Dez minutos pode não ser suficiente para garantir níveis teciduais adequados da droga." },
      { text: "Nos últimos trinta minutos.", correct: false, why: "A janela estabelecida pela literatura e pelo protocolo é mais ampla." },
      { text: "Nos últimos sessenta minutos.", correct: true, why: "O condutor perguntará se os antimicrobianos profiláticos foram administrados durante os últimos 60 minutos antes da incisão da pele." },
      { text: "Nas últimas duas horas.", correct: false, why: "Duas horas ultrapassa a janela ideal de eficácia profilática recomendada no momento do corte." },
    ],
  },
  {
    id: "s25",
    prompt: "O paciente passará por uma osteossíntese complexa de fêmur. O condutor chega ao final da Fase II (Pausa Cirúrgica). O que deve ser verificado em relação ao suporte diagnóstico visual?",
    choices: [
      { text: "A calibração do microscópio óptico.", correct: false, why: "Não é o item de imagem padronizado na lista geral." },
      { text: "A acessibilidade dos exames de imagem.", correct: true, why: "A equipe deve confirmar a acessibilidade dos exames de imagem (radiografias, tomografias) necessários na sala e expostos de forma adequada." },
      { text: "A impressão dos laudos laboratoriais.", correct: false, why: "O protocolo foca na imagem visual anatômica (Raio-X, RM) essencial para o ato operatório, não em laudos de sangue neste momento." },
      { text: "O agendamento do Raio-X pós-operatório.", correct: false, why: "Nesta fase, a preocupação é orientar a cirurgia que vai começar, não o pós-operatório." },
    ],
  },
  {
    id: "s26",
    prompt: "A colecistectomia laparoscópica terminou e o cirurgião está terminando a sutura da pele. O condutor da lista inicia a Fase III. Qual é a janela temporal estrita exigida para esta etapa?",
    choices: [
      { text: "Antes do paciente sair da sala de cirurgia.", correct: true, why: "A Fase III deve ser conduzida integralmente antes que o paciente seja removido da sala de operações." },
      { text: "Imediatamente após a extubação do paciente.", correct: false, why: "A fase independe do momento exato da extubação, desde que seja antes de sair da sala." },
      { text: "Durante o trajeto para a sala de recuperação.", correct: false, why: "Checagens fora da sala perdem a chance de corrigir problemas imediatos no ambiente cirúrgico (ex: compressa esquecida)." },
      { text: "Ao chegar no leito da Unidade de Terapia Intensiva.", correct: false, why: "Se houver esquecimento de material no paciente, a constatação na UTI exigiria um retorno dramático ao bloco cirúrgico." },
    ],
  },
  {
    id: "s27",
    prompt: "Durante o início da Fase III, o condutor pede a atenção do cirurgião. Qual informação sobre a cirurgia deve ser confirmada neste momento, mesmo parecendo óbvia?",
    choices: [
      { text: "O nome exato do procedimento realizado.", correct: true, why: "Devido a mudanças no intraoperatório, é essencial confirmar qual procedimento foi efetivamente executado, não apenas o que foi planejado." },
      { text: "O valor da tabela do convênio médico.", correct: false, why: "Faturamento não é escopo de protocolos de segurança clínica." },
      { text: "O nome da próxima cirurgia agendada.", correct: false, why: "O foco da Fase III é concluir adequadamente o caso do paciente atual." },
      { text: "O endereço residencial do paciente.", correct: false, why: "Informações administrativas de cadastro não são checadas na Fase III." },
    ],
  },
  {
    id: "s28",
    prompt: "A cirurgia no abdome do senhor João finalizou. A equipe de enfermagem realiza a checagem obrigatória de materiais para prevenir retenção de corpos estranhos. O que deve ser contado rigorosamente na Fase III?",
    choices: [
      { text: "Apenas as compressas com fios radiopacos.", correct: false, why: "Não basta contar compressas radiopacas, mas todos os instrumentais e perfurocortantes." },
      { text: "Apenas as agulhas e fios de sutura.", correct: false, why: "A contagem deve abranger compressas e instrumentais também." },
      { text: "Instrumentais, compressas e agulhas.", correct: true, why: "O protocolo exige a confirmação verbal da conclusão das contagens finais de compressas, agulhas e instrumentais (especialmente em cavidade aberta)." },
      { text: "Apenas os equipamentos elétricos.", correct: false, why: "Equipamentos elétricos raramente são deixados na cavidade corpórea inadvertidamente; o foco são os itens soltos menores." },
    ],
  },
  {
    id: "s29",
    prompt: "Durante a excisão de um nódulo mamário, o tecido é separado para análise. Na Fase III, a enfermeira precisa rotular o frasco. Como a identificação da amostra deve ser confirmada com a equipe?",
    choices: [
      { text: "Pela leitura silenciosa do cirurgião principal.", correct: false, why: "A leitura silenciosa anula o princípio da dupla checagem em equipe." },
      { text: "Pela leitura em voz alta do nome do paciente.", correct: true, why: "O profissional deve confirmar a etiquetagem correta pela leitura em voz alta do nome do paciente e descrição da amostra." },
      { text: "Pela colagem de código de barras genérico.", correct: false, why: "O código de barras pode apoiar, mas a leitura audível garante a ciência imediata da equipe sobre a peça extraída." },
      { text: "Pela assinatura digital no prontuário.", correct: false, why: "Assinaturas não substituem a confirmação verbal em tempo real exigida pela lista de verificação." },
    ],
  },
  {
    id: "s30",
    prompt: "Na descrição da amostra patológica (biópsia), qual detalhe além do nome do paciente é crucial que o profissional de enfermagem leia em voz alta, de acordo com o protocolo?",
    choices: [
      { text: "O valor do exame laboratorial.", correct: false, why: "Custos não são pertinentes ao protocolo de segurança assistencial." },
      { text: "O contato do médico patologista.", correct: false, why: "Não é necessário identificar o patologista na sala de cirurgia, apenas a amostra em si." },
      { text: "O nome do laboratório terceirizado.", correct: false, why: "O destino da amostra importa administrativamente, mas a segurança cirúrgica foca no local de retirada." },
      { text: "A indicação anatômica de origem.", correct: true, why: "A descrição da amostra deve incluir obrigatoriamente a indicação anatômica do local exato de origem (ex: mama direita, quadrante superior)." },
    ],
  },
  {
    id: "s31",
    prompt: "O bisturi elétrico falhou repetidas vezes durante a cirurgia, atrasando o procedimento. Na Fase III, qual é o papel do condutor em relação a esse incidente?",
    choices: [
      { text: "Descartar o equipamento no lixo biológico.", correct: false, why: "O equipamento pode precisar apenas de manutenção e não tem contaminação biológica como critério primário aqui." },
      { text: "Assegurar que o problema seja documentado.", correct: true, why: "O condutor deve garantir que o mau funcionamento de equipamentos seja identificado, relatado e documentado pela equipe." },
      { text: "Multar o fabricante do equipamento.", correct: false, why: "Equipes cirúrgicas não aplicam sanções comerciais." },
      { text: "Ignorar se o procedimento já terminou.", correct: false, why: "Ignorar o fato expõe o próximo paciente ao mesmo risco de falha." },
    ],
  },
  {
    id: "s32",
    prompt: "Antes de autorizar o transporte do paciente para a sala de recuperação (SRPA), o cirurgião, o anestesiologista e a enfermagem discutem o caso clínico. Qual é o objetivo desta discussão final na Fase III?",
    choices: [
      { text: "Revisar o plano de recuperação pós-operatória.", correct: true, why: "A equipe revisa o plano focando em preocupações anestésicas ou cirúrgicas para o manejo seguro no pós-operatório (ex: dor, sangramento)." },
      { text: "Definir a escala de folgas da equipe.", correct: false, why: "A pauta administrativa é irrelevante no contexto do checklist do paciente." },
      { text: "Revisar os custos financeiros da operação.", correct: false, why: "A lista de verificação não abrange gestão de faturamento." },
      { text: "Revisar o consentimento cirúrgico inicial.", correct: false, why: "O consentimento já foi exaustivamente revisado na Fase I; aqui o foco é o que vem a seguir." },
    ],
  },
  {
    id: "s33",
    prompt: "A Lista de Verificação engloba três momentos cruciais. Qual é o conceito central que justifica a existência de um checklist padronizado em salas cirúrgicas?",
    choices: [
      { text: "Identificar erros após a alta do paciente.", correct: false, why: "A ideia é prevenir o erro antes que o dano ocorra, não após a alta." },
      { text: "Punir individualmente o profissional infrator.", correct: false, why: "Ferramentas de segurança do paciente não têm caráter punitivo, mas preventivo e sistêmico." },
      { text: "Reduzir o risco de incidentes cirúrgicos.", correct: true, why: "O protocolo visa garantir medidas que reduzam a ocorrência de incidentes, eventos adversos e mortalidade cirúrgica." },
      { text: "Acelerar a rotatividade de cirurgias diárias.", correct: false, why: "Embora a organização possa indiretamente otimizar o tempo, a pausa para checagem adiciona minutos em prol da segurança, não da velocidade." },
    ],
  },
  {
    id: "s34",
    prompt: "Conforme descrito nas diretrizes governamentais de Cirurgia Segura, de quem é a autoria original do modelo de Lista de Verificação adotado pelo protocolo brasileiro?",
    choices: [
      { text: "Do Conselho Federal de Medicina.", correct: false, why: "O CFM apoia, mas não é o desenvolvedor primário do checklist citado no documento." },
      { text: "Da Organização Pan-Americana de Saúde.", correct: false, why: "A OPAS publicou manuais, mas a autoria do instrumento basal é global." },
      { text: "Da Agência Nacional de Vigilância Sanitária.", correct: false, why: "A ANVISA adaptou e regulamentou no Brasil, mas não criou o documento inicial." },
      { text: "Da Organização Mundial da Saúde.", correct: true, why: "O protocolo utiliza a Lista de Verificação de Cirurgia Segura desenvolvida originalmente pela OMS." },
    ],
  },
  {
    id: "s35",
    prompt: "Um paciente será operado em um caso complexo envolvendo a coluna vertebral. O protocolo destaca a importância da marcação nesses cenários. Como o protocolo classifica a lateralidade para este tipo de cirurgia?",
    choices: [
      { text: "Níveis múltiplos.", correct: true, why: "A demarcação em coluna vertebral é classificada pelo protocolo como um caso de 'níveis múltiplos', exigindo precisão." },
      { text: "Estruturas múltiplas.", correct: false, why: "Estruturas múltiplas refere-se a dedos das mãos ou dos pés, não aos segmentos da coluna." },
      { text: "Órgãos bilaterais.", correct: false, why: "A coluna é uma estrutura central com vários níveis segmentares, não um par bilateral primário como os rins." },
      { text: "Dígitos paralelos.", correct: false, why: "Termo inventado sem correspondência clínica no protocolo." },
    ],
  },
  {
    id: "s36",
    prompt: "Para uma artroplastia de falanges (dedos da mão), o cirurgião fará a marcação. Segundo a terminologia do protocolo, este é um exemplo clássico de qual categoria de demarcação?",
    choices: [
      { text: "Estruturas Múltiplas.", correct: true, why: "Dedos das mãos e dos pés, e costelas são classificados no protocolo como 'estruturas múltiplas'." },
      { text: "Lateralidade Pura.", correct: false, why: "Lateralidade pura refere-se mais a órgãos únicos simétricos como braço esquerdo vs. braço direito." },
      { text: "Níveis Múltiplos.", correct: false, why: "Níveis múltiplos é a terminologia aplicada à coluna vertebral." },
      { text: "Anatomia Indeterminada.", correct: false, why: "A anatomia dos dedos é altamente determinada e mapeada." },
    ],
  },
  {
    id: "s37",
    prompt: "A instituição quer saber se as equipes estão utilizando a Lista de Verificação na prática diária. Segundo o documento do Ministério da Saúde, qual indicador deve ser medido pelos gestores para avaliar o cumprimento desta rotina?",
    choices: [
      { text: "A quantidade de fios de sutura descartados.", correct: false, why: "Fios de sutura não indicam o uso cognitivo ou sistêmico do checklist de segurança." },
      { text: "O peso médio das biópsias retiradas.", correct: false, why: "O tamanho da peça patológica é um dado clínico, não gerencial do protocolo." },
      { text: "A taxa de adesão à Lista de Verificação.", correct: true, why: "O protocolo lista como indicador oficial de monitoramento a 'Taxa de adesão à Lista de Verificação'." },
      { text: "O faturamento financeiro do centro cirúrgico.", correct: false, why: "O monitoramento visa a qualidade e segurança, não a economia ou lucratividade." },
    ],
  },
  {
    id: "s38",
    prompt: "No monitoramento de segurança hospitalar sugerido pelo protocolo, um dos indicadores cruciais busca evitar erros infeciosos. Qual métrica específica é exigida no protocolo relacionada a infecções?",
    choices: [
      { text: "A contagem de bactérias ambientais no chão.", correct: false, why: "Controle ambiental é importante, mas o indicador clínico focado é o tratamento direto ao paciente." },
      { text: "O volume de degermantes estocados na farmácia.", correct: false, why: "Estoque não garante que a ação preventiva de administração seja feita no tempo correto." },
      { text: "Percentual com antibioticoprofilaxia no tempo adequado.", correct: true, why: "O protocolo recomenda monitorar o 'Percentual de pacientes que recebeu antibioticoprofilaxia no momento adequado' (até 60 min antes da incisão)." },
      { text: "Número de swabs enviados à microbiologia.", correct: false, why: "Não é um indicador definido pelo anexo do Ministério da Saúde para o escopo primário da lista." },
    ],
  },
  {
    id: "s39",
    prompt: "Se um erro gravíssimo ocorrer e uma cirurgia de nefrectomia for realizada no rim saudável em vez do rim doente, como esse evento é classificado entre os indicadores monitorados no protocolo?",
    choices: [
      { text: "Cirurgia em paciente errado.", correct: false, why: "O paciente é o correto, mas o local operado foi o incorreto." },
      { text: "Número de procedimentos errados.", correct: false, why: "O procedimento (retirar o rim) estava indicado, mas o local falhou." },
      { text: "Cirurgia em local errado.", correct: true, why: "Operar o rim sadio no paciente correto configura o indicador de 'Número de cirurgias em local errado' (wrong-site surgery)." },
      { text: "Mortalidade cirúrgica inevitável.", correct: false, why: "Esse evento é totalmente evitável mediante o uso correto das demarcações." },
    ],
  },
  {
    id: "s40",
    prompt: "Um paciente nomeado João da Silva deu entrada na sala, mas os exames na tela são de outro paciente chamado João Souza, e a equipe inicia a cirurgia. Se o erro for consolidado, qual indicador do protocolo este evento compõe?",
    choices: [
      { text: "Cirurgia em paciente errado.", correct: true, why: "Falha na dupla checagem de identidade na Fase I e Fase II leva ao gravíssimo evento adverso catalogado como 'Número de cirurgias em paciente errado'." },
      { text: "Cirurgia em local errado.", correct: false, why: "Este indicador mede erros anatômicos, não de identidade civil do indivíduo." },
      { text: "Mortalidade ajustada ao risco.", correct: false, why: "Embora o evento possa levar ao óbito, o indicador específico para troca de identidade é outro." },
      { text: "Número de procedimentos cancelados.", correct: false, why: "Neste caso hipotético o procedimento ocorreu de fato e resultou em um evento adverso, não num cancelamento." },
    ],
  },
];
