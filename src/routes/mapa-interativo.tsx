"use client";

import Map from "@/components/map";
import { map } from "@/data/map";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

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
  const [show, setShow] = useState(false);

  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={cn("h-full w-full grid grid-cols-2")}>
        <div
          className={cn(
            "rounded-lg xl:h-[calc(100svh-104px)] z-40",
            "[&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg",
            show ? "col-span-1" : "col-span-2",
          )}
        >
          <Map markers={map} show={show} setShow={handleSetShow} />
        </div>
        <div
          className={cn(
            "relative h-full w-full origin-top-left transition-transform duration-300",
            show ? "scale-100" : "scale-0",
          )}
        >
          <button
            title="Fechar"
            className={
              cn(
                "rounded-full bg-black/50 hover:bg-black/70 text-white size-8 absolute top-4 right-4",
                "grid place-content-center transition-colors duration-300 cursor-pointer"
              )
            }
            onClick={handleSetShow}
          >
            <X />
          </button>
        </div>
      </div>
    </>
  );
}
