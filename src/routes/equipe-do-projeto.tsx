import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";

export const Route = createFileRoute("/equipe-do-projeto")({
  head: () => ({
    meta: [
      {
        title: "Equipe do Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Equipe multidisciplinar que atuou no desenvolvimento e na execução do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/equipe-do-projeto",
      },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <Main className="container mx-auto">
      <Title text="Equipe do Projeto" />
    </Main>
  );
}
