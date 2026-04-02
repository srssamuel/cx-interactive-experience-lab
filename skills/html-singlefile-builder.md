# Skill: HTML Single-File Builder

## Objetivo
Construir HTMLs single-file autocontidos, performáticos e elegantes. Dominar a arte de entregar uma experiência completa em um único arquivo HTML.

## Quando Usar
- Na geração efetiva do código HTML
- Quando precisa decidir estrutura técnica do arquivo
- Quando precisa otimizar performance e organização do código

## Como Pensar
- Um single-file HTML é uma cápsula de experiência — tudo precisa estar ali
- A organização interna do código reflete a qualidade do produto
- Performance é parte da experiência — lag é falha de design
- Semântica HTML é a fundação — construa sobre HTML correto
- CSS Custom Properties são o sistema nervoso — padronize tokens

## Boas Práticas
- Estrutura do arquivo: meta → fonts → style → body → script
- CSS organizado por: tokens → reset → typography → layout → components → utilities → responsive → a11y
- JavaScript no final do body, delegado e enxuto
- Custom Properties para todas as cores, fontes e espaçamentos
- Intersection Observer para scroll animations (não scroll events)
- Event delegation em containers (não listeners individuais)
- Google Fonts via link preconnect
- SVGs inline para ícones (não icon fonts)
- Meta tags completas (charset, viewport, description, OG)
- Comentários de seção para navegação do código

## Erros a Evitar
- Código CSS duplicado ou inconsistente
- JavaScript com event listeners em cada elemento
- Falta de fallback para fontes
- Esquecer prefers-reduced-motion
- HTML não semântico (divs genéricos)
- Falta de responsividade
- Falta de meta tags
- Console errors

## Critério de Excelência
O código-fonte deve ser tão elegante quanto o resultado visual. Um desenvolvedor experiente deve olhar o código e pensar: "Isso é limpo, organizado e bem pensado." O arquivo deve funcionar perfeitamente offline (exceto fontes) e carregar instantaneamente.

---

## Estrutura Exata do Arquivo

Siga esta ordem rigorosa. Cada bloco deve estar separado por comentário de seção.

```
1. <!DOCTYPE html> + <html lang="pt-BR">
2. <head>
   a. <meta charset="UTF-8">
   b. <meta name="viewport" content="width=device-width, initial-scale=1.0">
   c. <meta name="description" content="...">
   d. <meta property="og:title/description/image"> (Open Graph)
   e. <title>
   f. <link rel="preconnect" href="https://fonts.googleapis.com">
   g. <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   h. <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
   i. <style>
      i.   /* ========== DESIGN TOKENS ========== */
      ii.  /* ========== RESET ========== */
      iii. /* ========== TIPOGRAFIA ========== */
      iv.  /* ========== LAYOUT ========== */
      v.   /* ========== COMPONENTES ========== */
      vi.  /* ========== UTILITÁRIOS ========== */
      vii. /* ========== RESPONSIVO ========== */
      viii./* ========== ACESSIBILIDADE ========== */
      ix.  /* ========== ANIMAÇÕES ========== */
   j. </style>
3. <body>
   a. <header> — Navegação e hero
   b. <main> — Conteúdo organizado em <section> com IDs
   c. <footer> — Créditos e metadata
   d. <script> — JavaScript único, delegado, no final do body
4. </body></html>
```

### Regras de Organização CSS
- **Design Tokens:** Todas as custom properties (cores, fontes, espaçamentos, transições)
- **Reset:** Box-sizing, margens zeradas, html scroll-behavior
- **Tipografia:** Estilos base de h1-h6, p, a, strong, em, blockquote
- **Layout:** Containers, grids, flexbox, seções
- **Componentes:** Cards, tabs, accordions, buttons, badges — cada um agrupado
- **Utilitários:** Classes auxiliares (.text-center, .visually-hidden, .accent)
- **Responsivo:** Breakpoints organizados de menor para maior (mobile-first) ou maior para menor
- **Acessibilidade:** prefers-reduced-motion, prefers-color-scheme, focus-visible
- **Animações:** @keyframes definidos ao final do bloco CSS

---

## Checklist de Performance

