# Skill: Final Quality Review

## Objetivo
Ser o último filtro de qualidade antes da entrega. Revisar o material completo com olhar crítico e exigente, garantindo que atende todos os padrões do estúdio.

## Quando Usar
- Como última etapa antes de finalizar qualquer HTML
- Após todas as rodadas de refinamento
- Em conjunto com /references/quality-check.md

## Como Pensar
- Pense como um diretor criativo revisando a peça antes do cliente ver
- Pense como um usuário real abrindo o material pela primeira vez
- Pense como um desenvolvedor auditando o código
- Pense como um editor-chefe lendo a matéria final
- Seja implacável — mediocridade não é aceitável neste estúdio

## Boas Práticas
- Revise em 4 passes separados: conteúdo → design → interatividade → técnico
- Pass 1 (Conteúdo): tese clara? arco narrativo? copy impecável?
- Pass 2 (Design): hierarquia? paleta? espaçamento? impacto visual?
- Pass 3 (Interatividade): cada interação ensina? funciona em mobile? smooth?
- Pass 4 (Técnico): semântica? responsivo? performance? acessibilidade?
- Use o checklist de /references/quality-check.md como base
- Teste em diferentes larguras de tela
- Teste com prefers-reduced-motion
- Verifique console do navegador

## Erros a Evitar
- Aprovar por pressa
- Ignorar detalhes "pequenos" (são os que definem premium)
- Não testar em mobile
- Não ler o conteúdo por inteiro (só escanear)
- Aceitar "está bom o suficiente" — o padrão é excelência

## Critério de Excelência
Após a revisão, o material deve ser classificado como A ou A+ no checklist de qualidade. Se não atingir, deve voltar para refinamento. Nenhum material sai deste estúdio com nota B ou inferior.

---

## Red Cards — Falhas Automáticas

Se qualquer item abaixo estiver presente, o material **não pode ser entregue**. Sem exceções.

### Red Cards Técnicos
1. **Erro no console do navegador** — Qualquer erro JavaScript, CSS ou de recurso quebrado. Zero tolerância.
2. **Layout quebrado em mobile (375px)** — Texto cortado, overflow horizontal, elementos sobrepostos.
3. **Contraste de texto insuficiente** — Texto sobre fundo sem ratio mínimo de 4.5:1 (WCAG AA).
4. **Fontes não carregam** — Sem fallback declarado; texto aparece em fonte genérica do sistema por mais de 1s.
5. **Interação que não funciona** — Tab que não troca, accordion que não abre, hover que não responde.

### Red Cards de Conteúdo
6. **Dado sem fonte verificável** — Estatística apresentada como fato sem origem identificável.
7. **Texto Lorem Ipsum ou placeholder** — Qualquer texto não finalizado no material.
8. **Erro gramatical ou de ortografia** — Em qualquer lugar visível.
9. **Tese central ausente ou confusa** — Leitor termina sem saber qual era o argumento principal.

### Red Cards de Design
10. **Cor accent usada em mais de 20% da superfície** — Perde função de destaque; vira poluição visual.
11. **Espaçamento inconsistente entre seções** — Seções com gaps visivelmente diferentes sem razão.
12. **Tipografia com mais de 2 famílias** — Ou mais de 5 pesos/tamanhos diferentes sem hierarquia clara.

---

## Protocolo de Revisão em 4 Passes

### Pass 1: Conteúdo (leia como editor-chefe)
Leia o material inteiro sem olhar para design ou código. Apenas texto.

| Verificação | Status |
|---|---|
| A tese central está clara nos primeiros 2 parágrafos? | — |
| Existe arco narrativo (tensão → insight → resolução)? | — |
| Cada seção adiciona algo novo (sem repetição)? | — |
| As headlines são provocativas, não descritivas? | — |
| Os dados são específicos e surpreendentes? | — |
| O texto tem zero itens da Lista de Proibições (copy-polish)? | — |
| O fechamento provoca ação, não resume? | — |
| Score de densidade médio acima de 3? | — |
| Lido em voz alta, flui sem travar? | — |

### Pass 2: Design (olhe como diretor de arte)
Não leia o texto. Olhe apenas para a composição visual.

| Verificação | Status |
|---|---|
| A hierarquia visual é óbvia a 3 metros de distância? | — |
| A paleta tem no máximo 4 cores funcionais? | — |
| O espaçamento entre seções é generoso e consistente? | — |
| A cor accent aparece com parcimônia (< 15% da superfície)? | — |
| Há contraste suficiente entre níveis tipográficos? | — |
| O hero/abertura causa impacto visual imediato? | — |
| Screenshots reduzidos a 25% ainda mostram estrutura? | — |
| Não há ícones genéricos decorativos? | — |

### Pass 3: Interatividade (use como usuário)
Interaja com cada elemento. Teste em desktop e mobile.

| Verificação | Status |
|---|---|
| Cada tab troca conteúdo corretamente? | — |
| Cada accordion abre e fecha com animação suave? | — |
| Scroll reveals disparam no momento certo? | — |
| Hover states respondem em todos os elementos clicáveis? | — |
| Interações funcionam em mobile (touch)? | — |
| Nenhuma interação esconde conteúdo essencial? | — |
| O stagger de animações é consistente? | — |
| prefers-reduced-motion funciona (desabilita animações)? | — |
| Focus states visíveis com navegação por teclado? | — |

### Pass 4: Técnico (audite como desenvolvedor)
Inspecione o código-fonte e teste em múltiplos contextos.

