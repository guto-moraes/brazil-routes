import { createFileRoute } from "@tanstack/react-router";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { ChapterAside, ChapterContent, ChapterWrapper } from "@/components/chapter";
import ChapterTitle from "@/components/chapter-title";
import Article from "@/components/article";
import DownloadNow from "@/components/download-now";
import ChaptersMenu from "@/components/chapters-menu";

export const Route = createFileRoute("/almanaque-digital/capitulo-1")({
  component: ChapterOne,
});

function ChapterOne() {
  const { data } = useQueryPage("almanaque-digital/capitulo-1");

  return (
    <>
    <ChapterWrapper>
      <ChapterAside className="bg-tan-100 drop-shadow">
        <ChaptersMenu />
      </ChapterAside>
      <ChapterContent>
          <ChapterTitle
            chapter={data.page.title}
            firstTitle="Contextualizando"
            lastTitle="o Brasil Central"
            subtitle="Décadas de 1940 a 1960"
            className="text-3xl"
          />
          <Article className="content mt-16" content={data.page.content} />
      </ChapterContent>
    </ChapterWrapper>
    <DownloadNow link="/" />
    </>
  );
}
