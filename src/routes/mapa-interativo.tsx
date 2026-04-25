"use client";

import { useState } from "react";
import Map from "@/components/map";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import chaple from "@/assets/images/expedicao/capela-nossa-senhora-auxiliadora__nova-xavantina.webp";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQueryInteractiveMap } from "@/queries/custom-posts-queries";

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
  const { data } = useQueryInteractiveMap();
  const { nodes: locations } = data?.locations || {};

  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={cn("h-[calc(100svh-104px)] w-full grid max-lg:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2")}>
        <div
          className={cn(
            "rounded-lg h-[calc(100svh-104px)] z-40 [&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg",
            show ? "max-lg:row-span-1 lg:col-span-1" : "max-lg:row-span-2 lg:col-span-2",
          )}
        >
          {locations && <Map locations={locations} show={show} setShow={handleSetShow} />}
        </div>
        <ScrollArea
          data-hovering
          className={cn(
            "bg-darkgreen-500 relative h-full max-h-[calc(100svh-104px)] w-full",
            "origin-center transition-all duration-500 ease-in-out",
            show ? "scale-100" : "scale-0",
          )}
        >
          <DetailsCloseButton setShow={setShow} />

          <article className="h-full w-full flex flex-col gap-12 p-12">
            <div className="h-80 w-full grid place-content-center overflow-clip">
              <img className="h-full w-full object-cover object-top-left will-change-transform" src={chaple} />
            </div>

            <h2 className="text-4xl text-darkgreen-950 font-inter font-bold uppercase tracking-tighter">
              Capela Nossa Senhora Auxiliadora
            </h2>

            <div className="flex flex-col gap-y-8 [&_p]:indent-16 [&_p]:text-xl [&_p]:text-white [&_p]:text-justify [&_p]:hyphens-auto">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, cupiditate. Exercitationem iure, dolores
                facilis nam delectus reiciendis illum amet quam quod qui omnis magni doloribus, itaque, dolorum aliquid
                possimus accusamus et suscipit consequatur repudiandae sapiente laboriosam. Blanditiis ipsa perferendis
                illo numquam illum quae debitis facilis delectus omnis veniam amet aperiam tenetur repellendus dolores
                eveniet perspiciatis explicabo, dolorum est? Consequuntur nulla fuga alias iure eum officia laborum quam
                quae laboriosam, mollitia tempore quibusdam earum rerum accusamus obcaecati aspernatur, at officiis
                repellendus.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptate quas. Accusantium unde
                dolores quibusdam ipsa obcaecati deleniti dolor, illo animi hic quasi necessitatibus fugiat.
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, cupiditate. Exercitationem iure, dolores
                facilis nam delectus reiciendis illum amet quam quod qui omnis magni doloribus, itaque, dolorum aliquid
                possimus accusamus et suscipit consequatur repudiandae sapiente laboriosam. Blanditiis ipsa perferendis
                illo numquam illum quae debitis facilis delectus omnis veniam amet aperiam tenetur repellendus dolores
                eveniet perspiciatis explicabo, dolorum est? Consequuntur nulla fuga alias iure eum officia laborum quam
                quae laboriosam, mollitia tempore quibusdam earum rerum accusamus obcaecati aspernatur, at officiis
                repellendus.
              </p>
            </div>
          </article>
        </ScrollArea>
      </div>
    </>
  );
}
