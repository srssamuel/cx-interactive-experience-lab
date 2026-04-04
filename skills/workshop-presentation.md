# Skill: Workshop & Presentation Mode

## Objetivo
Definir como experiencias digitais se transformam em ferramentas de apresentacao ao vivo e workshops interativos. Cada experiencia deve funcionar em tres modos: leitura individual, apresentacao para audiencia e workshop facilitado.

## Quando Usar
- Ao projetar experiencias que serao usadas em eventos, treinamentos ou reunioes
- Ao implementar navegacao por capitulos e controles de apresentacao
- Ao criar ferramentas de facilitacao (timer, prompts, exercicios)
- Ao adaptar tipografia e contraste para projecao

---

## Tres Modos de Experiencia

### Modo Leitura (padrao)
- Scroll livre com Lenis smooth scroll
- Todas as secoes visiveis em sequencia
- Navegacao por progress bar ou chapter dots
- Ritmo controlado pelo leitor

### Modo Apresentacao (Ctrl+Shift+P)
- **Ativacao:** Atalho `Ctrl+Shift+P` ou botao no header
- Tela cheia (Fullscreen API)
- Uma secao/capitulo por tela
- Navegacao por setas (esquerda/direita), Space/Backspace, ou clicks nos dots
- Tipografia ampliada para projecao
- Transicoes cinematicas entre capitulos
- Lenis desativado (sem scroll — navegacao discreta)
- Barra de progresso na parte inferior

### Modo Workshop (Ctrl+Shift+W)
- **Ativacao:** Atalho `Ctrl+Shift+W` ou botao no header
- Painel lateral (sidebar) com ferramentas de facilitacao
- Conteudo principal ocupa ~70% da tela, sidebar ~30%
- Sidebar contem: timer, discussion prompts, exercicios ativos
- Scroll livre no conteudo principal
- Navegacao por capitulos na sidebar

---

## Navegacao por Capitulos

### Padroes de Navegacao

| Controle | Acao | Modo |
|----------|------|------|
| `ArrowRight` / `Space` | Proximo capitulo | Apresentacao |
| `ArrowLeft` / `Backspace` | Capitulo anterior | Apresentacao |
| `ArrowUp` / `ArrowDown` | Scroll entre capitulos | Apresentacao |
| `Home` | Primeiro capitulo | Apresentacao |
| `End` | Ultimo capitulo | Apresentacao |
| `Escape` | Sair do modo atual | Apresentacao/Workshop |
| `1-9` | Ir para capitulo N | Apresentacao |
| Click em dot | Ir para capitulo | Todos |

### Implementacao

```typescript
// useChapterNavigation.ts
export function useChapterNavigation(chapters: Chapter[]) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrent((c) => Math.min(c + 1, chapters.length - 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        setCurrent((c) => Math.max(c - 1, 0));
      }
      if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key) - 1;
        if (idx < chapters.length) setCurrent(idx);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [chapters.length]);

  return { current, setCurrent, total: chapters.length };
}
```

### Transicoes entre Capitulos

Usar Framer Motion `AnimatePresence` com tres variantes:

```typescript
const chapterVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

// Transicao suave: 300ms ease-out
// Transicao cinematica: 500ms com fade to black intermediario
```

---

## Tipografia para Projecao

### Regra dos 3 Metros
Todo texto deve ser legivel a 3 metros de distancia em uma tela de 55"+. Isso implica tamanhos minimos maiores.

| Elemento | Modo Leitura | Modo Apresentacao | Modo Workshop |
|----------|-------------|-------------------|---------------|
| Headline | `clamp(2rem, 5vw, 4.5rem)` | `clamp(3rem, 6vw, 6rem)` | `clamp(2rem, 4vw, 3.5rem)` |
| Subtitulo | `clamp(1.25rem, 2vw, 1.75rem)` | `clamp(1.75rem, 3vw, 2.5rem)` | `clamp(1.25rem, 2vw, 1.75rem)` |
| Body | `clamp(1rem, 0.5vw, 1.125rem)` | `clamp(1.25rem, 2vw, 1.5rem)` | `clamp(1rem, 0.5vw, 1.125rem)` |
| Stat number | `clamp(2.5rem, 5vw, 4rem)` | `clamp(4rem, 8vw, 7rem)` | `clamp(2.5rem, 5vw, 4rem)` |

### Aplicacao via CSS Custom Properties

```css
[data-mode="presentation"] {
  --text-hero: clamp(3rem, 6vw, 6rem);
  --text-h2: clamp(2rem, 4vw, 3.5rem);
  --text-body: clamp(1.25rem, 2vw, 1.5rem);
  --text-stat: clamp(4rem, 8vw, 7rem);
}
```

---

## Contraste para Projetores

Projetores tem menor contraste que telas. Ajustes necessarios:

```css
[data-mode="presentation"] {
  --text: #FFFFFF;              /* Mais branco que o padrao */
  --text-secondary: #A0AAB8;   /* Mais claro que o padrao */
  --bg: #050508;                /* Mais escuro que o padrao */
  --border: rgba(255,255,255,0.12); /* Mais visivel */
}
```

**Regra:** Nunca use cinza claro sobre cinza escuro em modo apresentacao. Aumente o contraste em pelo menos 20%.

---

## Ferramentas de Workshop

### Discussion Prompts

Blocos de discussao inseridos entre capitulos:

```tsx
<DiscussionPrompt
  question="Na sua empresa, quem e responsavel pela experiencia do cliente?"
  subtext="Discutam em duplas por 3 minutos."
  timer={180} // segundos
  variant="pause" // pause | reflect | debate | apply
/>
```

