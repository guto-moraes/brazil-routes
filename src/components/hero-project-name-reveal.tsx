"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroProjectNameReveal = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const heroTitleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const sloganSplit = SplitText.create(".hero-slogan", {
      type: "chars",
    });

    const tl = gsap.timeline({ delay: 1, }); //repeat: -1, repeatDelay: 0.5, opacity: 0, autoAlpha: 0,

    tl.to(".hero-content", { 
      y: 0, 
      opacity: 1,
      autoAlpha: 1,
      ease: "power4.inOut",
    })
    .from(heroTitleSplit.chars, {
        yPercent: -200,
        stagger: 0.05,
        ease: "power2.out",
    })
    .to(".hero-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      ease: "circ.out",
    }, "-=0.5")
    .from(sloganSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
    }, "-=0.5")
  });

  return (
    <>
      <section className="hero-container relative bg-tan-100 h-svh w-full">
        <div className="hero-content relative h-full w-full flex justify-center items-center translate-y-10">
          <div className="container mx-auto h-max w-fit flex flex-col justify-center items-center overflow-hidden">
            <h2 className="hero-title text-[9rem] text-chocolate-700 font-bold uppercase leading-[9vw] -tracking-[0.75vw]">
              Caminhos
            </h2>
            <div className={cn(
                "hero-text-scroll rounded-xl bg-chocolate-400 border-8 border-tan-100 -mt-8 ml-3 mb-2",
                "[clip-path:polygon(50%_0%,50%_0%,50%_100%,50%_100%)] scale-90 -rotate-3"
            )}>
              <div className="hero-subtitle py-4 px-8">
                <h2 className="text-[5rem] text-white font-bold uppercase -tracking-[0.09em]">do Brasil Central</h2>
              </div>
            </div>
            <h2 className={cn(
                "hero-slogan text-2xl text-tan-600 text-center font-cintarini",
                "font-semibold leading-12 text-balance whitespace-nowrap"
            )}>
              Onde o sertão se fez caminho e a memória se faz patrimônio
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProjectNameReveal;
