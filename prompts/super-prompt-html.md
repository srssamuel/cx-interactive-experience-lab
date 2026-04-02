# Super Prompt — Gerador de Experiências HTML Premium

> Este não é um formulário para preencher. É uma ferramenta de pensamento.
> Se você passar por cada seção sem desconforto, provavelmente não pensou o suficiente.

---

## 1. Pré-Requisitos (responda ANTES de qualquer coisa)

Três perguntas que funcionam como portão. Se não conseguir responder com clareza, o projeto não está pronto para ser construído.

### Pergunta 1: Qual é a tese em uma frase?

> Se você precisa de um parágrafo para explicar, ainda não entendeu o que quer dizer.
> Uma tese forte tem sujeito, verbo e consequência. Ex: "A maioria dos times de CS mede as coisas erradas — e isso está matando a retenção sem que ninguém perceba."

```
TESE EM UMA FRASE:
```

### Pergunta 2: O que muda na cabeça do leitor depois de consumir este material?

> Não vale "ele vai saber mais sobre X". Isso é Wikipedia.
> Qual crença vai ser desafiada? Qual modelo mental vai ser substituído? Qual decisão ele vai tomar diferente na segunda-feira?

```
TRANSFORMAÇÃO COGNITIVA ESPERADA:
```

### Pergunta 3: Por que este material precisa existir? O que ele oferece que não existe?

> Se a resposta for "porque precisamos de um conteúdo sobre esse tema" — pare aqui.
> O mundo não precisa de mais um material genérico. Qual é o ângulo único? Qual é a provocação que só você pode fazer?

```
RAZÃO DE EXISTIR:
```

**Se as três respostas não forem fortes, volte e refine. O resto do prompt depende delas.**

---

## 2. Briefing Ativo

Cada campo tem orientação provocativa. Preencher no piloto automático vai gerar resultado medíocre.

```
TEMA:
Não o assunto genérico, mas o ângulo específico.
Não "Customer Success" — mas "Por que 90% dos times de CS medem as coisas erradas".
Não "Inteligência Artificial" — mas "O que acontece quando IA sabe mais sobre seu cliente do que você".
→

TESE:
Uma afirmação que alguém poderia discordar. Se todos concordam, não é uma tese — é lugar-comum.
Teste: um líder experiente leria isso e sentiria necessidade de responder? Se sim, é forte.
→

HEADLINE:
A promessa intelectual em uma frase. Deve criar urgência de leitura.
Não é um título de blog. É o tipo de frase que alguém lê e pensa "preciso ver isso agora".
Teste: você compartilharia isso no LinkedIn sem vergonha? Causaria cliques sem clickbait?
→

PÚBLICO:
Quem é a pessoa sentada do outro lado da tela?
Nível de senioridade, contexto profissional, dor que enfrenta, sofisticação intelectual.
Não vale "profissionais de marketing". Vale "heads de marketing em SaaS B2B que estão perdendo
pipeline e não sabem se o problema é posicionamento, produto ou execução".
→

FORMATO:
[ ] Single-file HTML (experiência completa autocontida)
[ ] Multi-page (narrativa dividida em capítulos)
[ ] Dashboard narrativo (dados + storytelling)
→

TOM:
Escolha UM tom dominante e UM tom de suporte. Tom não é decoração — é posicionamento.
- Provocativo: desafia, incomoda, força reflexão
- Visionário: aponta futuros, inspira mudança
- Executivo: direto, estratégico, orientado a decisão
- Didático: ensina com estrutura, constrói conhecimento
- Editorial: opinativo, autoral, com ponto de vista forte
→ Dominante:
→ Suporte:

EXTENSÃO:
[ ] Curto (~5 seções) — Manifesto, provocação, ponto de vista
[ ] Médio (~8 seções) — Playbook, framework, análise
[ ] Longo (~12+ seções) — Guia completo, experiência imersiva
```

---

## 3. Arquitetura Narrativa

Não comece a escrever sem saber qual arco vai usar. Narrativa sem estrutura é só texto comprido.

### Arcos Disponíveis

Escolha o arco que melhor serve a sua tese. Cada um tem uma lógica interna diferente.

**Arco do Dado Provocador**
Estatística surpreendente → Por que isso importa → O que está por trás → Framework de ação → Provocação final.
*Melhor para:* quando você tem um número que destrói uma crença comum. O dado é o gancho, mas o valor está na explicação.

