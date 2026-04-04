/* ═══════════════════════════════════════════════════════════
   A EQUAÇÃO INVISÍVEL — Palco Digital Executivo
   ~35 telas / 11 capítulos / Keynote + Workshop + Leitura
   ═══════════════════════════════════════════════════════════ */

export const chapters = [
  { id: "hero", label: "Início", number: "" },
  { id: "abertura", label: "Abertura", number: "" },
  { id: "equacao", label: "A Equação", number: "01" },
  { id: "mitos", label: "Desconstrução", number: "02" },
  { id: "dimensoes", label: "4 Dimensões", number: "03" },
  { id: "forma", label: "A Forma", number: "04" },
  { id: "custosilencio", label: "Custo do Silêncio", number: "05" },
  { id: "mapa", label: "O Mapa", number: "06" },
  { id: "pratica", label: "Na Prática", number: "07" },
  { id: "maturidade", label: "Maturidade", number: "08" },
  { id: "referencias", label: "Referências", number: "09" },
  { id: "workshop", label: "Workshop", number: "" },
  { id: "fechamento", label: "Fechamento", number: "" },
];

/* ─── HERO ─── */
export const hero = {
  overline: "CX Experience Lab",
  headline: "Seu cliente chegou ao destino.",
  headlineAccent: "Mas não voltaria a viajar com você.",
  subtext: "Fracasso silencioso: entregar o resultado certo da forma errada.",
  stats: [
    { value: 73, suffix: "%", label: "saem sem reclamar" },
    { value: 96, suffix: "%", label: "alto esforço = deslealdade" },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
};

/* ─── ABERTURA ─── */
export const abertura = {
  principios: [
    {
      number: "01",
      statement: "Resultado sem experiência é commodity.",
    },
    {
      number: "02",
      statement: "Experiência sem resultado é teatro.",
    },
    {
      number: "03",
      statement: "Sucesso só existe quando os dois se encontram.",
    },
  ],
};

/* ─── CAP 1: A EQUAÇÃO ─── */
export const equation = {
  overline: "01 — A Equação",
  headline: "A equação que ninguém te mostrou",
  parts: [
    {
      title: "Resultado Esperado",
      short: "O que o cliente veio resolver",
    },
    {
      title: "Experiência Apropriada",
      short: "A forma como isso acontece",
    },
  ],
  conclusion: "Sucesso do Cliente",
  insight:
    "A maioria mede resultado. Quase nenhuma mede experiência com a mesma seriedade.",
  deepPoints: [
    "Clientes não separam resultado de experiência. Para eles, a forma é o produto.",
    "Atrito na experiência destrói o valor do resultado — mesmo entregue corretamente.",
  ],
  workshop: {
    type: "reflection" as const,
    question:
      "Você mede resultado e experiência com a mesma seriedade?",
    context:
      "Últimos 3 relatórios: quantos falavam de resultado? Quantos de experiência?",
  },
};

/* ─── CAP 2: DESCONSTRUÇÃO ─── */
export const myths = {
  overline: "02 — Desconstrução",
  headline: "Cinco crenças que estão te atrasando",
  items: [
    {
      myth: "Experiência é atendimento",
      truth: "Atendimento é remédio, não saúde",
      evidence: "4x mais retenção em empresas com menor esforço do cliente.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
      myth: "Experiência é NPS",
      truth: "NPS mede intenção, não comportamento",
      evidence: "NPS não prevê churn em 78% dos casos.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      myth: "Experiência é UX",
      truth: "UX é uma fatia, não o bolo",
      evidence: "63% dos atritos acontecem fora da interface digital.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    },
    {
      myth: "Experiência é encantar",
      truth: "Encantamento cansa. Consistência fideliza.",
      evidence: "Reduzir esforço é 2x mais efetivo que encantar.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      myth: "Experiência é simpatia",
      truth: "Gentileza sem resolução é frustração educada",
      evidence: "Tempo de resolução importa 3x mais que tom de voz.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
  ],
};

/* ─── CAP 3: AS 4 DIMENSÕES ─── */
export const dimensoes = {
  overline: "03 — As 4 Dimensões",
  headline: "O cliente busca quatro coisas. Você entrega uma.",
  items: [
    {
      number: "01",
      title: "Funcional",
      short: "A tarefa resolveu?",
      description: "O mínimo. Se parar aqui, você é commodity.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      number: "02",
      title: "Emocional",
      short: "Como se sentiu?",
      description:
        "Problema resolvido + cliente irritado = perda futura.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
    {
      number: "03",
      title: "Contextual",
      short: "Adaptou à situação?",
      description:
        "2 dias por e-mail aceita. 2 minutos no chat não aceita.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    },
    {
      number: "04",
      title: "Relacional",
      short: "Lembrou quem ele é?",
      description: "Recontar a história = você não importa.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
  ],
  workshop: {
    type: "application" as const,
    question:
      "Qual dimensão sua operação entrega? Qual ignora?",
    instructions: [
      "Liste processos-chave",
      "Avalie cada um nas 4 dimensões (1-5)",
      "Identifique o maior gap",
    ],
    timerMinutes: 7,
  },
};

/* ─── CAP 4: A FORMA ─── */
export const forma = {
  overline: "04 — A Forma",
  headline: "Você resolve. Mas da forma errada.",
  subtitle: "6 vetores. A maioria controla 2.",
  dimensions: [
    {
      title: "Contexto",
      question: "Onde o cliente está?",
      answer: "Tratar todos igual é tratar todos mal.",
    },
    {
      title: "Preferência",
      question: "Como gosta de interagir?",
      answer: "Não imponha o canal mais barato.",
    },
    {
      title: "Esforço",
      question: "Quanto trabalho ele faz?",
      answer: "96% dos clientes de alto esforço se tornam desleais.",
    },
    {
      title: "Fluidez",
      question: "A jornada é contínua?",
      answer: "3 canais = 3 empresas diferentes.",
    },
    {
      title: "Coerência",
      question: "A promessa se sustenta?",
      answer: "Propaganda diz uma coisa, experiência diz outra.",
    },
    {
      title: "Previsibilidade",
      question: "O cliente sabe o que esperar?",
      answer: "Ansiedade da espera é destruidor silencioso.",
    },
  ],
  insight:
    "Uma falha grave em qualquer vetor contamina todos os outros.",
};

/* ─── CAP 5: O CUSTO DO SILÊNCIO ─── */
export const custoSilencio = {
  overline: "05 — O Custo do Silêncio",
  headline: "O cliente que não reclama é o mais perigoso",
  bigNumber: {
    value: 91,
    suffix: "%",
    label: "nunca reclamam",
  },
  stats: [
    {
      value: 73,
      suffix: "%",
      label: "saem sem aviso",
      context: "Contam para 9-15 pessoas.",
    },
    {
      value: 4,
      suffix: "x",
      label: "mais caro adquirir",
      context: "89% dos orçamentos vão para aquisição.",
    },
    {
      value: 12,
      suffix: "",
      label: "experiências positivas",
      context: "Para compensar uma negativa.",
    },
  ],
  pullQuote: "Silêncio não é satisfação. É desistência.",
  workshop: {
    type: "executive" as const,
    question: "Qual é a taxa de churn silencioso da sua operação?",
    context: "Se não tem esse número, está subestimando o problema em 10x.",
    timerMinutes: 5,
  },
};

/* ─── CAP 6: O MAPA ─── */
export const mapa = {
  overline: "06 — O Mapa",
  headline: "CX não é departamento. É arquitetura.",
  layers: [
    { title: "Cultura", description: "Decisões quando ninguém olha.", position: "core" as const },
    { title: "Processos", description: "Conectam ou desconectam áreas.", position: "middle" as const },
    { title: "Tecnologia", description: "Habilita ou limita.", position: "middle" as const },
    { title: "Pessoas", description: "Linha de frente.", position: "middle" as const },
    { title: "Dados", description: "Inteligência que conecta tudo.", position: "middle" as const },
    { title: "Experiência", description: "O que o cliente sente.", position: "outer" as const },
  ],
  insight:
    "Experiência ruim? O problema está nas camadas de baixo.",
  provocacao: "Experiência é espelho. Desorganização interna sempre vaza.",
};

/* ─── CAP 7: NA PRÁTICA ─── */
export const pratica = {
  overline: "07 — Na Prática",
  headline: "Dois passageiros. Mesmo destino. Um volta. O outro nunca mais.",
  scenarios: {
    positive: {
      label: "Experiência apropriada",
      title: "Volta",
      description: "Carro limpo, no horário. Trajeto eficiente. Motorista discreto. 5 estrelas.",
    },
    negative: {
      label: "Experiência inapropriada",
      title: "Nunca mais",
      description: "8 min de atraso. Som alto. Rota longa. Mesmo destino. Experiência destruiu o retorno.",
    },
  },
  insight:
    "Resultado funcional idêntico. Apenas um voltou. A diferença: a equação.",
  analogias: [
    {
      contexto: "Hospital",
      resultado: "Diagnóstico correto em ambos",
      experienciaA: "Recepção ágil, médico atencioso",
      experienciaB: "4h de espera, médico apressado",
    },
    {
      contexto: "Banco",
      resultado: "Empréstimo aprovado em ambos",
      experienciaA: "Digital em 3 min, aprovação em 24h",
      experienciaB: "3 visitas, 12 documentos, 15 dias",
    },
  ],
  workshop: {
    type: "discussion" as const,
    question:
      "Quantos clientes estão no Cenário B — resultado certo, experiência errada?",
    context: "Últimos 3 meses. Quantas reclamações não receberam?",
    timerMinutes: 5,
  },
};

/* ─── CAP 8: MATURIDADE ─── */
export const maturidade = {
  overline: "08 — Maturidade",
  headline: "De reativo a orquestrado.",
  stages: [
    {
      id: "reativo",
      label: "Nível 1",
      title: "Reativo",
      short: "Apaga incêndios.",
      characteristics: [
        "CX = problema do atendimento",
        "Zero métrica de esforço",
        "Feedback = reclamação",
      ],
    },
    {
      id: "estruturado",
      label: "Nível 2",
      title: "Estruturado",
      short: "NPS existe. Ações são pontuais.",
      characteristics: [
        "NPS mensal",
        "Pesquisas pós-atendimento",
        "Jornada no PowerPoint",
      ],
    },
    {
      id: "proativo",
      label: "Nível 3",
      title: "Proativo",
      short: "Sinais detectados antes da reclamação.",
      characteristics: [
        "Customer Effort Score ativo",
        "Speech analytics",
        "CX com budget próprio",
      ],
    },
    {
      id: "orquestrado",
      label: "Nível 4",
      title: "Orquestrado",
      short: "A experiência é o produto.",
      characteristics: [
        "CX como KPI do C-level",
        "IA preditiva",
        "Experiência = vantagem competitiva",
      ],
    },
  ],
  workshop: {
    type: "application" as const,
    question: "Qual nível? O que muda para subir?",
    instructions: [
      "Identifique o nível atual (caso típico)",
      "3 barreiras concretas para o próximo",
      "1 ação que começa na segunda-feira",
    ],
    timerMinutes: 8,
  },
};

/* ─── CAP 9: REFERÊNCIAS ─── */
export const referencias = {
  overline: "09 — Referências",
  headline: "Quem entendeu a equação",
  cases: [
    {
      title: "Eliminou o esforço",
      sector: "Telecom",
      insight: "Antecipou falhas via IA. Cliente só liga quando quer.",
      metric: { value: 60, suffix: "%", label: "menos contatos reativos" },
    },
    {
      title: "Personalizou a jornada",
      sector: "Varejo",
      insight: "12 jornadas distintas por perfil.",
      metric: { value: 34, suffix: "%", label: "aumento em recompra" },
    },
    {
      title: "Integrou CX no P&L",
      sector: "Financeiro",
      insight: "Cada ponto de NPS traduzido em impacto financeiro.",
      metric: { value: 2.3, suffix: "x", label: "ROI sobre CX" },
    },
  ],
};

/* ─── WORKSHOP ─── */
export const workshopDiscussions = [
  { id: "disc-eq", question: "Você mede resultado e experiência com a mesma seriedade?", sectionId: "equacao" },
  { id: "disc-dim", question: "Qual dimensão sua operação ignora?", sectionId: "dimensoes" },
  { id: "disc-cust", question: "Qual é sua taxa de churn silencioso?", sectionId: "custosilencio" },
  { id: "disc-prat", question: "Quantos clientes no Cenário B?", sectionId: "pratica" },
  { id: "disc-mat", question: "Qual nível de maturidade?", sectionId: "maturidade" },
  { id: "disc-next", question: "Primeira ação na segunda-feira?", sectionId: "workshop" },
];

export const workshopFinal = {
  synthesis: {
    headline: "O que muda na segunda-feira?",
    questions: [
      {
        type: "executive" as const,
        question: "Uma coisa. Uma ação. Uma segunda-feira.",
        context: "Não pense grande. Pense concreto.",
        timerMinutes: 3,
      },
      {
        type: "discussion" as const,
        question: "Qual foi o insight mais desconfortável?",
        context: "Desconforto é sinal de descoberta.",
        timerMinutes: 5,
      },
      {
        type: "practice" as const,
        question: "3 compromissos concretos.",
        instructions: [
          "Um de medição",
          "Um de ação",
          "Um de comunicação",
        ],
        timerMinutes: 5,
      },
    ],
  },
};

/* ─── FECHAMENTO ─── */
export const fechamento = {
  headline:
    "O cliente não lembra do que você entregou.",
  headlineAccent: "Lembra de como se sentiu.",
  provocation:
    "Você vai redesenhar a equação — ou esperar o concorrente fazer primeiro?",
  closingImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
};
