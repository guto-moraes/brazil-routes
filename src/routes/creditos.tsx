import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/creditos")({
  head: () => ({
    meta: [
      {
        title: "Créditos | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Créditos da atuação dos integrantes do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/creditos",
      },
    ],
  }),
  component: Credits,
});

function Credits() {
  return (
    <Main className="container mx-auto">
      <Title text="Créditos" />
    </Main>
  );
}
