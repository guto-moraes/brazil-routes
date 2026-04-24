"use client";

import { createFileRoute } from "@tanstack/react-router";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import Main from "@/layouts/main";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import Title from "@/components/title";
import ScrollingAnimatedCards from "@/components/scrolling-animate-cards";
import SectionAlmanaqueChapters from "@/components/section-almanaque-chapters";

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
  //  useGSAP(() => {
  //     const cardsWrappers = gsap.utils.toArray(".chapters-card-wrapper");
  //     const cards = gsap.utils.toArray(".chapter-card");

  //     cardsWrappers.forEach((wrapper, i: number) => {
  //       const card = cards[i];
  //       let scale = 1,
  //         rotation = 0;
  //       if (i !== cards.length - 1) {
  //         scale = 0.9 + 0.025 * i;
  //         rotation = -10;
  //       }
  //       gsap.to(card as HTMLElement, {
  //         scale: scale,
  //         rotationX: rotation,
  //         transformOrigin: "top center",
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: wrapper as HTMLElement,
  //           start: "top " + (60 + 10 * i),
  //           end: "bottom 800",
  //           endTrigger: ".chapters-cards-block",
  //           scrub: true,
  //           pin: wrapper as HTMLElement,
  //           pinSpacing: false,
  //           id: String(i + 1),
  //         },
  //       });
  //     });
  //   });

  return (
    <>
      <Title className="text-7xl w-full max-w-7xl mx-auto" text="Almanaque Digital" />

      <section className="h-[calc(100svh-320px)] w-full pb-32">
        <div className="h-full max-w-7xl mx-auto flex justify-between gap-12 px-8">
          <div className="mt-8 perspective-dramatic">
            <img
              src="/images/tablet-cover-book.png"
              alt="E-book no formato PDF"
              title="E-book no formato PDF"
              className="w-100 rotate-y-4"
            />
          </div>
          <div className="h-full min-h-125 w-full max-w-180 flex flex-col justify-center items-end gap-y-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-5xl text-right text-chocolate-700 text-balance font-black">
                Vale do Araguaia: história, memória e patrimônio
              </h2>
              <p className="text-xl text-tan-600 text-right text-balance">
                Um mergulho na história regional a partir da complexa trajetória da Expedição Roncador-Xingu e da
                Fundação Brasil Central.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <ButtonLinkWithIcon
                textButton="Faça o download agora!"
                link="/files/ebook.pdf"
                bgColor="bg-chocolate-300 hover:bg-chocolate-400 text-white"
                iconColor="bg-white text-chocolate-700"
                target={false}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionAlmanaqueChapters />

      <ScrollingAnimatedCards />
    </>
  );
}
