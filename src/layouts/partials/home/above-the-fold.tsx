"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Navigation from "@/components/navigation";
// import image from "@/assets/images/experiments/2.webp";
// import Video from "./video-cover";
import videoSrc from "@/assets/video-background.mp4";

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
      const title = document.querySelector<HTMLDivElement>(".top-content");
      const description = document.querySelector<HTMLDivElement>(".btm-content");
      const image = document.querySelector<HTMLDivElement>(".image-container");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationArea,
          start: "50% 50%",
          end: "250% 60%",
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
          image,
          {
            height: "100%",
            width: "100%",
            duration: 5,
            ease: "power2.inOut",
          },
          "rc",
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
        {/* <div className="h-full w-full absolute inset-0 bg-darkgreen-500/20 z-1"></div> */}
        <div className="animation-area absolute inset-0 h-svh w-full flex flex-col justify-center items-center">
          <div className="top-con absolute top-[20%] -ml-1.5 z-1 transform-3d perspective-midrange perspective-origin-top">
            <div className="top-content text-center uppercase transform">
              <p className="text-2xl text-white leading-none tracking-tighter">Projeto</p>
              <h2 className="text-[clamp(2.5rem,5vw,7vw)] text-white font-bold leading-[1.3] -tracking-[0.07em] w-full">
                Caminhos do Brasil Central
              </h2>
            </div>
          </div>
          <div className={`image-container h-[40%] w-[50%] absolute top-1/2 left-1/2 -translate-1/2`}>
            {/* <Video videoUrl="./video-background.mp4" height="bg-cover z-40" /> */}
            {/* <img className="h-full w-full object-cover" src={image} alt="" /> */}
            <div className="isolate w-full h-full absolute inset-0">
              <video
                src={videoSrc}
                muted
                loop
                autoPlay
                className="absolute top-0 left-0 object-cover opacity-50 w-full h-full z-40"
              />
            </div>
          </div>
          <div className="btm-con absolute bottom-[12.5%] -ml-1.5 transform-3d perspective-midrange perspective-origin-bottom overflow-hidden z-1">
            <div className="btm-content text-center uppercase flex flex-col justify-center items-center gap-y-8 transform">
              <h2 className="text-[clamp(2.5rem,4.55vw,7vw)] text-white font-bold leading-[1.3] -tracking-[0.0645em]">
                História, Memória e Patrimônio
              </h2>
              <p className="text-2xl text-white w-full xl:w-2/3 mx-auto px-4 xl:px-0 tracking-tighter">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, ipsa! Et, aut rem magnam
                accusamus, aliquid neque quos quas ea quidem enim impedit? Dolor iste quae velit optio!
              </p>
            </div>
          </div>
        </div>

        <div className="part-2 bg-artic-400 h-svh w-full mt-[100%]">Vídeo</div>
      </section>
      <div className="part-2 bg-artic-400 h-svh w-full mt-[100%]">Vídeo</div>
    </>
  );
};

export default AboveTheFold;
