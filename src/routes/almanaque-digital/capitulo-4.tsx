import { createFileRoute } from "@tanstack/react-router";
import ChaptersMenu from "@/components/chapters-menu";
import ChapterTitle from "@/components/chapter-title";
import { Section, SectionScrollRotate } from "@/components/section-scroll-rotate";

export const Route = createFileRoute("/almanaque-digital/capitulo-4")({
  component: ChapterFour,
});

function ChapterFour() {
  return (
    <>
      <ChaptersMenu />
      <SectionScrollRotate className="relative h-full w-full">
        <Section bgColor="#f6f3ed" className="container mx-auto px-4 ml-17.5">
          <ChapterTitle
            chapter="Capítulo 4"
            firstTitle="Do Rio das"
            lastTitle="Mortes ao Xingu"
            subtitle="O contato com os povos indígenas"
            className="text-3xl"
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