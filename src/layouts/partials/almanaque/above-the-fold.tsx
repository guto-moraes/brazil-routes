"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { sanitizedData } from "@/lib/utils";

const AboveTheFold = ({ content, link }: { content: string; link: string }) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const title = gsap.utils.toArray<HTMLHeadingElement>(".page-title");
      const content = gsap.utils.toArray<HTMLDivElement>(".page-content");
      const button = gsap.utils.toArray<HTMLButtonElement>(".page-button");
      const image = gsap.utils.toArray<HTMLImageElement>(".page-image");

      gsap.set(title, { yPercent: -300 });
      gsap.set(image, { yPercent: 300 });

      const tl = gsap.timeline();

      tl.to(title, { yPercent: 0, duration: 0.5, ease: "power2.out" })
        .to(content, { scale: 1, duration: 0.5, ease: "power3.out" }, "a")
        .to(button, { xPercent: 0, duration: 0.5, ease: "power2.out " }, "a")
        .to(image, { yPercent: 0, duration: 0.5, ease: "bounce.out" }, "a");
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-bone-200/60 h-[calc(100svh-104px)] w-full" ref={containerRef}>
      <div className="container mx-auto h-full w-full flex px-4">
        <div className="flex-1 w-full max-w-full flex flex-col justify-center items-start gap-y-8 xl:gap-y-14">
          <h1 className="page-title text-[clamp(3rem,30vw,6.5rem)] font-cabinet font-black leading-[0.85] text-bone-600 [&_span]:text-bone-400">
            Alamanaque <span>Digital</span>
          </h1>
          <div
            className="page-content text-[clamp(1.5rem,1.25vw,2.5rem)] text-bone-700 text-balance font-inter font-medium leading-8 scale-0"
            dangerouslySetInnerHTML={sanitizedData(content)}
          />
          <ButtonLinkWithIcon
            textButton="Faça o download agora!"
            link={link}
            bgColor="page-button bg-mate-400 hover:bg-mate-500 text-white -translate-x-200"
            iconColor="bg-white text-mate-700"
            target={true}
          />
        </div>
        <div className="flex-1 h-full w-full max-w-full flex justify-end items-center">
          <div className="perspective-dramatic perspective-origin-center transform-3d">
            <img className="page-image w-100 xl:w-120 -rotate-y-4 xl:mr-8" src="/images/tablet-cover-book.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboveTheFold;
