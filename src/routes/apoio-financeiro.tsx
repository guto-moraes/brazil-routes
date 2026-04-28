import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import ArticleContent from "@/components/article-content";

export const Route = createFileRoute("/apoio-financeiro")({
  head: () => ({
    meta: [
      {
        title: "Apoio Financeiro | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Instituições e fundos de apoio que viabilizaram a realização do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/apoio-financeiro",
      },
    ],
  }),
  component: FinancialSupport,
});

function FinancialSupport() {
  const { data } = useQueryPage("apoio-financeiro");

  return (
    <Main className="max-w-5xl mx-auto pb-12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Apoio <span className="text-tan-400">Financeiro</span>
      </Title>
      <ArticleContent content={data.page.content} />
    </Main>
  );
}
