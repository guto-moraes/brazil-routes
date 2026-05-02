"use client";

import { createFileRoute } from "@tanstack/react-router";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoSvg from "@/components/logo-svg";
import luiz from "@/assets/images/luiz-gabriel.webp";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/testes")({
  component: Tests,
});

function Tests() {
  const teamCardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const teamMembers = gsap.utils.toArray<HTMLDivElement>(".team-member");
      const teamMemberCards = gsap.utils.toArray<HTMLDivElement>(".team-member-card");

      let cardPlaceholderEntrance: ScrollTrigger | null = null;
      let cardSlideInAnimation: ScrollTrigger | null = null;

      function initTeamAnimations() {
        if (window.innerWidth < 1024) {
          if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
          if (cardSlideInAnimation) cardSlideInAnimation.kill();

          teamMembers.forEach((member) => {
            gsap.set(member, { clearProps: "all" });

            const teamMemberLogo = member.querySelector<SVGSVGElement>(".team-member-logo .logo-svg");
            gsap.set(teamMemberLogo, { clearProps: "all" });
          });

          teamMemberCards.forEach((card) => {
            gsap.set(card, { clearProps: "all" });
          });

          return;
        }

        if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
        if (cardSlideInAnimation) cardSlideInAnimation.kill();

        cardPlaceholderEntrance = ScrollTrigger.create({
          trigger: teamCardsRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            teamMembers.forEach((member, index) => {
              const entranceDelay = 0.15;
              const entranceDuration = 0.7;
              const entranceStart = index * entranceDelay;
              const entranceEnd = entranceStart + entranceDuration;

              if (progress >= entranceStart && progress <= entranceEnd) {

                const memberEntranceProgress = (progress - entranceStart) / entranceDuration;
                const entranceY = 125 - memberEntranceProgress * 125;
                gsap.set(member, { y: `${entranceY}%` });

                const teamMemberLogo = document.querySelector<SVGSVGElement>(".team-member-logo .logo-svg");
                const logoScaleDelay = 0.4;
                const logoScaleProgress = Math.max(0, (memberEntranceProgress - logoScaleDelay) / (1 - logoScaleDelay));
                gsap.set(teamMemberLogo, { scale: logoScaleProgress });

              } else if (progress > entranceEnd) {

                gsap.set(member, { y: "0%" });
                const teamMemberLogo = member.querySelector<SVGSVGElement>(".team-member-logo .logo-svg");
                gsap.set(teamMemberLogo, { scale: 1 });
                
              }
            });
          },
        });

        cardSlideInAnimation = ScrollTrigger.create({
          trigger: teamCardsRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 3}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            teamMemberCards.forEach((card, index) => {
              const slideInStagger = 0.075;
              const xRotationDuration = 0.4;
              const xRotationStart = index * slideInStagger;
              const xRotationEnd = xRotationStart + xRotationDuration;

              if (progress >= xRotationStart && progress <= xRotationEnd) {
                const cardProgress = (progress - xRotationStart) / xRotationDuration;

                const cardInitialX = 300 - index * 100;
                const cardTargeX = -50;
                const cardSlideInX = cardInitialX + cardProgress * (cardTargeX - cardInitialX);

                const cardSlideInRotation = 20 - cardProgress * 20;

                gsap.set(card, {
                  x: `${cardSlideInX}%`,
                  rotation: cardSlideInRotation,
                });
              } else if (progress > xRotationEnd) {
                gsap.set(card, {
                  x: "-50%",
                  rotation: 0,
                });
              }

              const cardScaleStagger = 0.12;
              const cardScaleStart = 0.4 + index * cardScaleStagger;
              const cardScaleEnd = 1;

              if (progress >= cardScaleStart && progress <= cardScaleEnd) {
                const scaleProgress = (progress - cardScaleStart) / (cardScaleEnd - cardScaleStart);
                const scaleValue = 0.75 + scaleProgress * 0.25;

                gsap.set(card, { scale: scaleValue });
              } else if (progress > cardScaleEnd) {
                gsap.set(card, { scale: 1 });
              }
            });
          },
        });
      }

      initTeamAnimations();
    },
    { scope: teamCardsRef },
  );

  return (
    <>
      <section className="hero h-svh w-full bg-tan-500"></section>

      <section className="bg-terracotta-950 h-svh w-full">
        <div
          className={cn(
            "team-cards-container h-svh max-w-7xl mx-auto flex items-center gap-12 p-4 overflow-hidden",
            "max-lg:250svh max-lg:flex-col max-lg:items-center",
          )}
          ref={teamCardsRef}
        >
          <div
            className={cn(
              "team-member flex-1 relative rounded-2xl h-2/3 w-full outline-dashed outline-2",
              "outline-offset-8 outline-chocolate-300 p-1 z-0 translate-y-[125%]",
              "max-lg:max-w-100 max-lg:translate-y-0!",
            )}
          >
            <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
              <LogoSvg className="size-40 fill-chocolate-300 scale-0 max-lg:scale-100" />
            </div>
            <div
              className={cn(
                "team-member-card rounded-2xl bg-chocolate-300 absolute top-1/2 left-1/2 translate-y-[300%]",
                "-translate-x-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] will-change-transform scale-75 rotate-20",
                "max-lg:translate-[-50%,-50%]! max-lg:scale-100! max-lg:rotate-0!",
              )}
            >
              <div className="team-member-photo aspect-1 overflow-hidden">
                <img className="rounded-t-2xl h-full w-full object-cover" src={luiz} alt="" />
              </div>
              <div className="team-member-details flex flex-col justify-center items-center gap-y-5 pt-6 px-4">
                <p className="text-sm text-center text-terracotta-800 font-mono font-medium uppercase leading-none">
                  ( Líder do Projeto )
                </p>
                <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] text-terracotta-600 text-center font-black leading-[0.85] uppercase">
                  Luiz{" "}
                  <span
                    className="
                    text-terracotta-800"
                  >
                    Gabriel
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "team-member flex-1 relative rounded-2xl h-2/3 w-full outline-dashed outline-2",
              "outline-offset-8 outline-chocolate-300 p-1 z-1 translate-y-[125%]",
              "max-lg:max-w-100 max-lg:translate-y-0!",
            )}
          >
            <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
              <LogoSvg className="size-40 fill-chocolate-300 scale-0 max-lg:scale-100" />
            </div>
            <div
              className={cn(
                "team-member-card rounded-2xl bg-chocolate-300 absolute top-1/2 left-1/2 translate-y-[200%]",
                "-translate-x-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] will-change-transform scale-75 rotate-20",
                "max-lg:translate-[-50%,-50%]! max-lg:scale-100! max-lg:rotate-0!",
              )}
            >
              <div className="team-member-photo aspect-1 overflow-hidden">
                <img className="rounded-t-2xl h-full w-full object-cover" src={luiz} alt="" />
              </div>
              <div className="team-member-details flex flex-col justify-center items-center gap-y-5 pt-6 px-4">
                <p className="text-sm text-center text-terracotta-800 font-mono font-medium uppercase leading-none">
                  ( Líder do Projeto )
                </p>
                <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] text-terracotta-600 text-center font-black leading-[0.85] uppercase">
                  Luiz{" "}
                  <span
                    className="
                    text-terracotta-800"
                  >
                    Gabriel
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "team-member flex-1 relative rounded-2xl h-2/3 w-full outline-dashed outline-2",
              "outline-offset-8 outline-chocolate-300 p-1 z-0 translate-y-[125%]",
              "max-lg:max-w-100 max-lg:translate-y-0!",
            )}
          >
            <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
              <LogoSvg className="size-40 fill-chocolate-300 scale-0 max-lg:scale-100" />
            </div>
            <div
              className={cn(
                "team-member-card rounded-2xl bg-chocolate-300 absolute top-1/2 left-1/2 translate-y-full",
                "-translate-x-1/2 h-[calc(100%+4px)] w-[calc(100%+4px)] will-change-transform scale-75 rotate-20",
                "max-lg:translate-[-50%,-50%]! max-lg:scale-100! max-lg:rotate-0!",
              )}
            >
              <div className="team-member-photo aspect-1 overflow-hidden">
                <img className="rounded-t-2xl h-full w-full object-cover" src={luiz} alt="" />
              </div>
              <div className="team-member-details flex flex-col justify-center items-center gap-y-5 pt-6 px-4">
                <p className="text-sm text-center text-terracotta-800 font-mono font-medium uppercase leading-none">
                  ( Líder do Projeto )
                </p>
                <h2 className="text-[clamp(1.8rem,5vw,4.5rem)] text-terracotta-600 text-center font-black leading-[0.85] uppercase">
                  Luiz{" "}
                  <span
                    className="
                    text-terracotta-800"
                  >
                    Gabriel
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other h-svh w-full bg-tan-500"></section>
    </>
  );
}
