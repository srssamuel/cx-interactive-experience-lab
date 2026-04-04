# Master Prompt — Gerador de Experiências Digitais Premium

> Este não é um formulário para preencher. É uma ferramenta de pensamento.
> Se você passar por cada seção sem desconforto, provavelmente não pensou o suficiente.

---

## Pré-requisitos Obrigatórios

Antes de preencher qualquer briefing, responda estas três perguntas. Se não conseguir, o projeto não está maduro.

### 1. Qual é a tese em uma frase?
Não é o tema. É a posição. "Customer Experience" é tema. "A experiência que seu cliente vive é o reflexo exato da desorganização interna da sua empresa" é tese.

### 2. Que transformação cognitiva este material provoca?
Qual modelo mental o leitor tem ANTES — e qual ele terá DEPOIS? Se não mudar nada, o material é informativo, não transformador.

### 3. Por que este material precisa existir como experiência interativa?
Se um PDF resolveria, não faça uma experiência. O formato interativo deve ser justificado pela pedagogia: revelar progressivamente, comparar dinamicamente, explorar por camadas, facilitar discussão.

---

## Briefing da Experiência

### TEMA
O assunto geral. Ex: "Customer Experience em Contact Centers"

### TESE
A posição que o material defende. Uma frase provocativa. Ex: "Seu NPS é alto. Seu cliente está saindo. O que você não está medindo?"

### HEADLINE
A promessa intelectual em 12 palavras ou menos. Deve funcionar sozinha num slide de palco.

### PÚBLICO
- Primário: quem vai consumir diretamente
- Contexto: em que situação (workshop, reunião, estudo individual)
- Nível: C-level, gerência, operação, misto

### FORMATO
- [ ] Portal interativo premium (exploração livre)
- [ ] Microsite de workshop (navegação guiada com pause points)
- [ ] Experiência de apresentação (keynote digital, chapter navigation)
- [ ] Landing narrative (scroll storytelling cinematográfico)
- [ ] Peça institucional (posicionamento, demonstração de maturidade)
- [ ] Híbrido (combinar 2+ formatos)

### TOM
- Tom dominante: (provocativo / analítico / visionário / pragmático)
- Tom de suporte: (empático / técnico / inspirador / urgente)

### MODOS DE USO
- [ ] Leitura/exploração
- [ ] Apresentação (fullscreen, keyboard nav)
- [ ] Workshop (discussion prompts, timer, pause points)
- Indicar qual é o modo primário.

---

## Arco Narrativo

Escolha o arco que melhor serve a tese:

### 1. Dado Provocador
Abertura com estatística ou fato que quebra certeza → revelação do que está por trás → framework para reinterpretar → caso prático → provocação final.

**Quando usar**: Quando há dados surpreendentes que contradizem a percepção comum.

### 2. Contraste Temporal
"Antes era assim → hoje mudou para isso → amanhã será assim" → as implicações → o que fazer agora.

**Quando usar**: Quando o tema envolve evolução/transformação e o público precisa ver a trajetória.

### 3. Framework Revelador
Mostrar o fenômeno → revelar que o framework mental atual está incompleto → introduzir novo framework → aplicar progressivamente → fechar com visão expandida.

**Quando usar**: Quando há um modelo novo que reorganiza o entendimento.

### 4. Provocação Sistêmica
Pergunta incômoda → desconstrução de premissas → revelação das conexões ocultas → mapa sistêmico → chamada para posicionamento.

**Quando usar**: Quando o objetivo é questionar premissas estabelecidas.

---

## Direção de Design

### Paleta de Cores
Escolha conforme o tema central:

