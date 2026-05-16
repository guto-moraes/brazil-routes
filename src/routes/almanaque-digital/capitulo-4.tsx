import { createFileRoute } from "@tanstack/react-router";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { ChapterAside, ChapterContent, ChapterWrapper } from "@/components/chapter";
import ChaptersMenu from "@/components/chapters-menu";
import ChapterTitle from "@/components/chapter-title";
import Article from "@/components/article";
import DownloadNow from "@/components/download-now";

export const Route = createFileRoute("/almanaque-digital/capitulo-4")({
  component: ChapterFour,
});

function ChapterFour() {
  const { data } = useQueryPage("almanaque-digital/capitulo-4");

  return (
    <>
      <ChapterWrapper>
        <ChapterAside className="bg-tan-100 drop-shadow">
          <ChaptersMenu />
        </ChapterAside>
        <ChapterContent>
          <ChapterTitle
            chapter="Capítulo 4"
            firstTitle="Do Rio das"
            lastTitle="Mortes ao Xingu"
            subtitle="O contato com os povos indígenas"
            className="text-3xl"
          />
          <Article className="content mt-16" content={data.page.content} />
        </ChapterContent>
      </ChapterWrapper>
      <DownloadNow link="/" />
    </>
  );
}