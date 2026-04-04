import type { ExperienceMeta } from "./types";

/**
 * Central registry — single source of truth for all experiences.
 * Portal, routes, and navigation all read from here.
 */
export const experiences: ExperienceMeta[] = [
  {
    slug: "equacao-invisivel",
    title: "A Equacao Invisivel",
    subtitle: "Customer Experience",
    description:
      "A equacao que separa retencao real de abandono silencioso. Por que resultado certo com experiencia errada destroi valor.",
    thesis:
      "Resultado sem experiencia e receita com prazo de validade. A equacao que ninguem mede e a que mais mata.",
    chapters: [
      { id: "hero", label: "Abertura", number: "00" },
      { id: "tensao", label: "A Tensao", number: "01" },
      { id: "equacao", label: "A Equacao", number: "02" },
      { id: "mitos", label: "Mitos", number: "03" },
      { id: "dimensoes", label: "Dimensoes", number: "04" },
      { id: "forma", label: "A Forma", number: "05" },
      { id: "custo", label: "O Custo do Silencio", number: "06" },
      { id: "mapa", label: "Mapa", number: "07" },
      { id: "pratica", label: "Na Pratica", number: "08" },
      { id: "maturidade", label: "Maturidade", number: "09" },
      { id: "fechamento", label: "Fechamento", number: "10" },
    ],
    readTime: "15 min",
    workshopTime: "1h30",
    tags: ["CX", "Experiencia", "Retencao"],
    theme: "cx",
    status: "live",
  },
  {
    slug: "paradoxo-do-sucesso",
    title: "O Paradoxo do Sucesso",
    subtitle: "Customer Success",
    description:
      "Renovacao nao e lealdade. Cliente ativo nao e cliente saudavel. O que sua operacao nao esta medindo.",
    thesis:
      "O cliente que renova e o mesmo que vai embora. Sucesso medido por atividade e ilusao operacional.",
    chapters: [
      { id: "hero", label: "Abertura", number: "00" },
      { id: "paradoxo", label: "O Paradoxo", number: "01" },
      { id: "sinais", label: "Sinais Ocultos", number: "02" },
      { id: "metricas", label: "Metricas", number: "03" },
      { id: "modelo", label: "Modelo", number: "04" },
      { id: "jornada", label: "Jornada", number: "05" },
      { id: "discussao", label: "Discussao", number: "06" },
      { id: "fechamento", label: "Fechamento", number: "07" },
    ],
    readTime: "12 min",
    workshopTime: "1h",
    tags: ["CS", "Retencao", "Churn"],
    theme: "cs",
    status: "live",
  },
];

export const upcomingExperiences: Pick<ExperienceMeta, "slug" | "title" | "subtitle" | "theme" | "status">[] = [
  {
    slug: "inteligencia-de-dados",
    title: "Inteligencia de Dados",
    subtitle: "Data Intelligence",
    theme: "data",
    status: "coming-soon",
  },
  {
    slug: "estrategia-ia",
    title: "Estrategia IA",
    subtitle: "AI Strategy",
    theme: "ai",
    status: "coming-soon",
  },
  {
    slug: "eficiencia-operacional",
    title: "Eficiencia Operacional",
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
