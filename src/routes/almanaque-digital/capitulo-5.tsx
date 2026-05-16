import { createFileRoute } from "@tanstack/react-router";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { ChapterAside, ChapterContent, ChapterWrapper } from "@/components/chapter";
import ChaptersMenu from "@/components/chapters-menu";
import ChapterTitle from "@/components/chapter-title";
import Article from "@/components/article";
import DownloadNow from "@/components/download-now";

export const Route = createFileRoute("/almanaque-digital/capitulo-5")({
  component: ChapterFive,
});

function ChapterFive() {
  const { data } = useQueryPage("almanaque-digital/capitulo-5");

  return (
    <>
      <ChapterWrapper>
        <ChapterAside className="bg-tan-100 drop-shadow">
          <ChaptersMenu />
        </ChapterAside>
        <ChapterContent>
          <ChapterTitle
            chapter={data.page.title}
            firstTitle="Memória e"
            lastTitle="Patrimônio"
            subtitle="Rastros deixados pela Expedição Roncador-Xingu e pela Fundação Brasil Central"
          />
          <Article className="content mt-16" content={data.page.content} />
        </ChapterContent>
      </ChapterWrapper>
      <DownloadNow link="/" />
    </>
  );
}
