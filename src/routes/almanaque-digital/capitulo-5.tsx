import { createFileRoute } from "@tanstack/react-router";
import ChapterTitle from "@/components/chapter-title";
import ChaptersMenu from "@/components/chapters-menu";
import { Section, SectionScrollRotate } from "@/components/section-scroll-rotate";

export const Route = createFileRoute("/almanaque-digital/capitulo-5")({
  component: ChapterFive,
});

function ChapterFive() {
  return (
    <>
      <ChaptersMenu />
      <SectionScrollRotate className="relative h-full w-full">
        <Section bgColor="#f6f3ed" className="container mx-auto px-4 ml-17.5">
          <ChapterTitle
            chapter="Capítulo 5"
            firstTitle="Memória e"
            lastTitle="patrimônio"
            subtitle="Os rastros da Expedição Roncador-Xingu e da Fundação Brasil Central"
          />
        </Section>
        <Section bgColor="#efebde" className="container mx-auto px-4 ml-17.5">
          Alguma coisa
        </Section>
        <Section bgColor="#ded7c1" className="container mx-auto px-4 ml-17.5">
          Alguma coisa
        </Section>
        <Section bgColor="#c7c1ad" className="container mx-auto px-4 ml-17.5">
          Alguma coisa
        </Section>
        <Section bgColor="#b4ae9c" className="container mx-auto px-4 ml-17.5">
          Alguma coisa
        </Section>
      </SectionScrollRotate>
    </>
  );
}
