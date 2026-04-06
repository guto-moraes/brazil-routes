"use client";

import Map from "@/components/map";
import { map } from "@/data/map";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mapa-interativo")({
  head: () => ({
    meta: [
      {
        title: "Mapa Interativo | Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Mapa interativo com indicações e descrição de locais que fazem para da história do Vale do Araguaia, em Mato Grosso",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/mapa-interativo",
      },
    ],
  }),
  component: InteractiveMap,
});

function InteractiveMap() {
  return (
    <>
    <div className="h-full w-full grid grid-cols-2">
      <div></div>
      <Map markers={map} show={true} />
    </div>
    </>
  );
}
