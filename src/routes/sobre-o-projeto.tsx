import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/sobre-o-projeto")({
  head: () => ({
    meta: [
      {
        title: "Sobre o Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Apresentação e informações sobre o Projeto Caminhos do Brasil Central e suas áreas de atuação",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/sobre-o-projeto",
      },
    ],
  }),
  component: Index,
});

function Index() {

  return (
      <Main className="container mx-auto">
        <Title text="Sobre o Projeto" />
      </Main>
  );
}
