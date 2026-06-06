"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useQueryState } from "nuqs";
import { useQueryBlogNews } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import BlogCard from "@/components/blog-card";
import Pagination from "@/components/pagination";

export const Route = createFileRoute("/fique-por-dentro/")({
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
        href: "https://caminhosdobrasilcentral.com/fique-por-dentro",
      },
    ],
  }),
  loader: () => ({
    crumb: "Fique por Dentro"
  }),
  component: Blog,
});

const MAX_ITEMS = 5; // Número máximo de página listadas
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const LIMIT = 8; // Número de posts por requisição

function Blog() {
  const [offset, setOffset] = useQueryState("offset");
  const { posts } = useQueryBlogNews(LIMIT, offset ? Number(offset) : 0).data || {};

  const pages = posts ? Math.ceil(posts.pageInfo.offsetPagination.total / LIMIT) : 0; // Check if total pages is bigger that LIMIT

  const handlePagination = (page: number) => {
    setOffset(String(Number((page - 1) * LIMIT)));
  };

  return (
    <>
      <Header className="shadow-md" />
      <Main className="py-8 md:py-16">
        <Title 
          title="Fique Por Dentro | Projeto Caminhos do Brasil Central"
          className={cn(
            "container max-w-6xl mx-auto text-[clamp(1.85rem,4vw,4.25rem)] text-tan-700 font-inter",
            "sm:font-cabinet font-black dark:text-dark-contrast-100 pb-8 sm:pb-16"
          )}
        >
          Fique <span className="text-tan-400 dark:text-dark-contrast-50">por Dentro</span>
        </Title>
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts &&
            posts.nodes.map((post, index) => {
              return (
                <BlogCard
                  key={index}
                  imageSrc={post.featuredImage.node.guid}
                  date={post.date}
                  tag={post.tags.nodes[0].name}
                  uri={post.uri}
                  title={post.title}
                />
              );
            })}
        </div>
        <div className="container max-w-6xl mx-auto">
          {posts && pages > 1 && (
            <Pagination
              hasPrevious={posts.pageInfo.offsetPagination.hasPrevious}
              hasNext={posts.pageInfo.offsetPagination.hasMore}
              offset={Number(offset)}
              total={posts.pageInfo.offsetPagination.total}
              limit={LIMIT}
              maxItems={MAX_ITEMS}
              maxLeft={MAX_LEFT}
              handlePagination={handlePagination}
            />
          )}
        </div>
      </Main>
    </>
  );
}