**Arco do Contraste Temporal**
Como era → O que mudou → Onde estamos → Para onde vamos → O que fazer agora.
*Melhor para:* narrativas de evolução, transformações de mercado, mudanças de paradigma. Funciona quando o futuro é mais interessante que o presente.

**Arco do Framework Revelador**
Problema que todos conhecem → Por que soluções atuais falham → Novo modelo mental → Como aplicar → O que muda.
*Melhor para:* quando você tem uma forma nova de pensar sobre algo antigo. O valor está no "aha moment" do framework.

**Arco da Provocação**
Afirmação ousada → Evidências que sustentam → Contra-argumentos honestos → Resolução → Desafio ao leitor.
*Melhor para:* manifestos, pontos de vista fortes, posicionamento intelectual. Exige coragem editorial.

### Seções Planejadas

Preencha com intenção. Cada seção precisa de um nome (o que o leitor vê) e um objetivo narrativo (o que acontece na cabeça dele).

```
ARCO ESCOLHIDO:

SEÇÕES:
1. [nome] — [objetivo narrativo: o que esta seção faz na mente do leitor]
2. [nome] — [objetivo narrativo]
3. [nome] — [objetivo narrativo]
4. [nome] — [objetivo narrativo]
5. [nome] — [objetivo narrativo]
...

MOMENTO DE VIRADA:
Em qual seção acontece o insight principal? Qual é esse insight?
→
```

---

## 4. Diretrizes de Design

### Paletas Pré-Aprovadas

Não perca tempo inventando cores. Use uma destas ou adapte a partir delas.

**Dark Editorial** — Sofisticação noturna, ideal para conteúdo executivo e provocativo.
| Papel | Cor | Hex |
|-------|-----|-----|
| Background | Azul profundo | `#0a1628` |
| Surface | Azul escuro | `#111d33` |
| Primary | Teal elétrico | `#00d4aa` |
| Accent | Índigo vibrante | `#6366f1` |
| Text | Branco azulado | `#e8edf5` |
| Text secondary | Cinza azulado | `#8b95a8` |

**Light Minimal** — Clareza e respiro, ideal para frameworks e conteúdo didático.
| Papel | Cor | Hex |
|-------|-----|-----|
| Background | Quase branco | `#fafafa` |
| Surface | Branco puro | `#ffffff` |
| Primary | Azul escuro | `#1a1a2e` |
| Accent | Vermelho editorial | `#e63946` |
| Text | Quase preto | `#1a1a2e` |
| Text secondary | Cinza médio | `#6b7280` |

**Warm Premium** — Elegância quente, ideal para storytelling e narrativas de marca.
| Papel | Cor | Hex |
|-------|-----|-----|
| Background | Marrom profundo | `#1a1412` |
| Surface | Marrom escuro | `#2a2220` |
| Primary | Dourado suave | `#d4a574` |
| Accent | Bronze escuro | `#8b5e3c` |
| Text | Bege claro | `#f0ebe5` |
| Text secondary | Cinza quente | `#a39890` |

**Bold Statement** — Alto contraste, ideal para manifestos e provocações visuais.
| Papel | Cor | Hex |
|-------|-----|-----|
| Background | Preto puro | `#000000` |
| Surface | Quase preto | `#111111` |
| Primary | Verde neon | `#00ff88` |
| Accent | Rosa choque | `#ff3366` |
| Text | Branco puro | `#ffffff` |
| Text secondary | Cinza neutro | `#888888` |

### Combinacoes Tipograficas Recomendadas

Pares testados. Use direto do Google Fonts.

| Estilo | Titulos | Corpo | Quando Usar |
|--------|---------|-------|-------------|
| **Editorial Classico** | Playfair Display | Inter | Conteudo autoral, storytelling executivo |
| **Moderno Limpo** | Space Grotesk | DM Sans | Frameworks, dashboards, tech-forward |
| **Bold Statement** | Bebas Neue | Source Sans 3 | Manifestos, provocacoes, alto impacto |

### Atmosfera

```
PALETA ESCOLHIDA: [nome ou customizada]
TIPOGRAFIA ESCOLHIDA: [par ou customizada]
ATMOSFERA GERAL: [descreva o feeling — ex: "sala de war room estratégica", "keynote da Apple", "editorial do Financial Times"]
REFERENCIAS VISUAIS: [o que inspira — sites, publicações, experiências]
```

---

