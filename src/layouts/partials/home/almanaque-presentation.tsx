"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQueryAlmanaquePresentation } from "@/hooks/queries/almanaque-queries";
import { cn, sanitizedData } from "@/lib/utils";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";

gsap.registerPlugin(ScrollTrigger);

const AlamanaquePresentation = () => {
  const almanaquePresentationRef = useRef<HTMLElement | null>(null);
  const { data } = useQueryAlmanaquePresentation();
  const { ebookPresentation: almanaque } = data.project.theming;

  useGSAP(
    () => {
      const icon = gsap.utils.toArray<HTMLImageElement>(".project-icon");
      const cover = gsap.utils.toArray<HTMLImageElement>(".almanaque-cover");
      const presentation = gsap.utils.toArray<HTMLImageElement>(".almanaque-presentation");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: almanaquePresentationRef.current,
          start: "top top",
          end: `${window.innerHeight / 4}%`,
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        icon,
        {
          y: -400,
          x: -400,
          opacity: 0,
        },
        {
          y: -100,
          x: -100,
          opacity: 0.25,
          duration: 0.5,
        },
        "a",
      )
        .fromTo(
          cover,
          {
            y: -500,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "a",
        )
        .fromTo(
          presentation,
          {
            x: 500,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
          },
          "a",
        );
    },
    { scope: almanaquePresentationRef },
  );

  return (
    <>
      <section
        className="almanaque-presentation bg-bone-200 relative h-auto lg:h-svh w-full max-lg:py-12 overflow-hidden"
        ref={almanaquePresentationRef}
      >
        <img
          className="project-icon size-40 lg:size-100 absolute"
          src={almanaque && almanaque.projectIcon.node.guid}
          alt="Marca do Projeto"
        />
        <div className="container mx-auto h-full flex flex-col md:flex-row max-md:gap-y-6 md:gap-x-6 justify-around items-center md:px-4">
          <figure className="perspective-dramatic max-sm:px-4 sm:hidden md:block md:ml-4">
            <img
              src={almanaque && almanaque.ebookCover.node.guid}
              alt="E-book no formato PDF"
              title="E-book no formato PDF"
              className="almanaque-cover w-full max-w-full lg:w-90 xl:w-120 md:rotate-y-4"
            />
          </figure>
          <div className={cn(
            "almanaque-presentation flex-1 h-full min-h-125 w-full max-w-180 flex flex-col justify-center",
            "items-end gap-y-10 md:gap-4 lg:gap-y-8 sm:gap-y-16 max-sm:mt-2 sm:px-4 md:px-0"
          )}>
            <div className="flex flex-col md:items-end gap-y-10 lg:gap-y-14">
              <h2 className={cn(
                "text-[clamp(1.75rem,5.5vw,6rem)] text-center md:text-right text-bone-700",
                "text-balance font-cabinet font-black md:whitespace-nowrap md:leading-none "
              )}>
                Almanaque <span className="text-bone-400">Digital</span>
              </h2>
              <p
                className={cn(
                  "md:text-base lg:text-lg xl:text-xl text-bone-800 sm:text-justify",
                  "md:text-left lg:text-justify text-pretty w-full max-sm:px-4"
                )}
                dangerouslySetInnerHTML={almanaque && sanitizedData(almanaque.ebookSynopsis)}
              />
            </div>
            <div className={cn(
              "w-full max-w-full flex flex-col lg:flex-row justify-center",
              "md:justify-end items-center gap-y-2.5 sm:gap-x-8 max-sm:px-4"
            )}>
              <ButtonLinkWithIcon
                textButton="Saiba mais"
                link={almanaque && almanaque.almanaqueUrlPage}
                bgColor="bg-bone-400 hover:bg-bone-600 text-white w-full sm:max-w-max"
                iconColor="bg-white text-bone-700"
                target={false}
              />
              <ButtonLinkWithIcon
                textButton="Faça o download agora!"
                link={almanaque && almanaque.almanaqueDownloadUrl}
                bgColor="bg-mate-400 hover:bg-mate-500 text-white w-full sm:max-w-max"
                iconColor="bg-white text-mate-700"
                target={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlamanaquePresentation;
