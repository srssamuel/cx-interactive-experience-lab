import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { experiences as registry } from "@/lib/registry";

const experienceLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[var(--bg)]">
    <div className="h-6 w-6 animate-pulse rounded-full bg-[var(--text-muted)]/10" />
  </div>
);

const components: Record<string, React.ComponentType> = {
  "equacao-invisivel": dynamic(() => import("@/experiences/equacao-invisivel"), {
    loading: experienceLoader,
  }),
  "paradoxo-do-sucesso": dynamic(() => import("@/experiences/paradoxo-do-sucesso"), {
    loading: experienceLoader,
  }),
};

export async function generateStaticParams() {
  return registry
    .filter((e) => e.status === "live")
    .map((e) => ({ slug: e.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = registry.find((e) => e.slug === slug);
  if (!meta) return {};

  const title = `${meta.title} — CX Experience Lab`;
  return {
    title,
    description: meta.description,
    openGraph: { title, description: meta.description },
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const Component = components[slug];

  if (!Component) {
    notFound();
  }

  return (
    <main>
      <Component />
    </main>
  );
}
