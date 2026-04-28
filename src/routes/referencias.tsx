import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      {
        title: "Referências | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Informações das fontes ou dos direitos autorais de obras ou imagens citadas ou incluídas no site do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/referencias",
      },
    ],
  }),
  component: References,
});

function References() {

  return (
      <Main className="container mx-auto">
        <Title text="Referências" />
      </Main>
  );
}