## 5. Mapa de Interacoes

Interatividade não é decoração. Cada interação deve servir um objetivo cognitivo.

| Objetivo Cognitivo | Padrão de Interação | Quando Usar |
|--------------------|---------------------|-------------|
| **Comparar** | Tabs / Toggle | Perspectivas diferentes, antes/depois, modelos opostos |
| **Aprofundar** | Accordion / Expandir | Conteúdo opcional que enriquece sem poluir o fluxo principal |
| **Evoluir** | Timeline interativa | Progressão temporal, evolução conceitual, fases |
| **Descobrir** | Scroll Reveal / Animação de entrada | Narrativa sequencial, revelação progressiva de argumento |
| **Contextualizar** | Hover tooltips / Cards flip | Dados complementares, definições, exemplos sob demanda |
| **Escolher** | Filtros / Seletores | Exploração por dimensão, personalização de perspectiva |
| **Calcular** | Sliders / Inputs interativos | Simulações, ROI, impacto personalizado |
| **Navegar** | Menu fixo / Progress bar | Orientação em materiais longos, salto entre seções |

### Interacoes Planejadas

```
INTERAÇÕES:
1. [tipo] em [seção] — [objetivo cognitivo específico]
2. [tipo] em [seção] — [objetivo cognitivo específico]
3. [tipo] em [seção] — [objetivo cognitivo específico]
...

SCROLL BEHAVIOR: [ ] Smooth sections  [ ] Reveals progressivos  [ ] Parallax sutil
NAVEGAÇÃO: [ ] Fixa lateral  [ ] Fixa topo  [ ] Contextual por seção  [ ] Progress bar
```

---

## 6. Checklist Pre-Geracao

Validação rápida antes de pedir a geração. Se marcar menos de 8, volte e refine.

```
[ ] A tese está clara e é debatível (não é lugar-comum)
[ ] O público está definido com especificidade (não é "todo mundo")
[ ] O arco narrativo tem lógica interna (não é lista de tópicos)
[ ] Cada seção tem um papel claro na narrativa
[ ] O momento de virada está identificado
[ ] A paleta foi escolhida com intenção (não por default)
[ ] Cada interação planejada serve um objetivo cognitivo
[ ] O tom está definido e é consistente com público + tese
[ ] O headline criaria urgência de leitura no público-alvo
[ ] O material oferece algo que não existe em outro lugar
```

---

## 7. Skills Recomendados por Tipo de Projeto

Ative os skills certos para potencializar a geração. Skills estão em `/skills`.

| Tipo de Projeto | Skills Obrigatórios | Skills Complementares |
|-----------------|--------------------|-----------------------|
| **Manifesto sobre tendência** | `executive-storytelling` + `future-trends` + `premium-ui-system` | `copy-polish-ptbr` + `microinteraction-designer` |
| **Playbook / Framework** | `executive-storytelling` + `interactive-learning-design` + `html-singlefile-builder` | `content-curator` + `premium-ui-system` |
| **Análise de mercado CX/CS** | `cx-strategy` + `customer-success-thinking` + `executive-storytelling` | `future-trends` + `content-curator` |
| **Experiência imersiva de aprendizagem** | `interactive-learning-design` + `premium-ui-system` + `microinteraction-designer` | `executive-storytelling` + `copy-polish-ptbr` |
| **Ponto de vista editorial** | `executive-storytelling` + `copy-polish-ptbr` + `content-curator` | `premium-ui-system` + `microinteraction-designer` |
| **Dashboard narrativo** | `html-singlefile-builder` + `premium-ui-system` + `cx-strategy` | `interactive-learning-design` + `executive-storytelling` |

**Sempre inclua:** `html-singlefile-builder` (é a base técnica) e `final-quality-review` (é o controle de qualidade).

---

## 8. Exemplo de Uso Completo

Veja como um briefing forte se parece quando todos os campos estão preenchidos com intenção.

### Pre-Requisitos (o pensamento antes do briefing)

```
TESE EM UMA FRASE:
A maioria dos times de CS ainda mede sucesso por churn — quando deveria medir
por valor criado — e essa miopia está transformando CS em bombeiro ao invés de arquiteto.

TRANSFORMAÇÃO COGNITIVA ESPERADA:
O leitor vai parar de defender suas métricas atuais de CS e vai questionar se está
medindo atividade ou impacto. Na segunda-feira, vai pedir uma revisão do dashboard do time.

RAZÃO DE EXISTIR:
Todo mundo fala que "CS precisa ser mais estratégico" mas ninguém mostra concretamente
o que medir, como estruturar e qual é o modelo mental correto. Este material entrega
o framework que falta.
```