| Verificação | Status |
|---|---|
| 0 erros no console do navegador? | — |
| HTML semântico (header, main, section, footer)? | — |
| CSS Custom Properties para todas as cores e fontes? | — |
| CSS organizado nas seções padrão com comentários? | — |
| JavaScript usa event delegation (não listeners individuais)? | — |
| JavaScript < 100 linhas e sem dependências? | — |
| Meta tags completas (charset, viewport, OG)? | — |
| Fontes com preconnect e fallback? | — |
| Responsivo em 375px, 768px e 1440px? | — |
| Arquivo < 150KB? | — |

---

## Matriz de Teste — Browser e Dispositivo

### Testes Obrigatórios (bloqueia entrega se falhar)

| Contexto | Largura | O que verificar |
|---|---|---|
| Chrome Desktop | 1440px | Layout, interações, console |
| Chrome Mobile (emulado) | 375px | Layout, touch, overflow |
| Chrome Tablet (emulado) | 768px | Layout de transição, grids |
| Safari Desktop (se disponível) | 1440px | Fontes, smooth scroll, CSS compatibility |

### Testes Recomendados (eleva qualidade)

| Contexto | Largura | O que verificar |
|---|---|---|
| Firefox Desktop | 1440px | CSS grid/flexbox compatibility |
| Chrome com CPU throttle 4x | 375px | Performance de animações |
| Chrome com prefers-reduced-motion | Qualquer | Fallback de animações |
| Chrome com zoom 200% | Qualquer | Texto legível, layout não quebra |
| Chrome sem JavaScript | Qualquer | Conteúdo acessível sem JS |

### Processo de Teste em Mobile
1. Abra DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
2. Selecione "iPhone SE" (375px) como base mínima
3. Navegue por todas as seções — verifique overflow horizontal
4. Interaja com todos os elementos — tabs, accordions, hovers
5. Role a página inteira — verifique scroll reveals
6. Verifique que nenhum texto é cortado ou sobreposto

---

## Ferramentas de Execução

### Scorecard de Qualidade Final
Depois dos 4 passes, atribua nota:

| Dimensão | Peso | Nota (A+ a C) | Comentário |
|---|---|---|---|
| Conteúdo | 30% | — | — |
| Design | 25% | — | — |
| Interatividade | 25% | — | — |
| Técnico | 20% | — | — |
| **Nota final ponderada** | 100% | — | — |

**Critério de aprovação:**
- **A+ ou A em todas:** Pronto para entrega
- **A+ ou A em 3, B em 1:** Revisão pontual e entrega
- **B em 2 ou mais:** Volta para refinamento
- **C em qualquer dimensão:** Retrabalho significativo necessário

### Checklist de Último Minuto (30 segundos)
Antes de declarar o material finalizado:
- [ ] Título do documento está correto no `<title>` e `<h1>`?
- [ ] Não há texto placeholder em nenhum lugar?
- [ ] O console está limpo (0 errors, 0 warnings)?
- [ ] O material abre e funciona em uma aba privada/anônima?
- [ ] O arquivo está salvo com encoding UTF-8?

---

## Exemplos Concretos

### Exemplo 1: Red Card identificado e corrigido

**Problema encontrado (Pass 4):** Console mostra `Uncaught TypeError: Cannot read properties of null (reading 'classList')` — um `querySelector` busca elemento por ID que não existe no HTML.

**Diagnóstico:** O JavaScript referencia `#stats-section` mas o ID no HTML é `#statistics`. Erro de rename incompleto.

**Correção:** Atualizar o ID no JavaScript para `#statistics`. Re-testar para confirmar que o console está limpo.

**Regra:** Sempre buscar no código-fonte todos os IDs e classes referenciados no JavaScript para garantir que existem no HTML.

### Exemplo 2: Falha sutil de design

**Problema encontrado (Pass 2):** As seções 3 e 4 têm `padding-top: 4rem` mas as seções 5 e 6 têm `padding-top: 3rem`. A diferença não é óbvia olhando rápido, mas cria desconforto visual.

**Diagnóstico:** Valores de espaçamento hard-coded em vez de usar custom properties. Ao ajustar uma seção, o autor esqueceu as outras.

**Correção:** Definir `--section-padding: 4rem` como custom property e aplicar a todas as seções. Responsivo ajusta apenas a variável.

### Exemplo 3: Conteúdo que quase passa

**Problema encontrado (Pass 1):** O material é sólido, mas a seção 6 repete essencialmente o argumento da seção 3 com palavras diferentes. Score de densidade: 0.

**Diagnóstico:** Na pressa de completar o material, a seção foi "preenchida" em vez de construída. Não adiciona nada novo.

**Correção:** Duas opções — cortar a seção (se o material funciona sem ela) ou reescrever com ângulo novo (dados diferentes, perspectiva diferente). Nunca manter seção redundante.

---

## Diagnóstico Rápido

1. **O material tem zero Red Cards?** Se não, não pode ser entregue — corrija todos primeiro.
2. **Os 4 passes foram executados separadamente (não ao mesmo tempo)?** Se não, faça novamente — cada pass exige um tipo diferente de atenção.
3. **O material foi testado em 375px de largura?** Se não, a responsividade não foi verificada.
4. **O console do navegador está completamente limpo?** Se não, há erro técnico que precisa ser corrigido.
5. **Você leu o conteúdo inteiro em voz alta?** Se não, há problemas de ritmo e clareza que escaparam.
