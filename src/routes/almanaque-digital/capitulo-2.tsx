import { createFileRoute } from "@tanstack/react-router";
import ChaptersMenu from "@/components/chapters-menu";
import ChapterTitle from "@/components/chapter-title";
import { Section, SectionScrollRotate } from "@/components/section-scroll-rotate";

export const Route = createFileRoute("/almanaque-digital/capitulo-2")({
  component: ChapterFour,
});

function ChapterFour() {
  return (
    <>
      <ChaptersMenu />
      <SectionScrollRotate className="relative h-full w-full">
        <Section bgColor="#fbf6ea" className="container mx-auto px-4 ml-17.5">
          <ChapterTitle
            chapter="Capítulo 2"
            firstTitle="Fundação"
            lastTitle="Brasil Central"
          />
        </Section>
        <Section className=" w-[calc(100%-60px)] ml-17.5">Alguma coisa</Section>
        <Section className=" w-[calc(100%-60px)] ml-17.5">Alguma coisa</Section>
        <Section className=" w-[calc(100%-60px)] ml-17.5">Alguma coisa</Section>
        <Section className=" w-[calc(100%-60px)] ml-17.5">Alguma coisa</Section>
      </SectionScrollRotate>
    </>
  );
}
