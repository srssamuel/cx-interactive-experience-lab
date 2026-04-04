"use client";

import { KeyboardHUD } from "@/components/navigation/keyboard-hud";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { chapters, workshopDiscussions } from "./content";

import { HeroChapter } from "./chapters/hero";
import { CapParadoxo } from "./chapters/cap-paradoxo";
import { CapSinais } from "./chapters/cap-sinais";
import { CapMetricas } from "./chapters/cap-metricas";
import { CapModelo } from "./chapters/cap-modelo";
import { CapJornada } from "./chapters/cap-jornada";
import { DiscussaoChapter } from "./chapters/discussao";
import { FechamentoChapter } from "./chapters/fechamento";

export default function ParadoxoDoSucesso() {
  return (
    <div className="theme-cs">
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <KeyboardHUD chapters={chapters} title="O Paradoxo do Sucesso" />
          <ModeIndicator />

          <HeroChapter />
          <CapParadoxo />
          <CapSinais />
          <CapMetricas />
          <CapModelo />
          <CapJornada />
          <DiscussaoChapter />
          <FechamentoChapter />
        </PresentationShell>
      </WorkshopLayout>
    </div>
  );
}
