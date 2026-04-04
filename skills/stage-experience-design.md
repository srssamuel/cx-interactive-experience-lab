# Skill: Stage Experience Design

## Origem
Padrões de keynote design (Apple, TED), executive boardroom theater e hybrid digital experiences. Este skill governa como criar experiências que funcionam como palco digital executivo.

## Quando Usar
- Ao planejar o pacing de uma experiência
- Ao decidir a densidade de conteúdo por tela
- Ao criar transições entre capítulos
- Ao validar se o conteúdo funciona em projetor/palco

---

## Os 3 Modos de Uma Experiência

### Modo Leitura (Default)
- Autoexplorável, individual
- Profundidade maior permitida
- Scroll livre
- Workshop blocks visíveis
- Top-bar com capítulos
- Tempo: 12-18 minutos

### Modo Apresentação (Ctrl+Shift+P)
- Plateia olhando tela + ouvindo apresentador
- Texto muito mais enxuto (tela apoia, não narra)
- Scroll-snap seção a seção
- Workshop blocks ocultos
- Chapter dots verticais no lado direito
- Keyboard navigation (setas)
- Tempo: 30-40 minutos com apresentador

### Modo Workshop (Ctrl+Shift+W)
- Experiência facilitada em grupo
- Workshop blocks ativos com timers
- Painel lateral de facilitação
- Checkpoints de reflexão
- Tempo: 60-90 minutos

---

## Regras de Conteúdo por Tela

### Em Modo Apresentação
A plateia está olhando a tela e ouvindo alguém falar. A tela NÃO PODE competir com o apresentador.

| Tipo de Tela | Máximo de Palavras | Tempo de Absorção |
|--------------|--------------------|-------------------|
| Headline Stage | 6-14 palavras | 5-8 segundos |
| Data Spectacle | 1 número + 1 contexto | 5-7 segundos |
| Image Split | 15-20 palavras no text side | 6-8 segundos |
| Chapter Transition | Número + título | 3-4 segundos |
| Provocação | 8-15 palavras | 5-6 segundos |
| Silêncio | Quase zero texto | 2-3 segundos |

### Regra de Ouro
> O conteúdo precisa "caber no olho" antes de "caber no intelecto."

Se alguém precisa LER para entender, é conteúdo demais para palco. Se alguém ABSORVE ao olhar, está correto.

---

## Tipos de Unidade de Experiência

Uma experiência com 35-40 telas usa estes tipos — NÃO 35-40 telas de texto:

1. **Headline Stage** — 1 ideia forte, 6-12 palavras, sem body
2. **Image Split** — Foto premium de um lado, texto curto do outro
3. **Data Spectacle** — 1 número grande, 1 contexto, 1 implicação
4. **Diagrama Interativo** — O usuário explora, não lê passivamente
5. **Comparison Screen** — Antes/depois, A/B, correto/incorreto
6. **Workshop Block** — Ação de facilitação com timer (hidden em apresentação)
7. **Silence Frame** — Tela de respiro, quase sem texto, absorção
8. **Chapter Transition** — Mudança de ato, número + título
9. **Pull Quote** — Frase de impacto, tipografia grande
10. **Case Reveal** — Caso real com métrica de resultado

---

## Pacing: Ritmo de Apresentação

### Regra de Alternância
Nunca usar o mesmo tipo de tela 2x seguidas. Alternar:
```
Headline → Image Split → Data → Cards → Headline → Comparison → Data → Workshop
```

### Regra de Respiração
Após cada bloco denso (3-4 telas de conteúdo), inserir:
- Um Silence Frame, OU
- Uma Provocação (BlurReveal), OU
- Um Chapter Transition

### Regra de Impacto
Cada capítulo deve ter exatamente:
- 1 momento de entrada forte (TextReveal ou ChapterTransition)
- 1 momento de dados como espetáculo (DataSpectacle)
- 1 momento de provocação/silêncio (BlurReveal, PullQuote)

---

## Passagens Entre Capítulos

### ChapterTransition (obrigatório)
Cada capítulo começa com:
- Número oversized (faded, 10-12rem)
- Título em display serif
- Divider gradient
- Stagger animation nos elementos

### Sensação de "Cortina Digital"
- Background muda sutilmente entre capítulos (base ↔ surface)
- Grain texture marca presença em transições
- Glow radial no capítulo seguinte cria "convite visual"

---

## Legibilidade em Projetor

### Regras para Palco (16:9 projetado)
- Título mínimo: 2.5rem (40px)
- Body mínimo: 1.125rem (18px) — nunca menor
- Contraste: WCAG AA mínimo
- Nenhum texto sobre foto busy sem overlay forte
- Safe zone: 10% de margem em todos os lados
- Fundo: navy profundo (#050a14), nunca preto puro
- Accent: cyan elétrico, visível em qualquer projetor

### Teste Mental
> "Se eu projetar isso numa sala de reunião com luz ambiente, ainda consigo ler a 3 metros?"

Se não, ajuste tamanho, contraste ou densidade.

---

## Workshop Blocks: Design de Facilitação

### Tipos Disponíveis
| Tipo | Ícone | Cor | Uso |
|------|-------|-----|-----|
| reflection | ◉ | Cyan | Reflexão individual |
| discussion | ◎ | Emerald | Discussão em grupo |
| application | ▸ | Sky | Aplicação ao time |
| executive | ◆ | Amber | Pergunta executiva |
| practice | ⬡ | Violet | Exercício prático |

### Regras
- Workshop blocks são OCULTOS em modo apresentação
- Em modo workshop, mostram badge "Ativo" e timer
- Timer tem start/pause/reset
- Pergunta principal: display serif, grande
- Contexto: texto secundário, menor
- Instruções: numbered list, concisa
