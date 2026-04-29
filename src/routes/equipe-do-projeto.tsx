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
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>
    </Main>
  );
}
