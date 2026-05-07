import { createFileRoute } from "@tanstack/react-router";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { ChapterAside, ChapterContent, ChapterWrapper } from "@/components/chapter";
import ChapterTitle from "@/components/chapter-title";
import ArticleChapterContent from "@/components/article-chapter-content";
import DownloadNow from "@/components/download-now";
import ChaptersMenu from "@/components/chapters-menu";

export const Route = createFileRoute("/almanaque-digital/capitulo-3")({
  component: ChapterThree,
});

function ChapterThree() {
  const { data } = useQueryPage("almanaque-digital/capitulo-3");

  return (
    <>
    <ChapterWrapper>
      <ChapterAside className="bg-tan-100 drop-shadow">
        <ChaptersMenu />
      </ChapterAside>
      <ChapterContent>
          <ChapterTitle
            chapter={data.page.title}
            firstTitle="Palmilhando"
            lastTitle="o sertão"
            subtitle="A Expedição Roncador-Xingu"
            className="text-3xl"
          />
          <ArticleChapterContent className="content mt-16" content={data.page.content} />
      </ChapterContent>
    </ChapterWrapper>
    <DownloadNow link="/" />
    </>
  );
}