| Alvo | Meta | Como Verificar |
|------|------|----------------|
| Tamanho total do arquivo | < 150KB (sem contar fontes externas) | Verificar tamanho do .html |
| Fontes externas | Máximo 2 famílias, 3-4 pesos total | Contar requests no link do Google Fonts |
| JavaScript | < 100 linhas, sem dependências externas | Contar linhas do bloco script |
| Intersection Observers | Máximo 1-2 observers reutilizados | Verificar quantos `new IntersectionObserver` existem |
| Event listeners | Delegados em containers, não em elementos individuais | Buscar por `addEventListener` — devem ser poucos |
| CSS Custom Properties | Todas as cores/fontes/espaçamentos tokenizados | Nenhum valor hard-coded repetido no CSS |
| Tempo de interatividade | < 1s em 3G simulado | DevTools → Performance → Throttle |
| Sem erros | 0 erros no console | DevTools → Console |
| Layout shift | Sem CLS perceptível | Não deve haver "pulos" ao carregar |

---

## Ferramentas de Execução

### Template de Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Descrição em 150-160 caracteres]">
<meta property="og:title" content="[Título do material]">
<meta property="og:description" content="[Descrição curta]">
<meta property="og:type" content="article">
<title>[Título] | [Estúdio]</title>
```

### Template de Preconnect para Fontes
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:wght@600;700&display=swap" rel="stylesheet">
```

### Template de Reset Mínimo
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-body); color: var(--color-text); background: var(--color-bg); line-height: 1.7; -webkit-font-smoothing: antialiased; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; }
```

### Template de Intersection Observer Reutilizável
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## Armadilhas Comuns

### Armadilha 1: Scroll Listener em vez de Intersection Observer
**Como aparece:** `window.addEventListener('scroll', ...)` com cálculos de `getBoundingClientRect()` dentro. A página fica lenta ao rolar, especialmente em mobile.

**Como corrigir:** Substituir por Intersection Observer. Criar um único observer e aplicar a todos os elementos que precisam de reveal. O observer é assíncrono e não bloqueia a thread principal.

### Armadilha 2: Event Listeners Individuais em Elementos Repetidos
**Como aparece:** Um `forEach` que adiciona `addEventListener('click', ...)` em cada tab, cada card, cada accordion. Com 30 accordions, são 30 listeners.

**Como corrigir:** Usar event delegation. Adicionar um único listener no container pai e usar `event.target.closest('.accordion-trigger')` para identificar o elemento clicado. Um listener substitui dezenas.

```javascript
// Ruim
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => { /* ... */ });
});

// Bom
document.querySelector('.tab-container').addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  /* ... */
});
```

### Armadilha 3: CSS Duplicado por Falta de Tokens
**Como aparece:** A mesma cor hex aparece 15 vezes no CSS. Ao mudar a paleta, é preciso fazer find-and-replace e torcer para não esquecer nenhuma. Valores de padding inconsistentes (16px aqui, 18px ali, 15px acolá).

**Como corrigir:** Definir todas as cores, fontes e espaçamentos como Custom Properties no `:root`. Referenciar exclusivamente via `var(--nome)`. Para espaçamento, usar escala fixa (8, 16, 24, 32, 48, 64) e nunca inventar valores intermediários.

---

## Exemplos Concretos

### Exemplo 1: JavaScript enxuto vs. JavaScript inchado

**Ruim (42 linhas para tabs):**
Variáveis globais, IDs hard-coded, loops aninhados, manipulação direta de `style.display`.

**Bom (12 linhas para tabs):**
```javascript
document.querySelectorAll('.tab-group').forEach(group => {
  group.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]');
    if (!tab) return;
    const target = tab.dataset.tab;
    group.querySelectorAll('[data-tab]').forEach(t => t.classList.toggle('active', t === tab));
    group.closest('section').querySelectorAll('[data-panel]').forEach(p => 
      p.classList.toggle('active', p.dataset.panel === target)
    );
  });
});
```

### Exemplo 2: Responsividade via media queries organizadas
**Ruim:** Media queries espalhadas por todo o CSS, misturadas com os componentes. Impossível saber o que muda em mobile.

**Bom:** Seção `/* ========== RESPONSIVO ========== */` ao final do CSS com todas as media queries agrupadas por breakpoint. Fácil de auditar e ajustar.

---

## Diagnóstico Rápido

1. **O arquivo tem 0 erros no console do navegador?** Se não, corrija antes de qualquer outra coisa.
2. **Todas as cores e fontes estão em Custom Properties?** Se não, o código não é mantível.
3. **O JavaScript tem menos de 100 linhas e usa event delegation?** Se não, está complexo demais para um single-file.
4. **O material é totalmente funcional em 375px de largura?** Se não, a responsividade falhou.
5. **O CSS está organizado nas seções padrão com comentários?** Se não, o próximo desenvolvedor não vai encontrar nada.
