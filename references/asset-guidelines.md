# Diretrizes de Assets — CX Experience Lab

Guia de direção de arte para seleção, tratamento e uso de assets visuais.

---

## Princípio Central

**Asset como argumento, nunca como decoração.**

Cada imagem, vídeo ou elemento 3D deve comunicar um conceito que o texto sozinho não conseguiria transmitir com a mesma força.

---

## Quando Usar Cada Tipo

| Tipo | Quando | Exemplo |
|---|---|---|
| **Imagem estática** | Seções de caso prático, backgrounds imersivos | Close-up de mãos em teclado com luz volumétrica |
| **Vídeo loop (5-15s)** | Hero, transições de capítulo, backgrounds atmosféricos | Ambiente corporativo com movimento sutil |
| **3D (Three.js)** | Hero backgrounds, elementos decorativos abstratos | Campo de partículas, mesh gradient vivo |
| **Motion graphics** | Entrada de elementos, transições, loading states | Cards que entram com stagger, counters |
| **Partículas** | Backgrounds de seções conceituais, conexões visuais | Rede de pontos, constelações, fluxo |
| **Tipografia pura** | Seções de provocação, momentos de silêncio visual | Uma frase grande em tela cheia |
| **Sem asset** | Quando o texto é o protagonista | Seções editoriais de leitura profunda |

---

## Direção por Conceito

### Liderança
- Close-ups pensativos, luz lateral, profundidade de campo
- Ambientes de escritório com personalidade (não genéricos)
- Nunca: grupo sorrindo para câmera, stock de "reunião"

### Dados / Tecnologia
- Interfaces reais (dashboards, código, terminais)
- Hardware (servidores, fibra ótica, circuitos)
- Visualizações de dados com estética cinematográfica
- Nunca: ícones 3D flutuantes, hologramas fake

### Colaboração
- Mãos trabalhando (mesa, whiteboard, post-its)
- Ambientes reais de trabalho com textura
- Nunca: stock de pessoas diversas sorrindo em escritório branco

### Experiência do Cliente
- Momentos reais de interação (chat, telefone, balcão)
- Expressões faciais genuínas (frustração, alívio, confiança)
- Jornadas visuais (caminhos, mapas, fluxos)
- Nunca: ícones de smile/estrela, ilustrações genéricas de jornada

### Futuro
- Arquitetura contemporânea, espaços limpos, luz natural
- Geometria, abstração, linhas convergentes
- Nunca: sci-fi, hologramas, robôs humanoides

---

## Critérios de Qualidade

### Imagens
- Resolução mínima: 1920px de largura
- Composição: regra dos terços, profundidade de campo, luz direcional
- Tratamento: reduzir saturação 10-20%, adicionar grain sutil, tom frio
- Formato: WebP via next/image (otimização automática)
- Nunca: fotos com marca d'água, resolução baixa, composição centrada sem tensão

### Vídeos
- Duração: 5-15 segundos em loop
- Resolução: 1080p mínimo
- Formato: MP4 (H.264) para compatibilidade
- Sem áudio (ou muted por padrão)
- `preload="none"` para performance
- Lazy loading obrigatório

### 3D (Three.js)
- Sempre com fallback 2D (gradient, imagem estática)
- `dynamic(() => import(...), { ssr: false })` obrigatório
- DPR limitado a [1, 1.5] para performance
- Antialias desligado para partículas
- Canvas com `alpha: true` e `background: transparent`
- Máximo 1 cena 3D ativa por viewport

---

## Fontes de Assets

### Imagens
- **Unsplash**: Curadoria rigorosa — buscar por fotógrafos específicos, não por keywords genéricas
- **Pexels**: Boa alternativa, especialmente para ambientes corporativos

### Vídeos
- **Pexels Video**: Loops curtos de qualidade
- **Coverr**: Backgrounds em vídeo gratuitos

### 3D
- **Código generativo**: Partículas, geometria, noise fields via Three.js
- **Sempre preferir generativo a modelos 3D importados** (menor bundle, mais controle)

---

## Otimização

- Toda imagem via `next/image` (lazy load + blur placeholder automáticos)
- Vídeos com `preload="none"` e `loading="lazy"`
- Componentes 3D com `dynamic()` import + `Suspense` fallback
- Imagens hero: `priority={true}` para LCP
- Demais imagens: lazy loading padrão
- Formatos: WebP para imagens, MP4 para vídeo, nenhum GIF

---

## Proibições

1. Banco de imagem genérico (gente sorrindo, aperto de mão, escritório branco)
2. Ícones 3D flutuantes estilo "tech startup"
3. Ilustrações flat/cartoon em contexto executivo
4. Screenshots de baixa resolução
5. Fotos com tratamento HDR excessivo
6. Qualquer asset que pareça "banco de imagem"
7. GIFs (usar vídeo MP4 ou Lottie)