| Tema | Accent Primary | Accent Secondary | Atmosfera |
|------|---------------|-----------------|-----------|
| CX / Experiência | Âmbar (#F59E0B) | Teal (#0D9488) | Tensão entre urgência e profundidade |
| Dados / IA | Violeta (#8B5CF6) | Azul (#3B82F6) | Tecnologia e inovação |
| Gestão / Liderança | Dourado (#D4A853) | Slate (#64748B) | Autoridade e sofisticação |
| Atendimento | Coral (#F97316) | Emerald (#10B981) | Energia e resultado |
| Estratégia / Futuro | Sky Blue (#0EA5E9) | Violet (#7C3AED) | Visão e ambição |

O background base é sempre `#08090E` (deep navy). Nunca preto puro.

### Tipografia
- Display: Instrument Serif (para headlines e provocações)
- Body: Inter (para corpo de texto)
- Mono: JetBrains Mono (para dados, stats, labels técnicos)

### Atmosfera Visual
- [ ] Editorial (tipografia dominante, espaço generoso, poucos elementos)
- [ ] Cinematográfico (imagens/vídeos fortes, overlays, profundidade)
- [ ] Tecnológico (partículas, 3D, animações de dados, grids)
- [ ] Executivo (limpo, sóbrio, autoridade, sem excessos)

---

## Mapa de Interações

Para cada seção, defina se há interação e qual o propósito cognitivo:

| Objetivo Cognitivo | Componente React | Exemplo |
|---|---|---|
| Comparar perspectivas | `<Tabs>` | "CX Reativo vs Proativo vs Estratégico" |
| Aprofundar sob demanda | `<Accordion>` ou `<ExpandableCard>` | "Clique para ver o modelo completo" |
| Revelar progressivamente | `<ScrollReveal>` | Seções que aparecem conforme scroll |
| Mostrar evolução | Timeline interativa | "3 eras do Customer Success" |
| Contrastar antes/depois | `<ComparisonCard>` | Cenário A vs Cenário B |
| Explorar dimensões | `<NumberedCard>` em grid | "4 pilares — explore cada um" |
| Destacar dados | `<StatBlock>` com `<CounterAnimation>` | Números que animam ao entrar na viewport |
| Navegar conteúdo | `<ChapterNav>` | Barra superior com progresso |
| Provocar discussão | `<DiscussionPrompt>` | Pergunta + timer (workshop mode) |
| Pausar para reflexão | `<PausePoint>` | Divisor com mensagem |

### Teste obrigatório para cada interação:
> "Se eu remover essa interação e mostrar tudo estático, perco valor pedagógico?"
> Se não, remova.

---

## Planejamento de Motion

| Contexto | Tecnologia | Efeito |
|---|---|---|
| Hero entrance | Framer Motion | Stagger de elementos (overline → title → stats → CTA) |
| Scroll reveals | Framer Motion `useInView` | Fade up + translate ao entrar no viewport |
| Counter animations | Framer Motion `animate` | Números que contam de 0 ao valor final |
| Cards stagger | `<StaggerGroup>` | Cards aparecem em sequência com delay |
| Tab/accordion transitions | Framer Motion `AnimatePresence` | Crossfade entre conteúdos |
| Background 3D | Three.js via `<ParticleField>` | Partículas sutis no hero (lazy loaded) |
| Parallax | Framer Motion `useScroll` | Layers em velocidades diferentes |

**Regra**: Toda animação deve ter propósito narrativo. Se é apenas "bonito", remova.

---

## Planejamento de Assets

Para cada seção, decidir:

| Seção | Tipo de Asset | Fonte | Propósito |
|---|---|---|---|
| Hero | Partículas 3D ou vídeo loop | Three.js / Pexels | Impacto imediato, sensação premium |
| Conceito | Sem asset (tipografia pura) | — | Força o foco na ideia |
| Framework | Diagrama/visual | Código (componentes) | Visualizar a estrutura |
| Caso prático | Imagem contextual | Unsplash curado | Ancorar em realidade |
| Fechamento | Sem asset (provocação pura) | — | Impacto emocional |

**Regra**: Asset como argumento, nunca como decoração.

---

## Planejamento de Workshop/Apresentação

### Capítulos
Defina 5-8 capítulos com:
- ID (para navegação)
- Label (para chapter nav)
- Número (para identidade visual)
- Tempo estimado (para facilitação)

### Discussion Prompts
Posicione pelo menos 1 `<DiscussionPrompt>` com:
- Pergunta que conecte o conteúdo à realidade do público
- Contexto opcional para guiar a conversa
- Timer opcional (3-7 minutos)

### Pause Points
Use `<PausePoint>` entre seções densas para:
- Dar breathing room visual
- Sinalizar transição de capítulo
- Permitir que o facilitador faça intervenções

---

## Skills a Ativar

| Tipo de Projeto | Skills Obrigatórios | Skills Opcionais |
|---|---|---|
| CX / Experiência | cx-strategy, executive-storytelling, premium-design-system | content-curator, future-trends |
| CS / Retenção | customer-success-thinking, executive-storytelling | cx-strategy |
| Dados / IA | content-curator, future-trends, executive-storytelling | premium-design-system |
| Gestão / Liderança | executive-storytelling, content-curator | cx-strategy |
| Qualquer projeto | experience-builder, cinematic-motion, quality-gates | microinteraction-designer |

Sempre ativar: `experience-builder`, `copy-polish-ptbr`, `quality-gates`.

---

## Checklist Pré-Geração

Antes de escrever código, confirmar:

- [ ] Tese definida em uma frase provocativa
- [ ] Headline funciona sozinha num slide
- [ ] Arco narrativo escolhido e mapeado
- [ ] Paleta de cores definida (não cyan-indigo)
- [ ] Interações planejadas com propósito cognitivo
- [ ] Motion planejado (onde GSAP, onde Framer, onde 3D)
- [ ] Capítulos definidos (5-8)
- [ ] Pelo menos 1 discussion prompt planejado
- [ ] Assets definidos (tipo + fonte + propósito)
- [ ] Skills relevantes ativados

---

## Exemplo Completo

**TEMA**: Customer Experience em Contact Centers
**TESE**: "Resultado certo + forma errada = fracasso silencioso"
**HEADLINE**: "Seu cliente chegou ao destino. Mas não voltaria a viajar com você."
**PÚBLICO**: Diretoria e gerência de operações de contact center
**FORMATO**: Experiência de apresentação + workshop
**TOM**: Provocativo + analítico
**MODOS**: Apresentação (primário) + Workshop
**ARCO**: Framework Revelador (revelar a equação invisível)
**PALETA**: Âmbar + Teal (CX/Experiência)
**CAPÍTULOS**: Início, A Equação, Mitos, Resultado, Experiência, Na Prática, Discussão, Fechamento
**DISCUSSION PROMPT**: "Quantos dos seus clientes hoje estão no Cenário B?"
**MOTION**: Partículas 3D no hero, stagger em cards, counter animation em stats
**ASSETS**: Partículas generativas no hero, tipografia pura nas seções conceituais

---

## Depois de Gerar

1. Rodar quality gates (consultar `skills/quality-gates.md`)
2. Validar em mobile (375px), tablet (768px), desktop (1440px)
3. Testar keyboard navigation (arrows + tab)
4. Testar prefers-reduced-motion
5. Verificar que nenhum padrão de "cara de IA" está presente
6. Classificar: S / A / B / C
7. Se B ou inferior, voltar para refinamento
