import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQueryInteractiveMap, useQueryInteractiveMapLocation } from "@/hooks/queries/custom-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import Map from "@/components/map";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

export const Route = createFileRoute("/mapa-interativo")({
  head: () => ({
    meta: [
      {
        title: "Mapa Interativo | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Mapa interativo com localidades importantes para a Expedição Roncador-Xingu e para a atuação da Fundação Brasil Central",
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
                    "flex flex-col [&_figure.wp-block-image]:rounded-lg [&_figure.wp-block-image]:relative ",
                    "[&_figure.wp-block-image]:w-max! [&_figure.wp-block-image]:max-w-full! [&_figure.wp-block-image]:mx-auto! [&_figure.wp-block-image]:mb-16!",
                    "[&_figure.wp-block-image_img]:rounded-lg [&_figure.wp-block-image_img]:h-full [&_figure.wp-block-image_img]:max-h-100",
                    "[&_figure.wp-block-image_img]:w-full! [&_figure.wp-block-image_img]:object-contain! [&_figure.wp-block-image_figcaption]:absolute",
                    "[&_figure.wp-block-image_figcaption]:bg-black/40 [&_figure.wp-block-image_figcaption]:text-xs [&_figure.wp-block-image_figcaption]:top-0",
                    "[&_figure.wp-block-image_figcaption]:right-0 [&_figure.wp-block-image_figcaption]:rounded-tr-lg [&_figure.wp-block-image_figcaption]:rounded-bl-lg",
                    "[&_figure.wp-block-image_figcaption]:text-white [&_figure.wp-block-image_figcaption]:p-2 [&_p]:not-last:mb-6 [&_p]:mx-auto",
                    "[&_p]:text-tan-900 [&_p]:text-justify [&_p]:text-balance [&_p]:hyphens-auto [&_p]:indent-4 [&_p]:w-full [&_p]:max-w-3xl",
                    "[&_figure.wp-block-video]:max-w-100 [&_figure.wp-block-video]:mx-auto [&_figure.wp-block-video]:mb-12 [&_figure.wp-block-video]:mt-6"
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
