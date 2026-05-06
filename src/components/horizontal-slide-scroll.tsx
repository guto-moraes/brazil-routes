"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { HorizontalSlideItemTypes, HorizontalSlidesType } from "@/types/components-types";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlideItem = ({ id, bgColor, className, children }: HorizontalSlideItemTypes) => {
  return (
    <div id={id} className={cn("horizontal-slides-scroll-item h-full w-full shrink-0", className)} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

const HorizontalSlidesScroll = ({ children }: HorizontalSlidesType) => {
  const slidesContainerRef = useRef<HTMLElement | null>(null);
  
  useGSAP(
    () => {
      const container = document.querySelector(".horizontal-slides-scroll");
      const slides = gsap.utils.toArray<HTMLDivElement>(".horizontal-slides-scroll .horizontal-slides-scroll-item");
      const rawScrollDistance = window.innerWidth * (slides.length - 1) + 500;
      const adjustedEnd = rawScrollDistance - window.innerHeight;

      gsap.to(slides, {
        scrollTrigger: {
          trigger: slidesContainerRef.current,
          start: "top top",
          end: adjustedEnd,
          scrub: 2,
          pin: true,
          invalidateOnRefresh: true,
        },
        x: -container!.scrollWidth + window.innerWidth,
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
