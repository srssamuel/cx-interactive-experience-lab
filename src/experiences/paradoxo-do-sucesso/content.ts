export const chapters = [
  { id: "hero", label: "Início", number: "" },
  { id: "paradoxo", label: "O Paradoxo", number: "01" },
  { id: "sinais", label: "Sinais", number: "02" },
  { id: "metricas", label: "Métricas", number: "03" },
  { id: "modelo", label: "Modelo", number: "04" },
  { id: "jornada", label: "Jornada", number: "05" },
  { id: "discussao", label: "Discussão", number: "" },
  { id: "fechamento", label: "Fechamento", number: "" },
];

export const hero = {
  overline: "Customer Success",
  headline: "Seu cliente renovou o contrato.",
  headlineAccent: "Mas já está avaliando o concorrente.",
  subtext:
    "Renovação não é lealdade. É inércia. E inércia tem prazo de validade.",
  stats: [
    { value: 44, suffix: "%", label: "renovam sem adotar o produto" },
    { value: 67, suffix: "%", label: "do churn começa no onboarding" },
  ],
  cta: "Entender o paradoxo",
};

export const paradoxo = {
  overline: "01 — O paradoxo que ninguém discute",
  headline: "Cliente ativo não é cliente saudável",
  subtext:
    "A maioria das operações de CS mede presença, não progresso. E confunde silêncio com satisfação.",
  parts: [
    {
      title: "Ativo",
      description: "Logou, usou, apareceu no relatório. Mas isso diz o quê, exatamente?",
    },
    {
      title: "Saudável",
      description: "Está extraindo valor, expandindo uso, indicando. A diferença é abissal.",
    },
  ],
  insight:
    "Ativo é dado. Saudável é interpretação. Quando você confunde os dois, o churn já começou — você só não recebeu o aviso.",
};

export const sinais = {
  overline: "02 — Os sinais que você está ignorando",
  headline: "Cinco alertas silenciosos de churn iminente",
  subtext: "Nenhum deles aparece no seu dashboard. Todos aparecem no comportamento.",
  items: [
    {
      signal: "Adoção platô",
      description:
        "O cliente usa 20% do produto há 6 meses. Não reclama, não expande, não pergunta. Está vegetando.",
      severity: "alto",
    },
    {
      signal: "Sponsor silencioso",
      description:
        "O executivo que comprou não fala mais com você. O operacional mantém o contrato vivo — por enquanto.",
      severity: "crítico",
    },
    {
      signal: "Sucesso declarado, valor não realizado",
      description:
        "O cliente diz que está satisfeito, mas não consegue apontar um resultado concreto que você gerou.",
      severity: "alto",
    },
    {
      signal: "Onboarding incompleto",
      description:
        "Passou do go-live, mas metade das funcionalidades nunca foram ativadas. O cliente se adaptou à versão mínima.",
      severity: "médio",
    },
    {
      signal: "Engajamento reativo",
      description:
        "Só abre ticket quando algo quebra. Nunca participa de treinamento, webinar ou revisão. Está no piloto automático.",
      severity: "alto",
    },
  ],
};

export const metricas = {
  overline: "03 — Métricas que mentem, métricas que revelam",
  headline: "O painel que te dá conforto está escondendo a verdade",
  vanity: [
    {
      metric: "Logins por mês",
      problem: "Logar não é usar. Usar não é extrair valor.",
    },
    {
      metric: "NPS alto",
      problem: "Clientes dão nota 9 por gentileza, cancelam por ROI.",
    },
    {
      metric: "Tickets resolvidos",
      problem: "Resolver problema não é gerar sucesso. É manutenção.",
    },
  ],
  real: [
    {
      metric: "Time-to-Value",
      insight: "Quanto tempo até o cliente realizar o primeiro resultado concreto?",
    },
    {
      metric: "Depth of Adoption",
      insight: "Quantas funcionalidades são usadas vs. contratadas?",
    },
    {
      metric: "Outcome Achievement Rate",
      insight: "O cliente atingiu os objetivos que motivaram a compra?",
    },
  ],
};

