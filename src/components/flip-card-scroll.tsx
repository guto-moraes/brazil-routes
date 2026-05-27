"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import interview_one from "@/assets/images/almanaque/entrevista-1.webp";
import interview_two from "@/assets/images/almanaque/entrevista-2.webp";
import interview_three from "@/assets/images/almanaque/entrevista-3.webp";
import expedicionarios from "@/assets/images/batismo-canoa_cel-vanique.webp";
import operarios from "@/assets/images/balsa-travessia-rio-das-mortes.webp";
import indigenas from "@/assets/images/indigenas-xavante.webp";

type FlipCardTypes = {
  frontImage: string;
  backImage: string;
  altBackImage: string;
  title: string;
  bgColor: string;
  borderColor: string;
};

const flipCards: FlipCardTypes[] = [
  {
    frontImage: interview_one,
    backImage: expedicionarios,
    altBackImage: "Batismo de canoa construída no meio da mata durante marcha até o Rio das Mortes",
    title: "Expedicionários",
    bgColor: "#eed7a1",
    borderColor: "#d4c4a0",
  },
  {
    frontImage: interview_two,
    backImage: operarios,
    altBackImage: "Translado de operários e equipamentos por meio de balsa no Rio das Mortes",
    title: "Operários",
    bgColor: "#b5ab76",
    borderColor: "#9d9676",
  },
  {
    frontImage: interview_three,
    backImage: indigenas,
    altBackImage: "Crianças da etnia Xavante em embarcação",
    title: "Operários",
    bgColor: "#e7bb8b",
    borderColor: "#cba67d",
  },
];

function FlipCardScrollReveal() {
  const flipCardsRevealRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      
      const cardContainer = document.querySelector<HTMLDivElement>(".flip-card-scroll-reveal-container");
      const stickyHeader = document.querySelector<HTMLDivElement>(".flip-card-scroll-reveal-header h2");
      const stopAnimations = gsap.utils.toArray<HTMLElement>([
        ".card",
        ".flip-card-scroll-reveal-container",
        ".flip-card-scroll-reveal-header h2",
      ]);
      const cards = gsap.utils.toArray<HTMLDivElement>(".card");

      let isGapAnimationCompleted = false;
      let isFlipAnimationCompleted = false;

      function initAnimations() {
        ScrollTrigger.getAll().forEach((st) => {
          // Check if the scrollTrigger's trigger element is inside your container
          if (st.trigger && cardContainer!.contains(st.trigger)) {
            st.kill(); // Kills only this instance
          }
        });

        const mm = gsap.matchMedia();

        mm.add("(width < 64rem)", () => {
          stopAnimations.forEach((el) => (el.style = ""));
          return {};
        });

        mm.add("(min-width: 64rem)", () => {
          ScrollTrigger.create({
            trigger: flipCardsRevealRef.current,
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
    { scope: flipCardsRevealRef },
  );

  return (
    <section
      className={cn(
        "flip-card-scroll-reveal relative bg-bone-950 h-svh w-full flex justify-center items-center p-8",
        "max-lg:h-max max-lg:pt-8 max-lg:pb-16 max-lg:px-4 max-lg:flex-col",
      )}
      ref={flipCardsRevealRef}
    >
      <div
        className={cn(
          "flip-card-scroll-reveal-header w-full max-w-5xl absolute top-[10%] left-1/2 -translate-x-1/2",
          "max-lg:relative max-lg:top-0 max-lg:left-0 max-lg:translate-none max-lg:mb-16",
        )}
      >
        <h2
          className={cn(
            "relative text-[clamp(1.8rem,5vw,4.75rem)] text-chocolate-300 text-center font-cabinet font-black leading-none",
            "will-change-[transform,opacity] translate-y-5 opacity-0 max-lg:text-4xl max-lg:opacity-100",
          )}
        >
          Histórias narradas por quem também ajudou a construí-las
        </h2>
      </div>

      <div
        className={cn(
          "flip-card-scroll-reveal-container relative w-[75%] flex perspective-[1000px] translate-y-16 will-change-[width]",
          "max-lg:w-full max-lg:flex-col max-lg:gap-8 max-sm:mb-16",
        )}
      >
        {flipCards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "card relative rounded-l-xl flex-1 aspect-5/7 transform-3d origin-top",
              "max-lg:w-full max-lg:max-w-100 max-lg:m-auto max-lg:rounded-xl",
            )}
          >
            <div className="card-front absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden">
              <img className="rounded-l-xl h-full w-full object-cover" src={card.frontImage} alt="" />
            </div>
            <div
              className={cn(
                "card-back absolute h-full w-full backface-hidden rounded-[inherit] overflow-hidden",
                "flex justify-center items-center text-center rotate-y-180 p-4 xl:p-8 max-lg:transform-none",
              )}
              style={{ backgroundColor: card.bgColor }}
            >
              <span className="absolute top-4 xl:top-8 left-4 xl:left-8 xl:text-lg text-tan-800/30 font-light">
                ( 0{index+1} )
              </span>
              <div className="flex flex-col gap-y-2.5 xl:gap-y-6">
                <figure
                  className={cn("rounded-2xl border-4 shadow-xl max-w-full overflow-hidden")}
                  style={{ borderColor: card.borderColor }}
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    src={card.backImage}
                    alt={card.altBackImage}
                    title={card.altBackImage}
                  />
                </figure>
                <p className="text-base xl:text-lg text-tan-900/80 font-semibold leading-none">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlipCardScrollReveal;
