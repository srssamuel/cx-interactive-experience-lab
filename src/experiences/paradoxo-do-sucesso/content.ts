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
    { value: 40, suffix: "%", label: "do ARR vem de expansão — top quartil SaaS" },
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
      problem: "Logar não é usar. Usar não é extrair valor. Apenas 20-25% das empresas são data-driven de verdade.",
    },
    {
      metric: "NPS alto",
      problem: "Clientes dão nota 9 por gentileza, cancelam por ROI. Forrester CX Index caiu 3 anos seguidos.",
    },
    {
      metric: "Tickets resolvidos",
      problem: "Resolver problema não é gerar sucesso. É manutenção. Cada $1 em CS retorna $3-5 — se focado em outcome.",
    },
  ],
  real: [
    {
      metric: "Net Revenue Retention",
      insight: "Mediana SaaS: 105-110%. Best-in-class: 130%+. Abaixo de 100% = contração líquida.",
    },
    {
      metric: "Time-to-Value",
      insight: "Onboarding estruturado = 3x mais chance de primeiro valor em 30 dias.",
    },
    {
      metric: "Outcome Achievement Rate",
      insight: "O cliente atingiu os objetivos que motivaram a compra? Se não sabe, não gerencia sucesso.",
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
        "Monitora health score com IA preditiva. Identifica risco 90 dias antes do cancelamento com 85-90% de precisão. Digital CS cobre 80%+ da base.",
    },
    {
      id: "consultivo",
      label: "Nível 3",
      title: "Consultivo",
      description:
        "Conecta uso do produto a resultado de negócio. QBR mostra valor, não funcionalidade. AI copilots automatizam playbooks de risco e expansão.",
    },
    {
      id: "orquestrado",
      label: "Nível 4",
      title: "Orquestrado",
      description:
        "NRR acima de 130%. Jornada por segmento com intervenções automatizadas. CS é sistema, não time. Expansão orgânica é consequência — 30-40% do ARR novo.",
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
    "Renovação é o pior indicador de saúde. Empresas com CS dedicado têm 20-30% menos churn — Gainsight, 2024.",
    "CS que não mede outcome é suporte com nome bonito. Cada $1 investido em CS retorna $3-5 em receita retida.",
    "O melhor momento para salvar um cliente é no onboarding. 60-70% dos líderes de CS apontam onboarding como causa #1 de churn precoce.",
    "Expansão que precisa de desconto não é expansão. Best-in-class NRR: 130%+. Abaixo de 100% é contração.",
    "IA preditiva reduz churn em 10-25%. Mas 30% dos projetos GenAI morrem no POC — dados ruins, ROI incerto.",
  ],
  provocation:
    "A pergunta não é se seu cliente vai renovar. É se ele está progredindo o suficiente para que renovar seja óbvio — e não uma negociação.",
};
