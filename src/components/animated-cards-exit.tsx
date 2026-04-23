"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCardsExit = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      const cards = gsap.utils.toArray<HTMLDivElement>(".card");

      cards.forEach((card, index) => {
        if(index < cards.length - 1){
            const cardInner = card.querySelector(".card-inner");

            gsap.fromTo(cardInner, 
                {
                    y: "0%",
                    z: 0,
                    rotationX: 0,
                },
                {
                    y: "-50%",
                    z: -250,
                    rotationX: 45,
                    ScrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top 85%",
                        end: "top -75%",
                        pin: card,
                        pinSpacing: false,
                        scrub: true,
                    }
                },
            );
            
            gsap.to(cardInner, {
                "--after-opacity": 1,
                scrollTrigger: {
                    trigger: cards[index + 1],
                    start: "top 75%",
                    end: "top -25%",
                    scrub: true,
                }
            })
        }
      })


    },
    { scope: containerRef },
  );

  return (
    <>
      <div className="animated-cards-container" ref={containerRef}>
        <section className="hero bg-card-accent-1 h-svh w-full grid place-content-center">
            <h2 className="text-8xl text-bone-800 font-cabinet font-black">Introdução</h2>
        </section>

        <section className="sticky-cards">

            {/* <div className="card sticky h-[125svh] w-full transform-3d perspective-[1000px]">
                <div className={cn(
                    "card-inner relative bg-card-accent-2 h-full w-full flex flex-col justify-center origin-[50%_100%]",
                    "will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full",
                    "after:opacity-(--after-opacity,0) after:will-change-[opacity] after:pointer-events-none after:z-2"
                )}>
                    <h2 className="text-8xl text-bone-800 text-center font-cabinet font-black">Card 1</h2>
                </div>
            </div>
            <div className="card sticky h-[125svh] w-full transform-3d perspective-[1000px]">
                <div className={cn(
                    "card-inner relative bg-card-accent-3 h-full w-full flex flex-col justify-center origin-[50%_100%]",
                    "will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full",
                    "after:opacity-(--after-opacity,0) after:will-change-[opacity] after:pointer-events-none after:z-2"
                )}>
                    <h2 className="text-8xl text-bone-800 text-center font-cabinet font-black">Card 2</h2>
                </div>
            </div>
            <div className="card sticky h-[125svh] w-full transform-3d perspective-[1000px]">
                <div className={cn(
                    "card-inner relative bg-card-accent-4 h-full w-full flex flex-col justify-center origin-[50%_100%]",
                    "will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full",
                    "after:opacity-(--after-opacity,0) after:will-change-[opacity] after:pointer-events-none after:z-2"
                )}>
                    <h2 className="text-8xl text-bone-800 text-center font-cabinet font-black">Card 3</h2>
                </div>
            </div> */}

            <div className="card">
                <div id="card-1" className="card-inner">
                    <h2 className="text-8xl text-bone-800 font-cabinet font-black">Card 1</h2>
                </div>
            </div>
            <div className="card">
                <div id="card-2" className="card-inner">
                    <h2 className="text-8xl text-bone-800 font-cabinet font-black">Card 1</h2>
                </div>
            </div>
            <div className="card">
                <div id="card-3" className="card-inner">
                    <h2 className="text-8xl text-bone-800 font-cabinet font-black">Card 1</h2>
                </div>
            </div>

        </section>

        <section className="other bg-card-accent-5 h-svh w-full grid place-content-center">
            <h2 className="text-8xl text-bone-800 font-cabinet font-black">Encerramento</h2>
        </section>
      </div>
    </>
  );
};

export default AnimatedCardsExit;
