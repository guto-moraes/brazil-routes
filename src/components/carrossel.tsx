"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { cn } from "@/lib/utils";
type PanelTypes = {
  year: number;
  bgColor: string;
};

const years: number[] = [1930, 1931, 1932, 1933, 1934, 1935];
const panels: PanelTypes[] = [
  {
    year: 1930,
    bgColor: "--color-green-500", //"oklch(72.3% 0.219 149.579)",
  },
  {
    year: 1931,
    bgColor: "--color-sky-500", //"oklch(68.5% 0.169 237.323)",
  },
  {
    year: 1932,
    bgColor: "--color-purple-500", //oklch(62.7% 0.265 303.9)",
  },
  {
    year: 1933,
    bgColor: "--color-orange-500", //oklch(76.9% 0.188 70.08)",
  },
  {
    year: 1934,
    bgColor: "--color-rose-500", //oklch(64.5% 0.246 16.439)",
  },
  {
    year: 1935,
    bgColor: "--color-indigo-500", //oklch(58.5% 0.233 277.117)",
  },
];

const Carousel = () => {
  const timelineScopeRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1930);
  const min = 1930;
  const max = 1967;
  const skipInterval = 1;
  const ticks = Array.from({ length: (max - min) / skipInterval + 1 }, (_, index) => min + index * skipInterval);

  const handleUpdateCurrentSlide = (year: number) => {
    if(year){
      setCurrentSlide(year)
    }
  }

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

      const timelineWrapper: HTMLElement | null =
        document.querySelector("#timeline");
      const timelineContainer: HTMLDivElement | null = document.querySelector(
        "#timeline-container",
      );
      const slides: HTMLElement[] = gsap.utils.toArray<HTMLElement>(
        "#timeline-container .timeline-item",
      );
      const anchors = document.querySelectorAll<HTMLAnchorElement>(".timeline-anchor")

      if (timelineWrapper && timelineContainer) {
        let tween: gsap.core.Tween | undefined = undefined;

          anchors
          .forEach((anchor: HTMLAnchorElement) => {
            anchor.addEventListener("click", (e: MouseEvent) => {
              e.preventDefault();

              const clickedTarget: EventTarget | null = e.target;
              if (!(clickedTarget instanceof Element)) return;

              const href: string | null = clickedTarget.getAttribute("href");
              if (!href) return;

              const targetElem: HTMLElement | null =
                document.querySelector(href);
              if (!targetElem || !tween) return;

              let y: number = targetElem as unknown as number;

              if (timelineContainer.isSameNode(targetElem.parentElement)) {
                const totalScroll: number =
                  (tween.scrollTrigger?.end ?? 0) -
                  (tween.scrollTrigger?.start ?? 0);

                const panelCountMinusOne: number = slides.length - 1;
                const totalMovement: number =
                  panelCountMinusOne * targetElem.offsetWidth;

                y = Math.round(
                  (tween.scrollTrigger?.start ?? 0) +
                    (targetElem.offsetLeft / totalMovement) * totalScroll,
                );
              }

              gsap.to(window, {
                scrollTo: {
                  y,
                  autoKill: false,
                },
                duration: 1,
              });
            });
          });

        tween = gsap.to(slides, {
          xPercent: -100 * (slides.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: timelineContainer,
            pin: true,
            start: "top top",
            end: () => "+=" + (timelineContainer.offsetWidth - innerWidth),
            scrub: 1,
            snap: {
              snapTo: 1 / (slides.length - 1),
              inertia: false,
              duration: { min: 0.1, max: 0.1 },
            },
          },
        });
      }
    },
    { scope: timelineScopeRef },
  );

  return (
    <>
      <section
        id="timeline"
        className="relative h-svh w-full"
        ref={timelineScopeRef}
      >
        <div
          id="timeline-container"
          className="h-[calc(100svh-64px)] flex overflow-hidden"
          style={{ width: `${years.length * 100}%` }}
        >
          {panels &&
            panels.map((panel, index) => (
              <article
                id={`slide-${panel.year}`}
                className="timeline-item h-full w-full min-w-svw flex justify-center items-center"
                style={{ backgroundColor: `var(${panel.bgColor})` }}
                key={index}
              >
                <h2 className="text-8xl text-white font-black">
                  Slide {panel.year}
                </h2>
              </article>
            ))}
        </div>

        <nav
          className="sticky bottom-0 left-0 bg-gray-800 text-white h-16 w-full flex justify-center items-center gap-x-6"
          role="navigation"
        >
          <div className="w-[95%] mx-auto">
              <hr className="bg-none border-chocolate-300 w-[99%] mx-auto" />
              <span
                aria-hidden="true"
                className="text-bone-200 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
              >
                {ticks.map((tick) => (
                  <span key={tick} className="flex w-0 flex-col items-center justify-center gap-2">
                    <span className={cn("bg-chocolate-300 h-1.5 w-px", tick % skipInterval !== 0 && "h-1")} />
                    <a
                      href={`#slide-${tick}`}
                      className={cn(
                        "timeline-anchor hover:scale-150 transition-all duration-400 cursor-pointer",
                        tick % skipInterval !== 0 && "opacity-0",
                        tick === currentSlide && "text-white font-bold scale-200",
                      )}
                      data-slide={tick}
                      onClick={() => handleUpdateCurrentSlide(tick)}
                    >
                      {tick}
                    </a>
                  </span>
                ))}
              </span>
            </div>
        </nav>
      </section>

      <section className="h-svh w-full bg-indigo-500">
        <h2 className="panel__number">6</h2>
      </section>
    </>
  );
}

export default Carousel;