# Skill: Microinteraction Designer

## Objetivo
Projetar microinterações que elevam a experiência — hover states, transições, feedback visual, animações de entrada e pequenos detalhes que transformam uma página estática em uma experiência viva.

## Quando Usar
- Ao refinar a camada interativa de qualquer HTML
- Quando o material está funcional mas precisa de "vida"
- Ao decidir timings, easings e feedback visual

## Como Pensar
- Microinterações são a linguagem corporal da interface
- Cada transição comunica algo: hierarquia, relação, feedback
- O timing é tudo: rápido demais parece quebrado, lento demais parece travado
- A melhor microinteração é a que o usuário sente mas não percebe conscientemente
- Consistência é mais importante que criatividade em microinterações

## Boas Práticas
- Hover states: escala sutil (translateY -2 a -4px), brightness ou background shift
- Transições: 150-200ms para feedback, 300-400ms para mudança de conteúdo, 500ms para entrada
- Easing: ease-out para entradas, ease-in-out para transições, ease-in para saídas
- Scroll reveals: fade + translateY (20-30px), stagger de 50-100ms entre elementos
- Focus states visíveis e elegantes (outline ou ring com cor primary)
- Loading states quando há delay perceptível
- Active states com feedback imediato (< 100ms)

## Erros a Evitar
- Animações que demoram mais de 500ms para elementos pequenos
- Bouncing effects (parecem infantis)
- Animações de entrada que bloqueiam leitura
- Inconsistência de timing entre elementos similares
- Ausência de prefers-reduced-motion
- Overuse — quando tudo anima, nada se destaca

## Critério de Excelência
A interface deve parecer "respirar" — tudo responde com naturalidade ao toque e ao scroll. O usuário deve sentir que está interagindo com algo vivo e polido, sem conseguir apontar exatamente por quê. A diferença de qualidade deve ser sentida, não analisada.
