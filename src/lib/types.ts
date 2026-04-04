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
  context?: string;
  timerMinutes?: number;
  sectionId: string;
}

/** Experience metadata for the registry */
export interface ExperienceMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thesis: string;
  chapters: Chapter[];
  readTime: string;
  workshopTime: string;
  tags: string[];
  theme: string;
  status: "live" | "draft" | "coming-soon";
}
