import { createFileRoute } from "@tanstack/react-router";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import Map from "@/components/map";
import { useQueryInteractiveMap } from "@/hooks/queries/custom-posts-queries";

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
        href: "https://caminhosdobrasilcentral.com/almanaque-digital/mapa-interativo",
      },
    ],
  }),
  component: InteractiveMap,
});

function InteractiveMap() {
  const { data } = useQueryInteractiveMap();
  const { nodes: locations } = data.locations;

  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0!">
        <Map locations={locations} />
      </Main>
    </>
  );
}
