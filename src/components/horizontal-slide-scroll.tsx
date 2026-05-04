"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HorizontalSlideItemTypes, HorizontalSlidesType } from "@/types/components-types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlideItem = ({ bgColor, className, children }: HorizontalSlideItemTypes) => {
  return (
    <div className={cn("horizontal-slides-scroll-item h-full w-full shrink-0", className)} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

const HorizontalSlidesScroll = ({ children }: HorizontalSlidesType) => {
  const slidesContainerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = document.querySelector(".horizontal-slides-scroll");
      const sections = gsap.utils.toArray<HTMLDivElement>(".horizontal-slides-scroll .horizontal-slides-scroll-item");

      gsap.to(sections, {
        scrollTrigger: {
          trigger: slidesContainerRef.current,
          start: "top top",
          end: "+=" + container!.scrollWidth,
          scrub: 2, // parallax
          pin: true,
        },
        x: window.innerWidth - container!.scrollWidth,
        ease: "none",
      });
    },
    { scope: slidesContainerRef },
  );

  return (
    <section className="horizontal-slides-scroll relative h-svh w-full flex overflow-hidden" ref={slidesContainerRef}>
      {children}
    </section>
  );
};

export { HorizontalSlideItem, HorizontalSlidesScroll };
