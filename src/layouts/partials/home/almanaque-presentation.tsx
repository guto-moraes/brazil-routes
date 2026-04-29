"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQueryAlmanaquePresentation } from "@/hooks/queries/almanaque-queries";
import { sanitizedData } from "@/lib/utils";
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
        className="almanaque-presentation bg-bone-200 relative h-svh w-full overflow-hidden"
        ref={almanaquePresentationRef}
      >
        <img
          className="project-icon size-100 absolute"
          src={almanaque && almanaque.projectIcon.node.guid}
          alt="Marca do Projeto"
        />
        <div className="container mx-auto h-full flex justify-around items-center">
          <div className="perspective-dramatic">
            <img
              src={almanaque && almanaque.ebookCover.node.guid}
              alt="E-book no formato PDF"
              title="E-book no formato PDF"
              className="almanaque-cover w-120 rotate-y-4"
            />
          </div>
          <div className="almanaque-presentation h-full min-h-125 w-full max-w-180 flex flex-col justify-center items-end gap-y-16">
            <div className="flex flex-col items-end gap-y-14">
              <h2 className="text-8xl text-right text-bone-700 text-balance font-cabinet font-black xl:whitespace-nowrap ">
                Almanaque <span className="text-bone-400">Digital</span>
              </h2>
              <p
                className="text-xl text-bone-800 text-justify text-balance w-full"
                dangerouslySetInnerHTML={almanaque && sanitizedData(almanaque.ebookSynopsis)}
              />
            </div>
            <div className="w-full flex justify-end items-center gap-8">
              <ButtonLinkWithIcon
                textButton="Saiba mais"
                link={almanaque && almanaque.almanaqueUrlPage}
                bgColor="bg-bone-400 hover:bg-bone-600 text-white"
                iconColor="bg-white text-bone-700"
                target={false}
              />
              <ButtonLinkWithIcon
                textButton="Faça o download agora!"
                link={almanaque && almanaque.almanaqueDownloadUrl}
                bgColor="bg-mate-400 hover:bg-mate-500 text-white"
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
