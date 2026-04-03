export const chapters = [
  { id: "hero", label: "Início", number: "" },
  { id: "equacao", label: "A Equação", number: "01" },
  { id: "mitos", label: "Mitos", number: "02" },
  { id: "resultado", label: "Resultado", number: "03" },
  { id: "experiencia", label: "Experiência", number: "04" },
  { id: "caso", label: "Na Prática", number: "05" },
  { id: "discussao", label: "Discussão", number: "" },
  { id: "fechamento", label: "Fechamento", number: "" },
];

export const hero = {
  overline: "Experiência do Cliente",
  headline: "Seu cliente chegou ao destino.",
  headlineAccent: "Mas não voltaria a viajar com você.",
  subtext:
    "Entregar o resultado certo da forma errada tem nome: fracasso silencioso.",
  stats: [
    { value: 73, suffix: "%", label: "saem sem reclamar" },
    { value: 96, suffix: "%", label: "alto esforço = deslealdade" },
  ],
  cta: "Explorar a equação",
};

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
};

export const myths = {
  overline: "02 — O que quase todo mundo entende errado",
  headline: "Cinco crenças que estão te atrasando",
  subtext: "Toque para revelar o que está por trás de cada uma.",
  items: [
    {
      myth: "\"Experiência é atendimento\"",
      truth: "Atendimento é remédio, não saúde",
      detail:
        "A melhor experiência resolve antes de gerar contato. Quando o cliente liga, algo já falhou.",
    },
    {
      myth: "\"Experiência é NPS\"",
      truth: "NPS mede intenção, não comportamento",
      detail:
        "Clientes dão nota 9 e cancelam no mês seguinte. Intenção e ação são coisas diferentes.",
    },
    {
      myth: "\"Experiência é UX\"",
      truth: "UX é uma fatia, não o bolo inteiro",
      detail:
        "Experiência inclui compra, entrega, suporte, cobrança, renovação. UX é apenas a interface.",
    },
    {
      myth: "\"Experiência é encantar\"",
      truth: "Encantamento cansa. Consistência fideliza.",
      detail:
        "O efeito wow dura uma vez. Confiança se constrói na repetição previsível de boas entregas.",
    },
    {
      myth: "\"Experiência é simpatia\"",
      truth: "Gentileza sem resolução é frustração educada",
      detail:
        "Um processo que resolve em 30 segundos vale mais que 10 minutos de empatia sem resultado.",
    },
  ],
};

export const resultado = {
  overline: "03 — Resultado Esperado",
  headline: "O cliente veio buscar quatro coisas — e você só entrega uma",
  dimensions: [
    {
      number: "01",
      title: "Funcional",
      description: "A tarefa concreta: transferir, receber, resolver, chegar. O mínimo esperado.",
    },
    {
      number: "02",
      title: "Emocional",
      description: "O que quer sentir durante e depois: segurança, alívio, orgulho, controle.",
    },
    {
      number: "03",
      title: "Contextual",
      description: "O que precisa naquele momento específico, naquele canal, naquela urgência.",
    },
    {
      number: "04",
      title: "Relacional",
      description: "Ser reconhecido como alguém com histórico. Não repetir dados. Não recomeçar.",
    },
  ],
};

export const experiencia = {
  overline: "04 — Experiência Apropriada",
  headline: "Você resolve o problema. Mas da forma errada.",
  dimensions: [
    {
      title: "Contexto",
      question: "Onde o cliente está?",
      answer: "Genérico é o antônimo de apropriado.",
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
      answer: "3 canais diferentes = 3 empresas diferentes.",
    },
    {
      title: "Coerência",
      question: "A promessa se sustenta?",
      answer: "A propaganda diz uma coisa, a experiência real diz outra.",
    },
    {
      title: "Previsibilidade",
      question: "O cliente sabe o que esperar?",
      answer: "Quando ninguém precisa perguntar 'e aí?', funciona.",
    },
  ],
};

export const caso = {
  overline: "05 — A equação na prática",
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
};

export const discussion = {
  question:
    "Quantos dos seus clientes hoje estão no Cenário B — chegaram ao resultado, mas não voltariam?",
  context:
    "Pense nos últimos 3 meses. Quantas reclamações vocês não receberam — porque o cliente simplesmente foi embora?",
  timerMinutes: 5,
};

export const fechamento = {
  headline:
    "O cliente não lembra do que você entregou. Lembra de como se sentiu ao longo do caminho.",
  insights: [
    "Entregar certo não basta. Se o concorrente entrega com menos atrito, o cliente vai.",
    "Encantar sem resolver é o pior investimento em CX. Invista em consistência.",
    "O que encanta um irrita outro. Experiência é contextual, não universal.",
    "O cliente não reclama do esforço. Simplesmente desaparece.",
    "Experiência é espelho. Desorganização interna sempre vaza para fora.",
  ],
  provocation:
    "A pergunta não é se experiência importa. É se você vai redesenhar a equação — ou esperar o concorrente fazer isso primeiro.",
};
