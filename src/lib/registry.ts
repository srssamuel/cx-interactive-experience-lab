import type { ExperienceMeta } from "./types";

/**
 * Central registry — single source of truth for all experiences.
 * Portal, routes, and navigation all read from here.
 */
export const experiences: ExperienceMeta[] = [
  {
    slug: "equacao-invisivel",
    title: "A Equação Invisível",
    subtitle: "Customer Experience",
    description:
      "A equação que separa retenção real de abandono silencioso. Por que resultado certo com experiência errada destrói valor.",
    thesis:
      "Resultado sem experiência é receita com prazo de validade. A equação que ninguém mede é a que mais mata.",
    chapters: [
      { id: "hero", label: "Início", number: "00" },
      { id: "abertura", label: "Abertura", number: "" },
      { id: "equacao", label: "A Equação", number: "01" },
      { id: "mitos", label: "Desconstrução", number: "02" },
      { id: "dimensoes", label: "4 Dimensões", number: "03" },
      { id: "forma", label: "A Forma", number: "04" },
      { id: "custosilencio", label: "Custo do Silêncio", number: "05" },
      { id: "mapa", label: "O Mapa", number: "06" },
      { id: "pratica", label: "Na Prática", number: "07" },
      { id: "maturidade", label: "Maturidade", number: "08" },
      { id: "referencias", label: "Referências", number: "09" },
      { id: "workshop", label: "Workshop", number: "" },
      { id: "fechamento", label: "Fechamento", number: "" },
    ],
    readTime: "15 min",
    workshopTime: "1h30",
    tags: ["CX", "Experiência", "Retenção"],
    theme: "cx",
    status: "live",
  },
  {
    slug: "paradoxo-do-sucesso",
    title: "O Paradoxo do Sucesso",
    subtitle: "Customer Success",
    description:
      "Renovação não é lealdade. Cliente ativo não é cliente saudável. O que sua operação não está medindo.",
    thesis:
      "O cliente que renova é o mesmo que vai embora. Sucesso medido por atividade é ilusão operacional.",
    chapters: [
      { id: "hero", label: "Início", number: "00" },
      { id: "paradoxo", label: "O Paradoxo", number: "01" },
      { id: "sinais", label: "Sinais Ocultos", number: "02" },
      { id: "metricas", label: "Métricas", number: "03" },
      { id: "modelo", label: "Modelo", number: "04" },
      { id: "jornada", label: "Jornada", number: "05" },
      { id: "discussao", label: "Discussão", number: "" },
      { id: "fechamento", label: "Fechamento", number: "" },
    ],
    readTime: "12 min",
    workshopTime: "1h",
    tags: ["CS", "Retenção", "Churn"],
    theme: "cs",
    status: "live",
  },
];

export const upcomingExperiences: Pick<ExperienceMeta, "slug" | "title" | "subtitle" | "theme" | "status">[] = [
  {
    slug: "inteligencia-de-dados",
    title: "Inteligência de Dados",
    subtitle: "Data Intelligence",
    theme: "data",
    status: "coming-soon",
  },
  {
    slug: "estrategia-ia",
    title: "Estratégia IA",
    subtitle: "AI Strategy",
    theme: "data",
    status: "coming-soon",
  },
  {
    slug: "eficiencia-operacional",
    title: "Eficiência Operacional",
    subtitle: "Operational Efficiency",
    theme: "efficiency",
    status: "coming-soon",
  },
];

export function getExperience(slug: string): ExperienceMeta | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getLiveExperiences(): ExperienceMeta[] {
  return experiences.filter((e) => e.status === "live");
}
