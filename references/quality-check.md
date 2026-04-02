# Quality Check — Auditoria de HTML Premium

Este checklist é a última barreira entre o material e a entrega.
Cada seção tem peso. Cada item tem critério objetivo. Não há "mais ou menos aprovado".

---

## Como Usar

1. Rode cada seção em sequência
2. Marque cada item como ✅ (passa) ou ❌ (falha)
3. Anote observações em itens que falharam
4. Calcule a classificação final
5. Se não atingir A, volte para refinamento

---

## 1. Tese e Narrativa (peso: crítico)

Falha aqui = material precisa ser repensado, não apenas ajustado.

- [ ] **Tese identificável em 10 segundos** — Alguém lendo só o hero sabe o que o material defende?
- [ ] **Headline como promessa** — O título funciona sozinho como frase compartilhável? (teste: colaria no LinkedIn?)
- [ ] **Arco narrativo completo** — Há abertura (gancho), desenvolvimento (argumento), clímax (virada) e fechamento (provocação)?
- [ ] **Zero seções ociosas** — Cada seção, se removida, faria falta ao argumento?
- [ ] **Transições com propósito** — Cada seção termina criando expectativa para a próxima?
- [ ] **Ponto de vista forte** — O material toma posição? (não é um resumo neutro?)
- [ ] **Fechamento provocativo** — Termina com provocação ou call-to-action intelectual? (não com resumo?)
- [ ] **Momento wow** — Existe pelo menos 1 dado, analogia ou insight que surpreende?

**Red flag**: Se o material começa com definição ("CX é...") ou clichê ("No mundo atual..."), falhou automaticamente.

---

## 2. Conteúdo e Escrita (peso: crítico)

- [ ] **Teste de leitura em voz alta** — O texto flui quando lido em voz alta? Nenhuma frase trava?
- [ ] **Zero clichês** — Ctrl+F por: "no mundo atual", "cada vez mais", "nesse contexto", "é fundamental", "vale ressaltar", "transformação digital", "novo normal"
- [ ] **Zero preenchimento** — Cada parágrafo carrega informação ou argumento novo?
- [ ] **Dados específicos** — Números, exemplos e referências são concretos, não genéricos?
- [ ] **Parágrafos ≤ 5 linhas** — Nenhum bloco de texto denso demais?
- [ ] **Ritmo variado** — Alterna entre frases curtas (impacto) e longas (explicação)?
- [ ] **Voz ativa dominante** — Menos de 10% das frases em voz passiva?
- [ ] **Tom consistente** — Mesmo registro do início ao fim (executivo, provocativo, didático)?
- [ ] **Ensina algo novo** — O leitor sai com um framework, modelo mental ou perspectiva que não tinha?

**Red flag**: Se substituir o nome da empresa/tema por outro e o texto ainda funcionar igual, o conteúdo é genérico demais.

---

## 3. Design Visual (peso: alto)

- [ ] **Hierarquia em 4 níveis** — Título → subtítulo → corpo → detalhe são visualmente distintos?
- [ ] **Paleta ≤ 4 cores** — Cada cor tem papel definido? (bg, text, primary, accent)
- [ ] **Contraste WCAG AA** — Texto principal tem ratio ≥ 4.5:1 sobre background?
- [ ] **Tipografia legível** — Corpo ≥ 16px, line-height ≥ 1.6, max-width ≤ 75ch?
- [ ] **Espaçamento generoso** — Seções com ≥ 80px de padding? Elementos com respiro?
- [ ] **Grid consistente** — Alinhamentos coerentes, sem elementos "soltos"?
- [ ] **Hero com impacto** — A primeira tela (above the fold) prende atenção?
- [ ] **Sem decoração vazia** — Todo elemento visual tem função (informar, organizar, destacar)?
- [ ] **Atmosfera coerente** — Paleta + tipografia + espaçamento criam uma identidade?
- [ ] **Não parece template** — Alguém reconheceria isso como Bootstrap, Tailwind UI ou template genérico?

**Red flag**: Se um screenshot da página for indistinguível de um template gratuito, o design falhou.

---

## 4. Interatividade (peso: alto)