| Variante | Icone/Visual | Proposito |
|----------|-------------|-----------|
| **pause** | Icone de pausa | Parar para discutir em grupo |
| **reflect** | Icone de pensamento | Reflexao individual antes de compartilhar |
| **debate** | Dois lados | Dividir grupo em posicoes opostas |
| **apply** | Icone de ferramenta | Aplicar conceito ao contexto da empresa |

### Timer

```tsx
<WorkshopTimer
  duration={300}           // 5 minutos
  onComplete={() => playSound()} // Som sutil ao finalizar
  showProgress={true}      // Barra de progresso circular
  pausable={true}          // Facilitador pode pausar
/>
```

Implementar com `useRef` + `requestAnimationFrame` para precisao. Nunca `setInterval`.

### Exercicios Interativos

```tsx
<ApplyNowBlock
  title="Mapeie sua jornada"
  instructions={[
    "Identifique os 3 momentos mais criticos na jornada do seu cliente",
    "Para cada momento, avalie: o que o cliente espera vs. o que recebe",
    "Marque onde esta a maior lacuna de experiencia",
  ]}
  timer={600} // 10 minutos
  teamSize="duplas" // individual | duplas | mesa | plenario
/>
```

### Votacao/Polling (Simples)

```tsx
<QuickPoll
  question="Qual e o maior desafio de CX na sua organizacao?"
  options={[
    "Silos entre departamentos",
    "Falta de dados unificados",
    "Cultura nao centrada no cliente",
    "Metricas erradas",
  ]}
  showResults={facilitatorControlled} // Resultados aparecem quando facilitador libera
/>
```

---

## Painel do Facilitador (Sidebar Workshop)

### Estrutura da Sidebar

```
[Logo/Titulo da Experiencia]
[Capitulo Atual: 3/8]
─────────────────────
[Lista de Capitulos]  ← clicavel, com status (feito/atual/pendente)
─────────────────────
[Timer]               ← timer ativo do exercicio atual
─────────────────────
[Notas do Facilitador] ← texto pre-definido em content.ts
─────────────────────
[Proxima Acao]        ← "Abrir discussao" / "Iniciar exercicio"
```

### Notas do Facilitador

Cada capitulo pode ter notas invisiveis para a audiencia:

```typescript
// content.ts
{
  id: 'chapter-03',
  facilitatorNotes: [
    'Pergunte quantos mediram NPS no ultimo trimestre — levante as maos.',
    'Se o grupo for avancado, pule direto para o framework.',
    'Tempo sugerido: 8 minutos nesta secao.',
  ],
}
```

---

## Conteudo para Apresentacao — Padroes

### Uma Ideia por Tela
Em modo apresentacao, cada capitulo deve comunicar UMA ideia. Se tem duas ideias, divida em dois capitulos.

### Headlines Tweetaveis
Todo headline de capitulo deve funcionar como tweet — autonomo, impactante, maximo 140 caracteres.

**Ruim:** "Analise dos Principais Desafios de Customer Experience"
**Bom:** "Seu NPS e alto. Seu cliente esta saindo. O que voce nao esta medindo?"

### Silencio Visual
Em modo apresentacao, espaco em branco e amplificado. Use secoes "breathing" com apenas uma frase centralizada e muito espaco ao redor.

```tsx
// Breathing slide em modo apresentacao
<Section variant="breathing" className="h-screen flex items-center justify-center">
  <Heading level={2} className="text-center max-w-4xl">
    A pergunta nao e se CX vai mudar tudo.
    <br />
    <span className="text-accent">E se voce vai liderar essa mudanca.</span>
  </Heading>
</Section>
```

### Dados em Destaque
Numeros em modo apresentacao devem ser GRANDES. Use `--text-stat` (4-7rem). Um numero por tela com contexto minimo.

---

## Implementacao do Mode Switch

```typescript
// components/ModeSwitch.tsx
'use client';

export function ModeSwitch() {
  const { mode, setMode } = useExperienceMode();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setMode(mode === 'presentation' ? 'reading' : 'presentation');
        if (mode !== 'presentation') {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
      if (e.ctrlKey && e.shiftKey && e.key === 'W') {
        e.preventDefault();
        setMode(mode === 'workshop' ? 'reading' : 'workshop');
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mode, setMode]);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <ModeButton active={mode === 'reading'} onClick={() => setMode('reading')} label="Leitura" />
      <ModeButton active={mode === 'presentation'} onClick={() => setMode('presentation')} label="Apresentacao" />
      <ModeButton active={mode === 'workshop'} onClick={() => setMode('workshop')} label="Workshop" />
    </div>
  );
}
```

---

## Anti-Patterns

1. **Texto demais por slide** — Em modo apresentacao, maximo 3 bullet points ou 2 paragrafos curtos por tela.
2. **Timer sem feedback** — Timer que nao mostra progresso visual causa ansiedade. Sempre barra ou circulo.
3. **Exercicios sem tempo definido** — Todo exercicio de workshop precisa de timer. Sem tempo, a discussao nao fecha.
4. **Modo apresentacao identico ao modo leitura** — Se so muda o tamanho da fonte, nao e um modo — e um zoom. Mude layout, densidade e navegacao.
5. **Sidebar de workshop sempre visivel** — A sidebar so aparece em modo workshop. Em leitura e apresentacao, nao existe.
6. **Transicoes entre capitulos lentas** — Em apresentacao, 300ms maximo. Audiencia nao espera.
7. **Esquecer `Escape` para sair** — O facilitador precisa sair do modo rapidamente se algo der errado.
