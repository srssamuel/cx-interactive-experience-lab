# Skill: Interactive Learning Design

## Objetivo
Projetar interatividade que ensina. Cada elemento interativo deve ter uma funcao cognitiva clara — revelar, comparar, aprofundar, provocar ou construir entendimento.

## Quando Usar
- Ao planejar os elementos interativos de qualquer experiencia
- Quando o conteudo tem camadas que se beneficiam de exploracao
- Quando o material precisa ensinar um framework ou modelo

## Como Pensar
- Interatividade e pedagogia, nao decoracao
- Pergunte sempre: "O que o usuario aprende ao interagir com isso?"
- Pense em revelacao progressiva — nao mostre tudo de uma vez
- Pense em comparacao ativa — deixe o usuario explorar contrastes
- Pense em construcao de modelo mental — cada clique adiciona uma camada

## Boas Praticas
- Tabs para comparar perspectivas (presente vs futuro, empresa A vs B)
- Accordions para aprofundamento sob demanda
- Scroll reveals para narrativa sequencial com ritmo
- Cards interativos para exploracao de dimensoes
- Timelines para evolucao historica ou conceitual
- Toggles para antes/depois
- Filtros para explorar dados por dimensao
- Hover states ricos para informacao contextual

## Erros a Evitar
- Interacao sem proposito ("clique aqui" sem revelar nada novo)
- Carrosseis automaticos (retiram controle do usuario)
- Animacoes que distraem da leitura
- Scroll hijacking agressivo
- Excesso de interacoes que cansam
- Interacoes que escondem conteudo essencial

## Criterio de Excelencia
Cada interacao deve passar no teste: "Se eu remover essa interacao e mostrar o conteudo estatico, perco algo?" Se a resposta for sim — a interacao ensina algo que o estatico nao consegue — ela esta correta.

---

## Matriz de Decisao: Objetivo Cognitivo → Padrao de Interacao

Use esta tabela para escolher o padrao interativo correto com base no que o usuario precisa aprender.

| Objetivo Cognitivo | Padrao de Interacao | Implementacao | Quando Usar | Exemplo Pratico |
|---|---|---|---|---|
| **Comparar** | Tabs lado a lado ou Toggle antes/depois | `<TabGroup>` com Framer Motion `AnimatePresence` para troca suave de conteudo | Quando existem duas ou mais perspectivas que ganham sentido em contraste | CS reativo vs. CS estrategico; Modelo atual vs. modelo proposto |
| **Aprofundar** | Accordion ou Card expansivel | `<ExpandableCard>` com Framer Motion `layout` + `AnimatePresence` para expandir/colapsar | Quando ha camadas de detalhe que nem todos precisam ver | Detalhes tecnicos de implementacao; Dados de suporte para cada argumento |
| **Evoluir** | Timeline ou Stepper | `<Timeline>` com GSAP ScrollTrigger para revelar etapas conforme scroll | Quando o conceito tem progressao temporal ou de maturidade | Modelo de maturidade CS; Evolucao de uma estrategia em 5 anos |
| **Descobrir** | Cards interativos ou Hover reveals | `<InteractiveCard>` com Framer Motion `whileHover` para revelar informacao | Quando o usuario deve explorar sem ordem pre-definida | Dimensoes de um framework; Perfis de persona |
| **Escolher** | Filtros ou Seletores | `<FilterGroup>` com estado React + `AnimatePresence` para filtrar conteudo | Quando o conteudo se aplica a diferentes contextos/segmentos | Recomendacoes por porte de empresa; Metricas por estagio |
| **Contextualizar** | Scroll reveal com narrativa | `<RevealGroup>` com GSAP ScrollTrigger + stagger para construir a historia | Quando a ordem importa e cada elemento depende do anterior | Construcao de argumento em camadas; Narrativa de dados progressiva |

### Regras de Combinacao
- **Maximo 3 padroes diferentes por secao** — mais que isso fragmenta a atencao
- **Nunca aninhe interacoes** — accordion dentro de tab dentro de card e labirinto
- **Alterne ativo e passivo** — depois de uma secao interativa pesada, coloque uma secao de leitura fluida ("breathing section")
- **O primeiro elemento interativo deve aparecer nos primeiros 30% do material** — senao o leitor nao descobre que pode interagir

---

## Implementacao com React + Framer Motion + GSAP

### Tabs com Troca Animada

```tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function ComparativeTabs({ tabs }: { tabs: TabData[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" className="flex gap-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === i}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(i)}
            className={cn('tab-button', active === i && 'tab-active')}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          id={`panel-${tabs[active].id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

### Card Expansivel

```tsx
import { AnimatePresence, motion } from 'framer-motion';

export function ExpandableCard({ title, summary, detail }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="card cursor-pointer"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <h3>{title}</h3>
      <p>{summary}</p>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

### Scroll Reveal com GSAP

```tsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RevealGroup({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = ref.current?.querySelectorAll('.reveal-item');
    if (!items) return;

    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
```

---

## Ferramentas de Execucao

### Template de Planejamento de Interacao
Antes de implementar qualquer elemento interativo, preencha:

| Campo | Resposta |
|-------|---------|
| O que o usuario aprende ao interagir? | — |
| Qual e o objetivo cognitivo? (da matriz acima) | — |
| O que ele perde se o conteudo for estatico? | — |
| Qual o padrao de interacao escolhido? | — |
| Quantos itens/paineis tera? | — |
| O conteudo padrao (primeiro visivel) e o mais importante? | — |
| Qual componente React sera usado? | — |

### Mapa de Densidade Interativa
Para uma experiencia tipica de 8-12 capitulos, distribua interacoes assim:
- **Capitulos 1-2:** Baixa interatividade. Scroll reveal sutil com GSAP. O leitor esta entrando na narrativa.
- **Capitulos 3-5:** Pico de interatividade. Tabs com AnimatePresence, cards expandiveis, accordions. O leitor esta engajado.
- **Capitulos 6-8:** Interatividade moderada. Timelines com ScrollTrigger, filtros. O leitor esta consolidando.
- **Capitulos 9+:** Baixa interatividade. Provocacao final. O leitor esta refletindo.

### Checklist de Acessibilidade Interativa
Toda interacao deve:
- [ ] Funcionar com teclado (Tab, Enter, Escape, Arrow keys)
- [ ] Ter `role` e `aria-*` atributos corretos (tablist/tab/tabpanel, expanded, selected)
- [ ] Ter estados visuais claros (ativo, hover, focus com ring visible)
- [ ] Nao depender exclusivamente de hover (mobile nao tem hover)
- [ ] Respeitar `prefers-reduced-motion` (Framer Motion `transition={{ duration: 0 }}`, GSAP skip)
- [ ] Focus management correto (foco move para conteudo revelado em accordions)

---

## Exemplos Concretos

### Exemplo 1: Tab bem usado vs. tab decorativo

**Ruim:** Tres tabs com "Visao Geral", "Detalhes", "Conclusao" — o conteudo e sequencial e deveria ser lido em ordem. As tabs so escondem texto que deveria estar visivel.

**Bom:** Tres tabs com "Empresa Tradicional", "Empresa Digital-First", "Empresa AI-Native" — cada tab mostra o mesmo framework aplicado a um contexto diferente. O usuario compara ativamente e extrai padroes.

**Por que funciona:** No bom exemplo, a interacao e o aprendizado. O ato de trocar entre tabs (com `AnimatePresence mode="wait"`) revela contrastes que texto corrido nao consegue mostrar com a mesma clareza.

### Exemplo 2: Accordion necessario vs. accordion preguicoso

**Ruim:** Accordion com 8 itens onde cada um tem um paragrafo curto. Tudo caberia em uma lista simples. O accordion so adiciona cliques desnecessarios.

**Bom:** Accordion com 4 niveis de maturidade, cada um expandindo (via Framer Motion `layout` animation) para revelar: caracteristicas, metricas, armadilhas e acoes. O leitor explora o nivel que mais lhe interessa sem se perder nos outros.

### Exemplo 3: Scroll reveal que narra vs. scroll reveal que decora

**Ruim:** Todos os elementos da pagina fazem fade-in ao rolar. Nao ha razao narrativa — e so "bonito". Depois de 3 secoes, o efeito e invisivel.

**Bom:** Uma secao de dados onde cada metrica aparece em sequencia via GSAP ScrollTrigger com stagger, construindo um argumento: primeiro o dado de mercado, depois o dado da empresa, depois o gap. A revelacao progressiva e a argumentacao.

---

## Diagnostico Rapido

1. **Cada elemento interativo tem um objetivo cognitivo claro da matriz?** Se nao, a interacao e decorativa.
2. **O conteudo dentro de tabs/accordions faz sentido em paralelo (nao em sequencia)?** Se nao, use scroll em vez de interacao.
3. **O material funciona em mobile com a mesma qualidade?** Se nao, a interacao foi pensada so para desktop.
4. **Existe variacao de padroes interativos ao longo do material?** Se nao, a experiencia e monotona.
5. **Um leitor que nao clica em nada ainda recebe a mensagem principal?** Se nao, conteudo essencial esta escondido atras de interacoes.
