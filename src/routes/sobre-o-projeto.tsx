import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
  const infiniteScrollContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const marquee = gsap.utils.toArray<HTMLDivElement>(".infinite-scroll-item");

    gsap.to(marquee, {
      xPercent: -100,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <>
      <Title text="Sobre o Projeto" className="container mx-auto" />

      <div className="h-svh w-full flex justify-center items-center">
        <div className="infinite-scroll-wrapper relative h-80 w-full overflow-hidden" ref={infiniteScrollContainer}>
          <div className="infinite-scroll-container w-fit flex flex-auto flex-row">
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              1
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              2
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              3
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              4
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              5
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              6
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              7
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              8
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              9
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              10
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              11
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              12
            </div>
            <div className="infinite-scroll-item bg-mate-300 h-40 w-80 flex shrink-0 justify-center items-center ">
              13
            </div>
            <div className="infinite-scroll-item bg-bege-200 h-40 w-80 flex shrink-0 justify-center items-center ">
              14
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
