import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const experienceLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
    <div className="h-8 w-8 animate-pulse rounded-full bg-[var(--accent-primary)]/20" />
  </div>
);

const experiences: Record<string, { component: React.ComponentType; title: string; description: string }> = {
  "equacao-invisivel": {
    component: dynamic(() => import("@/experiences/equacao-invisivel"), {
      loading: experienceLoader,
    }),
    title: "A Equação Invisível — CX Experience Lab",
    description:
      "Resultado esperado + Experiência apropriada = Sucesso do cliente. A equação que ninguém te mostrou.",
  },
  "paradoxo-do-sucesso": {
    component: dynamic(() => import("@/experiences/paradoxo-do-sucesso"), {
      loading: experienceLoader,
    }),
    title: "O Paradoxo do Sucesso — CX Experience Lab",
    description:
      "Renovação não é lealdade. Cliente ativo não é cliente saudável. O paradoxo que ninguém discute.",
  },
};

export async function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences[slug];
  if (!experience) return {};

  return {
    title: experience.title,
    description: experience.description,
    openGraph: {
      title: experience.title,
      description: experience.description,
    },
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = experiences[slug];

  if (!experience) {
    notFound();
  }

  const Component = experience.component;

  return (
    <main>
      <Component />
    </main>
  );
}
