import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import request from "graphql-request";
import { GRAPHQL_URL } from "@/lib/graphql";
import { PAGE } from "@/graphql/pages-and-posts-graphql";
import { cn, pageTitle } from "@/lib/utils";
import type { PageTypes } from "@/types/page-and-post-types";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import AudioTextReader from "@/components/text-reader";
import { Title } from "@/components/title";
import Article from "@/components/article";
import NotFound from "@/layouts/not-found";
import HotkeysList from "@/components/hotkeys-table";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const currentSlug = params.slug;
    const data = await request<PageTypes>(GRAPHQL_URL, PAGE, { slug: currentSlug });
    return data;
  },
  component: Page,
  errorComponent: () => <NotFound />,
});

function Page() {
  const containerRef = useRef<HTMLElement | null>(null);
  const data = Route.useLoaderData();
  const title = pageTitle(data.page.title);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="py-8 md:py-16">
        <AudioTextReader className="container max-w-4xl mx-auto mb-8" contentRef={containerRef} />
        <section className="max-w-4xl mx-auto" ref={containerRef}>
          <Title
            title={data.page.title}
            className={cn(
              "max-w-full text-[clamp(2.75rem,4vw,4.25rem)] text-bone-700",
              "mdark:text-dark-contrast-100 max-md:leading-[0.9] pb-8 sm:pb-16",
            )}
          >
            {title.firstPart}
            <span className="text-tan-400 dark:text-dark-contrast-50">{title.secondPart}</span>
          </Title>
          <Article content={data.page.content} />
          {data.page.title === "Acessibilidade" && <HotkeysList />}
        </section>
      </Main>
    </>
  );
}
