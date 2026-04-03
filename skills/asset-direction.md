# Skill: Asset Direction

## Objetivo
Definir a estrategia visual de assets (imagens, videos, 3D, motion graphics) para experiencias digitais. Cada asset e um argumento visual — comunica um conceito antes do texto ser lido. Este skill governa quando usar cada tipo, padroes de qualidade e otimizacao tecnica.

## Quando Usar
- Ao planejar a camada visual de uma experiencia
- Ao escolher entre imagem, video, 3D ou motion graphics
- Ao definir direcao fotografica para curadoria de assets
- Ao otimizar assets para performance

---

## Principio Central: Asset como Argumento

Todo asset responde a pergunta: **"Que conceito este visual comunica?"**

Se a resposta for "decoracao" ou "preencher espaco", o asset nao deve existir. Um espaco vazio com tipografia forte e melhor que uma imagem generica.

### Teste de Remocao
> Se eu remover este asset, a secao perde forca argumentativa?
> Se sim, o asset e essencial. Se nao, remova.

---

## Quando Usar Cada Tipo

| Tipo | Quando Usar | Quando NAO Usar |
|------|-------------|-----------------|
| **Imagem estatica** | Retratos de lideranca, ambientes reais, composicoes editoriais | Backgrounds genericos, stock de "equipe sorrindo" |
| **Video loop** | Hero atmosphere, processos em acao, dados em movimento | Quando audio e necessario, conteudo que precisa de pausa |
| **Three.js / 3D** | Particle fields como background, data viz 3D, objetos reativos ao scroll | Decoracao sem proposito, mobile sem fallback |
| **Motion graphics** | Diagramas animados, fluxos de processo, evolucao temporal | Quando o conteudo e melhor explicado com texto |
| **Particulas** | Atmosfera de hero, transicoes entre secoes, representacao de dados | Em toda secao (saturacao visual) |
| **Parallax layers** | Profundidade em heroes, separacao de camadas de conteudo | Mais de 3 camadas (causa nausea), mobile |

---

## Direcao Visual por Conceito

### Lideranca / Estrategia
- **Direcao:** Close-up, iluminacao cinematografica, profundidade de campo rasa
- **Tom:** Autoridade, foco, decisao
- **Composicao:** Regra dos tercos, sujeito deslocado do centro, espaco negativo intencional
- **Cor:** Tons quentes sobre fundo escuro (dourado, ambar sobre navy)
- **Evitar:** Poses corporativas, aperto de mao, "CEO olhando pela janela"

### Data / AI / Tecnologia
- **Direcao:** Interfaces reais (nao mockups), visualizacoes de dados, linhas de codigo
- **Tom:** Precisao, inteligencia, futuro
- **Composicao:** Grid, alinhamento rigoroso, elementos tecnicos reais
- **Cor:** Frios (violet, blue) com pontos de luz
- **Evitar:** Cerebros digitais, robos humanoides, circuitos neon genericos

### Colaboracao / Equipes
- **Direcao:** Ambientes reais de trabalho, momentos genuinos (nao posados), diversidade natural
- **Tom:** Conexao, energia, co-criacao
- **Composicao:** Planos medios, movimento capturado (nao posado), profundidade com multiplas pessoas
- **Cor:** Quentes, iluminacao natural
- **Evitar:** Stock de "equipe diversa sorrindo para camera", salas de reuniao genericas

### Experiencia / CX
- **Direcao:** Momentos de interacao real (tela de celular, conversa, uso de produto)
- **Tom:** Humanidade, atencao, cuidado
- **Composicao:** Detalhes (maos, telas, expressoes), angulos inusitados
- **Cor:** Paleta CX (amber + teal), quente e acessivel
- **Evitar:** Jornadas abstratas (flechas conectando icones), funis genericos

### Futuro / Inovacao
- **Direcao:** Espacos amplos, horizontes, tecnologia emergente em contexto real
- **Tom:** Possibilidade, escala, transformacao
- **Composicao:** Perspectiva ampla, linhas de fuga, espaco negativo generoso
- **Cor:** Gradientes sutis, transicao de escuro para claro (metafora de emergencia)
- **Evitar:** "Cidade do futuro" generica, hologramas, esferas brilhantes

---

## Padroes de Qualidade

### Imagens

| Criterio | Requisito |
|----------|-----------|
| Resolucao minima | 1920x1080 para full-bleed, 800x600 para cards |
| Composicao | Cinematografica — regra dos tercos, ponto focal claro |
| Iluminacao | Natural ou cinematografica. Nunca flash direto. |
| Autenticidade | Momentos reais ou convincentes. Nenhuma "foto de stock" obvia. |
| Diversidade | Natural, nao tokenizada. Reflete publico real. |
| Edicao | Consistente com a paleta da experiencia. Sem filtros Instagram. |

