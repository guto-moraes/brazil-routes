"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { cn } from "@/lib/utils";
import TimelineItem from "@/components/timeline-item";
import { Button } from "./ui/button";

gsap.registerPlugin(Observer, ScrollToPlugin, ScrollTrigger);

const Timeline = () => {
  const scopeRef = useRef<HTMLElement | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1930);
  const viewportWidth = window.innerWidth;
  const min = 1930;
  const max = 1967;
  const skipInterval = 1;
  const years = Array.from({ length: (max - min) / skipInterval + 1 }, (_, index) => min + index * skipInterval);

  const handleUpdateCurrentSlide = (year: number) => {
    if (year) {
      setCurrentSlide(year);
    }
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
  };

  const handleTimelineDropMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useLayoutEffect(() => {
    const trigger = document.querySelector<HTMLElement>("#timeline");
    const elementToFix = document.querySelector<HTMLElement>(".timeline-nav");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible in viewport, lock it to the bottom
            elementToFix!.classList.add("fixed");
          } else {
            // Element is out of view, return it to normal flow
            elementToFix!.classList.remove("fixed");
          }
        });
      },
      {
        root: null, // Defaults to the browser viewport
        threshold: 0.1, // Triggers as soon as 10% of the target is visible
      },
    );

    observer.observe(trigger!);
  });

  useGSAP(
    () => {
      /* Const and Let definition */
      const timelineWrapper = document.querySelector("#timeline");
      const timelineContainer: HTMLDivElement | null = document.querySelector("#timeline-container");
      const slides: HTMLElement[] = gsap.utils.toArray<HTMLElement>("#timeline-container .timeline-item");
      const anchors = document.querySelectorAll<HTMLAnchorElement>(".timeline-anchor");

      if (timelineWrapper && timelineContainer) {
        let tween: gsap.core.Tween | undefined = undefined;

        /* Timeline navigation */
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

            if (timelineContainer.isSameNode(targetElem.parentElement)) {
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

        /* Scroll slides */
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
            end: () => "+=" + (timelineContainer.offsetWidth - innerWidth),
          },
        });

        // Viewport slide observer
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target;
                // Get element id in viewport
                const elementId = element.getAttribute("id")?.split("-")[1];
                // Set year of current slide
                setCurrentSlide(Number(elementId));
              }
            });
          },
          { threshold: 0.5 }, // Slide percentage to get id
        );

        slides.forEach((section) => observer.observe(section));
      }

      Observer.create({
        target: window,
        type: "wheel,touch",
        preventDefault: true,
        wheelSpeed: -1,
        tolerance: 5,
        onDown: () => {
          if (currentSlide >= 1930 && currentSlide < 1967) {
            setCurrentSlide(currentSlide + 1);
          }
        },
        onUp: () => {
          if (currentSlide > 1930 && currentSlide <= 1967) {
            setCurrentSlide(currentSlide - 1);
          }
        },
      });

      /**
       * Handles slide navigation via keyboard arrow keys.
       */
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        // Check for specific arrow keys
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          if (currentSlide >= 1930 && currentSlide < 1967) {
            setCurrentSlide(currentSlide + 1);
          }
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          if (currentSlide > 1930 && currentSlide <= 1967) {
            setCurrentSlide(currentSlide - 1);
          }
        }
      });
    },
    { scope: scopeRef },
  );

  return (
    <section id="timeline" ref={scopeRef}>
      <div id="timeline-container" className="relative h-full xl:h-svh flex overflow-hidden" style={{ width: "500%" }}>
        <TimelineItem />
        <div className="absolute bottom-0 left-0 h-16 w-full">
          <nav
            className={cn(
                "timeline-nav bottom relative  bg-gray-800 dark:bg-dark-900 text-white h-full w-full",
                "max-w-svw flex flex-col justify-center items-center gap-x-3 px-8"
            )}
            role="navigation"
          >
            <Button
              className={cn(
                "lg:hidden rounded-xs bg-darkgreen-400 dark:bg-dark-contrast-100 hover:bg-darkgreen-600",
                "dark:hover:bg-dark-contrast-100/80 text-xl text-white dark:text-dark-950 hover:text-white",
                "dark:hover:text-dark-950 font-bold lg:h-6 py-1 lg:hidden transition-colors duration-500 cursor-pointer",
              )}
              onClick={handleTimelineDropMenu}
            >
              {currentSlide}
            </Button>
            <hr className="hidden lg:block bg-none border-chocolate-300 dark:border-dark-contrast-100 w-[99%] mx-auto" />
            <ul
              className={cn(
                "text-bone-200 w-full flex flex-col lg:flex-row items-center justify-between",
                "gap-1 px-2.5 text-xs font-medium transition-transform duration-300",
                "max-lg:h-full max-lg:bg-white max-lg:text-bone-700 max-lg:text-base max-lg:absolute max-lg:bottom-16.5", // Dispositivos menores do que 1024px
                "max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:h-60 max-lg:max-h-60 max-lg:p-6 max-lg:shadow-md max-lg:w-48",
                "max-lg:rounded-2xl max-lg:origin-bottom max-lg:overflow-y-scroll max-lg:scrollbar-thin max-lg:scrollbar-thumb-tan-200",
                "max-lg:[&::-webkit-scrollbar-thumb]:bg-gray-600 max-lg:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500",
                "max-lg:dark:bg-dark-900 max-lg:dark:text-dark-200",
                isOpenMenu || viewportWidth >= 1024 ? "scale-100" : "scale-0",
              )}
            >
              {years.map((year) => (
                <li key={year} className="flex w-0 flex-col items-center justify-center gap-2">
                  <span
                    className={cn("hidden lg:block bg-chocolate-300 dark:bg-dark-contrast-100 h-1.5 w-px", year % skipInterval !== 0 && "h-1")}
                  />
                  <a
                    href={`#slide-${year}`}
                    className={cn(
                      "timeline-anchor hover:scale-150 transition-all duration-400 cursor-pointer",
                      year % skipInterval !== 0 && "opacity-0",
                      year === currentSlide && "text-bone-800 max-lg:dark:text-dark-contrast-100 lg:text-chocolate-300 dark:lg:text-dark-contrast-100 font-bold scale-200",
                    )}
                    data-slide={year}
                    onClick={() => handleUpdateCurrentSlide(year)}
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