export const modelo = {
  overline: "04 — O modelo que falta",
  headline: "De apagar incêndio a orquestrar resultado",
  stages: [
    {
      id: "reativo",
      label: "Nível 1",
      title: "Reativo",
      description:
        "CS é suporte premium. Atua quando o cliente reclama. Não tem visibilidade do que acontece entre as reuniões. Churn é surpresa.",
    },
    {
      id: "proativo",
      label: "Nível 2",
      title: "Proativo",
      description:
        "Monitora health score. Faz check-ins regulares. Identifica risco antes do pedido de cancelamento. Mas ainda opera por contato, não por dado.",
    },
    {
      id: "consultivo",
      label: "Nível 3",
      title: "Consultivo",
      description:
        "Conecta uso do produto a resultado de negócio. QBR mostra valor, não funcionalidade. O CSM é conselheiro, não operador.",
    },
    {
      id: "orquestrado",
      label: "Nível 4",
      title: "Orquestrado",
      description:
        "Jornada desenhada por segmento. Intervenções automatizadas por sinal. CS é sistema, não time. Expansão é consequência, não meta.",
    },
  ],
};

export const jornada = {
  overline: "05 — A jornada que ninguém desenhou",
  headline: "Onboarding termina no go-live. Sucesso começa depois.",
  phases: [
    {
      title: "Onboarding",
      question: "O cliente ativou tudo que comprou?",
      answer: "67% do churn começa aqui. Não por falha técnica — por expectativa não alinhada.",
    },
    {
      title: "Adoção",
      question: "Está usando com profundidade crescente?",
      answer: "Platô de adoção é o sinal mais ignorado de risco. Se não cresce, está morrendo.",
    },
    {
      title: "Valor",
      question: "Consegue articular o resultado que você gerou?",
      answer: "Se o cliente não sabe explicar seu valor, o próximo budget review vai te cortar.",
    },
    {
      title: "Expansão",
      question: "O sucesso está gerando demanda por mais?",
      answer: "Expansão orgânica é o melhor indicador de saúde. Se precisa de desconto para renovar, algo falhou.",
    },
    {
      title: "Advocacy",
      question: "Indicaria você sem que pedissem?",
      answer: "Referência espontânea é o estágio final de sucesso. Não se compra — se conquista.",
    },
  ],
};

export const discussion = {
  question:
    "Quantos dos seus clientes ativos hoje você classificaria genuinamente como saudáveis — extraindo valor real e expandindo?",
  context:
    "Pense na sua carteira atual. Separe mentalmente os que estão no piloto automático dos que estão progredindo. A proporção vai te surpreender.",
  timerMinutes: 5,
};

export const workshopDiscussions = [
  {
    id: "disc-1",
    question: "Quantos clientes ativos são genuinamente saudáveis?",
    sectionId: "discussao",
  },
  {
    id: "disc-2",
    question: "Em qual nível de maturidade está sua operação de CS?",
    sectionId: "modelo",
  },
];

export const fechamento = {
  headline:
    "O cliente não cancela no dia que vai embora. Cancela no dia que para de progredir.",
  insights: [
    "Renovação é o pior indicador de saúde. Quando descobre pelo churn, já perdeu meses de sinais.",
    "CS que não mede outcome é suporte com nome bonito. O cliente sente a diferença.",
    "O melhor momento para salvar um cliente é no onboarding. O pior é no pedido de cancelamento.",
    "Expansão que precisa de desconto não é expansão. É retenção disfarçada.",
    "O cliente não compra produto. Compra o resultado que espera. Se não mede resultado, não gerencia sucesso.",
  ],
  provocation:
    "A pergunta não é se seu cliente vai renovar. É se ele está progredindo o suficiente para que renovar seja óbvio — e não uma negociação.",
};
