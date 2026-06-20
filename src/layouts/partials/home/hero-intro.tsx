"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Header from "@/layouts/header";
import Video from "@/layouts/partials/home/video-cover";
import { cn } from "@/lib/utils";
import map from "@/assets/images/mapa-da-expedicao.webp";
import { Approach, ApproachContainer, ResearchApproaches } from "@/layouts/partials/home/researches-approach";
import { Hourglass, Landmark, MessagesSquare } from "lucide-react";

const HeroIntro = () => {
  const heroContainer = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      
      const approaches = document.querySelectorAll<HTMLDivElement>(".approaches .approach");
      const video = document.querySelector<HTMLDivElement>(".video-container");

      const heroTitleSplit = SplitText.create(".hero-title", {
        type: "chars",
      });

      const sloganSplit = SplitText.create(".hero-slogan", {
        type: "chars",
      });

      approaches.forEach((approach, index) => {
        gsap.set(approach, {
          translateY: 300 * (index + 1),
          transformOrigin: "bottom",
        });
      });

      gsap.set(video, {
        scale: 0,
      });

      const tl = gsap.timeline();

      tl.to(".hero-content", {
        y: 0,
        opacity: 1,
        autoAlpha: 1,
        ease: "power4.inOut",
      })
        .to(".hero-image", {
          scale: 1,
          duration: 1,
          ease: "power4.inOut",
        })
        .from(heroTitleSplit.chars, {
          yPercent: -200,
          stagger: 0.05,
          ease: "power2.out",
        })
        .to(
          ".hero-text-scroll",
          {
            duration: 1,
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
            ease: "circ.out",
          },
          "-=0.5",
        )
        .from(
          sloganSplit.chars,
          {
            yPercent: 200,
            height: 40,
            stagger: 0.02,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          ".hero-content",
          {
            scale: 0,
            duration: 0.5,
          },
          ">0.7",
        )
        .to(
          video,
          {
            height: "100svh",
            width: "125%",
            scale: 1,
            duration: 2,
            ease: "power4.inOut",
          },
          "<0.1",
        )
        .to(
          ".hero-content",
          {
            scale: 1,
            duration: 1,
            ease: "power4.in",
            zIndex: 6,
          },
          "<1.5",
        );

      approaches.forEach((approach) => {
        tl.to(
          approach,
          {
            translateY: 0,
            duration: 3,
            bottom: 0,
            ease: "power3.inOut",
          },
          "<",
        );
      });
    },
    { scope: heroContainer },
  );

  return (
    <section
      className="hero-container relative bg-hero bg-tan-400 dark:bg-tan-950 h-screen w-full overflow-hidden"
      ref={heroContainer}
    >
      <Header isHome className="bg-transparent z-25" />
      <div className="hero-content relative h-[calc(100vh-80px)] 2xl:h-[calc(100vh-104px)] w-full flex justify-center items-center -mt-16 translate-y-10 z-10">
        <img
          className="hero-image invert dark:invert-0 scale-0 opacity-7.5 absolute top-1/2 left-1/2 -translate-1/2 h-1/2 w-1/2 object-cover"
          src={map}
          alt="Mapa da Expedição Roncador-Xingu"
        />
        <div className="container mx-auto h-max w-fit flex flex-col justify-center items-center overflow-hidden">
          <h2
            className={cn(
              "hero-title text-[clamp(3.5rem,12vw,9rem)] text-chocolate-700 dark:text-[#ffe27d] font-bold uppercase leading-32 tracking-[-0.08em]",
            )}
          >
            Caminhos
          </h2>
          <div
            className={cn(
              "hero-text-scroll rounded-xl bg-chocolate-400 dark:bg-linear-to-tr dark:from-dark-900",
              "dark:to-dark-700 border-4 md:border-8 border-tan-100 dark:border-dark-400",
              "-mt-12 mb-2 [clip-path:polygon(50%_0%,50%_0%,50%_100%,50%_100%)] sm:scale-90 -rotate-3",
            )}
          >
            <div className="hero-subtitle py-4 px-4 sm:px-8">
              <h2 className="text-[clamp(1.75rem,6.5vw,5rem)] text-white dark:text-dark-50 font-bold uppercase tracking-[-0.09em]">
                do Brasil Central
              </h2>
            </div>
          </div>
          <h2
            className={cn(
              "hero-slogan max-sm:h-12 text-[clamp(1rem,3vw,1.875rem)] text-white text-center font-cintarini",
              "font-semibold max-sm:leading-none leading-16 sm:whitespace-nowrap tracking-wider max-sm:mt-3",
              "max-[360px]:max-w-[90%] min-[360px]:max-w-[75%] min-[400px]:max-w-[70%] sm:max-w-full",
            )}
          >
            Onde o sertão se fez caminho e a memória se faz patrimônio
          </h2>
        </div>
      </div>
      <Video />
      <ResearchApproaches>
        <ApproachContainer>
          <Hourglass className="size-6 md:size-8 lg:size-12 text-bege-200 dark:text-[#ffe27d] opacity-50 dark:opacity-100" />
          <Approach text="História" />
        </ApproachContainer>
        <ApproachContainer>
          <MessagesSquare className="size-6 md:size-8 lg:size-12 text-bege-200 dark:text-[#ffe27d] opacity-50 dark:opacity-100" />
          <Approach text="Memória" />
        </ApproachContainer>
        <ApproachContainer>
          <Landmark className="size-6 md:size-8 lg:size-12 text-bege-200 dark:text-[#ffe27d] opacity-50 dark:opacity-100" />
          <Approach text="Patrimônio" />
        </ApproachContainer>
      </ResearchApproaches>
    </section>
  );
};

export default HeroIntro;