### Videos

| Criterio | Requisito |
|----------|-----------|
| Duracao | 5-15 segundos em loop |
| Resolucao | 1080p minimo, 4K preferido para hero |
| Audio | Sem audio por padrao (`muted autoplay loop`) |
| Formato | MP4 (H.264) com fallback WebM |
| Loop | Seamless — corte imperceptivel entre fim e inicio |
| Preload | `preload="none"` — carregar apenas quando visivel |

### Three.js / 3D

| Criterio | Requisito |
|----------|-----------|
| Fallback | Obrigatorio: gradiente CSS ou imagem estatica |
| Mobile | Versao simplificada (menos particulas, sem sombras) ou fallback |
| FPS target | 60fps desktop, 30fps mobile (minimo) |
| Interatividade | Reativo ao scroll ou mouse position (nao decorativo estatico) |
| Budget | Max 2000 particulas mobile, 5000 desktop |

---

## Textura e Grain

Texturas sutis adicionam materialidade e impedem que a interface pareca "flat demais".

### Noise Overlay (CSS-only)

```css
.grain-overlay::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}
```

**Regra:** Opacidade entre 0.02 e 0.05. Mais que isso e visivel demais e parece defeito.

### Gradientes Atmosfericos

```css
.atmospheric-gradient {
  background: radial-gradient(
    ellipse at 30% 20%,
    rgba(var(--accent-rgb), 0.08) 0%,
    transparent 50%
  );
}
```

Use gradientes radiais sutis com a cor accent para criar "pontos de luz" na pagina. Maximo 2 por tela.

---

## Fontes de Assets Recomendadas

| Tipo | Fonte | Observacao |
|------|-------|------------|
| Fotografia | Unsplash (curadoria manual) | Filtrar por qualidade cinematografica. Nunca usar o primeiro resultado. |
| Video | Pexels Video, Coverr | Loops curtos, footage cinematografico |
| 3D generativo | Three.js + @react-three/fiber | Particulas, geometrias, shaders customizados |
| Icones | Lucide React, Phosphor Icons | Apenas quando icone perfeito existe. Senao, use numeros/texto. |
| Texturas | CSS generativo (noise, gradientes) | Preferir CSS a imagens de textura |

**Regra de curadoria:** Para cada asset escolhido, rejeite pelo menos 5 opcoes. A primeira escolha quase nunca e a melhor.

---

## Otimizacao Tecnica

### Next.js Image

```tsx
import Image from 'next/image';

// SEMPRE usar next/image para estaticas
<Image
  src="/assets/hero-leadership.jpg"
  alt="Lider analisando dados em tela de dashboard"  // ALT descritivo, nunca vazio
  width={1920}
  height={1080}
  priority={isHero}                    // Priority apenas para hero/above the fold
  placeholder="blur"
  blurDataURL={blurHash}               // Gerar com plaiceholder ou similar
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>
```

### Video Lazy Loading

```tsx
// Video so carrega quando visivel
export function LazyVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.25 });

  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.src = src;
      ref.current.load();
    }
  }, [isVisible, src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}    // Poster OBRIGATORIO — imagem enquanto carrega
      className="w-full h-full object-cover"
    />
  );
}
```

### Three.js Fallback

```tsx
const Scene3D = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
  ),
});

// Verificar WebGL antes de renderizar
function Hero() {
  const hasWebGL = useWebGLSupport();
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative h-screen">
      {hasWebGL && !reducedMotion ? (
        <Suspense fallback={<GradientFallback />}>
          <Scene3D />
        </Suspense>
      ) : (
        <GradientFallback />
      )}
      <div className="relative z-10">{content}</div>
    </div>
  );
}
```

---

## Anti-Patterns

1. **Stock generico** — Foto de "equipe sorrindo em sala de reuniao" mata a credibilidade. Melhor nao ter imagem.
2. **Sorrisos falsos** — Se as pessoas na foto parecem atores, o publico desconfia do conteudo.
3. **3D sem fallback** — Tela preta no mobile ou navegadores antigos. Sempre fallback CSS.
4. **Video com audio inesperado** — Nunca. Sempre `muted`. Se audio for necessario, exija clique explicito.
5. **Imagem sem alt** — Acessibilidade basica. Alt descritivo ("Lider analisando dashboard"), nunca generico ("imagem").
6. **Assets pesados no carregamento inicial** — Hero image com `priority`, todo o resto lazy.
7. **Mesma imagem em tamanhos diferentes** — Use `sizes` prop do next/image para servir resolucao adequada.
8. **Gradientes como substituto de fotografia** — Gradiente e textura, nao conteudo. Nao substitui um bom asset.