- [ ] **Teste de remoção** — Para cada interação: se remover e mostrar estático, perde valor pedagógico?
- [ ] **Propósito documentado** — Cada interação tem uma razão cognitiva (comparar, revelar, aprofundar)?
- [ ] **Feedback imediato** — Hover, click e estados ativos respondem em < 200ms?
- [ ] **Transições suaves** — Mudanças de conteúdo entre 200-400ms com easing?
- [ ] **Touch-friendly** — Alvos de toque ≥ 44px? Funciona sem hover (mobile)?
- [ ] **Sem autoplay** — Nenhum carrossel automático, vídeo autoplay ou animação loop infinito?
- [ ] **Scroll natural** — Sem scroll hijacking? O usuário controla a velocidade?
- [ ] **Quantidade razoável** — ≤ 5 tipos diferentes de interação no material?
- [ ] **Estado padrão informativo** — O conteúdo é útil mesmo sem interagir (tab ativa, accordion aberto)?

**Red flag**: Se uma interação apenas esconde texto que deveria estar visível, é accordionite — remova.

---

## 5. Técnico (peso: obrigatório)

- [ ] **HTML semântico** — Usa header, main, section, article, footer? (não só divs?)
- [ ] **Meta tags completas** — charset, viewport, title, description, og:title, og:description?
- [ ] **Responsivo** — Testado em 375px (mobile), 768px (tablet), 1440px (desktop)?
- [ ] **prefers-reduced-motion** — Animações desabilitam com media query?
- [ ] **Console limpo** — Zero erros, zero warnings no console do navegador?
- [ ] **Sem overflow** — Nenhum scroll horizontal em nenhum breakpoint?
- [ ] **Fontes com fallback** — Google Fonts carrega? Se falhar, o fallback é aceitável?
- [ ] **ARIA em interativos** — Tabs com role="tablist/tab/tabpanel"? Accordions com aria-expanded?
- [ ] **Keyboard navegável** — Todos os interativos funcionam com Tab + Enter?
- [ ] **Performance** — Scroll suave, sem jank, sem layout shifts?
- [ ] **Código organizado** — CSS em ordem (tokens → reset → components → responsive → a11y)?

**Red flag**: Se o console mostra erros, o material não está pronto. Ponto.

---

## 6. Experiência Integrada (peso: decisivo)

- [ ] **Coerência total** — Design, narrativa e interação contam a mesma história?
- [ ] **Descoberta progressiva** — O material recompensa o leitor que vai mais fundo?
- [ ] **Modelo mental novo** — O leitor sai com um framework que não tinha antes?
- [ ] **Impacto emocional** — O material provoca alguma reação (curiosidade, urgência, inspiração)?
- [ ] **Auto-suficiente** — Funciona sem contexto externo? Não depende de explicação prévia?
- [ ] **Compartilhável** — Tem pelo menos 1 trecho ou visual que alguém compartilharia?
- [ ] **Revisitável** — Tem profundidade suficiente para uma segunda leitura render valor?

---

## 7. Testes de Estresse

Responda com honestidade brutal:

| Teste | Pergunta | ✅/❌ |
|-------|----------|------|
| **Screenshot** | Se alguém vir só um screenshot, vai querer abrir? | |
| **Scroll** | Se o leitor parar na metade, o que já leu valeu a pena? | |
| **Comparação** | Colocado ao lado de um material da McKinsey ou Stripe, segura? | |
| **Amnésia** | Se o leitor esquecer a fonte, vai lembrar da ideia? | |
| **Palco** | Você projetaria isso em um telão em uma conferência? | |
| **Concorrência** | Isso se destaca de 95% do conteúdo existente sobre o tema? | |
| **Tempo** | Daqui a 6 meses, este material ainda será relevante? | |

---

## Classificação Final

Conte os resultados:

| Classificação | Critério | Ação |
|---------------|----------|------|
| **A+** | Zero falhas + Testes de estresse 7/7 | Entregar |
| **A** | ≤ 2 falhas menores (não em seções críticas) + Estresse ≥ 5/7 | Entregar |
| **B** | 3-5 falhas OU 1 falha em seção crítica | Refinar e re-auditar |
| **C** | > 5 falhas OU red flag identificado | Repensar e reconstruir |

### Regras:
- **Seções críticas** (Tese/Narrativa e Conteúdo/Escrita): qualquer falha aqui impede classificação A
- **Red flags**: qualquer red flag identificado = classificação C automática
- **Só entregue A ou A+**
- Se em dúvida entre A e B, é B
