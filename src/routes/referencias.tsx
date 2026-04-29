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
    <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Refe<span className="text-tan-400">rências</span>
      </Title>
    </Main>
  );
}
