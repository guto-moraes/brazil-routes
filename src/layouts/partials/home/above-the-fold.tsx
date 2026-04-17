"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navigation from "@/components/navigation";
import videoSrc from "@/assets/video-background.mp4";
import TextRevealHidden from "@/components/text-reveal-hidden";

gsap.registerPlugin(ScrollTrigger);

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
      const title = document.querySelector<HTMLDivElement>(".project-name");
      const description = document.querySelector<HTMLDivElement>(".slogan");
      const videoContainer = document.querySelector<HTMLDivElement>(".video-container");
      const siteTitle = document.querySelector<HTMLDivElement>(".site-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationArea,
          start: "50% 50%",
          end: "300% 60%",
          scrub: 1,
          pin: true,
          markers: true,
        },
      });

      tl.to(
        title,
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
        .to(
          videoContainer,
          {
            height: "100%",
            width: "100%",
            duration: 5,
            ease: "power2.inOut",
          },
          "rc",
        )
        .to(
          siteTitle,
          {
            left: -420,
            bottom: 110,
            rotate: -90,
            scale: 0.4,
            duration: 5,
            ease: "power3.inOut",
          },
          2,
        );
    },
    { scope: animationContainer },
  );

  return (
    <>
      <section
        className="above-the-fold relative h-svh w-full bg-darkgreen-500 overflow-hidden bg-hero"
        ref={animationContainer}
      >
        <Navigation isHome={true} />
        <div className="animation-area bg-darkgreen-500 absolute inset-0 h-svh w-full flex flex-col justify-center items-center">
          <div className="h-full w-full absolute inset-0 bg-hero z-1"></div>
          <div className="project-name absolute top-[22.75%] z-1 transform-3d perspective-midrange perspective-origin-top">
            <div className="top-content relative text-center uppercase transform ml-3.5">
              <p className="text-[0.625rem] text-darkgreen-700 font-semibold leading-none tracking-tighter absolute top-9.5 -left-8 transform -rotate-90">
                Projeto
              </p>
              <h2 className="text-[clamp(2.5rem,3.4vw,7vw)] text-white font-bold leading-[1.3] -tracking-[0.075em] w-full">
                Caminhos do Brasil Central
              </h2>
            </div>
          </div>
          <div className={`video-container h-[40%] w-[51%] absolute top-1/2 left-1/2 -translate-1/2`}>
            <div className="isolate w-full h-full absolute inset-0 bg-darkgreen-500">
              <video
                src={videoSrc}
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 object-cover opacity-50 w-full h-full z-3"
              />
              <div className="absolute inset-0 w-full h-full bg-darkgreen-500 bg-hero"></div>
            </div>
          </div>
          <div className="slogan-container absolute bottom-[25%] transform-3d perspective-midrange perspective-origin-bottom overflow-hidden z-1">
            <div className="slogan text-center uppercase flex flex-col justify-center items-center transform">
              {/* <h2 className="text-[clamp(1.8rem,2.75vw,5vw)] text-white font-bold leading-[1.3] -tracking-[0.065em]">
                História, Memória e Patrimônio
              </h2> */}
              <TextRevealHidden blockColor="#219577">
                <p className="text-3xl text-black/50 text-center font-semibold w-full px-4 xl:px-0 tracking-tighter">
                  Onde o sertão se fez caminho e a memória se faz patrimônio
                </p>
              </TextRevealHidden>
            </div>
          </div>
          <div className="site-title absolute -bottom-full left-52 z-30 text-white/25 uppercase scale-100 rotate-0">
            <h2 className="text-[clamp(2.5rem,11vw,13vw)] font-black leading-[0.85] -tracking-[0.08em]">Caminhos</h2>
            <h2 className="text-[clamp(2rem,7vw,10vw)] font-normal leading-[0.85] -tracking-[0.13em]">
              do Brasil Central
            </h2>
          </div>
          div.research-approach
        </div>
      </section>
      <div className="part-2 bg-artic-400 h-svh w-full mt-[100%]">Vídeo</div>
    </>
  );
};

export default AboveTheFold;
