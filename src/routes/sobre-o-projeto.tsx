import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
// import ArticleContent from "@/components/article-content";
import { cn, sanitizedData } from "@/lib/utils";

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
    <Main className="max-w-5xl mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black pb-8 sm:pb-16">
          Sobre <span className="text-tan-400">o Projeto</span>
        </Title>
        <div 
          className={cn(
            "*:not-last:mb-8", //Geral
            "[&_.wp-block-paragraph]:text-[clamp(0.9rem,5vw,1.15rem)] [&_.wp-block-paragraph]:text-justify", //Pagágrafos
            "[&_.wp-block-paragraph]:text-pretty [&_.wp-block-paragraph]:text-tan-700 [&_.wp-block-paragraph]:hyphens-auto",
            "[&_a]:text-blue-retro-500 [&_a]:hover:text-chocolate-300 [&_a]:transition-colors [&_a]:duration-300", //Link
            "font-features-['smcp'] ",
          )}
          dangerouslySetInnerHTML={sanitizedData(data.page.content)} 
        />
    </Main>
  );
}
