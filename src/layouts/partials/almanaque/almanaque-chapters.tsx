"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQueryAlmanaqueChapters } from "@/hooks/queries/almanaque-queries";
import { cn } from "@/lib/utils";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import SmoothScroller from "@/components/smooth-scroller";

const AlmanaqueChapters = () => {
  const { data } = useQueryAlmanaqueChapters("almanaque-digital");
  const { ebookChapters: chapters } = data.page.almanaque;
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const stickSections = gsap.utils.toArray<HTMLElement>(".perspective-section");
      const lastSection = stickSections[stickSections.length - 1];

      stickSections.forEach((section, index) => {
        const nextSection = stickSections[index + 1];
        const image = section.querySelectorAll("figure img");

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(image, {
              scale: 1.4 - self.progress * 0.4,
            });
          },
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          endTrigger: lastSection,
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        if(index === stickSections.length - 1) return;

        ScrollTrigger.create({
          trigger: nextSection,
          start: "top bottom-=10%",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const isEven = index % 2 === 0;

            gsap.set(section, {
              scale: 1 - progress * 0.4,
              borderRadius: progress * 80,
              visibility: progress > 0.99 ? "hidden" : "visible",
              rotate: isEven ? progress * -10 : progress * 10,
            });
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <SmoothScroller>
      <div className="bg-bone-900 dark:bg-dark-950">
        <div className="sections-container w-full flex flex-col justify-center" ref={containerRef}>
          {chapters.map((chapter, index) => (
            <section key={index} className="perspective-section bg-bege-50 dark:bg-dark-800 h-svh w-full">
              <div
                className={cn(
                  "h-full xl:container xl:mx-auto grid max-lg:auto-rows-auto lg:grid-cols-5",
                  "lg:grid-flow-col xl:content-center gap-8 py-8 px-4 lg:px-0",
                )}
              >
                <div className="max-lg:row-span-1 w-full">
                  <span className="w-full text-lg sm:text-base lg:text-lg text-bone-400 dark:text-dark-contrast-50 font-light uppercase tracking-tighter">
                    {chapter.tag}
                  </span>
                  <hr className="border-bone-400 dark:border-dark-contrast-50" />
                </div>
                <div className="max-lg:row-span-2 lg:col-span-2 flex flex-col gap-y-8">
                  <h2 className="text-2xl text-bone-600 dark:text-dark-contrast-100 font-cabinet font-bold leading-7">{chapter.title}</h2>
                  <p className="text-[0.9rem] sm:text-base text-bone-600 dark:text-white text-pretty hyphens-auto">
                    {chapter.synopsis}
                  </p>
                  <ButtonLinkWithIcon
                    textButton="Leia mais"
                    link={chapter.link.url}
                    bgColor={cn(
                      "bg-darkgreen-500 dark:bg-dark-contrast-100 hover:bg-darkgreen-600",
                      "dark:hover:bg-dark-contrast-100/90 text-white dark:text-dark-950"
                    )}
                    iconColor="bg-white text-darkgreen-900 dark:text-white"
                    target={false}
                  />
                </div>
                <figure className="hidden sm:block max-lg:row-span-3 lg:col-span-2 rounded-xl md:rounded-2xl xl:max-h-160 overflow-hidden">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={chapter.image.node.guid}
                    alt={`Imagem ilustrativa do ${chapter.tag}`}
                  />
                </figure>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SmoothScroller>
  );
};

export default AlmanaqueChapters;
