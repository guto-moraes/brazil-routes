"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { ArrowDown, BadgeCheck, BookMarked, Drum, HandFist } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const FlipCardScroll = () => {
    const heroCardsRef = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        const stickyCards = document.querySelectorAll<HTMLDivElement>(".card");
        const fronStickyCard = document.querySelector<HTMLDivElement>(".card-front");
        const stickyBackCards = document.querySelectorAll<HTMLDivElement>(".card-back");
        const heroContent = document.querySelector<HTMLDivElement>(".hero-cards-content");
        const stickyBackCardsCount = stickyBackCards.length;

        const CARDS_ENTER_END = 100;
        const CARD_FLIP_TRIGGER = 200;
        const CARD_DISMISS_START = 300;
        const CARD_DISMISS_DURATION = 100;
        const TOTAL_SCROLL_SVH = CARD_DISMISS_START + stickyBackCardsCount * CARD_DISMISS_DURATION;

        const svhToProgress = (svh: number) => svh / TOTAL_SCROLL_SVH;
        const totalScroll = window.innerHeight * (TOTAL_SCROLL_SVH / 100);

        const cardFlipTiltAngles = [-10, -20, -5, 10];
        const cardDismissTiltAngles = [-50, -60, -45, 50];

        const cardDismissRangers = Array.from({ length: stickyBackCardsCount }, (_, i: number) => {
            const dismissOrder = stickyBackCardsCount - 1 - i;
            return [
                svhToProgress(CARD_DISMISS_START + dismissOrder * CARD_DISMISS_DURATION),
                svhToProgress(CARD_DISMISS_START + (dismissOrder + 1) * CARD_DISMISS_DURATION)
            ]
        });

        gsap.set(fronStickyCard, { rotationY: 0 })
        gsap.set(stickyBackCards, { rotationY: -180 })

        let isFliped = false;

        const revealBackCards = () => {
            gsap.to(fronStickyCard, {
                rotationY: 180,
                duration: 1,
                ease: "elastic.out(1,0.5)",
            });
            stickyBackCards.forEach((card, i) => {
                gsap.to(card, {
                    rotationY: 0,
                    rotationZ: cardFlipTiltAngles[i],
                    duration: 1,
                    ease: "elastic.out(1,0.5)",
                })
            })
        }
        
        const concealBackCards = () => {
            gsap.to(fronStickyCard, {
                rotationY: 0,
                duration: 1,
                ease: "elastic.out(1,0.5)",
            });
            stickyBackCards.forEach((card) => {
                gsap.to(card, {
                    rotationY: -180,
                    rotationZ: 0,
                    duration: 1,
                    ease: "elastic.out(1,0.5)",
                })
            })
            
        }

        ScrollTrigger.create({
            trigger: heroCardsRef.current,
            start: "top top",
            end: `+=${totalScroll}px`,
            pin: true,
            pinSpacing: true,
            scrub: true,
            onUpdate: ({ progress }) => {
                const enterProgress = gsap.utils.clamp(
                    0,
                    1,
                    gsap.utils.mapRange(0, svhToProgress(CARDS_ENTER_END), 0, 1, progress),
                );
                
                gsap.set(stickyCards, {
                    y: `${gsap.utils.mapRange(0, 1, 50, -50, enterProgress)}%`
                });
                gsap.set(heroContent, {
                    y: `${gsap.utils.mapRange(0, 1, 0, -100, enterProgress)}%`
                })
                
                if(progress > svhToProgress(CARD_FLIP_TRIGGER) && !isFliped){
                    revealBackCards();
                    isFliped = true;
                } else if (progress <= svhToProgress(CARD_FLIP_TRIGGER) && isFliped) {
                    concealBackCards();
                    isFliped = false;
                }
                
                stickyBackCards.forEach((card, i) => {
                    const [dismissStart, dismissEnd] = cardDismissRangers[i];
                    
                    const dismissProgress = gsap.utils.clamp(
                        0,
                        1,
                        gsap.utils.mapRange(dismissStart, dismissEnd, 0, 1, progress)
                    )
                    
                    gsap.set(card, {
                        y: `${gsap.utils.mapRange(0, 1, -50, -250, dismissProgress)}%`,
                        rotation: gsap.utils.mapRange(
                            0,
                            1,
                            cardFlipTiltAngles[i],
                            cardDismissTiltAngles[i],
                            dismissProgress
                        )
                    })
                })
            }
        })

    }, { scope: heroCardsRef })


    return (
        <>
            <section className="bg-mate-300 h-svh w-full grid place-content-center">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    Start
                </h2>
            </section>


            <section className="hero-cards relative bg-artic-400 h-svh w-full overflow-hidden" ref={heroCardsRef}>
                <div className="hero-cards-content absolute h-svh w-full flex justify-center items-center will-change-transform">
                    <h2 className="text-[clamp(3rem,5vw,7rem)] text-bone-800 text-center font-black uppercase leading-[0.85] w-[60%]">
                        Role para baixo e veja tudo cair.
                    </h2>
                </div>

                <div className="hero-sticky-cards absolute h-svh w-full overflow-hidden transform-3d perspective-[1000px]">
                    <div className={cn(
                        "card card-front bg-terracotta-800 aspect-4/5 rounded-lg text-white text-center absolute top-[50%] left-[50%] translate-[-50%_50%]",
                        "rotate-y-0 w-[25%] min-w-75 py-16 px8 flex flex-col justify-between items-center will-change-transform backface-hidden",
                    )}>
                        <h3 className="text-[clamp(2rem,3vw,5rem)] font-black uppercase leading-[0.85]">Primeiro Plano</h3>
                        <p className="text-[1.125rem] font-medium leading-[1.1]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <span className="rounded-lg bg-chocolate-300 text-[0.9rem] text-terracota-900 font-medium p-2">Comece Aqui</span>
                        <div className="rounded-full border-2 border-terracotta-900 size-8 flex justify-center items-center">
                            <ArrowDown size="64" />
                        </div>
                    </div>
                    <div className={cn(
                        "card card-back bg-tan-300 aspect-4/5 rounded-lg text-tan-800 text-center absolute top-[50%] left-[50%] translate-[-50%_50%]",
                        "rotate-y-180 w-[25%] min-w-75 py-16 px8 flex flex-col justify-between items-center will-change-transform backface-hidden",
                    )}>
                        <h3 className="text-[clamp(2rem,3vw,5rem)] font-black uppercase leading-[0.85]">Lorem ipsum dolor</h3>
                        <div className="rounded-[50%] border-terracotta-900 text-[1.5rem] size-20 flex justify-center items-center">
                            <BadgeCheck size="64" />
                        </div>
                        <p className="text-[1.125rem] font-medium leading-[1.1]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className={cn(
                        "card card-back bg-mate-300 aspect-4/5 rounded-lg text-tan-800 text-center absolute top-[50%] left-[50%] translate-[-50%_50%]",
                        "rotate-y-180 w-[25%] min-w-75 py-16 px8 flex flex-col justify-between items-center will-change-transform backface-hidden",
                    )}>
                        <h3 className="text-[clamp(2rem,3vw,5rem)] font-black uppercase leading-[0.85]">Lorem ipsum dolor</h3>
                        <div className="rounded-[50%] border-terracotta-900 text-[1.5rem] size-20 flex justify-center items-center">
                            <BookMarked size="64" />
                        </div>
                        <p className="text-[1.125rem] font-medium leading-[1.1]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className={cn(
                        "card card-back bg-bege-300 aspect-4/5 rounded-lg text-tan-800 text-center absolute top-[50%] left-[50%] translate-[-50%_50%]",
                        "rotate-y-180 w-[25%] min-w-75 py-16 px8 flex flex-col justify-between items-center will-change-transform backface-hidden",
                    )}>
                        <h3 className="text-[clamp(2rem,3vw,5rem)] font-black uppercase leading-[0.85]">Lorem ipsum dolor</h3>
                        <div className="rounded-[50%] border-terracotta-900 text-[1.5rem] size-20 flex justify-center items-center">
                            <Drum size="64" />
                        </div>
                        <p className="text-[1.125rem] font-medium leading-[1.1]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className={cn(
                        "card card-back bg-artic-500 aspect-4/5 rounded-lg text-white text-center absolute top-[50%] left-[50%] translate-[-50%_50%]",
                        "rotate-y-180 w-[25%] min-w-75 py-16 px8 flex flex-col justify-between items-center will-change-transform backface-hidden",
                    )}>
                        <h3 className="text-[clamp(2rem,3vw,5rem)] font-black uppercase leading-[0.85]">Lorem ipsum dolor</h3>
                        <div className="rounded-[50%] border-terracotta-900 text-[1.5rem] size-20 flex justify-center items-center">
                            <HandFist size="64" />
                        </div>
                        <p className="text-[1.125rem] font-medium leading-[1.1]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </section>


            <section className="bg-mate-300 h-svh w-full grid place-content-center">
                <h2 className="text-8xl text-white font-cabinet font-black">
                    End
                </h2>
            </section>
        </>
    )
}

export default FlipCardScroll;