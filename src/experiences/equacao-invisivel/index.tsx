"use client";

import { KeyboardHUD } from "@/components/navigation/keyboard-hud";
import { ModeIndicator } from "@/components/navigation/mode-indicator";
import { PresentationShell } from "@/components/navigation/presentation-shell";
import { WorkshopLayout } from "@/components/workshop/workshop-layout";
import { chapters, workshopDiscussions } from "./content";

import { HeroChapter } from "./chapters/hero";
import { AberturaChapter } from "./chapters/abertura";
import { CapEquacao } from "./chapters/cap-equacao";
import { CapMitos } from "./chapters/cap-mitos";
import { CapDimensoes } from "./chapters/cap-dimensoes";
import { CapForma } from "./chapters/cap-forma";
import { CapCustoSilencio } from "./chapters/cap-custo-silencio";
import { CapMapa } from "./chapters/cap-mapa";
import { CapPratica } from "./chapters/cap-pratica";
import { CapMaturidade } from "./chapters/cap-maturidade";
import { CapReferencias } from "./chapters/cap-referencias";
import { WorkshopFinalChapter } from "./chapters/workshop-final";
import { FechamentoChapter } from "./chapters/fechamento";

export default function EquacaoInvisivel() {
  return (
    <div className="theme-cx">
      <WorkshopLayout discussions={workshopDiscussions}>
        <PresentationShell>
          <KeyboardHUD chapters={chapters} title="A Equação Invisível" />
          <ModeIndicator />

          <HeroChapter />
          <AberturaChapter />
          <CapEquacao />
          <CapMitos />
          <CapDimensoes />
          <CapForma />
          <CapCustoSilencio />
          <CapMapa />
          <CapPratica />
          <CapMaturidade />
          <CapReferencias />
          <WorkshopFinalChapter />
          <FechamentoChapter />
        </PresentationShell>
      </WorkshopLayout>
    </div>
  );
}
