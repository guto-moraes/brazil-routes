"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({
  onTrigger,
  className,
  initialTextColor,
  endTextColor,
  text,
}: {
  onTrigger: string;
  className: string;
  initialTextColor: string;
  endTextColor: string;
  text: string;
}) => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const text = document.querySelector<HTMLParagraphElement>(".resume");

    gsap.to(text, {
      duration: 0.5,
      text: {
        value: text!.textContent,
        oldClass: initialTextColor,
        newClass: endTextColor,
      },
      scrollTrigeer: {
        trigger: onTrigger,
        start: "top top",
        end: "+=100",
        scrub: 1,
      },
    });
  });

  return (
    <p className={cn("resume", className)}>
      {text}
    </p>
  );
};

export default TextReveal;
