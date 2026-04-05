import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CX Trends 2025 — O Futuro da Experiência",
  description:
    "Tendências de Customer Experience, Customer Success, Dados e IA que estão redefinindo o mercado.",
};

export const viewport: Viewport = {
  themeColor: "#06080C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
