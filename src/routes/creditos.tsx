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
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Cré<span className="text-tan-400">ditos</span>
      </Title>
    </Main>
  );
}
