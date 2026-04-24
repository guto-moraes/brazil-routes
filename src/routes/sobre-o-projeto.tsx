import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Route = createFileRoute("/sobre-o-projeto")({
  component: About,
});

function About() {
  const infiniteScrollContainer = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {

    const containers = gsap.utils.toArray(".infinite-scroll-container");
    
    containers.forEach((container: unknown) => {
      container.forEach((item: HTMLDivElement) => {
        gsap.to(item, {
          xPercent: -100,
          duration: 20,
          ease: "none",
          repeat: -1,
        })
      })
    })

  }, { scope: infiniteScrollContainer })


  return (
    <>
      <Title text="Sobre o Projeto" className="container mx-auto" />

      <div className="h-svh w-full flex justify-center items-center">
      
        <div className="infinite-scroll-wrapper h-80 w-full flex gap-x-8 overflow-hidden" ref={infiniteScrollContainer}>
          <div className="infinite-scroll-container w-full flex gap-x-8 justify-around">
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
          </div>
          <div className="infinite-scroll-container w-full flex gap-x-8 justify-around">
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-mate-300 min-h-40 min-w-80"></div>
            <div className="infinite-scroll-item bg-bege-200 min-h-40 min-w-80"></div>
          </div>
        </div>

      </div>
    </>
  );
}
