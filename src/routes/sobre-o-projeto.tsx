import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import ArticleContent from "@/components/article-content";

export const Route = createFileRoute("/sobre-o-projeto")({
  head: () => ({
    meta: [
      {
        title: "Sobre o Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Apresentação e informações sobre o Projeto Caminhos do Brasil Central e suas áreas de atuação",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/sobre-o-projeto",
      },
    ],
  }),
  component: About,
});

function About() {
  const { data } = useQueryPage("sobre-o-projeto");

  return (
    <Main className="w-full mb-12 md:mb-18 lg:mb-24">
      <div className="w-full max-w-5xl mx-auto px-4 xl:px:0">
        <Title>
          Sobre o <span className="text-tan-400">Projeto</span>
        </Title>
        <ArticleContent content={data.page.content} />
      </div>
    </Main>
  );
}
