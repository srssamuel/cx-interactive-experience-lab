# Skill: Interactive Learning Design

## Objetivo
Projetar interatividade que ensina. Cada elemento interativo deve ter uma função cognitiva clara — revelar, comparar, aprofundar, provocar ou construir entendimento.

## Quando Usar
- Ao planejar os elementos interativos de qualquer HTML
- Quando o conteúdo tem camadas que se beneficiam de exploração
- Quando o material precisa ensinar um framework ou modelo

## Como Pensar
- Interatividade é pedagogia, não decoração
- Pergunte sempre: "O que o usuário aprende ao interagir com isso?"
- Pense em revelação progressiva — não mostre tudo de uma vez
- Pense em comparação ativa — deixe o usuário explorar contrastes
- Pense em construção de modelo mental — cada clique adiciona uma camada

## Boas Práticas
- Tabs para comparar perspectivas (presente vs futuro, empresa A vs B)
- Accordions para aprofundamento sob demanda
- Scroll reveals para narrativa sequencial com ritmo
- Cards interativos para exploração de dimensões
- Timelines para evolução histórica ou conceitual
- Toggles para antes/depois
- Filtros para explorar dados por dimensão
- Hover states ricos para informação contextual

## Erros a Evitar
- Interação sem propósito ("clique aqui" sem revelar nada novo)
- Carrosséis automáticos (retiram controle do usuário)
- Animações que distraem da leitura
- Scroll hijacking agressivo
- Excesso de interações que cansam
- Interações que escondem conteúdo essencial

## Critério de Excelência
Cada interação deve passar no teste: "Se eu remover essa interação e mostrar o conteúdo estático, perco algo?" Se a resposta for sim — a interação ensina algo que o estático não consegue — ela está correta.

---

## Matriz de Decisão: Objetivo Cognitivo → Padrão de Interação

Use esta tabela para escolher o padrão interativo correto com base no que o usuário precisa aprender.

| Objetivo Cognitivo | Padrão de Interação | Implementação | Quando Usar | Exemplo Prático |
|---|---|---|---|---|
| **Comparar** | Tabs lado a lado ou Toggle antes/depois | Tabs com 2-4 painéis, ou slider horizontal | Quando existem duas ou mais perspectivas que ganham sentido em contraste | CS reativo vs. CS estratégico; Modelo atual vs. modelo proposto |
| **Aprofundar** | Accordion ou Card expansível | Clique para expandir, conteúdo adicional revelado sob demanda | Quando há camadas de detalhe que nem todos precisam ver | Detalhes técnicos de implementação; Dados de suporte para cada argumento |
| **Evoluir** | Timeline ou Stepper | Sequência horizontal ou vertical com etapas clicáveis | Quando o conceito tem progressão temporal ou de maturidade | Modelo de maturidade CS; Evolução de uma estratégia em 5 anos |
| **Descobrir** | Cards interativos ou Hover reveals | Grid de cards que revelam informação ao interagir | Quando o usuário deve explorar sem ordem pré-definida | Dimensões de um framework; Perfis de persona |
| **Escolher** | Filtros ou Seletores | Botões ou dropdowns que alteram conteúdo visível | Quando o conteúdo se aplica a diferentes contextos/segmentos | Recomendações por porte de empresa; Métricas por estágio |
| **Contextualizar** | Scroll reveal com narrativa | Elementos que aparecem conforme o scroll, construindo a história | Quando a ordem importa e cada elemento depende do anterior | Construção de argumento em camadas; Narrativa de dados progressiva |

### Regras de Combinação
- **Máximo 3 padrões diferentes por seção** — mais que isso fragmenta a atenção
- **Nunca aninhe interações** — accordion dentro de tab dentro de card é labirinto
- **Alterne ativo e passivo** — depois de uma seção interativa pesada, coloque uma seção de leitura fluida
- **O primeiro elemento interativo deve aparecer nos primeiros 30% do material** — senão o leitor não descobre que pode interagir

---

## Ferramentas de Execução

