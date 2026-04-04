/* ═══════════════════════════════════════════════════════════
   A EQUAÇÃO INVISÍVEL — Conteúdo expandido para 1h30
   ~35 telas / 11 capítulos
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
  subtext:
    "Entregar o resultado certo da forma errada tem nome: fracasso silencioso.",
  stats: [
    { value: 73, suffix: "%", label: "saem sem reclamar" },
    { value: 96, suffix: "%", label: "alto esforço = deslealdade" },
  ],
  cta: "Explorar a equação",
  heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
};

/* ─── ABERTURA — Princípios que ancoram tudo ─── */
export const abertura = {
  principios: [
    {
      number: "01",
      statement: "Resultado sem experiência é commodity.",
      detail: "Seu concorrente entrega o mesmo. A diferença está no como.",
    },
    {
      number: "02",
      statement: "Experiência sem resultado é teatro.",
      detail: "Encantamento não paga boleto. O cliente quer resolver, não aplaudir.",
    },
    {
      number: "03",
      statement: "Sucesso só existe quando os dois se encontram.",
      detail: "Essa é a equação que separa empresas que retêm de empresas que perdem.",
    },
  ],
};

/* ─── CAP 1: A EQUAÇÃO ─── */
export const equation = {
  overline: "01 — A ideia que muda tudo",
  headline: "Uma equação que ninguém te mostrou",
  subtext: "E ela explica por que clientes satisfeitos estão saindo.",
  parts: [
    {
      title: "Resultado Esperado",
      description: "O que o cliente veio resolver",
    },
    {
      title: "Experiência Apropriada",
      description: "A forma como isso acontece",
    },
  ],
  conclusion: "Sucesso do Cliente",
  insight:
    "Resultado sem experiência é commodity. Experiência sem resultado é teatro. Sucesso só existe quando os dois se encontram.",
  deepDive: {
    headline: "A equação parece simples. A execução não é.",
    points: [
      "A maioria das empresas mede resultado. Quase nenhuma mede experiência com a mesma seriedade.",
      "Clientes não separam os dois. Para eles, a forma É o produto.",
      "Quando há atrito na experiência, o resultado perde valor — mesmo sendo entregue corretamente.",
    ],
  },
  workshop: {
    type: "reflection" as const,
    question: "Na sua operação, você mede resultado e experiência com a mesma seriedade?",
    context: "Pense nos últimos 3 relatórios que você recebeu. Quantos falavam de resultado? Quantos falavam de experiência? A proporção revela a prioridade real.",
  },
};

