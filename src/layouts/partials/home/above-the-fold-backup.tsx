"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import Navigation from "@/components/navigation";
import Video from "./video-cover";
import videoSrc from "@/assets/video-background.mp4";
import TextRevealHidden from "@/components/text-reveal-hidden";
import { Approach, ApproachContainer, ResearchApproaches } from "./research-approaches";
import { Brain, Hourglass, Landmark } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboveTheFold = () => {
  const animationContainer = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      const animationArea = document.querySelector<HTMLDivElement>(".above-the-fold");
      const titleContainer = document.querySelector<HTMLDivElement>(".project-name");
      const siteName = gsap.utils.toArray<HTMLHeadingElement>(".site-name");
      const description = document.querySelector<HTMLDivElement>(".slogan-content");
      const videoContainer = document.querySelector<HTMLDivElement>(".video-container");
      const siteTitle = document.querySelector<HTMLDivElement>(".site-title");
      const approaches = document.querySelectorAll<HTMLDivElement>(".approaches .approach");

      SplitText.create(siteName, {
        type: "chars",
        charsClass: "translate-y-0 transform",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.chars, {
            y: 150,
            stagger: 0.02,
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.02,
          });
        },
      });

      gsap.fromTo(
        videoContainer,
        {
          height: "0%",
          width: "0%",
        },
        {
          height: "40%",
          width: "62%",
          duration: 1.5,
          ease: "power3.inOut",
          delay: 0.5,
        },
      );

      approaches.forEach((approach, index) => {
        gsap.set(approach, {
          translateY: 300 * (index + 1),
          transformOrigin: "bottom",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationArea,
          start: "50% 50%",
          end: "500% 60%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        titleContainer,
        {
          rotateX: "110deg",
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "rc",
      )
        .to(
          description,
          {
            rotateX: "-110deg",
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "rc",
        )
        .fromTo(
          videoContainer,
          {
            height: "40%",
            width: "62%",
          },
          {
            height: "100%",
            width: "125%",
            duration: 5,
            ease: "power2.inOut",
          },
          "rc",
        )
        .to(
          siteTitle,
          {
            left: 76,
            bottom: 200,
            rotate: 0,
            scale: 0.4,
            duration: 5,
            ease: "power3.inOut",
          },
          2,
        );

      approaches.forEach((approach) => {
        tl.to(
          approach,
          {
            translateY: -40,
            duration: 5,
            ease: "power3.inOut",
          },
          3,
        );
      });
    },
    { scope: animationContainer },
  );

  return (
    <>
      <section
        className="above-the-fold relative h-svh w-full bg-darkgreen-800 overflow-hidden bg-hero"
        ref={animationContainer}
      >
        <Navigation isHome={true} />
        <div
          className={cn(
            "animation-area bg-linear-to-bl from-darkgreen-400 to-darkgreen-800 absolute",
            "inset-0 h-svh w-full flex flex-col justify-center items-center",
          )}
        >
          <div className="h-full w-full absolute inset-0 bg-hero z-1"></div>
          <div className="project-name absolute top-[22.5%] z-3 transform-3d perspective-distant perspective-origin-top">
            <div className="project-content relative text-center uppercase transform ml-3.5">
              <p className="text-2xl text-white text-center font-semibold leading-none tracking-tighter">Projeto</p>
              <h2
                className={cn(
                  "site-name text-[clamp(2.5rem,4vw,7vw)] text-bege-200 font-cabinet font-black leading-[1.3]",
                  "-tracking-[0.05em] w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
                )}
              >
                Caminhos do Brasil Central
              </h2>
            </div>
          </div>
          <Video
            videoSrc={videoSrc}
            className="bg-linear-to-tr from-darkgreen-800 from-10% via-darkgreen-600 to-darkgreen-500 [clip-path:polygon(10%_0%,90%_0%,90%_100%,10%_100%)]"
          />

          <div className="slogan-container absolute bottom-[24.5%] transform-3d perspective-distant perspective-origin-bottom overflow-hidden z-1">
            <div className="slogan-content text-center h-max w-full flex flex-col justify-center items-center transform">
              <TextRevealHidden blockColor="#0000000">
                <p className="text-4xl text-white text-center font-cintarini w-full p-4 xl:px-0 tracking-tighter">
                  Onde o sertão se fez caminho e a memória se faz patrimônio
                </p>
              </TextRevealHidden>
            </div>
          </div>
          <div className="site-title absolute -bottom-full left-52 z-30 uppercase scale-100 -rotate-45">
            <h2 className="text-[clamp(2.5rem,11vw,13vw)] text-bege-200 font-black leading-[0.85] -tracking-[0.08em]">
              Caminhos
            </h2>
            <h2 className="text-[clamp(2rem,7vw,10vw)] text-white font-normal leading-[0.85] -tracking-[0.13em]">
              do Brasil Central
            </h2>
          </div>
        </div>
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

export default AboveTheFold;
