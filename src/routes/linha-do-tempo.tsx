import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      {
        title: "Linha do Tempo Histórica | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Linha do tempo com alguns do principais eventos ocorridos no recorte temporal do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/linha-do-tempo",
      },
    ],
  }),
  component: Index,
});

function Index() {

  return (
      <Main className="container mx-auto">
        <Title text="Linha do Tempo" />
      </Main>
  );
}