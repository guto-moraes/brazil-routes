import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
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
    <Main className="max-w-5xl mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
      <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black pb-8 sm:pb-16">
        Apoio <span className="text-tan-400">Financeiro</span>
      </Title>
      <ArticleContent content={data.page.content} className="sm:[&_p]:text-justify [&_p]:text-pretty [&_p]:hypens-auto pb-8" />
    </Main>
  );
}
