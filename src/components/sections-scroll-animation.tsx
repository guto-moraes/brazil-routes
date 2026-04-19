"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Main from "@/layouts/main";

gsap.registerPlugin(ScrollTrigger);

const SectionScrollAnimation = () => {
  const containersRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const sections = document.querySelectorAll<HTMLElement>(".rotate-section");

    sections.forEach((section, index) => {
        const container = section.querySelector<HTMLDivElement>(".container");

        gsap.to(container, {
            rotate: 0,
            ease: "note",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "top 20%",
                scrub: true,
            }
        });

        if(index === sections.length - 1) return;

        ScrollTrigger.create({
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        })
    });

  }, { scope: containersRef });
  return (
    <>
          {/* <section className="h-svh w-full bg-mate-400"></section> */}
      <Main ref={containersRef}>
        <section className="rotate-section relative h-svh min-h-svh w-full overflow-hidden">
          <section className="container bg-bone-400 relative h-full w-full min-w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
            <h2 className="text-8xl text-white font-cabinet font-black">Seção 1</h2>
          </section>
        </section>

        <section className="rotate-section relative h-svh min-h-svh w-full overflow-hidden">
          <section className="container bg-mate-600 relative h-full w-full min-w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
            <h2 className="text-8xl text-white font-cabinet font-black">Seção 2</h2>
          </section>
        </section>

        <section className="rotate-section relative h-svh min-h-svh w-full overflow-hidden">
          <section className="container bg-mate-700 relative h-full w-full min-w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
            <h2 className="text-8xl text-white font-cabinet font-black">Seção 3</h2>
          </section>
        </section>

        <section className="rotate-section relative h-[200svh] min-h-svh w-full overflow-hidden">
          <section className="container bg-mate-800 relative h-full w-full min-w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
            <h2 className="text-8xl text-white font-cabinet font-black">Seção 4</h2>
          </section>
        </section>
      </Main>
    </>
  );
};

export default SectionScrollAnimation;
