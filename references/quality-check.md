# Quality Gates — Sistema de 6 Portões

Este é o sistema de qualidade da plataforma CX Experience Lab.
Cada experiência deve passar por todos os 6 portões antes da publicação.
Falha em portão eliminatório = refação obrigatória.

---

## Gate 1: Narrativa (Eliminatório)

Falha aqui = o material não pode ser publicado.

- [ ] Tese definida em uma frase provocativa
- [ ] Abertura provoca curiosidade ou desconforto (não começa com definição)
- [ ] Cada seção adiciona algo que as anteriores não disseram
- [ ] Existe arco claro: tensão → desconstrução → reconstrução → provocação
- [ ] Fechamento provoca ação/reflexão (não resume o que já disse)
- [ ] Zero clichês da lista proibida ("no mundo atual", "é fundamental", "nesse contexto")

**Teste**: Leia a primeira e a última frase. As duas funcionam sozinhas como promessas intelectuais?

---

## Gate 2: Design (Eliminatório)

Falha aqui = o material não pode ser publicado.

- [ ] Screenshot do hero pareceria slide de keynote de palco
- [ ] Paleta tem identidade própria (não é cyan-indigo genérico)
- [ ] Existe contraste de ritmo entre seções (densas vs. respiro)
- [ ] Cards têm pelo menos 2 tratamentos visuais diferentes
- [ ] Tipografia display (Instrument Serif) usada com impacto, não como "título grande"
- [ ] Espaçamento generoso (não parece apertado ou denso demais)
- [ ] Em mobile, a experiência é nativa (não "desktop comprimido")

**Teste**: Tire um screenshot de qualquer ponto do scroll. Parece premium?

---

## Gate 3: Motion (Diferenciador)

Não bloqueia publicação, mas diferencia qualidade A de qualidade S.

- [ ] Elementos entram com stagger (nunca todos de uma vez)
- [ ] Pelo menos uma animação scroll-triggered (scroll reveal)
- [ ] Counter animations nos stats/números
- [ ] Transições suaves entre estados interativos (tabs, accordions)
- [ ] Pelo menos um momento de "wow visual" na experiência
- [ ] Motion respeita `prefers-reduced-motion`

**Teste**: Desative as animações. A experiência ainda funciona? (Deve funcionar, mas perder impacto.)

---

## Gate 4: Interatividade (Diferenciador)

- [ ] Cada interação passa no "teste de remoção" (removida = perde valor pedagógico)
- [ ] Pelo menos uma interação que revela insight (não apenas esconde texto)
- [ ] Feedback visual imediato em todo elemento interativo (hover, active, focus)
- [ ] Todos os elementos interativos são keyboard-accessible
- [ ] Touch targets mínimo 44px em mobile

**Teste**: Use a experiência inteira só com teclado. Funciona?

---

## Gate 5: Workshop/Presentation (Obrigatório)

- [ ] Chapter navigation funcional (nav superior com progresso)
- [ ] Headlines são "tweetáveis" (sintetizam a seção em uma frase)
- [ ] Pelo menos 1 `<DiscussionPrompt>` para workshop
- [ ] Keyboard navigation funcional (arrows para navegar)
- [ ] Texto legível em projeção (nenhum texto abaixo de 14px em desktop)

**Teste**: Projete em sala. É legível a 3 metros de distância?

---

## Gate 6: Anti-IA (Eliminatório)

Falha aqui = o material não pode ser publicado.

- [ ] Paleta não é "cyan-indigo em dark mode" (o padrão mais comum de IA)
- [ ] Cards não são todos glass morphism uniformes com backdrop-blur
- [ ] Estrutura não é "hero → 3 seções iguais → conclusão"
- [ ] Existe pelo menos 1 elemento visual inesperado/autoral
- [ ] Layout não é reconhecível como "template de IA"
- [ ] Copy não tem frases que "qualquer modelo escreveria"
- [ ] Gradient text não é usado em excesso (máximo 1-2 instâncias)

**Teste**: Mostre para alguém sem contexto. A pessoa diria "isso parece feito por IA"?

---

## Testes de Estresse

### Screenshot Test
Tire 3 screenshots (hero, meio, fechamento). Cada um individualmente parece premium e autoral?

### Scroll Test
Pause em qualquer ponto do scroll. Há valor visível? (Não pode ser "entre seções" sem conteúdo.)

### Competition Test
Compare com o melhor material similar que você conhece. Este é melhor?

### Amnesia Test
Após 24h sem ver, o que você lembra? Se não lembra nada, falta memorabilidade.

### Projection Test
Projete numa tela de 55"+. Tudo é legível? As cores funcionam? O contraste é suficiente?

### Template Test
Isso se parece com algo que um modelo de IA geraria sozinho? Se sim, falhou.

---

## Classificação

### S — Extraordinário
Passa todos os 6 gates + todos os testes de estresse + surpreende positivamente. Referência de qualidade.

### A — Excelente
Passa todos os gates eliminatórios + 80%+ dos diferenciadores. Pronto para publicação.

### B — Aceitável com Ressalvas
Passa gates eliminatórios mas falta diferenciação em motion ou interatividade. **Requer revisão** antes de publicar.

### C — Insuficiente
Falha em pelo menos 1 gate eliminatório. **Requer refação** desde a fase de design/narrativa.

---

## Processo de Review

1. **Auto-avaliação** — O criador passa por todos os gates marcando checkbox
2. **Review visual** — Screenshots em 3 breakpoints (375, 768, 1440px)
3. **Review funcional** — Testar keyboard nav, reduced motion, mobile touch
4. **Review de copy** — Ler todo texto em voz alta, verificar lista de proibições
5. **Classificação** — Atribuir S/A/B/C com justificativa
6. **Decisão** — S/A = publicar, B = revisar, C = refazer
