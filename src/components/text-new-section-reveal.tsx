"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const TextNewSectionReveal = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const exp = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience",
        start: "top top",
        end: "+=5000",
        scrub: true,
        markers: true,
        pin: ".experience",
      },
    });

    exp.to(".experience-middle", {
      "--progress1": 1,
      ease: "none",
      smoothOrigin: true,
    });
    exp.from(
      ".extraBox",
      {
        scaleX: 0,
        ease: "none",
      },
      "-=0.4",
    );
  });

  return (
    <>
      <div className="experience">
        <div className="extraBox"></div>
        <div className="experience-show">
          <h1 className="experience-top">Let Me show you</h1>
          <div className="experience-middle-container">
            <h1 className="experience-middle">Enter My World</h1>
          </div>
          <h1 className="experience-bottom">My Magic Trick</h1>
          <div className="spacer-end"></div>
        </div>
      </div>
      <div className="bg-chocolate-300 h-svh w-full grid place-content-center">
        <h2 className="text-7xl text-terracotta-900 font-cabinet font-black">Encerramento da Animação</h2>
      </div>
    </>
  );
};

export default TextNewSectionReveal;
