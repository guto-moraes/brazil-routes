import { createFileRoute } from "@tanstack/react-router";
import { useQueryNews } from "@/hooks/queries/pages-and-posts-queries";
import request from "graphql-request";
import { GRAPHQL_URL } from "@/lib/graphql";
import { SINGLE_BLOG } from "@/graphql/pages-and-posts-graphql";
import type { BlogItemTypes } from "@/types/page-and-post-types";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { TitleH2 } from "@/components/title";
import Article from "@/components/article";

export const Route = createFileRoute("/fique-por-dentro/{-$slug}")({
  head: () => ({
    meta: [
      {
        title: "Fique Por Dentro | Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Publicações informativos ou históricos relacionados às atividades ou à pesquisa realizada pelo Projeto Caminhos do Brasil Central.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital",
      },
    ],
  }),
  loader: async ({ params }) => {
    const currentSlug = params.slug;
    const title = await request<BlogItemTypes>(GRAPHQL_URL, SINGLE_BLOG, { slug: currentSlug });
    return {
      crumb: title.post.title,
    };
  },
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  const { data } = useQueryNews(slug ?? "");

  return (
    <>
      <Header />
      <Main className=" py-8 md:py-16">
        <section className="max-w-4xl mx-auto">
          <TitleH2 className="text-[clamp(1.85rem,4vw,2.75rem)] dark:text-dark-contrast-100 leading-10">{data?.post.title}</TitleH2>
          {data && <Article className="mt-8" content={data.post.content} />}
        </section>
      </Main>
    </>
  );
}
