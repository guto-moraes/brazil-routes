import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useQueryChapterPage } from "@/hooks/queries/pages-and-posts-queries";
import { ChapterAside, ChapterContent, ChapterWrapper } from "@/components/chapter";
import ChapterTitle from "@/components/chapter-title";
import Article from "@/components/article";
import DownloadNow from "@/components/download-now";
import ChaptersMenu from "@/components/chapters-menu";
export const Route = createFileRoute("/almanaque-digital/capitulo-{-$slug}")({
  component: Chapter,
});

function Chapter() {
  const { pathname } = useLocation();
  const { data } = useQueryChapterPage(pathname);

  return (
    <>
      <ChapterWrapper>
        <ChapterAside className="bg-tan-100 drop-shadow">
          <ChaptersMenu />
        </ChapterAside>
        <ChapterContent>
          <ChapterTitle
            chapter={data.page.title}
            firstTitle={data.page.chaptersCustom.firstPartTitle}
            lastTitle={data.page.chaptersCustom.secondPartTitle}
            subtitle={data.page.chaptersCustom.subtitle && data.page.chaptersCustom.subtitle}
            className={
              data.page.title !== "Capítulo 5" ? "text-[clamp(1rem,5vw,1.875rem)]" : "text-[clamp(1rem,5vw,1.25rem)]"
            }
          />
          <Article className="content mt-16" content={data.page.content} />
        </ChapterContent>
      </ChapterWrapper>
      <DownloadNow link="/" />
    </>
  );
}
