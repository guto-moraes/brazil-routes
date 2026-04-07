"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ScrollingAnimatedCards = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const cardContainer = gsap.utils.toArray<HTMLElement>(".sticky-card-container");
    const stickyHeader = gsap.utils.toArray<HTMLElement>(".sticky-card-header p");
    const stopAnimations = gsap.utils.toArray<HTMLElement>([
      ".sticky-card",
      ".sticky-card-container",
      ".sticky-card.header p",
    ]);

    let isGapAnimationCompleted = false;
    let isFlipAnimationCompleted = false;

    function initAnimations() {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const mm = gsap.matchMedia();

      mm.add("(max-width: 999px)", () => {
        stopAnimations.forEach((el) => (el.style = ""));
        return {};
      });

      mm.add("(min-width: 1000px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky-cards",
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
            } else if (progress > 0.25) {
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

              gsap.to(["#sticky-card-1", "#sticky-card-2", "#sticky-card-3"], {
                borderRadius: "20px",
                duration: 0.5,
                ease: "power3.out",
              });

              isGapAnimationCompleted = true;
            } else if (progress < 0.35 && isGapAnimationCompleted) {
              gsap.to(cardContainer, {
                gap: "0px",
                duration: 0.5,
                ease: "power3.out",
              });

              gsap.to("#sticky-card-1", {
                borderRadius: "20px 0 0 20px",
                duration: 0.5,
                ease: "power3.out",
              });

              gsap.to("#sticky-card-2", {
                borderRadius: "0px",
                duration: 0.5,
                ease: "power3.out",
              });

              gsap.to("#sticky-card-3", {
                borderRadius: "0 20px 20px 0",
                duration: 0.5,
                ease: "power3.out",
              });

              isGapAnimationCompleted = false;
            }

            if (progress >= 0.7 && !isFlipAnimationCompleted) {
              gsap.to(".sticky-card", {
                rotationY: 180,
                duration: 0.5,
                ease: "power3.inOut",
                stagger: 0.1,
              });

              gsap.to(["#sticky-card-1", "#sticky-card-3"], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.5,
                ease: "power3.inOut",
              });

              isFlipAnimationCompleted = true;
            } else if (progress < 0.7 && isFlipAnimationCompleted) {
              gsap.to(".sticky-card", {
                rotationY: 0,
                duration: 0.5,
                ease: "power3.inOut",
                stagger: -0.1,
              });

              gsap.to(["#sticky-card-1", "#sticky-card-3"], {
                y: 0,
                rotationZ: 0,
                duration: 0.5,
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

    ScrollTrigger.refresh();
  });

  return (
    <>
      <div className="animation-block">
        <section
          className={cn(
            "sticky-cards bg-bege-100 relative h-svh w-full flex flex-col justify-center",
            "items-center p-8 max-lg:flex-col max-lg:h-max max-lg:py-16 max-lg:px-8",
          )}
        >
          <h2 className="max-lg:text-5xl text-7xl text-center text-[#673c43] font-cabinet font-black mb-16">
            Pessoas que construíram a história
          </h2>
          <div
            className={cn(
              "sticky-card-header w-full max-w-5xl mx-auto absolute top-[28%] left-1/2 -translate-1/2",
              " max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:transform-none max-lg:mb-16",
            )}
          >
            <p
              className={cn(
                "text-2xl text-center text-[#444639] leading-8 will-change-auto",
                "relative translate-y-10 max-lg:opacity-100 opacity-0 lg:mt-8",
              )}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime natus eius aut doloremque sunt
              debitis beatae obcaecati.
            </p>
          </div>
          <div
            className={cn(
              "sticky-card-container relative w-full max-w-7xl flex perspective-[1000px] translate-y-10",
              "will-change-auto max-lg:w-full max-lg:flex-col max-lg:gap-8",
            )}
          >
            <div
              className={cn(
                "sticky-card relative flex-1 aspect-5/7 transform-3d origin-top rounded-s-4xl max-lg:w-full max-lg:max-w-100 m",
                "x-lg:max-auto max-lg:rounded-4xl! max-lg:transform-none",
              )}
              id="sticky-card-1"
            >
              <div className="sticky-card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
                <img
                  className="h-full w-full object-cover rounded-s-4xl"
                  src="/images/entrevista-1.webp"
                  alt="Imagem 01"
                />
              </div>
              <div
                className={cn(
                  "sticky-card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                  "bg-[#eed7a1] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
                )}
              >
                <span className="font-semibold absolute top-8 left-8 opacity-[0.6]">( 01 )</span>
                <div className="flex flex-col gap-y-6">
                  <img
                    className="rounded-2xl border-4 border-white shadow-xl"
                    src="/images/vila-de-garimpeiros_araguaia-mt.webp"
                    alt="Vila de garimpeiros as margens do Rio Araguaia, no lado de Mato Grosso"
                    title="Vila de garimpeiros as margens do Rio Araguaia, no lado de Mato Grosso"
                  />
                  <p className="text-4xl text-bege-800 font-medium leading-none">História</p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "sticky-card relative flex-1 aspect-5/7 transform-3d origin-top max-lg:w-full max-lg:max-w-100 max-lg:max-auto",
                "max-lg:rounded-4xl! max-lg:transform-none",
              )}
              id="sticky-card-2"
            >
              <div className="sticky-card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
                <img className="h-full w-full object-cover" src="/images/entrevista-2.webp" alt="Imagem 02" />
              </div>
              <div
                className={cn(
                  "sticky-card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                  "bg-[#b5ab76] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
                )}
              >
                <span className="font-semibold absolute top-8 left-8 opacity-[0.6]">( 02 )</span>
                <div className="flex flex-col gap-y-6">
                  <img
                    className="rounded-2xl border-4 border-white shadow-xl"
                    src="/images/batismo-canoa_cel-vanique.webp"
                    alt="Batismo da canoa"
                    title="Batismo da canoa"
                  />
                  <p className="text-4xl text-bege-800 font-medium leading-none">Memória</p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "sticky-card relative flex-1 aspect-5/7 transform-3d origin-top rounded-e-4xl max-lg:w-full max-lg:max-w-100 m",
                "x-lg:max-auto max-lg:rounded-4xl! max-lg:transform-none",
              )}
              id="sticky-card-3"
            >
              <div className="sticky-card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
                <img
                  className="h-full w-full object-cover rounded-e-4xl"
                  src="/images/entrevista-3.webp"
                  alt="Imagem 03"
                />
              </div>
              <div
                className={cn(
                  "sticky-card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                  "bg-[#e7bb8b] flex justify-center items-center text-center rotate-y-180 p-8 max-lg:transform-none",
                )}
              >
                <span className="font-semibold absolute top-8 left-8 opacity-[0.6]">( 03 )</span>
                <div className="flex flex-col gap-y-6">
                  <img
                    className="rounded-2xl border-4 border-white shadow-xl"
                    src="/images/folia-de-reis__1948.webp"
                    alt="Batismo da canoa"
                    title="Batismo da canoa"
                  />
                  <p className="text-4xl text-bege-800 font-medium leading-none">Patrimônio</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollingAnimatedCards;