### Briefing

```
TEMA: Por que 90% dos times de CS medem as coisas erradas — e o framework para corrigir isso
TESE: CS está evoluindo de retenção reativa para orquestração proativa de valor, e quem não
      perceber isso vai virar commodity em 2 anos.
HEADLINE: "Customer Success não é sobre salvar clientes. É sobre construir o futuro junto com eles."
PÚBLICO: Líderes de CS e CX (Head, VP, C-level) em empresas SaaS B2B que sentem que o time
         apaga incêndio em vez de gerar valor, mas não sabem como mudar a estrutura.
FORMATO: Single-file HTML
TOM: Dominante: Provocativo / Suporte: Visionário
EXTENSÃO: Médio (~8 seções)
```

### Arquitetura

```
ARCO ESCOLHIDO: Arco do Framework Revelador

SEÇÕES:
1. "O número que ninguém quer ver" — Choque: 78% medem sucesso por churn. Zero por valor criado.
2. "A armadilha da retenção" — Diagnóstico: por que o modelo atual parece funcionar mas não funciona.
3. "Três eras do CS" — Contexto: timeline de onde viemos e para onde vamos.
4. "O mito do CSM herói" — Provocação: o modelo individual não escala.
5. "CS como sistema operacional" — Virada: o novo modelo mental (framework central).
6. "As métricas que importam" — Prática: o que medir quando valor é o norte.
7. "O roadmap de 90 dias" — Ação: como começar a transição.
8. "A pergunta que fica" — Fechamento: provocação que persiste depois de fechar a aba.

MOMENTO DE VIRADA:
Seção 5. O insight é que CS não é um time — é um sistema operacional que orquestra
produto, dados e relacionamento. Quando isso clica, todo o resto faz sentido.
```

### Design e Interações

```
PALETA: Dark Editorial
TIPOGRAFIA: Editorial Clássico (Playfair Display + Inter)
ATMOSFERA: Keynote premium com DNA editorial. Como se o Financial Times fizesse um TED Talk interativo.

INTERAÇÕES:
1. Counter animado em Seção 1 — impacto visceral do dado de abertura
2. Timeline interativa em Seção 3 — navegar pelas 3 eras de CS com contexto
3. Tabs comparativas em Seção 5 — CS reativo vs proativo vs orquestrador lado a lado
4. Cards com flip em Seção 6 — métricas tradicionais vs métricas de valor
5. Checklist interativo em Seção 7 — roadmap que o leitor pode personalizar
6. Scroll reveals progressivos — narrativa que se revela conforme o leitor avança

SCROLL BEHAVIOR: Reveals progressivos
NAVEGAÇÃO: Fixa lateral com progress bar
```

### Skills Ativados

```
Obrigatórios: cx-strategy + customer-success-thinking + executive-storytelling
Complementares: future-trends + premium-ui-system + interactive-learning-design
Base: html-singlefile-builder + final-quality-review
```

---

## 9. Pos-Geracao

O HTML gerado é um rascunho sofisticado, não o produto final.

### Ciclo de Refinamento

1. **Validação estrutural** — Execute o checklist de `/references/quality-check.md`
2. **Revisão de copy** — Ative `copy-polish-ptbr` e peça uma passada no texto
3. **Teste de interações** — Abra no browser, teste cada interação, verifique responsividade
4. **Teste de narrativa** — Leia do início ao fim como se fosse a primeira vez. A tese chega clara? O arco funciona? Cada seção justifica sua existência?
5. **Teste do "e daí?"** — Para cada seção, pergunte: "se eu removesse isso, o material perderia algo?" Se não, remova.
6. **Exportação** — HTML final vai para `/output`

### Perguntas Finais de Qualidade

```
- Alguém compartilharia isso espontaneamente?
- O material respeita a inteligência do leitor?
- Cada interação ensina algo ou é só enfeite?
- A tese está mais forte no final do que no início?
- Você tem orgulho de assinar embaixo?
```

---

> **Lembrete:** Este prompt não é burocracia. É disciplina criativa.
> Quanto mais honesto você for nas respostas, melhor o resultado.
> Pular seções é fácil. Fazer material medíocre também.