### Template de Planejamento de Interação
Antes de implementar qualquer elemento interativo, preencha:

| Campo | Resposta |
|-------|---------|
| O que o usuário aprende ao interagir? | — |
| Qual é o objetivo cognitivo? (da matriz acima) | — |
| O que ele perde se o conteúdo for estático? | — |
| Qual o padrão de interação escolhido? | — |
| Quantos itens/painéis terá? | — |
| O conteúdo padrão (primeiro visível) é o mais importante? | — |

### Mapa de Densidade Interativa
Para um HTML típico de 8-12 seções, distribua interações assim:
- **Seções 1-2:** Baixa interatividade. Scroll reveal sutil. O leitor está entrando na narrativa.
- **Seções 3-5:** Pico de interatividade. Tabs, cards, accordions. O leitor está engajado.
- **Seções 6-8:** Interatividade moderada. Timelines, filtros. O leitor está consolidando.
- **Seções 9+:** Baixa interatividade. Provocação final. O leitor está refletindo.

### Checklist de Acessibilidade Interativa
Toda interação deve:
- [ ] Funcionar com teclado (Tab, Enter, Escape)
- [ ] Ter estados visuais claros (ativo, hover, focus)
- [ ] Manter conteúdo acessível para screen readers (aria-labels)
- [ ] Não depender exclusivamente de hover (mobile não tem hover)
- [ ] Respeitar prefers-reduced-motion (fallback para visibilidade sem animação)

---

## Exemplos Concretos

### Exemplo 1: Tab bem usado vs. tab decorativo

**Ruim:** Três tabs com "Visão Geral", "Detalhes", "Conclusão" — o conteúdo é sequencial e deveria ser lido em ordem. As tabs só escondem texto que deveria estar visível.

**Bom:** Três tabs com "Empresa Tradicional", "Empresa Digital-First", "Empresa AI-Native" — cada tab mostra o mesmo framework aplicado a um contexto diferente. O usuário compara ativamente e extrai padrões.

**Por que funciona:** No bom exemplo, a interação é o aprendizado. O ato de trocar entre tabs revela contrastes que texto corrido não consegue mostrar com a mesma clareza.

### Exemplo 2: Accordion necessário vs. accordion preguiçoso

**Ruim:** Accordion com 8 itens onde cada um tem um parágrafo curto. Tudo caberia em uma lista simples. O accordion só adiciona cliques desnecessários.

**Bom:** Accordion com 4 níveis de maturidade, cada um expandindo para revelar: características, métricas, armadilhas e ações. O leitor explora o nível que mais lhe interessa sem se perder nos outros.

**Por que funciona:** O accordion respeita que diferentes leitores têm diferentes necessidades de profundidade.

### Exemplo 3: Scroll reveal que narra vs. scroll reveal que decora

**Ruim:** Todos os elementos da página fazem fade-in ao rolar. Não há razão narrativa — é só "bonito". Depois de 3 seções, o efeito é invisível.

**Bom:** Uma seção de dados onde cada métrica aparece em sequência, construindo um argumento: primeiro o dado de mercado, depois o dado da empresa, depois o gap. A revelação progressiva é a argumentação.

**Por que funciona:** O timing da revelação é parte do storytelling. A ordem em que a informação aparece muda o impacto cognitivo.

---

## Diagnóstico Rápido

Responda sim ou não para verificar se o design de interação está correto:

1. **Cada elemento interativo tem um objetivo cognitivo claro da matriz?** Se não, a interação é decorativa.
2. **O conteúdo dentro de tabs/accordions faz sentido em paralelo (não em sequência)?** Se não, use scroll em vez de interação.
3. **O material funciona em mobile com a mesma qualidade?** Se não, a interação foi pensada só para desktop.
4. **Existe variação de padrões interativos ao longo do material?** Se não, a experiência é monótona.
5. **Um leitor que não clica em nada ainda recebe a mensagem principal?** Se não, conteúdo essencial está escondido atrás de interações.
