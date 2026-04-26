"use client";

import { createFileRoute } from "@tanstack/react-router";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import SectionAlmanaqueChapters from "@/components/section-almanaque-chapters";
import { useQueryAlmanaqueChapters } from "@/hooks/queries/almanaque-queries";
import AlmanaqueChaptersSection from "@/components/almanaque-chapters";

export const Route = createFileRoute("/almanaque-digital/")({
  head: () => ({
    meta: [
      {
        title: "Almanaque Digital | Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Almanaque Desbravando o sertão, descobrindo o Brasil: a Expedição Roncador-Xingu e a Fundação Brasil Central em Mato Grosso (1943-1967).",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital",
      },
    ],
  }),
  component: Almanaque,
});

function Almanaque() {
  const { data: chapters } = useQueryAlmanaqueChapters();

  return (
    <>
      <section className="bg-bone-200/60 h-[calc(100svh-104px)] w-full">
        <div className="container mx-auto h-full w-full flex px-4">
          <div className="flex-1 w-full max-w-full flex flex-col justify-center items-start gap-y-8 xl:gap-y-14">
            <h1 className="text-[clamp(3rem,30vw,6.5rem)] font-cabinet font-black leading-[0.85] text-bone-600 [&_span]:text-bone-400">
              Alamanaque <span>Digital</span>
            </h1>
            <p className="text-[clamp(1.5rem,1.25vw,2.5rem)] text-bone-700 text-balance font-inter font-medium leading-8">
              Uma imersão na história do Vale do Araguaia, em Mato Grosso a partir das complexas trajetórias da Expedição Roncador-Xingu e da
              Fundação Brasil Central e a busca por incentivar a preservação da história, da memória e do patrimônio região.
            </p>
              <ButtonLinkWithIcon
                textButton="Faça o download agora!"
                link="/files/ebook.pdf"
                bgColor="bg-mate-400 hover:bg-mate-500 text-white"
                iconColor="bg-white text-mate-700"
                target={false}
              />
          </div>
          <div className="flex-1 h-full w-full max-w-full flex justify-end items-center">
            <div className="perspective-dramatic perspective-origin-center transform-3d">
              <img className="w-100 xl:w-120 -rotate-y-4 xl:mr-8" src="/images/tablet-cover-book.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <AlmanaqueChaptersSection dataChapters={chapters} />

      <SectionAlmanaqueChapters />
    </>
  );
}
