import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useQueryChapterPage } from "@/hooks/queries/pages-and-posts-queries";
import ChapterTitle from "@/components/chapter-title";
import Article from "@/components/article";
import DownloadNow from "@/components/download-now";
import Main from "@/layouts/main";
export const Route = createFileRoute("/almanaque-digital/capitulo-{-$slug}")({
  component: Chapter,
});

function Chapter() {
  const { pathname } = useLocation();
  const { data } = useQueryChapterPage(pathname);

  return (
    <>
      <Main className="max-w-5xl mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <section>
          <div>
            <ChapterTitle
              chapter={data.page.title}
              firstTitle={data.page.chaptersCustom.firstPartTitle}
              lastTitle={data.page.chaptersCustom.secondPartTitle}
              subtitle={data.page.chaptersCustom.subtitle && data.page.chaptersCustom.subtitle}
              className={
                data.page.title !== "Capítulo 5" ? "text-[clamp(1rem,5vw,1.875rem)]" : "text-[clamp(1rem,5vw,1.25rem)]"
              }
            />
            <Article className="mt-16" content={data.page.content} />
          </div>
        </section>
      </Main>
      <DownloadNow link="/" />
    </>
  );
}