/* ─── CAP 2: DESCONSTRUÇÃO (MITOS) ─── */
export const myths = {
  overline: "02 — Desconstrução",
  headline: "Cinco crenças que estão te atrasando",
  subtext: "Cada uma parece razoável. Nenhuma resiste a 30 segundos de análise.",
  items: [
    {
      myth: "Experiência é atendimento",
      truth: "Atendimento é remédio, não saúde",
      detail:
        "A melhor experiência resolve antes de gerar contato. Quando o cliente liga, algo já falhou.",
      evidence: "As empresas com menor esforço do cliente têm 4x mais retenção.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
      myth: "Experiência é NPS",
      truth: "NPS mede intenção, não comportamento",
      detail:
        "Clientes dão nota 9 e cancelam no mês seguinte. Intenção e ação são coisas diferentes.",
      evidence: "NPS não prevê churn em 78% dos casos estudados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      myth: "Experiência é UX",
      truth: "UX é uma fatia, não o bolo inteiro",
      detail:
        "Experiência inclui compra, entrega, suporte, cobrança, renovação. UX é apenas a interface.",
      evidence: "63% dos atritos acontecem fora da interface digital.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    },
    {
      myth: "Experiência é encantar",
      truth: "Encantamento cansa. Consistência fideliza.",
      detail:
        "O efeito wow dura uma vez. Confiança se constrói na repetição previsível de boas entregas.",
      evidence: "Reduzir esforço é 2x mais efetivo que aumentar encantamento.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    },
    {
      myth: "Experiência é simpatia",
      truth: "Gentileza sem resolução é frustração educada",
      detail:
        "Um processo que resolve em 30 segundos vale mais que 10 minutos de empatia sem resultado.",
      evidence: "Tempo de resolução importa 3x mais que tom de voz.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    },
  ],
};

/* ─── CAP 3: AS 4 DIMENSÕES DO RESULTADO ─── */
export const dimensoes = {
  overline: "03 — As 4 Dimensões do Resultado",
  headline: "O cliente veio buscar quatro coisas — e você só entrega uma",
  subtext: "Resultado não é binário. É multidimensional.",
  items: [
    {
      number: "01",
      title: "Funcional",
      description: "A tarefa concreta: transferir, receber, resolver, chegar.",
      question: "O mínimo aconteceu?",
      detail: "Essa é a dimensão que todo mundo mede. Mas é apenas a fundação. Se parar aqui, você é commodity.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
    {
      number: "02",
      title: "Emocional",
      description: "O que quer sentir durante e depois: segurança, alívio, orgulho, controle.",
      question: "Como o cliente se sentiu?",
      detail: "Emoção decide. Dados confirmam. O cliente pode ter o problema resolvido e sair irritado — porque o processo foi humilhante.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
    {
      number: "03",
      title: "Contextual",
      description: "O que precisa naquele momento específico, naquele canal, naquela urgência.",
      question: "Você adaptou à situação?",
      detail: "O mesmo cliente que aceita esperar 2 dias por e-mail não aceita esperar 2 minutos no chat. Contexto muda tudo.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    },
    {
      number: "04",
      title: "Relacional",
      description: "Ser reconhecido como alguém com histórico. Não repetir dados. Não recomeçar.",
      question: "Você lembrou quem ele é?",
      detail: "Quando o cliente precisa recontar a história a cada contato, recebe uma mensagem clara: você não importa o suficiente para eu lembrar.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    },
  ],
  workshop: {
    type: "application" as const,
    question: "Das 4 dimensões, qual sua operação entrega de forma consistente? Qual ignora completamente?",
    instructions: [
      "Liste os processos-chave da sua operação",
      "Avalie cada um nas 4 dimensões (1-5)",
      "Identifique onde há maior gap entre expectativa e entrega",
    ],
    timerMinutes: 7,
  },
};

/* ─── CAP 4: A FORMA — EXPERIÊNCIA APROPRIADA ─── */
export const forma = {
  overline: "04 — A Forma",
  headline: "Você resolve o problema. Mas da forma errada.",
  subtext: "A experiência apropriada tem 6 vetores. A maioria das empresas controla 2.",
  dimensions: [
    {
      title: "Contexto",
      question: "Onde o cliente está?",
      answer: "Genérico é o antônimo de apropriado. Tratar todos igual é tratar todos mal.",
    },
    {
      title: "Preferência",
      question: "Como gosta de interagir?",
      answer: "Não imponha o canal mais barato. Ofereça o canal mais eficiente para aquele cliente.",
    },
    {
      title: "Esforço",
      question: "Quanto trabalho ele faz?",
      answer: "96% dos clientes de alto esforço se tornam desleais. Esforço é o maior preditor de churn.",
    },
    {
      title: "Fluidez",
      question: "A jornada é contínua?",
      answer: "3 canais diferentes = 3 empresas diferentes. A omnicanalidade real é rara.",
    },
    {
      title: "Coerência",
      question: "A promessa se sustenta?",
      answer: "A propaganda diz uma coisa, a experiência real diz outra. Esse gap destrói confiança.",
    },
    {
      title: "Previsibilidade",
      question: "O cliente sabe o que esperar?",
      answer: "Quando ninguém precisa perguntar 'e aí?', funciona. A ansiedade da espera é um destruidor silencioso.",
    },
  ],
  insight: "O cliente não julga cada vetor isoladamente. Ele sente o conjunto. Uma falha grave em qualquer vetor contamina todos os outros.",
};

/* ─── CAP 5: O CUSTO DO SILÊNCIO (NOVO) ─── */
export const custoSilencio = {
  overline: "05 — O Custo do Silêncio",
  headline: "O cliente que não reclama é o mais perigoso",
  bigNumber: { value: 91, suffix: "%", label: "dos clientes insatisfeitos nunca reclamam" },
  stats: [
    { value: 73, suffix: "%", label: "saem sem aviso", context: "E contam para 9-15 pessoas sobre a experiência ruim." },
    { value: 4, suffix: "x", label: "mais caro adquirir", context: "Do que reter. Mas 89% dos orçamentos vão para aquisição." },
    { value: 12, suffix: "", label: "experiências positivas", context: "São necessárias para compensar uma experiência negativa." },
  ],
  pullQuote: "O silêncio do cliente não é satisfação. É desistência.",
  insight: "Empresas que medem apenas reclamações estão vendo a ponta do iceberg. O churn silencioso — clientes que simplesmente vão embora — é 20x maior que o declarado.",
  workshop: {
    type: "executive" as const,
    question: "Qual é a taxa de churn silencioso da sua operação? Você consegue medir?",
    context: "Se você não tem esse número, provavelmente está subestimando o problema em pelo menos 10x.",
    timerMinutes: 5,
  },
};

/* ─── CAP 6: O MAPA (NOVO) ─── */
export const mapa = {
  overline: "06 — O Mapa de CX",
  headline: "CX não é departamento. É arquitetura.",
  subtext: "A experiência do cliente é o resultado visível de como sua empresa funciona por dentro.",
  layers: [
    {
      title: "Cultura",
      description: "As crenças que orientam decisões quando ninguém está olhando.",
      position: "core",
    },
    {
      title: "Processos",
      description: "Os fluxos que conectam (ou desconectam) as áreas.",
      position: "middle",
    },
    {
      title: "Tecnologia",
      description: "As ferramentas que habilitam (ou limitam) a entrega.",
      position: "middle",
    },
    {
      title: "Pessoas",
      description: "O time que opera na linha de frente.",
      position: "middle",
    },
    {
      title: "Dados",
      description: "A inteligência que conecta tudo — ou deveria.",
      position: "middle",
    },
    {
      title: "Experiência",
      description: "O que o cliente sente. O resultado visível de tudo acima.",
      position: "outer",
    },
  ],
  insight: "Quando a experiência é ruim, a tentação é consertar a superfície. Mas o problema quase sempre está nas camadas de baixo.",
  provocacao: "Experiência é espelho. Desorganização interna sempre vaza para fora.",
};

/* ─── CAP 7: NA PRÁTICA ─── */
export const pratica = {
  overline: "07 — A equação na prática",
  headline: "Dois passageiros. Mesmo destino. Um volta. O outro nunca mais.",
  scenarios: {
    positive: {
      label: "Experiência apropriada",
      title: "Cenário A — Volta",
      description:
        "Carro limpo, no horário. Som baixo. Trajeto eficiente. Motorista discreto. Chega tranquilo, avalia com 5 estrelas. Abre o app na próxima vez sem pensar.",
    },
    negative: {
      label: "Experiência inapropriada",
      title: "Cenário B — Nunca mais",
      description:
        "8 minutos de atraso. Conversa forçada. Som alto. Rota longa. Chega irritado. Mesmo resultado — chegou ao destino. Mas a experiência destruiu o retorno.",
    },
  },
  insight:
    "Os dois passageiros chegaram ao destino. O resultado funcional foi idêntico. Mas apenas um voltou. A diferença está na equação.",
  analogias: [
    {
      contexto: "Hospital",
      resultado: "Diagnóstico correto em ambos",
      experienciaA: "Recepção ágil, médico atencioso, resultado claro",
      experienciaB: "4h de espera, médico apressado, resultado confuso",
    },
    {
      contexto: "Banco",
      resultado: "Empréstimo aprovado em ambos",
      experienciaA: "Simulação digital em 3 min, aprovação em 24h",
      experienciaB: "3 visitas à agência, 12 documentos, 15 dias",
    },
  ],
  workshop: {
    type: "discussion" as const,
    question: "Quantos dos seus clientes hoje estão no Cenário B — chegaram ao resultado, mas não voltariam?",
    context: "Pense nos últimos 3 meses. Quantas reclamações vocês não receberam — porque o cliente simplesmente foi embora?",
    timerMinutes: 5,
  },
};

/* ─── CAP 8: MATURIDADE ─── */
export const maturidade = {
  overline: "08 — A evolução da maturidade",
  headline: "De reativo a orquestrado: onde sua operação está?",
  stages: [
    {
      id: "reativo",
      label: "Nível 1",
      title: "Reativo",
      description: "Apaga incêndios. Resolve reclamações uma a uma. Sem métricas de experiência.",
      characteristics: ["Experiência é 'problema do atendimento'", "Nenhuma métrica de esforço do cliente", "Mapa de jornada não existe", "Feedback = reclamação"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    },
    {
      id: "estruturado",
      label: "Nível 2",
      title: "Estruturado",
      description: "NPS existe. Pesquisa acontece. Mas ações são pontuais.",
      characteristics: ["NPS acompanhado mensalmente", "Pesquisas pós-atendimento", "Ações reativas a detratores", "Mapa de jornada no PowerPoint"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      id: "proativo",
      label: "Nível 3",
      title: "Proativo",
      description: "Sinais de atrito detectados antes da reclamação. Dados alimentam decisões.",
      characteristics: ["Customer Effort Score ativo", "Speech analytics identifica padrões", "Redesenho de jornada baseado em dados", "CX tem budget próprio"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    },
    {
      id: "orquestrado",
      label: "Nível 4",
      title: "Orquestrado",
      description: "CX é sistêmico. Cada área sabe seu impacto. A experiência é o produto.",
      characteristics: ["CX como KPI do C-level", "IA preditiva para intervenção", "Jornada personalizada por segmento", "Experiência como vantagem competitiva mensurável"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
  ],
  workshop: {
    type: "application" as const,
    question: "Em qual nível de maturidade sua operação está hoje? O que precisaria mudar para subir um nível?",
    instructions: [
      "Identifique o nível atual (o caso típico, não o melhor caso)",
      "Liste 3 barreiras concretas para o próximo nível",
      "Defina 1 ação que poderia começar na segunda-feira",
    ],
    timerMinutes: 8,
  },
};

/* ─── CAP 9: REFERÊNCIAS (NOVO) ─── */
export const referencias = {
  overline: "09 — Quem está fazendo diferente",
  headline: "Três padrões de quem entendeu a equação",
  cases: [
    {
      title: "A empresa que eliminou o esforço",
      sector: "Telecom",
      insight: "Reduziu contatos por problema em 60% ao antecipar falhas via IA. O cliente só liga quando quer, não quando precisa.",
      metric: { value: 60, suffix: "%", label: "menos contatos reativos" },
    },
    {
      title: "A empresa que personalizou a jornada",
      sector: "Varejo",
      insight: "Criou 12 jornadas distintas por perfil de cliente. A mesma empresa entrega experiências diferentes para públicos diferentes.",
      metric: { value: 34, suffix: "%", label: "aumento em recompra" },
    },
    {
      title: "A empresa que integrou CX no P&L",
      sector: "Serviços financeiros",
      insight: "Cada ponto de NPS é traduzido em impacto financeiro. CX saiu do relatório de qualidade e entrou no board.",
      metric: { value: 2.3, suffix: "x", label: "ROI sobre investimento em CX" },
    },
  ],
};

/* ─── WORKSHOP BLOCKS ─── */
export const workshopDiscussions = [
  { id: "disc-eq", question: "Você mede resultado e experiência com a mesma seriedade?", sectionId: "equacao" },
  { id: "disc-dim", question: "Das 4 dimensões, qual sua operação ignora?", sectionId: "dimensoes" },
  { id: "disc-cust", question: "Qual é sua taxa de churn silencioso?", sectionId: "custosilencio" },
  { id: "disc-prat", question: "Quantos clientes estão no Cenário B?", sectionId: "pratica" },
  { id: "disc-mat", question: "Em qual nível de maturidade está?", sectionId: "maturidade" },
  { id: "disc-next", question: "Qual a primeira ação na segunda-feira?", sectionId: "workshop" },
];

/* ─── WORKSHOP FINAL ─── */
export const workshopFinal = {
  synthesis: {
    headline: "Antes de sair: o que muda na segunda-feira?",
    questions: [
      {
        type: "executive" as const,
        question: "Se você pudesse mudar uma coisa na experiência do seu cliente amanhã, o que seria?",
        context: "Não pense grande. Pense concreto. Uma coisa. Uma ação. Uma segunda-feira.",
        timerMinutes: 3,
      },
      {
        type: "discussion" as const,
        question: "Compartilhe com o grupo: qual foi o insight mais desconfortável desta sessão?",
        context: "Desconforto é sinal de descoberta. O que mais incomodou provavelmente é o que mais precisa de atenção.",
        timerMinutes: 5,
      },
      {
        type: "practice" as const,
        question: "Escreva 3 compromissos concretos que você levará desta sessão.",
        instructions: [
          "Um compromisso de medição (o que você vai começar a medir)",
          "Um compromisso de ação (o que você vai mudar)",
          "Um compromisso de comunicação (o que vai compartilhar com o time)",
        ],
        timerMinutes: 5,
      },
    ],
  },
};

/* ─── FECHAMENTO ─── */
export const fechamento = {
  headline: "O cliente não lembra do que você entregou. Lembra de como se sentiu ao longo do caminho.",
  insights: [
    "Entregar certo não basta. Se o concorrente entrega com menos atrito, o cliente vai.",
    "Encantar sem resolver é o pior investimento em CX. Invista em consistência.",
    "O que encanta um irrita outro. Experiência é contextual, não universal.",
    "O cliente não reclama do esforço. Simplesmente desaparece.",
    "Experiência é espelho. Desorganização interna sempre vaza para fora.",
  ],
  provocation:
    "A pergunta não é se experiência importa. É se você vai redesenhar a equação — ou esperar o concorrente fazer isso primeiro.",
  closingImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
};
