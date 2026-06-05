import { createFileRoute, useLocation } from "@tanstack/react-router";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import Article from "@/components/article";
import { GRAPHQL_URL } from "@/lib/graphql";
import request from "graphql-request";
import type { PageTypes } from "@/types/page-and-post-types";
import { PAGE } from "@/graphql/pages-and-posts-graphql";
import { cn, pageTitle } from "@/lib/utils";
import NotFound from "@/layouts/not-found";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const currentSlug = params.slug;
    const title = await request<PageTypes>(GRAPHQL_URL, PAGE, { slug: currentSlug });
    return {
      crumb: title.page.title,
    };
  },
  component: Page,
  errorComponent: () => <NotFound />,
});

function Page() {
  const { pathname } = useLocation();
  const { data } = useQueryPage(pathname);
  const title = pageTitle(data.page.title);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="py-8 md:py-16">
        <section className="max-w-4xl mx-auto">
          <Title
            className={cn(
              "container max-w-6xl mx-auto text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700",
              "dark:text-dark-contrast-100 font-cabinet font-black max-md:leading-[0.9] pb-8 sm:pb-16",
            )}
          >
            {title.firstPart}
            <span className="text-tan-400 dark:text-dark-contrast-50">{title.secondPart}</span>
          </Title>
          <Article content={data.page.content} />
        </section>
      </Main>
    </>
  );
}
