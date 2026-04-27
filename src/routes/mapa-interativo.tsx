import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/mapa-interativo")({
  head: () => ({
    meta: [
      {
        title: "Mapa Interativo | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Mapa interativo com localidades importantes para a Expedição Roncador-Xingu e para a atuação da Fundação Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/mapa-interativo",
      },
    ],
  }),
  component: Index,
});

function Index() {

  return (
      <Main className="container mx-auto">
        <Title text="Mapa Interativo" />
      </Main>
  );
}