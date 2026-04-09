"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const SectionScrollAnimation = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  });
  return(
    <>
        <section className="animate-section relative h-svh min-h-svh w-full overflow-hidden">
            <section className="container bg-bone-400 relative h-full w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    Seção 1
                </h2>
            </section>
        </section>

        <section className="animate-section relative h-svh min-h-svh w-full overflow-hidden">
            <section className="container bg-mate-600 relative h-full w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    Seção 2
                </h2>
            </section>
        </section>

        <section className="animate-section relative h-svh min-h-svh w-full overflow-hidden">
            <section className="container bg-mate-700 relative h-full w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    Seção 3
                </h2>
            </section>
        </section>

        <section className="animate-section relative h-[200svh] min-h-svh w-full overflow-hidden">
            <section className="container bg-mate-800 relative h-full w-full p-8 flex rotate-30 origin-bottom-left will-change-transform">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    Seção 4
                </h2>
            </section>
        </section>
    </>
  );
};

export default SectionScrollAnimation;
