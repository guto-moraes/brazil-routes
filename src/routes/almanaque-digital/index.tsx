import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";
import Main from "@/layouts/main";

export const Route = createFileRoute("/almanaque-digital/")({
  head: () => ({
    meta: [
      {
        title: "Almanaque Digital | Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Almanaque Desbravando o sertão, descobrindo o Brasil: a Expedição Roncador-Xingu e a Fundação Brasil Central em Mato Grosso (1943-1967).",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital",
      },
    ],
  }),
  component: Almanaque,
});

function Almanaque() {
  return (
    <Main className="container mx-auto">
      <Title text="Apoio Financeiro" />
    </Main>
  );
}
