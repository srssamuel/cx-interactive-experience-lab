# CLAUDE.md — Manual Operacional do CX Interactive Experience Lab

Este arquivo governa toda produção neste repositório. Leia integralmente antes de gerar qualquer HTML.

---

## O Que Este Projeto É

Um estúdio de criação de experiências digitais interativas em HTML. Cada material produzido aqui deve funcionar como uma peça editorial — com a profundidade de um playbook, o impacto visual de uma keynote e a interatividade de uma ferramenta de aprendizagem.

**Não é** um gerador de landing pages, sites institucionais ou dashboards genéricos.

---

## Antes de Gerar Qualquer HTML

Sempre execute estas etapas mentais antes de escrever código:

1. **Definir a tese** — Qual ideia central este material defende? Se não houver tese, não comece.
2. **Formular o headline** — Uma frase que funcione sozinha como promessa intelectual.
3. **Mapear o arco** — Abertura (gancho) → Desenvolvimento (argumento) → Clímax (virada) → Fechamento (provocação).
4. **Escolher a paleta emocional** — Que sentimento o material deve provocar? (urgência, descoberta, autoridade, provocação)
5. **Planejar interações** — Para cada interação, responder: "O que o usuário aprende ao interagir com isso?"
6. **Consultar skills relevantes** — Ler os arquivos em `/skills` que se aplicam ao projeto.

Se pular essas etapas, o resultado será genérico.

---

## Princípios Inegociáveis

1. **Nunca genérico** — Se a primeira frase poderia estar em qualquer site, reescreva.
2. **Sempre com tese** — Todo material defende uma ideia. Neutralidade é mediocridade.
3. **Storytelling como estrutura** — Não é decoração. A narrativa é a espinha dorsal.
4. **Interatividade cognitiva** — Cada clique deve ensinar, revelar ou provocar.
5. **Presente + Futuro** — Ancorar no agora, apontar para o que vem.
6. **Forma = Conteúdo** — O design comunica antes do texto ser lido.

---

## Como Usar a Pasta /skills

Cada arquivo em `/skills` é um modo especialista. Ative os relevantes conforme o projeto:

| Skill | Ativar Quando |
|-------|---------------|
| `cx-strategy` | O tema envolve jornada, experiência, NPS, ecossistema de CX |
| `customer-success-thinking` | O tema é retenção, expansão, adoção, CS como disciplina |
| `executive-storytelling` | Sempre — é o skill mais transversal |
| `interactive-learning-design` | Ao planejar quais interações usar e por quê |
| `premium-ui-system` | Ao definir paleta, tipografia, atmosfera visual |
| `html-singlefile-builder` | Na hora de escrever o código |
| `microinteraction-designer` | Ao refinar hover states, transições, animações |
| `future-trends` | Quando o material precisa de visão de futuro |
| `content-curator` | Na fase de pesquisa e seleção de conteúdo |
| `copy-polish-ptbr` | Na fase final de refinamento do texto |
| `final-quality-review` | Última etapa antes de entregar |

**Fluxo típico**: `content-curator` → `executive-storytelling` → `cx-strategy` ou `customer-success-thinking` → `interactive-learning-design` → `premium-ui-system` → `html-singlefile-builder` → `microinteraction-designer` → `copy-polish-ptbr` → `final-quality-review`

---

## Critérios de Design — Regras Concretas

