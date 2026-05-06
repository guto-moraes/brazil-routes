import { createFileRoute } from "@tanstack/react-router";
import ChaptersMenu from "@/components/chapters-menu";
import ChapterTitle from "@/components/chapter-title";
import { Section, SectionScrollRotate } from "@/components/section-scroll-rotate";

export const Route = createFileRoute("/almanaque-digital/capitulo-3")({
  component: ChapterFour,
});

function ChapterFour() {
  return (
    <>
      <ChaptersMenu />
      <SectionScrollRotate className="relative h-full w-full">
        <Section bgColor="#fbf6ea" className="container mx-auto px-4 ml-17.5">
          <ChapterTitle
            chapter="Capítulo 3"
            firstTitle="Palmilhando"
            lastTitle="o sertão"
            subtitle="A Expedição Roncador-Xingu"
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
