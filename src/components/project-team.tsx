"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.webp";
import leader from "@/assets/images/team/luiz-gabriel.webp";

gsap.registerPlugin(ScrollTrigger);

const ProjectTeam = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const section = document.querySelector<HTMLElement>(".team");
    const members = gsap.utils.toArray<HTMLDivElement>(".team-member");
    const cards = gsap.utils.toArray<HTMLDivElement>(".team-member-card");

    let cardPlaceholderEntrance: ScrollTrigger | null = null;
    let cardSlideInAnimation: ScrollTrigger | null = null;

    function initTeamAnimations() {
      if (window.innerWidth < 1000) {
        if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
        if (cardSlideInAnimation) cardSlideInAnimation.kill();

        members.forEach((member) => {
          gsap.set(member, { clearProps: "all" });
          const initialMember = member.querySelector(".team-member-logo img");
          gsap.set(initialMember, { clearProps: "all" });
        });

        cards.forEach((card) => {
          gsap.set(card, { clearProps: "all" });
        });

        return;
      }

      if (cardPlaceholderEntrance) cardPlaceholderEntrance.kill();
      if (cardSlideInAnimation) cardSlideInAnimation.kill();

      cardPlaceholderEntrance = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          members.forEach((member, index) => {
            const entranceDelay = 0.15;
            const entranceDuration = 0.7;
            const entranceStart = index * entranceDelay;
            const entranceEnd = entranceStart + entranceDuration;

            if (progress >= entranceStart && progress <= entranceEnd) {
              const memberEntranceProgress = (progress - entranceStart) / entranceDuration;

              const entranceY = 125 - (memberEntranceProgress * 125);
              gsap.set(member, { y: `${entranceY}%` });

              const initialMember = member.querySelector(".team-member-logo img");

              const initialLogoScaleDelay = 0.4;
              const initialLogoScaleProgress = Math.max(
                0,
                (memberEntranceProgress - initialLogoScaleDelay) / (1 - initialLogoScaleDelay),
              );

              gsap.set(initialMember, { scale: initialLogoScaleProgress });
            } else if (progress > entranceEnd) {
              gsap.set(member, { y: "0%" });
              const initialMember = member.querySelector(".team-member-logo img");

              gsap.set(initialMember, { scale: 1 });
            }
          });
        },
      });

      cardSlideInAnimation = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          cards.forEach((card, index) => {
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

    // let resizeTimer: ReturnType<typeof setTimeout>;
    // window.addEventListener("resize", () => {
    //   clearTimeout(resizeTimer);
    //   resizeTimer = setTimeout(() => {
    //     initTeamAnimations();
    //     ScrollTrigger.refresh();
    //   }, 250);
    // });

    initTeamAnimations();
  });
  return (
    <>
      <section className="intro bg-chocolate-950 h-svh w-full grid place-content-center">
        <h2 className="text-9xl text-terracotta-500 font-cabinet font-black">Start Intro</h2>
      </section>

      <section className="team bg-chocolate-300 relative h-svh w-full p-8 flex gap-8 overflow-hidden">
        <div className={
            cn(
                "team-member bg-bege-50 rounded-2xl outline-2 outline-dashed outline-terracotta-950",
                "flex-1 relative h-full w-full will-change-transform nth-1:z-2 nth-2:z-1 nth-3:z-0 translate-y-[125%]"
            )
        }>
          <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
            <img className="w-96 scale-0" src={logo} />
          </div>
          <div className={
            cn(
                "team-member-card bg-bege-50 rounded-2xl h-[calc(100%+4px)] w-[calc(100%+4px)] p-8 absolute left-1/2",
                "flex flex-col items-center gap-8 will-change-transform translate-[300%,-50%] scale-75 rotate-20"
            )
          }> 
            <div className="team-member-photo rounded-xl aspect-square mb-4 overflow-hidden">
              <img className="rounded-xl h-full w-full object-cover" src={leader} />
            </div>
            <div className="team-member-details text-center flex flex-col items-center gap-8">
              <p className="font-medium leading-none uppercase">
                <span>[</span> Líder do Projeto <span>]</span>
              </p>
              <h2 className="text-8xl text-terracotta-500 font-cabinet font-black leading-[0.8] uppercase">
                Luiz <span className="text-terracotta-950">Gabriel</span>
              </h2>
            </div>
          </div>
        </div>

        <div className={
            cn(
                "team-member bg-bege-50 rounded-2xl outline-2 outline-dashed outline-terracotta-950",
                "flex-1 relative h-full w-full will-change-transform nth-1:z-2 nth-2:z-1 nth-3:z-0 translate-y-[125%]"
            )
        }>
          <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
            <img className="w-96 scale-0" src={logo} />
          </div>
          <div className={
            cn(
                "team-member-card bg-bege-50 rounded-2xl h-[calc(100%+4px)] w-[calc(100%+4px)] p-8 absolute left-1/2",
                "flex flex-col items-center gap-8 will-change-transform translate-[200%,-50%] scale-75 rotate-20"
            )
          }> 
            <div className="team-member-photo rounded-xl aspect-square mb-4 overflow-hidden">
              <img className="rounded-xl h-full w-full object-cover" src={leader} />
            </div>
            <div className="team-member-details text-center flex flex-col items-center gap-8">
              <p className="font-medium leading-none uppercase">
                <span>[</span> Líder do Projeto <span>]</span>
              </p>
              <h2 className="text-8xl text-terracotta-500 font-cabinet font-black leading-[0.8] uppercase">
                Luiz <span className="text-terracotta-950">Gabriel</span>
              </h2>
            </div>
          </div>
        </div>

        <div className={
            cn(
                "team-member bg-bege-50 rounded-2xl outline-2 outline-dashed outline-terracotta-950",
                "flex-1 relative h-full w-full will-change-transform nth-1:z-2 nth-2:z-1 nth-3:z-0 translate-y-[125%]"
            )
        }>
          <div className="team-member-logo absolute top-1/2 left-1/2 -translate-1/2">
            <img className="w-96 scale-0" src={logo} />
          </div>
          <div className={
            cn(
                "team-member-card bg-bege-50 rounded-2xl h-[calc(100%+4px)] w-[calc(100%+4px)] p-8 absolute left-1/2",
                "flex flex-col items-center gap-8 will-change-transform translate-[100%,-50%] scale-75 rotate-20"
            )
          }> 
            <div className="team-member-photo rounded-xl aspect-square mb-4 overflow-hidden">
              <img className="rounded-xl h-full w-full object-cover" src={leader} />
            </div>
            <div className="team-member-details text-center flex flex-col items-center gap-8">
              <p className="font-medium leading-none uppercase">
                <span>[</span> Líder do Projeto <span>]</span>
              </p>
              <h2 className="text-8xl text-terracotta-500 font-cabinet font-black leading-[0.8] uppercase">
                Luiz <span className="text-terracotta-950">Gabriel</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="other bg-chocolate-950 h-svh w-full grid place-content-center">
        <h2 className="text-9xl text-terracotta-500 font-cabinet font-black">End Intro</h2>
      </section>
    </>
  );
};

export default ProjectTeam;
