import { createFileRoute } from "@tanstack/react-router";
import { useQueryAlmanaquePage } from "@/hooks/queries/almanaque-queries";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import AboveTheFold from "@/layouts/partials/almanaque/above-the-fold";
import AlmanaqueChapters from "@/layouts/partials/almanaque/almanaque-chapters";
import PioneersTribute from "@/layouts/partials/almanaque/pioneers-tribute";

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
  loader: () => ({
    crumb: "Almanaque Digital",
  }),
  component: Almanaque,
});

function Almanaque() {
  const { data } = useQueryAlmanaquePage();

  return (
    <>
      <Header className="shadow-md" />
      <Main className="min-h-auto p-0! overflow-hidden">
        <AboveTheFold
          fullTitle={data.page.title}
          content={data.page.content}
          almanaqueImageSrc={data.page.featuredImage.node.sourceUrl}
          almanaqueButtonTextDownload="Faça o download agora!"
          almanaqueDownloadLink={data.page.almanaque.almanaqueDownload.almanaqueLink}
        />
        <AlmanaqueChapters />
        <PioneersTribute />
      </Main>
    </>
  );
}
