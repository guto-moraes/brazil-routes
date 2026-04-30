"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import interview_one from "@/assets/images/almanaque/entrevista-1.webp";
import interview_two from "@/assets/images/almanaque/entrevista-2.webp";
import interview_three from "@/assets/images/almanaque/entrevista-3.webp";

export const Route = createFileRoute("/testes")({
  component: Tests,
});

function Tests() {
  const cardsRevealRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardContainer = document.querySelector<HTMLDivElement>(".cards-reveal-container");
      const stickyHeader = document.querySelector<HTMLDivElement>(".cards-reveal-header");
      const stopAnimations = gsap.utils.toArray<HTMLElement>([
        ".card",
        ".cards-reveal-container",
        ".cards-reveal-header h2",
      ]);
      const cards = gsap.utils.toArray<HTMLDivElement>(".card");

      let isGapAnimationCompleted = false;
      let isFlipAnimationCompleted = false;

      function initAnimations() {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        const mm = gsap.matchMedia();

        mm.add("(width < 64rem)", () => {
          stopAnimations.forEach((el) => (el.style = ""));
          return {};
        });

        mm.add("(width > 64rem)", () => {
          ScrollTrigger.create({
            trigger: cardsRevealRef.current,
            start: "top top",
            end: `+=${window.innerHeight * 4}px`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              const progress = self.progress;

              if (progress >= 0.1 && progress <= 0.25) {
                const headerProgress = gsap.utils.mapRange(0.1, 0.25, 0, 1, progress);
                const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
                const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);

                gsap.set(stickyHeader, {
                  y: yValue,
                  opacity: opacityValue,
                });
              } else if (progress < 0.1) {
                gsap.set(stickyHeader, {
                  y: 40,
                  opacity: 0,
                });
              } else if (progress >= 0.25) {
                gsap.set(stickyHeader, {
                  y: 0,
                  opacity: 1,
                });
              }

              if (progress <= 0.25) {
                const widthPercentage = gsap.utils.mapRange(0, 0.25, 75, 60, progress);
                gsap.set(cardContainer, { width: `${widthPercentage}%` });
              } else {
                gsap.set(cardContainer, { width: "60%" });
              }

              if (progress >= 0.35 && !isGapAnimationCompleted) {
                gsap.to(cardContainer, {
                  gap: "20px",
                  duration: 0.5,
                  ease: "power3.out",
                });

                cards.forEach((card) => {
                  gsap.to(card, {
                    borderRadius: "20px",
                    duration: 0.5,
                    ease: "power3.out",
                  });
                });

                isGapAnimationCompleted = true;
              } else if (progress < 0.35 && isGapAnimationCompleted) {
                gsap.to(cardContainer, {
                  gap: "0px",
                  duration: 0.5,
                  ease: "power3.out",
                });

                gsap.to(cards[0], {
                  borderRadius: "20px 0 0 20px",
                  duration: 0.5,
                  ease: "power3.out",
                });

                gsap.to(cards[1], {
                  borderRadius: "0px",
                  duration: 0.5,
                  ease: "power3.out",
                });

                gsap.to(cards[2], {
                  borderRadius: "0 20px 20px 0",
                  duration: 0.5,
                  ease: "power3.out",
                });

                isGapAnimationCompleted = false;
              }

              if (progress >= 0.7 && !isFlipAnimationCompleted) {
                cards.forEach((card) =>
                  gsap.to(card, {
                    rotationY: 180,
                    duration: 0.75,
                    ease: "power3.inOut",
                    stagger: 0.1,
                  }),
                );

                gsap.to([cards[0], cards[2]], {
                  y: 30,
                  rotationZ: (i) => [-15, 15][i],
                  duration: 0.75,
                  ease: "power3.inOut",
                });

                isFlipAnimationCompleted = true;
              } else if (progress < 0.7 && isFlipAnimationCompleted) {
                cards.forEach((card) =>
                  gsap.to(card, {
                    rotationY: 0,
                    duration: 0.75,
                    ease: "power3.inOut",
                    stagger: -0.1,
                  }),
                );

                gsap.to([cards[0], cards[2]], {
                  y: 0,
                  rotationZ: 0,
                  duration: 0.75,
                  ease: "power3.inOut",
                });
                isFlipAnimationCompleted = false;
              }
            },
          });
        });
      }

      initAnimations();

      let resizeTimer: number;

      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          initAnimations();
        }, 250);
      });
    },
    { scope: cardsRevealRef },
  );

  return (
    <>
      <section className="bg-tan-500 h-svh w-full"></section>
      <section
        className={cn(
          "cards-reveal relative bg-mate-500 h-svh w-full flex justify-center items-center p-8",
          "max-lg:h-max max-lg:pt-8 max-lg:pb-16 max-lg:px-4 max-lg:flex-col",
        )}
        ref={cardsRevealRef}
      >
        <div
          className={cn(
            "cards-reveal-header absolute top-[20%] left-1/2 -translate-1/2",
            "max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:translate-none max-lg:mb-8",
          )}
        >
          <h2
            className={cn(
              "relative text-7xl text-center font-cabinet font-black leading-none xl:whitespace-nowrap",
              "will-change-[transform,opacity] translate-y-10 opacity-0 max-lg:text-6xl max-lg:opacity-100",
            )}
          >
            Pessoas que construíram a história
          </h2>
        </div>

        <div
          className={cn(
            "cards-reveal-container relative w-[75%] flex perspective-[1000px] translate-y-10 will-change[width]",
            "max-lg:w-full max-lg:flex-col max-lg:gap-8",
          )}
        >
          <div
            className={cn(
              "card relative rounded-l-xl flex-1 aspect-5/7 transform-3d origin-top",
              "max-lg:w-full max-lg:max-w-100 max-lg:m-auto max-lg:rounded-xl",
            )}
          >
            <div className="card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
              <img className="rounded-l-xl h-full w-full object-cover" src={interview_one} alt="" />
            </div>
            <div
              className={cn(
                "card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                "bg-[#eed7a1] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
              )}
            >
              <span className="absolute top-8 left-8 opacity-40">( 01 )</span>
              <p className="text-[2rem] font-medium leading-none">História</p>
            </div>
          </div>

          <div
            className={cn(
              "card relative flex-1 aspect-5/7 transform-3d origin-top",
              "max-lg:w-full max-lg:max-w-100 max-lg:m-auto max-lg:rounded-xl",
            )}
          >
            <div className="card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
              <img className="h-full w-full object-cover" src={interview_two} alt="" />
            </div>
            <div
              className={cn(
                "card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                "bg-[#b5ab76] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
              )}
            >
              <span className="absolute top-8 left-8 opacity-40">( 02 )</span>
              <p className="text-[2rem] font-medium leading-none">Memória</p>
            </div>
          </div>

          <div
            className={cn(
              "card relative rounded-r-xl flex-1 aspect-5/7 transform-3d origin-top",
              "max-lg:w-full max-lg:max-w-100 max-lg:m-auto max-lg:rounded-xl",
            )}
          >
            <div className="card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
              <img className="rounded-r-xl h-full w-full object-cover" src={interview_three} alt="" />
            </div>
            <div
              className={cn(
                "card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                "bg-[#e7bb8b] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
              )}
            >
              <span className="absolute top-8 left-8 opacity-40">( 03 )</span>
              <p className="text-[2rem] font-medium leading-none">Patrimônio</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-tan-500 h-svh w-full"></section>
    </>
  );
}
