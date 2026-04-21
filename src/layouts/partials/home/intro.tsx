"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation";
import map from "@/assets/images/mapa-da-expedicao.webp";
import videoSrc from "@/assets/video-background.mp4";
import Video from "@/layouts/partials/home/video-cover";
import { Approach, ApproachContainer, ResearchApproaches } from "@/layouts/partials/home/research-approaches";
import { Brain, Hourglass, Landmark } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Intro = () => {
  const heroContainer = useRef<HTMLElement | null>(null);
  const [isNegativeLogo, setIsNegativeLogo] = useState(false);

  useGSAP(
    () => {
      const approaches = document.querySelectorAll<HTMLDivElement>(".approaches .approach");
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

      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: heroContainer.current,
          start: "top top",
          pin: true,
        },
      });

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
        .to(".video-container", {
          height: "100svh",
          width: "125%",
          scale: 1,
          duration: 3,
          ease: "power4.inOut",
          onComplete: () => setIsNegativeLogo(true),
        })
        .to(
          ".hero-content",
          {
            scale: 1,
            duration: 1,
            ease: "power4.in",
            zIndex: 6,
          },
          ">0.2",
        );

      approaches.forEach((approach) => {
        tl.to(
          approach,
          {
            translateY: -40,
            duration: 3,
            ease: "power3.inOut",
          },
          "<",
        );
      });
    },
    { scope: heroContainer },
  );

  return (
    <>
      <section className="hero-container relative bg-tan-100 h-svh w-full overflow-hidden z-3" ref={heroContainer}>
        <Navigation isHome={true} isNegativeLogo={isNegativeLogo} />
        <div className="hero-content relative h-[calc(100svh-104px)] w-full flex justify-center items-center -mt-16 translate-y-10">
          <img
            className="hero-image invert scale-0 opacity-7.5 absolute top-1/2 left-1/2 -translate-1/2 h-1/2 w-1/2 object-cover -z-1"
            src={map}
            alt="Mapa da Expedição Roncador-Xingu"
          />
          <div className="container mx-auto h-max w-fit flex flex-col justify-center items-center overflow-hidden">
            <h2 className="hero-title text-[9rem] text-chocolate-700 font-bold uppercase leading-[9vw] -tracking-[0.75vw]">
              Caminhos
            </h2>
            <div
              className={cn(
                "hero-text-scroll rounded-xl bg-chocolate-400 border-8 border-tan-100 -mt-8 ml-3 mb-2",
                "[clip-path:polygon(50%_0%,50%_0%,50%_100%,50%_100%)] scale-90 -rotate-3",
              )}
            >
              <div className="hero-subtitle py-4 px-8">
                <h2 className="text-[5rem] text-white font-bold uppercase -tracking-[0.09em]">do Brasil Central</h2>
              </div>
            </div>
            <h2
              className={cn(
                "hero-slogan text-2xl text-tan-700 text-center font-cintarini",
                "font-semibold leading-12 text-balance whitespace-nowrap",
              )}
            >
              Onde o sertão se fez caminho e a memória se faz patrimônio
            </h2>
          </div>
        </div>
        <Video videoSrc={videoSrc} className="scale-0" />
        <ResearchApproaches>
          <ApproachContainer>
            <Hourglass size={64} className="text-bege-200 opacity-50" />
            <Approach text="História" />
          </ApproachContainer>
          <ApproachContainer>
            <Brain size={64} className="text-bege-200 opacity-50" />
            <Approach text="Memória" />
          </ApproachContainer>
          <ApproachContainer>
            <Landmark size={64} className="text-bege-200 opacity-50" />
            <Approach text="Patrimônio" />
          </ApproachContainer>
        </ResearchApproaches>
      </section>
    </>
  );
};

export default Intro;