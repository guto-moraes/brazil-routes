"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { useQueryPioneers } from "@/hooks/queries/theme-queries";

gsap.registerPlugin(ScrollTrigger);

const PioneersTribute = () => {
  const refContainer = useRef<HTMLElement>(null);
  const { data } = useQueryPioneers();
  const { firstScreen, pioneersList: pioneers, lastScreen } = data?.project.theming || {};
  const lastScreenTitle = lastScreen && lastScreen?.title.split(",");

  useGSAP(
    () => {
      const trigger = document.querySelector<HTMLElement>(".photos-container");
      const introText = document.querySelector<HTMLDivElement>(".intro-text");
      const revealText = document.querySelector<HTMLDivElement>(".reveal-text");
      const scroll = document.querySelector<HTMLDivElement>(".scroll-photos");
      const cards = gsap.utils.toArray<HTMLDivElement>(".card", scroll);

      const mainTrack = gsap.to(scroll, {
        x: "-350vw",
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "+=5000",
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          scrub: 1,
        },
      });

      gsap.fromTo(
        introText,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scroll,
            containerAnimation: mainTrack,
            start: "17% center",
            end: "30% center",
            scrub: true,
          },
        },
      );

      cards.forEach((card) => {
        const randomRotate = gsap.utils.random(-35, 35);
        const randomY = gsap.utils.random(-50, 50);
        const randomXOffset = gsap.utils.random(-100, 100);

        gsap.to(card, {
          rotation: randomRotate,
          y: randomY,
          x: randomXOffset,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            containerAnimation: mainTrack,
            start: "left right",
            end: "right left",
            scrub: 1,
          },
        });
      });

      gsap.fromTo(
        revealText,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scroll,
            containerAnimation: mainTrack,
            start: "60% center",
            end: "90% center",
            scrub: true,
          },
        },
      );

      ScrollTrigger.refresh();
    },
    { scope: refContainer },
  );

  return (
    <section className="photos-container relative bg-bone-800 h-svh w-full overflow-hidden z-30" ref={refContainer}>
      <div className="intro-text absolute inset-0 flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-[clamp(1.8rem,5vw,8rem)] text-mate-300 text-center font-black italic uppercase leading-none">
          {firstScreen && firstScreen.title}
        </h1>
        <p className="indent-10 text-2xl text-white text-justify text-pretty hyphens-auto w-full xl:max-w-5xl">
          {firstScreen && firstScreen.description}
        </p>
      </div>
      <div className="reveal-text absolute inset-0 flex flex-col justify-center gap-y-10 items-center z-0">
        <h1 className="text-[clamp(1.8rem,6vw,5rem)] text-mate-300 text-center font-black italic uppercase leading-none">
          {lastScreenTitle && lastScreenTitle[0]} <br /> {lastScreenTitle && lastScreenTitle[1]}
        </h1>
        <ButtonLinkWithIcon
          textButton={lastScreen && lastScreen.textButton}
          link={lastScreen && lastScreen.urlButton}
          bgColor="bg-chocolate-300 hover:bg-chocolate-500 text-white"
          iconColor="bg-white text-chocolate-700"
          target={false}
        />
      </div>
      <div className="scroll-photos relative h-full w-[450vw] pl-[100vw] flex items-center z-10 pointer-events-none">
        {pioneers &&
          pioneers.map((pioneer, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "card shrink-0 rounded-2xl shadow-[-5px_5px_rgba(0,0,0,0.5)]",
                  "h-112 w-80 border-10 border-white flex flex-col justify-start mx-10 p-6",
                  pioneer.tribute ? "bg-bone-600" : "bg-mate-400",
                )}
              >
                <header className="rounded-sm h-80 w-full overflow-x-auto">
                  <img
                    className={cn(
                      "h-full w-full object-cover object-top will-change-transform",
                      pioneer.tribute && "grayscale-85",
                    )}
                    src={pioneer.image.node.guid}
                    alt={pioneer.name}
                  />
                </header>
                <div className="w-full flex flex-col justify-start items-start mt-2">
                  <p className="rounded bg-black/30 text-sm text-white font-medium leading-6 h-6 w-full pl-2 mb-2">
                    {pioneer.name}
                  </p>
                  {pioneer.tribute && (
                    <p className="rounded bg-black/25 text-[0.75rem] text-white h-4.5 w-22 pl-2">
                      <em>in memoriam</em>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default PioneersTribute;
