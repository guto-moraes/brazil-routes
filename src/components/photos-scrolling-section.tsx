"use client";

import { useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { peopleHistory } from "@/data/histories";
import ButtonLinkWithIcon from "./button-link-with-icon";

gsap.registerPlugin(ScrollTrigger);

const PhotosScrollingSection = () => {
  const refContainer = useRef<HTMLElement>(null);


  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

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
          start: "10% center",
          end: "15% center",
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
  }, { scope: refContainer });

  return (
    <>
      <section className="photos-container relative bg-tan-900 h-svh w-full overflow-hidden" ref={refContainer}>
        <div className="intro-text absolute inset-0 flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-[clamp(1.8rem,5vw,8rem)] text-bege-200 text-center font-black italic uppercase leading-none">
            História e Memória
          </h1>
          <p className="text-2xl text-white text-justify text-pretty hyphens-auto w-full xl:max-w-5xl">
            A memória de pessoas que viveram durante os anos de atuação da FBC no leste de Mato Grosso constitui
            importante fonte de informa ções e nos ajudam a compreender e analisar este passado. Pois, embora raramente
            estejam na documentação escrita, os eventos que marcaram a memória destas pessoas também fazem parte do
            processo histórico que deu formas para a atual região do Vale do Araguaia.
          </p>
        </div>
        <div className="reveal-text absolute inset-0 flex flex-col justify-center gap-y-10 items-center z-0">
          <h1 className="text-[clamp(1.8rem,6vw,5rem)] text-bege-200 text-center font-black italic uppercase leading-none">
            A história também <br /> se faz de memórias
          </h1>
          <ButtonLinkWithIcon
            textButton="Conheça um pouco mais"
            link="/files/ebook.pdf"
            bgColor="bg-chocolate-300 hover:bg-chocolate-400 text-white"
            iconColor="bg-white text-chocolate-700"
            target={false}
          />
        </div>
        <div className="scroll-photos relative h-full w-[450vw] pl-[100vw] flex items-center z-10 pointer-events-none">
          {peopleHistory.map(({ color, image, name, tribute }, index) => (
            <div
              key={index}
              className={cn(
                "card shrink-0 rounded-xl shadow-[-10px_10px_rgba(0,0,0,0.5)]",
                "h-112 w-80 border-10 border-white flex flex-col justify-between mx-10 p-6",
                color,
              )}
            >
              <header className="rounded-sm h-80 w-full overflow-x-auto">
                <img className="h-full w-full object-cover object-top will-change-transform" src={image} alt={name} />
              </header>
              <div className="w-full">
                <p className="rounded bg-black/30 text-sm text-white font-medium leading-6 h-6 w-full pl-2 mb-2">
                  {name}
                </p>
                {tribute && (
                  <p className="rounded bg-black/25 text-[0.75rem] text-white h-4.5 w-22 pl-2">
                    <em>in memoriam</em>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PhotosScrollingSection;
