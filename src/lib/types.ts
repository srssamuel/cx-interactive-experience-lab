/** Chapter definition for navigation */
export interface Chapter {
  id: string;
  label: string;
  number: string;
}

/** Experience mode */
export type ExperienceMode = "reading" | "presentation" | "workshop";

/** Workshop discussion point */
export interface WorkshopDiscussion {
  id: string;
  question: string;
  sectionId: string;
}

/** Experience metadata for the portal */
export interface ExperienceMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  chapters: number;
  readTime: string;
  tags: string[];
  accent: string;
  status: "live" | "draft" | "coming-soon";
}
