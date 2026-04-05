"use client";

import { SlideDeck } from "@/components/deck";
import {
  TitleSlide,
  StatementSlide,
  DataSlide,
  ListSlide,
  SplitSlide,
  ComparisonSlide,
  SectionDivider,
} from "@/components/slides";

export default function Keynote() {
  return (
    <SlideDeck>
      {/* ═══════════════════════════════════════════════
          ABERTURA — 3 slides
          ═══════════════════════════════════════════════ */}

      {/* 01 */}
      <TitleSlide
        overline="Diretoria de Qualidade e Dados"
        title="O Futuro Já Chegou."
        accent="Você está pronto?"
        subtitle="Tendências de CX, Customer Success, Dados e IA que estão redefinindo quem lidera e quem assiste."
      />

      {/* 02 */}
      <StatementSlide
        statement="89% dos executivos dizem que CX é prioridade. Menos de 15% conseguem provar o impacto financeiro."
        attribution="Forrester CX Index, 2024"
      />

      {/* 03 */}
      <DataSlide
        stat="$75B"
        label="Custo anual do mau atendimento nos EUA"
        context="E no Brasil, o cenário é proporcionalmente pior — com um agravante: o cliente brasileiro é 3x mais propenso a trocar de fornecedor após uma experiência ruim."
        source="NewVoiceMedia / Salesforce Research"
      />

      {/* ═══════════════════════════════════════════════
          SEÇÃO 1 — CUSTOMER EXPERIENCE (slides 4-12)
          ═══════════════════════════════════════════════ */}

      {/* 04 */}
      <SectionDivider
        number="01"
        title="Customer Experience"
        subtitle="Da satisfação à obsessão: por que CX deixou de ser departamento e virou estratégia de sobrevivência."
        theme="cx"
      />

      {/* 05 */}
      <SplitSlide
        title="CX não é mais diferencial. É pré-requisito."
        accent="A nova realidade"
        content="O cliente de 2025 não compara você com seu concorrente direto. Ele compara com a melhor experiência que já teve — seja um app de banco, uma entrega da Amazon ou uma consulta no iFood. O benchmark é universal."
        visualType="network"
        theme="cx"
      />

      {/* 06 */}
      <DataSlide
        stat="73%"
        label="dos clientes abandonam após 2 experiências ruins"
        context="Não importa quanto tempo foram fiéis. Duas falhas bastam para zerar anos de relacionamento."
        source="PwC Future of CX Report"
        theme="cx"
      />

      {/* 07 */}
      <ListSlide
        title="5 Tendências que Redefinem CX em 2025"
        items={[
          { title: "Hiperpersonalização preditiva", description: "IA antecipa necessidades antes do cliente perceber que as tem. Do reativo para o profético." },
          { title: "CX em tempo real", description: "Latência zero entre a frustração e a resolução. Quem demora 24h para responder já perdeu." },
          { title: "Experiência omnicanal sem costura", description: "O cliente não pensa em canais. Ele pensa em resolver. A jornada é uma só." },
          { title: "Emoção como métrica", description: "Sentiment analysis em voz, texto e comportamento. O NPS está morrendo — o que vem depois é mais preciso." },
          { title: "CX como P&L", description: "Conectar cada ponto de contato a receita, churn e LTV. Se não mede, não gerencia. Se não gerencia, não lidera." },
        ]}
        theme="cx"
      />

      {/* 08 */}
      <ComparisonSlide
        title="CX Tradicional vs. CX Inteligente"
        left={{
          label: "Modelo tradicional",
          items: [
            "Pesquisa de satisfação pós-atendimento",
            "NPS como métrica principal",
            "Canais operando em silos",
            "Decisões baseadas em intuição",
            "Reação a reclamações",
          ],
        }}
        right={{
          label: "Modelo inteligente",
          items: [
            "Análise de sentimento em tempo real",
            "Customer Effort Score + análise preditiva",
            "Jornada unificada com contexto persistente",
            "Decisões orientadas por dados comportamentais",
            "Antecipação de problemas antes que aconteçam",
          ],
        }}
        theme="cx"
      />

      {/* 09 */}
      <StatementSlide
        statement="O melhor atendimento é aquele que nunca precisou acontecer."
        theme="cx"
      />

      {/* 10 */}
      <SplitSlide
        title="O paradoxo da eficiência"
        accent="Reflexão provocativa"
        content="Call centers investem milhões para reduzir o TMA. Mas o cliente não quer uma ligação curta — ele quer não precisar ligar. A métrica errada produz a otimização errada."
        visualType="bars"
        theme="cx"
      />

      {/* 11 */}
      <DataSlide
        stat="4.7x"
        label="mais receita gerada por empresas líderes em CX"
        context="Em comparação com retardatárias. CX não é custo. É o maior multiplicador de receita disponível."
        source="Watermark Consulting / S&P 500 Analysis"
        theme="cx"
      />

      {/* 12 */}
      <ListSlide
        title="Ações Imediatas para Líderes de CX"
        items={[
          { title: "Mapear momentos de verdade", description: "Identifique os 3-5 momentos que definem se o cliente fica ou vai embora." },
          { title: "Unificar dados de jornada", description: "Destrua os silos. CDP (Customer Data Platform) não é luxo — é infraestrutura." },
          { title: "Medir esforço, não satisfação", description: "CES (Customer Effort Score) prediz churn melhor que NPS. Comece a medir." },
          { title: "Criar closed-loop em 24h", description: "Cada detrator precisa ser recuperado em no máximo um dia. Automatize." },
        ]}
        theme="cx"
      />

      {/* ═══════════════════════════════════════════════
          SEÇÃO 2 — CUSTOMER SUCCESS (slides 13-20)
          ═══════════════════════════════════════════════ */}

      {/* 13 */}
      <SectionDivider
        number="02"
        title="Customer Success"
        subtitle="De apagar incêndios a construir valor: CS como motor de crescimento, não centro de custo."
        theme="cs"
      />

      {/* 14 */}
      <SplitSlide
        title="44% dos clientes renovam sem nunca ter adotado o produto."
        accent="O dado que ninguém quer ouvir"
        content="Renovação sem adoção é uma bomba-relógio. O churn não começa na reclamação — ele começa no silêncio do cliente que paga mas não usa."
        visualType="pulse"
        theme="cs"
      />

      {/* 15 */}
      <DataSlide
        stat="67%"
        label="do churn começa no onboarding"
        context="Os primeiros 90 dias decidem tudo. Se o cliente não enxerga valor nesse período, o restante do contrato é gestão de risco."
        source="Gainsight Customer Success Report"
        theme="cs"
      />

      {/* 16 */}
      <ListSlide
        title="Os 5 Sinais Silenciosos do Churn"
        items={[
          { title: "Queda no login sem reclamação", description: "O cliente que para de usar sem avisar já decidiu sair. O silêncio é o sinal mais perigoso." },
          { title: "Perguntas que param de chegar", description: "Curiosidade zero = investimento emocional zero. Preocupe-se quando param de perguntar." },
          { title: "Expansão travada", description: "Se o cliente não quer crescer com você, ele já está avaliando alternativas." },
          { title: "Contato apenas em crises", description: "Quando o único gatilho de interação é o problema, o relacionamento já morreu." },
          { title: "NPS passivo (7-8) persistente", description: "Nem detrator, nem promotor. O passivo é o churn mais caro porque não grita antes de sair." },
        ]}
        theme="cs"
      />

      {/* 17 */}
      <ComparisonSlide
        title="CS Reativo vs. CS Proativo"
        left={{
          label: "Reativo (apagando incêndio)",
          items: [
            "CSM acionado pelo ticket",
            "Health Score baseado em pesquisa",
            "QBR como apresentação de dados",
            "Expansão oportunista",
            "Renovação negociada no último mês",
          ],
        }}
        right={{
          label: "Proativo (construindo valor)",
          items: [
            "CSM antecipa risco por sinais digitais",
            "Health Score com dados de uso reais",
            "QBR como sessão de planejamento estratégico",
            "Expansão como consequência natural de sucesso",
            "Renovação como formalidade — valor já provado",
          ],
        }}
        theme="cs"
      />

      {/* 18 */}
      <StatementSlide
        statement="Customer Success não é um departamento. É a forma como a empresa inteira pensa sobre receita recorrente."
        theme="cs"
      />

      {/* 19 */}
      <DataSlide
        stat="5-25x"
        label="mais caro adquirir do que reter"
        context="Essa estatística tem 30 anos. Todo mundo sabe. Quase ninguém age com a urgência que ela exige."
        source="Harvard Business Review"
        theme="cs"
      />

      {/* 20 */}
      <SplitSlide
        title="O framework que muda o jogo"
        accent="Modelo de maturidade"
        content="Nível 1: Suporte disfarçado de CS. Nível 2: CS como retenção. Nível 3: CS como motor de expansão. Nível 4: CS como estratégia de crescimento. A maioria das empresas está entre 1 e 2. Os líderes estão no 4."
        visualType="pyramid"
        theme="cs"
      />

      {/* ═══════════════════════════════════════════════
          SEÇÃO 3 — DADOS (slides 21-27)
          ═══════════════════════════════════════════════ */}

      {/* 21 */}
      <SectionDivider
        number="03"
        title="Dados & Analytics"
        subtitle="De dashboards bonitos a decisões inteligentes: o dado como infraestrutura de competitividade."
        theme="data"
      />

      {/* 22 */}
      <StatementSlide
        statement="Ter dados não é ter inteligência. 87% das empresas acumulam dados que nunca viram uma decisão."
        attribution="NewVantage Partners Survey"
        theme="data"
      />

      {/* 23 */}
      <ListSlide
        title="A Pirâmide de Maturidade Analítica"
        items={[
          { title: "Descritivo — O que aconteceu?", description: "Dashboards e relatórios. Olhar para trás. Necessário, mas insuficiente." },
          { title: "Diagnóstico — Por que aconteceu?", description: "Root cause analysis. Correlações e padrões. Onde a maioria para." },
          { title: "Preditivo — O que vai acontecer?", description: "Machine Learning, modelos de propensão, forecast. Onde poucos chegam." },
          { title: "Prescritivo — O que devemos fazer?", description: "Recomendações automatizadas, next-best-action. O verdadeiro ROI dos dados." },
        ]}
        theme="data"
      />

      {/* 24 */}
      <DataSlide
        stat="91%"
        label="das empresas investem em dados. 24% consideram data-driven."
        context="O gap entre investir e ser não é tecnológico. É cultural. Cultura come estratégia no café da manhã — e come dados no almoço."
        source="Gartner CDO Survey"
        theme="data"
      />

      {/* 25 */}
      <SplitSlide
        title="O dado de voz: a mina de ouro ignorada"
        accent="No seu call center"
        content="Cada ligação tem 4 a 8 minutos de dados brutos. Sentimento, intenção, esforço, satisfação, oportunidade de venda. 97% dessas informações morrem no pós-atendimento porque ninguém as captura de forma estruturada."
        visualType="bars"
        theme="data"
      />

      {/* 26 */}
      <ComparisonSlide
        title="Dados como Custo vs. Dados como Ativo"
        left={{
          label: "Dados como custo",
          items: [
            "Relatórios mensais que ninguém lê",
            "BI desconectado da operação",
            "Data lake que virou data swamp",
            "KPIs definidos pela área de TI",
          ],
        }}
        right={{
          label: "Dados como ativo",
          items: [
            "Insights em tempo real integrados ao workflow",
            "Modelos preditivos que previnem problemas",
            "Data mesh com ownership nas áreas de negócio",
            "KPIs co-criados entre dados e operação",
          ],
        }}
        theme="data"
      />

      {/* 27 */}
      <DataSlide
        stat="23x"
        label="mais chances de adquirir clientes"
        context="Empresas data-driven têm 23x mais chances de adquirir clientes, 6x de retê-los e 19x mais de ser lucrativas."
        source="McKinsey Global Institute"
        theme="data"
      />

      {/* ═══════════════════════════════════════════════
          SEÇÃO 4 — INTELIGÊNCIA ARTIFICIAL (slides 28-33)
          ═══════════════════════════════════════════════ */}

      {/* 28 */}
      <SectionDivider
        number="04"
        title="Inteligência Artificial"
        subtitle="Não é sobre substituir pessoas. É sobre dar superpoderes a quem já é bom."
        theme="ai"
      />

      {/* 29 */}
      <StatementSlide
        statement="IA não vai substituir o atendente. Mas o atendente que usa IA vai substituir o que não usa."
        theme="ai"
      />

      {/* 30 */}
      <ListSlide
        title="IA no CX: O Que Já é Real em 2025"
        items={[
          { title: "Agent Assist em tempo real", description: "IA ouve a ligação e sugere respostas, artigos e ações enquanto o agente atende. Reduz TMA em 30%+." },
          { title: "Quality Assurance automatizado", description: "100% das interações avaliadas — não mais amostras de 2%. Feedback em tempo real, não mensal." },
          { title: "Speech Analytics + Sentimento", description: "Detectar frustração, urgência e oportunidade de upsell na voz do cliente. Em tempo real." },
          { title: "Bots que resolvem, não que frustram", description: "LLMs mudaram o jogo. Bots que entendem contexto, não menus de opções. Resolução real, não deflexão." },
          { title: "Predição de churn e next-best-action", description: "Modelos que identificam quem vai sair 60 dias antes e recomendam ações específicas de retenção." },
          { title: "Workforce Management inteligente", description: "Forecast de volume com precisão de 95%+. Escalas que consideram skill, humor e complexidade." },
        ]}
        theme="ai"
      />

      {/* 31 */}
      <DataSlide
        stat="40%"
        label="de redução de custo operacional com IA aplicada"
        context="Mas o número que importa não é o custo. É o que você faz com o tempo liberado. IA barata é commodity. IA que gera valor é estratégia."
        source="Deloitte AI in Contact Centers"
        theme="ai"
      />

      {/* 32 */}
      <SplitSlide
        title="O risco de implementar IA sem estratégia"
        accent="Atenção"
        content="83% dos projetos de IA falham. Não por tecnologia — por falta de clareza no problema a resolver. IA sem caso de uso é brinquedo. IA sem dados é alucinação. IA sem governança é risco. Comece pelo problema, não pela ferramenta."
        visualType="orbit"
        theme="ai"
      />

      {/* 33 */}
      <ComparisonSlide
        title="IA Cosmética vs. IA Estratégica"
        left={{
          label: "IA cosmética",
          items: [
            "Chatbot que escala tudo para humano",
            "IA no pitch deck, não na operação",
            "POC eterna que nunca vira produção",
            "Automação que apenas desloca o problema",
          ],
        }}
        right={{
          label: "IA estratégica",
          items: [
            "IA integrada ao workflow do agente",
            "Métricas de impacto medidas semanalmente",
            "Deploy contínuo com feedback loop",
            "IA que amplifica a capacidade humana",
          ],
        }}
        theme="ai"
      />

      {/* ═══════════════════════════════════════════════
          FECHAMENTO (slides 34-35)
          ═══════════════════════════════════════════════ */}

      {/* 34 */}
      <StatementSlide
        statement="A pergunta não é se CX, Dados e IA vão transformar seu negócio. A pergunta é se você vai liderar essa transformação — ou apenas assistir."
      />

      {/* 35 */}
      <TitleSlide
        overline="Diretoria de Qualidade e Dados"
        title="Obrigado."
        accent="Vamos conversar."
        subtitle="O futuro não espera quem ainda está discutindo se deve começar."
      />
    </SlideDeck>
  );
}
