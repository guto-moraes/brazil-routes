"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import TimelineSlide from "@/components/timeline-slide";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Timeline = () => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1930);
  const min = 1930;
  const max = 1967;
  const skipInterval = 1;
  const years = Array.from({ length: (max - min) / skipInterval + 1 }, (_, index) => min + index * skipInterval);

  const handleUpdateCurrentSlide = (year: number) => {
    if (year) {
      setCurrentSlide(year);
    }
  };

  useGSAP(
    () => {
      /* Const and Let definition */
      const timelineWrapper = document.querySelector("#timeline");
      const timelineContainer: HTMLDivElement | null = document.querySelector("#timeline-container");
      const slides: HTMLElement[] = gsap.utils.toArray<HTMLElement>("#timeline-container .timeline-item");
      const anchors = document.querySelectorAll<HTMLAnchorElement>(".timeline-anchor");

      if (timelineWrapper && timelineContainer) {
        let tween: gsap.core.Tween | undefined = undefined;

        /* Main navigation */
        anchors.forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const clickedTarget: EventTarget | null = e.target;
            if (!(clickedTarget instanceof Element)) return;

            const href: string | null = clickedTarget.getAttribute("href");
            if (!href) return;

            const targetElem: HTMLElement | null = document.querySelector(href);
            if (!targetElem || !tween) return;

            let y: number = targetElem as unknown as number;

            if (targetElem && timelineContainer!.isSameNode(targetElem.parentElement)) {
              const totalScroll: number = (tween.scrollTrigger?.end ?? 0) - (tween.scrollTrigger?.start ?? 0);

              const slideCountMinusOne: number = slides.length - 1;
              const totalMovement: number = slideCountMinusOne * targetElem.offsetWidth;
              y = Math.round((tween.scrollTrigger?.start ?? 0) + (targetElem.offsetLeft / totalMovement) * totalScroll);
            }
            gsap.to(window, {
              scrollTo: {
                y: y,
                autoKill: false,
              },
              duration: 1,
            });
          });
        });

        /* Panels */
        tween = gsap.to(slides, {
          xPercent: -100 * (slides.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: "#timeline-container",
            pin: true,
            start: "top top",
            scrub: 1,
            snap: {
              snapTo: 1 / (slides.length - 1),
              inertia: false,
              duration: { min: 0.1, max: 0.1 },
            },
            end: () => "+=" + (timelineContainer!.offsetWidth - innerWidth),
          },
        });
      }
    },
    { scope: scopeRef },
  );

  return (
    <section id="timeline" ref={scopeRef}>
      <div id="timeline-container" className="relative h-svh flex overflow-hidden" style={{ width: "500%" }}>
        <TimelineSlide />
        <div className="absolute bottom-0 left-0 h-16 w-full bg-gray-800">
          <nav
            className="h-full w-full max-w-svw bg-gray-900 text-white flex flex-col justify-center items-center gap-x-3 px-8"
            role="navigation"
          >
            <hr className="bg-none border-chocolate-300 w-[99%] mx-auto" />
            <span
              aria-hidden="true"
              className="text-bone-200 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
            >
              {years.map((year) => (
                <span key={year} className="flex w-0 flex-col items-center justify-center gap-2">
                  <span className={cn("bg-chocolate-300 h-1.5 w-px", year % skipInterval !== 0 && "h-1")} />
                  <a
                    href={`#slide-${year}`}
                    className={cn(
                      "timeline-anchor hover:scale-150 transition-all duration-400 cursor-pointer",
                      year % skipInterval !== 0 && "opacity-0",
                      year === currentSlide && "text-white font-bold scale-200",
                    )}
                    data-slide={year}
                    onClick={() => handleUpdateCurrentSlide(year)}
                  >
                    {year}
                  </a>
                </span>
              ))}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
