"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
// import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CardStacking = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    function initScrool(){
        
        const section = document.querySelector<HTMLElement>(".card-stack-section");
        const cards = gsap.utils.toArray<HTMLDivElement>(".card-stack", section);

        //Initial state
        gsap.set(cards[0], { xPercent: 150 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${cards.length * 100}%`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
            defaults: { ease: "none" }
        });

        cards.forEach((card, index) => {
            tl.to(card, {
                scale: 0.9,
                zIndex: index + 1,
            })
            .to(cards[index + 1], {
                xPercent: 0,
            }, "<")
        });
    }

    initScrool();
  });

  return (
    <>
      <section className="card-stack-section h-svh w-full overflow-hidden">
        <div className="card-stack-wrapper relative h-svh w-full flex gap-12">

          <div className="card-stack bg-mate-500 h-svh w-full absolute inset-0 top-0 left-0 flex justify-center items-center">
            <div className="card-stack-content xl:max-w-4xl flex flex-col justify-center gap-y-12">
              <h2 className="text-6xl text-white text-center font-inter font-semibold uppercase">
                Wildlife in action: a glimpse into nature's daily drama
              </h2>
              <p className="text-2xl text-white text-center text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi distinctio dolorum explicabo
                dignissimos perspiciatis quis cupiditate eligendi. Magnam hic aperiam dolorem. Impedit quisquam
                architecto pariatur similique possimus et aliquid officiis explicabo magnam consequuntur at fuga
                provident nulla, placeat molestias?
              </p>
            </div>
          </div>

          <div className="card-stack bg-mate-600 h-svh w-full absolute inset-0 top-0 left-0 flex justify-center items-center">
            <div className="card-stack-content xl:max-w-4xl flex flex-col justify-center gap-y-12">
              <h2 className="text-6xl text-white text-center font-inter font-semibold uppercase">
                Wildlife in action: a glimpse into nature's daily drama
              </h2>
              <p className="text-2xl text-white text-center text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi distinctio dolorum explicabo
                dignissimos perspiciatis quis cupiditate eligendi. Magnam hic aperiam dolorem. Impedit quisquam
                architecto pariatur similique possimus et aliquid officiis explicabo magnam consequuntur at fuga
                provident nulla, placeat molestias?
              </p>
            </div>
          </div>

          <div className="card-stack bg-mate-700 h-svh w-full absolute inset-0 top-0 left-0 flex justify-center items-center">
            <div className="card-stack-content xl:max-w-4xl flex flex-col justify-center gap-y-12">
              <h2 className="text-6xl text-white text-center font-inter font-semibold uppercase">
                Wildlife in action: a glimpse into nature's daily drama
              </h2>
              <p className="text-2xl text-white text-center text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi distinctio dolorum explicabo
                dignissimos perspiciatis quis cupiditate eligendi. Magnam hic aperiam dolorem. Impedit quisquam
                architecto pariatur similique possimus et aliquid officiis explicabo magnam consequuntur at fuga
                provident nulla, placeat molestias?
              </p>
            </div>
          </div>

          <div className="card-stack bg-mate-800 h-svh w-full absolute inset-0 top-0 left-0 flex justify-center items-center">
            <div className="card-stack-content xl:max-w-4xl flex flex-col justify-center gap-y-12">
              <h2 className="text-6xl text-white text-center font-inter font-semibold uppercase">
                Wildlife in action: a glimpse into nature's daily drama
              </h2>
              <p className="text-2xl text-white text-center text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nisi distinctio dolorum explicabo
                dignissimos perspiciatis quis cupiditate eligendi. Magnam hic aperiam dolorem. Impedit quisquam
                architecto pariatur similique possimus et aliquid officiis explicabo magnam consequuntur at fuga
                provident nulla, placeat molestias?
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CardStacking;
