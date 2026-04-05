import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cx-experience-lab.vercel.app";

const experiences = ["equacao-invisivel", "paradoxo-do-sucesso"];

export default function sitemap(): MetadataRoute.Sitemap {
  const experienceRoutes = experiences.map((slug) => ({
    url: `${BASE_URL}/experiencias/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...experienceRoutes,
  ];
}
