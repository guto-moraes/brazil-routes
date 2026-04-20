"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLinkWithIcon from "./button-link-with-icon";
import type { ChaptersAlmanaqueTypes } from "@/types/theme-graphql";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ChaptersTypes = {
  className?: string;
  dataChapters: ChaptersAlmanaqueTypes;
}


const SectionPinRotate = ({ className, dataChapters }: ChaptersTypes) => {
  const chapters = dataChapters.cbcTheme.cbcSettings.capitulosDoEBook;
  const pinContainer = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {

    const pinCards = document.querySelectorAll<HTMLDivElement>(".pin-card");

    pinCards.forEach((pinCard, index) => {
      if (index < pinCards.length - 1) {
        ScrollTrigger.create({
          trigger: pinCard,
          start: "top top",
          endTrigger: pinCards[pinCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        ScrollTrigger.create({
          trigger: pinCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(pinCard, {
              scale: 1 - progress * 0.25,
              rotation: index % 2 === 0 ? progress * 5 : -progress * 5,
              rotationX: index % 2 === 0 ? progress * 40 : -progress * 40,
            });
            gsap.set(pinCard.querySelector(".overlay"), {
              opacity: progress * 0.4,
            });
          },
        });
      }
    });

    ScrollTrigger.refresh();
  }, { scope: pinContainer });

  return (
    <div className={cn("pin-container bg-tan-950", className)} ref={pinContainer}>
      {chapters && chapters.map(({ tag, title, synopsis, image }, index) => {
        return (
          <section
            key={index}
            className="pin-card relative h-svh w-full flex flex-col border-b border-black/25 bg-bege-50 px-[6vw] py-[5vh] transform-3d perspective-[1000px] md:flex-row md:justify-between md:gap-0 md:px-[8vw] md:py-[10vh]"
          >
            <div className="h-full w-full grid grid-cols-6">
              <div className="col-span-1 relative py-8 overflow-hidden">
                <h3 className="text-xl text-mate-600 font-light border-b border-tan-200">{tag}</h3>
                <p className="text-3xl text-tan-700 absolute bottom-0 left-0">
                  <span className="font-extralight">
                    [<span className="font-normal">{`0${index}`}</span>]
                  </span>
                </p>
              </div>
              <div className="col-span-3 py-8 px-16 flex flex-col gap-12">
                <h2 className="text-3xl font-light">{title}</h2>
                <p className="indent-8 text-lg text-tan-800 text-justify hyphens-auto font-light">{synopsis}</p>
                <ButtonLinkWithIcon
                  textButton="Saiba mais"
                  link="/"
                  bgColor="bg-mate-400 hover:bg-mate-500 text-white"
                  iconColor="bg-white text-mate-700"
                  target={false}
                />
              </div>
              <div
                className="col-span-2 rounded-2xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.node.guid})` }}
              ></div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default SectionPinRotate;
