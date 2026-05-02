import { createFileRoute } from "@tanstack/react-router";
import { useQueryAlmanaquePage } from "@/hooks/queries/almanaque-queries";
import AboveTheFold from "@/layouts/partials/almanaque/above-the-fold";
import AlmanaqueChapters from "@/components/almanaque-chapters";
import PioneersTribute from "@/layouts/partials/home/pioneers-tribute";

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
  const { data } = useQueryAlmanaquePage("almanaque-digital");

  return (
    <>
      <AboveTheFold content={data.page.content} link={data.page.almanaque.link.url} />
      <AlmanaqueChapters />
      <PioneersTribute />
    </>
  );
}
