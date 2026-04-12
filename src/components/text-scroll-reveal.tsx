"use client";

import { cn } from "@/lib/utils";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({ text, spanText }: { text: string; spanText: string }) => {
  return (
    <h2
      className={cn(
        "relative text-[clamp(1.8rem,9vw,12vw)] text-bone-600/25 font-inter font-black leading-[100%] tracking-tighter",
        "w-full pb-8 bg-clip-text bg-linear-to-r from-bone-400 to-bone-400 bg-no-repeat bg-size-[0%] border-b border-bone-700",
        "[transition:background-size_cubic-bezier(.1,.5,.5,1)_0.5s] flex flex-col justify-center items-start group uppercase",
      )}
    >
      {text}
      <span
        className={cn(
          "absolute bg-terracotta-500 text-bone-900 h-full w-full origin-center flex flex-col justify-center",
          "[clip-path:polygon(0%_50%,100%_50%,100%_50%,0%_50%)] [transition:all_cubic-bezier(.1,.5,.5,1)]",
          "group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]",
        )}
      >
        {spanText}
      </span>
    </h2>
  );
};

export const TextScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const containerScope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      const textElements = document.querySelectorAll<HTMLHeadingElement>(".container-text-reveal h2");

      textElements.forEach((text) => {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: containerScope },
  );

  return (
    <section
      className="container-text-reveal bg-bone-900 px-32 h-[200svh] flex flex-col justify-center items-start gap-8"
      ref={containerScope}
    >
      {children}
    </section>
  );
};
