"use client";

import { useState } from "react";
import Map from "@/components/map";
import { cn, sanitizedData } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQueryInteractiveMap, useQueryInteractiveMapLocation } from "@/queries/custom-posts-queries";

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

const DetailsCloseButton = ({ setShow }: { setShow: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const handleToggle = () => {
    setShow(false);
  };

  return (
    <button
      title="Fechar"
      className={cn(
        "rounded-full bg-black/50 hover:bg-black/70 text-white size-8 absolute top-4 right-4",
        "grid place-content-center transition-colors duration-300 cursor-pointer z-100",
      )}
      onClick={handleToggle}
    >
      <X />
    </button>
  );
};

function InteractiveMap() {
  const [show, setShow] = useState(false);
  const [currentIdMapLocation, setCurrentIdMapLocation] = useState<string>("");
  const { data } = useQueryInteractiveMap();
  const { nodes: locations } = data?.locations || {};
  const { location } = useQueryInteractiveMapLocation(currentIdMapLocation).data || {};

  const handleSetShow = () => {
    setShow(!show);
  };

  if (locations) {
    return (
      <>
        <div
          className={cn(
            "h-[calc(100svh-104px)] w-full grid max-lg:grid-rows-2 lg:grid-rows-1 max-lg:grid-cols-1 lg:grid-cols-2",
          )}
        >
          <div
            className={cn(
              "rounded-lg h-[calc(100svh-104px)] z-40 [&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg",
              show ? "max-lg:row-span-1 lg:col-span-1" : "max-lg:row-span-2 lg:col-span-2",
            )}
          >
            {locations && (
              <Map locations={locations} show={show} setShow={handleSetShow} setId={setCurrentIdMapLocation} />
            )}
          </div>
          <ScrollArea
            className={cn(
              "bg-tan-100 relative h-full max-h-[calc(100svh-104px)] w-full overflow-hidden",
              "origin-top-right transition-all duration-500 ease-in-out col-span-1",
              show ? "scale-100" : "scale-0",
            )}
          >
            <DetailsCloseButton setShow={setShow} />
            {location && (
                <article className="h-full w-full flex flex-col gap-12 p-12 overflow-y-auto">
                  <h2 className="text-4xl text-tan-900 font-inter font-bold uppercase tracking-tighter">
                    {location.title}
                  </h2>

                  <div
                    className={cn(
                      "flex flex-col [&_p]:not-last:mb-4 [&_p]:indent-10 [&_p]:text-base [&_p]:md:text-lg [&_p]:text-tan-900 [&_p]:text-justify [&_p]:hyphens-auto",
                      "[&_figure]:rounded-t-xl [&_figure]:h-50 [&_figure]:lg:h-80 [&_figure]:xl:h-100 [&_figure]:w-full [&_figure]:first:mb-12",
                      "[&_figcaption]:bg-black/45 [&_figcaption]:text-xs [&_figcaption]:text-white [&_figcaption]:py-0.5 [&_figcaption]:px-2",
                      "[&_img]:rounded-t-xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:will-change-transform",
                    )}
                    dangerouslySetInnerHTML={sanitizedData(location.content)}
                  />
                </article>
            )}
          </ScrollArea>
        </div>
      </>
    );
  }
}
