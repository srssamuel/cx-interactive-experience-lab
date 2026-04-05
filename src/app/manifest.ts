import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CX Experience Lab",
    short_name: "CX Lab",
    description:
      "Plataforma premium de experiências digitais interativas para workshop, apresentação executiva e posicionamento estratégico.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090E",
    theme_color: "#08090E",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