### Paleta
- Máximo 4 cores: background, texto, primária (acento), secundária
- Dark mode como padrão (bg: #0a-#12 range, nunca preto puro #000)
- Cor primária com saturação alta para contraste em dark (teal, violeta, âmbar)
- Texto principal: #e0-#f0 range (nunca branco puro #fff para corpo)
- Texto secundário: #80-#95 range
- Bordas: rgba(255,255,255, 0.06-0.12)

### Tipografia
- Máximo 2 famílias: display (títulos) + body (texto)
- Combinações recomendadas:
  - Playfair Display + Inter (clássico editorial)
  - Space Grotesk + Inter (tech contemporâneo)
  - Fraunces + DM Sans (bold e sofisticado)
  - Instrument Serif + Instrument Sans (elegante e coeso)
- Títulos: clamp() com min 2rem, max 4.5rem
- Corpo: 1.125rem (18px) com line-height 1.7
- Labels/overlines: 0.75rem, uppercase, letter-spacing 0.1em+

### Espaçamento
- Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Entre seções: 96-128px
- Dentro de seções: 48-64px entre blocos
- Entre parágrafos: 24px
- Padding de container: 24px mobile, 32px desktop
- Max-width do conteúdo de leitura: 720-800px (65ch)

### Componentes
- Cards: background sutil (surface), border 1px rgba, radius 12px, padding 32px
- Hover states: translateY(-2 a -4px) + border-color shift, nunca scale
- Botões/tabs: padding generoso (12-16px vertical, 20-24px horizontal)
- Highlight boxes: border-left 3px + background muted da cor primária
- Dividers: linear-gradient(transparent, border-color, transparent)

### Animações
- Entrada: opacity 0→1 + translateY(20-30px→0), duration 500ms, ease-out
- Hover: 150-200ms, ease-out
- Troca de conteúdo (tabs): 300ms, ease-out
- Stagger entre elementos: 60-100ms
- Sempre respeitar `prefers-reduced-motion`
- Nunca: bounce, shake, spin decorativo, parallax agressivo

---

## Critérios de Interatividade — Framework de Decisão

### Quando usar cada tipo:

| Objetivo Cognitivo | Tipo de Interação | Exemplo |
|--------------------|--------------------|---------|
| Comparar perspectivas | Tabs | "CS Reativo vs Proativo vs Estratégico" |
| Aprofundar sob demanda | Accordion | "Clique para ver o modelo completo" |
| Revelar progressivamente | Scroll-triggered reveal | Seções que aparecem conforme leitura |
| Mostrar evolução | Timeline interativa | "3 eras do Customer Success" |
| Contrastar antes/depois | Toggle switch | "Métricas tradicionais ↔ Métricas de valor" |
| Explorar dimensões | Cards interativos | "4 pilares — clique para explorar cada um" |
| Destacar dados | Animated counters | Números que animam ao entrar na viewport |
| Navegar conteúdo longo | Progress indicator | Barra ou dots mostrando posição no material |

### Teste obrigatório para cada interação:
> "Se eu remover essa interação e mostrar tudo estático, perco valor pedagógico?"
> Se a resposta for não, remova a interação.

---

## Critérios de Escrita — Com Exemplos

### Ruim vs Bom

**Abertura de material:**
- Ruim: "No mundo atual, a experiência do cliente se tornou cada vez mais importante para as organizações."
- Bom: "Nove em cada dez empresas dizem que CX é prioridade. Menos de duas em dez sabem medir o impacto real."

**Headline:**
- Ruim: "A Importância da Experiência do Cliente na Era Digital"
- Bom: "Seu NPS é alto. Seu cliente está saindo. O que você não está medindo?"

**Frase de transição:**
- Ruim: "Nesse contexto, é importante ressaltar que..."
- Bom: "Mas há um problema que nenhuma métrica tradicional captura."

**Fechamento:**
- Ruim: "Em conclusão, as empresas devem investir mais em experiência do cliente."
- Bom: "A pergunta não é se CX vai se tornar o principal diferencial. É se você vai liderar essa mudança ou apenas assistir."

### Tom alvo
Conversa inteligente entre executivos. Clareza de quem domina o assunto. Densidade de quem respeita o tempo do leitor. Provocação de quem tem ponto de vista.

### Proibições absolutas
- "No mundo atual", "cada vez mais", "nesse sentido", "nesse contexto"
- "É fundamental que", "vale ressaltar", "é importante destacar"
- "Transformação digital", "novo normal", "disruptivo" (sem contexto novo)
- Gerundismo: "estar fazendo" → "fazer"
- Tom de consultoria: "recomenda-se" → afirme diretamente
- Parágrafos com mais de 5 linhas

---

## Padrões Técnicos

### Estrutura do arquivo HTML
```
1. <!DOCTYPE html> + <html lang="pt-BR">
2. <head>: meta tags completas (charset, viewport, description, og:title, og:description)
3. Google Fonts via <link> com preconnect
4. <style>: tokens → reset → typography → layout → components → utilities → responsive → reduced-motion
5. <body>: conteúdo semântico (header, main com sections, footer)
6. <script>: no final do body, enxuto e delegado
```

### HTML semântico obrigatório
- `<header>` para hero/navegação
- `<main>` envolvendo todo o conteúdo
- `<section>` para cada bloco temático
- `<article>` para conteúdo independente
- `<footer>` para fechamento
- `role` e `aria-label` em elementos interativos
- `alt` em imagens, `title` em links contextuais

### CSS
- Custom Properties para TODOS os valores de design (cores, fontes, espaçamentos, animações)
- Nunca valores hardcoded fora de :root
- Mobile-first: estilos base para mobile, media queries para desktop
- Breakpoints: 768px (tablet), 1024px (desktop), 1440px (wide)
- Sem frameworks CSS — cada projeto tem identidade própria

### JavaScript
- Vanilla JS exclusivamente
- Intersection Observer para scroll effects (nunca scroll event listeners)
- Event delegation em containers
- Sem dependências externas
- Sem jQuery, React ou qualquer framework
- Performance: debounce resize, passive listeners onde aplicável

---

## Fluxo de Geração — Detalhado

```
FASE 1: CONCEPÇÃO
├── Definir tese central (1 frase)
├── Definir headline (promessa intelectual)
├── Definir público e tom
└── Checkpoint: "Essa tese é original o suficiente?"

FASE 2: ARQUITETURA NARRATIVA  
├── Mapear arco: abertura → desenvolvimento → clímax → fechamento
├── Listar seções com objetivo narrativo de cada uma
├── Definir "momento wow" de cada seção
└── Checkpoint: "Cada seção adiciona algo novo?"

FASE 3: DESIGN
├── Escolher paleta (consultar premium-ui-system.md)
├── Escolher tipografia
├── Definir atmosfera
└── Checkpoint: "Um screenshot dessa paleta pareceria premium?"

FASE 4: INTERAÇÃO
├── Para cada seção, definir se há interação
├── Para cada interação, definir propósito cognitivo
├── Validar com framework de decisão acima
└── Checkpoint: "Cada interação passa no teste de remoção?"

FASE 5: GERAÇÃO
├── Construir HTML seguindo padrões técnicos
├── Consultar html-singlefile-builder.md e microinteraction-designer.md
└── Checkpoint: "O código é tão elegante quanto o resultado?"

FASE 6: REFINAMENTO
├── Polir copy (consultar copy-polish-ptbr.md)
├── Ajustar ritmo visual e espaçamento
├── Testar responsividade (mobile, tablet, desktop)
└── Checkpoint: "Lido em voz alta, o texto flui?"

FASE 7: VALIDAÇÃO
├── Rodar checklist de /references/quality-check.md
├── Classificar como A+, A, B ou C
├── Se B ou inferior, voltar para refinamento
└── Checkpoint: "Eu apresentaria isso em um palco?"
```

---

## Red Flags — Sinais de Output Medíocre

Se qualquer um destes aparecer, o material precisa ser refeito:

1. **Abertura genérica** — Começa com definição ("Customer Experience é...") ou clichê ("No mundo atual...")
2. **Seções sem propósito** — Uma seção que, se removida, não faz falta
3. **Interatividade decorativa** — Tabs ou accordions que apenas escondem texto, sem comparação ou revelação
4. **Paleta sem identidade** — Cores que poderiam ser de qualquer site
5. **Copy preenchimento** — Parágrafos que existem para "completar" a seção
6. **Estrutura previsível** — Introdução → 3 tópicos → conclusão sem surpresa
7. **Headlines descritivos** — "O Futuro do CX" em vez de uma promessa
8. **Fechamento resumitivo** — Termina repetindo o que já disse em vez de provocar
9. **Excesso de componentes** — Mais de 4-5 tipos de interação diferentes competindo
10. **Mobile quebrado** — Layout que não foi pensado para telas pequenas

---

## Estrutura do Repositório

| Pasta | Função | Quando Usar |
|-------|--------|-------------|
| `prompts/` | Prompts mestres para geração | Início de cada projeto |
| `skills/` | Modos especialistas | Durante geração e refinamento |
| `references/` | Checklists e guias | Validação final |
| `templates/` | Templates HTML base | Como ponto de partida técnico |
| `output/` | HTMLs finalizados | Entrega |

---

## Referência de Qualidade

Cada HTML finalizado deve parecer:
- Um **keynote de palco** — impacto visual que prende atenção
- Um **playbook executivo** — profundidade que gera ação
- Um **manifesto visual** — identidade forte e ponto de vista claro
- Uma **ferramenta de aprendizagem** — interatividade que constrói entendimento
- Uma **peça de referência** — algo que se salva, revisita e compartilha
