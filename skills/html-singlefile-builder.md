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
