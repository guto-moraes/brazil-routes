import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useQueryChapterPage } from "@/hooks/queries/almanaque-queries";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import Article from "@/components/article";
import ChapterTitle from "@/components/chapter-title";
import AlmanaqueDownload from "@/components/almanaque-download";


export const Route = createFileRoute("/almanaque-digital/capitulo-{-$number}")({
  component: AlmanaqueChapter,
});

function AlmanaqueChapter() {
  const { pathname } = useLocation();
  const { data } = useQueryChapterPage(pathname);

  return (
    <>
      <Header className="shadow-md" />
      <Main className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
        <div className="container max-w-5xl mx-auto">
          <ChapterTitle
            chapter={data.page.title}
            title={data.page.chaptersCustom.title}
            subtitle={data.page.chaptersCustom.subtitle && data.page.chaptersCustom.subtitle}
            className={
              data.page.title !== "Capítulo 5" ? "text-[clamp(1rem,5vw,1.875rem)]" : "text-[clamp(1rem,5vw,1.25rem)]"
            }
          />
          <Article className="mt-16" content={data.page.content} />
        </div>
      </Main>
      <AlmanaqueDownload />
    </>
  );
}