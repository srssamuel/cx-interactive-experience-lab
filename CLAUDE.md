# CLAUDE.md — Diretrizes do CX Interactive Experience Lab

Este arquivo define os padrões, princípios e critérios que governam toda produção neste repositório.

---

## Identidade do Projeto

Este é um estúdio premium de criação de experiências interativas em HTML. Não é um gerador de páginas web. É uma fábrica de experiências digitais de pensamento.

Todo material produzido aqui deve:
- Reorganizar a forma como o usuário enxerga o tema
- Ensinar com sofisticação
- Provocar descoberta
- Unir forma e conteúdo
- Combinar repertório atual com perspectiva de futuro

---

## Princípios Inegociáveis

1. **Nunca gerar conteúdo genérico** — cada material precisa de um ângulo original
2. **Sempre buscar novo olhar** — se já foi dito mil vezes, encontre a milésima primeira forma
3. **Storytelling executivo** — narrativa sofisticada como espinha dorsal
4. **Interatividade com função cognitiva** — cada interação deve ensinar, revelar ou provocar
5. **Presente + Futuro** — ancorar no agora, apontar para o que vem
6. **Impacto visual + legibilidade** — beleza que não sacrifica clareza
7. **Cada HTML é uma experiência** — intelectual e visual, nunca apenas informativa
8. **Clareza, sofisticação, ritmo, profundidade** — os quatro pilares de cada entrega
9. **Padrão premium, editorial, cinematográfico** — referência visual alta
10. **Design + Narrativa + Interação = Sistema** — sempre juntos, nunca isolados

---

## Critérios de Design

### Obrigatório
- Estética moderna, premium, editorial e cinematográfica
- Hierarquia visual excelente (título > subtítulo > corpo > detalhe)
- Contraste forte com leitura confortável
- Paleta intencional (máximo 3-4 cores com propósito)
- Tipografia com personalidade e legibilidade
- Espaçamento generoso — respiro visual
- Responsivo e fluido
- Animações sutis com propósito narrativo

### Proibido
- Visual infantil ou lúdico sem propósito
- Corporativo sem alma (slides PowerPoint convertidos)
- Poluição visual — excesso de elementos, cores ou informações
- Templates genéricos reconhecíveis
- Gradientes e sombras exagerados
- Ícones decorativos sem função

---

## Critérios de Interatividade

### Cada interação deve
- Revelar camadas de raciocínio
- Permitir comparar ideias
- Mostrar evolução conceitual
- Criar sensação de descoberta
- Sustentar o storytelling

### Tipos recomendados
- Tabs para comparação de perspectivas
- Accordions para aprofundamento progressivo
- Scroll-triggered reveals para narrativa sequencial
- Hover states informativos
- Toggles para antes/depois ou presente/futuro
- Cards interativos com detalhes sob demanda
- Timelines navegáveis
- Filtros por dimensão ou categoria

### Proibido
- Interatividade apenas estética (animação sem conteúdo)
- Carrosséis automáticos
- Pop-ups intrusivos
- Scroll hijacking agressivo
- Efeitos que distraem da leitura

---

## Critérios de Escrita

### Tom
- Português natural e fluido
- Linguagem executiva sem ser fria
- Didática sofisticada — ensina sem simplificar demais
- Clareza com densidade — cada frase carrega peso

### Proibido
- Clichês ("no mundo atual", "transformação digital", "novo normal")
- Frases vazias ("é fundamental que", "nesse contexto")
- Tom de consultoria genérica
- Tom robótico ou acadêmico engessado
- Bullet points infinitos sem narrativa
- Excesso de jargão sem explicação

---

## Padrões Técnicos

### HTML
- HTML5 semântico (section, article, header, nav, main, footer)
- Meta tags completas (charset, viewport, description, og:tags)
- Acessibilidade básica (alt texts, aria-labels, contraste)
- IDs e classes com nomes semânticos em inglês

### CSS
- Custom Properties para paleta e tipografia
- Mobile-first com breakpoints claros
- Grid e Flexbox como base de layout
- Animações com `prefers-reduced-motion` respeitado
- Sem frameworks CSS — estilo próprio e intencional

### JavaScript
- Vanilla JS ou módulos leves
- Event delegation quando aplicável
- Intersection Observer para scroll effects
- Sem dependências pesadas
- Sem jQuery
- Performance como prioridade

### Single-file HTML
- CSS inline em `<style>`
- JS inline em `<script>`
- Imagens como SVG inline ou referências externas confiáveis
- Fontes do Google Fonts via link
- Arquivo completo e autocontido

---

## Fluxo de Geração

Seguir sempre esta ordem:

```
1. TESE → Qual é a ideia central? O que este material defende?
2. HEADLINE → Qual é a promessa intelectual? O que o leitor ganha?
3. NARRATIVA → Qual é o arco? Como as seções se conectam?
4. VISUAL → Qual paleta? Que tipografia? Que atmosfera?
5. INTERAÇÃO → Quais elementos interativos? Por que cada um?
6. GERAÇÃO → Criar o HTML seguindo todos os critérios
7. REFINAMENTO → Ajustar design, UX, copy e ritmo visual
8. VALIDAÇÃO → Passar pelo checklist em /references/quality-check.md
```

---

## Estrutura do Repositório

| Pasta | Uso |
|-------|-----|
| `prompts/` | Prompts mestres para geração — o ponto de partida |
| `skills/` | Modos especialistas — como pensar em cada dimensão |
| `references/` | Checklists e guias — critérios objetivos de qualidade |
| `templates/` | Templates base — estrutura reutilizável |
| `output/` | Produção final — os HTMLs entregues |

---

## Referência de Qualidade

Cada HTML deve parecer uma mistura de:
- **Keynote premium** — impacto visual de apresentação de palco
- **Playbook executivo** — profundidade e aplicabilidade
- **Manifesto visual** — posicionamento forte e identidade
- **Experiência de aprendizagem** — interatividade que ensina
- **Material de referência** — algo que se salva e se revisita
