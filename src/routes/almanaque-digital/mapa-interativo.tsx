import { createFileRoute } from "@tanstack/react-router";
import { useQueryInteractiveMap } from "@/hooks/queries/custom-posts-queries";
import Map from "@/components/map";
export const Route = createFileRoute("/almanaque-digital/mapa-interativo")({
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

function InteractiveMap() {
  const { data } = useQueryInteractiveMap();
  const { nodes: locations } = data?.locations || {};
  if (locations) {
    return (
      <>
        <div className="h-full lg:h-[calc(100svh-104px)] w-full grid grid-cols-1">
          <div className="rounded-lg min-h-svh lg:h-[calc(100svh-104px)] z-0 [&>.leaflet-container]:shadow-lg [&>.leaflet-container>img]:rounded-lg">
            {locations && <Map locations={locations} />}
          </div>
        </div>
      </>
    );
  }
}
