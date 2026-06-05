"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import { cn, pageTitle, sanitizedData } from "@/lib/utils";
import { Title } from "@/components/title";

type AboveTheFoldTypes = {
  fullTitle: string;
  content: string;
  almanaqueImageSrc: string;
  almanaqueButtonTextDownload: string;
  almanaqueDownloadLink: string;
};

const AboveTheFold = ({
  fullTitle,
  content,
  almanaqueImageSrc,
  almanaqueButtonTextDownload,
  almanaqueDownloadLink,
}: AboveTheFoldTypes) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const title = pageTitle(fullTitle);

  useGSAP(
    () => {
      const titleElement = document.querySelector<HTMLHeadingElement>(".page-title");
      const contentElement = document.querySelector<HTMLDivElement>(".page-content");
      const button = document.querySelector<HTMLButtonElement>(".page-button");
      const image = document.querySelector<HTMLImageElement>(".page-image");

      gsap.set(titleElement, { yPercent: -300 });
      gsap.set(image, { yPercent: 300 });

      const tl = gsap.timeline();

      tl.to(titleElement, { yPercent: 0, duration: 0.5, ease: "power2.out" })
        .to(contentElement, { scale: 1, duration: 0.5, ease: "power3.out" }, "a")
        .to(button, { xPercent: 0, duration: 0.5, ease: "power2.out " }, "a")
        .to(image, { yPercent: 0, duration: 0.5, ease: "bounce.out" }, "a");
    },
    { scope: containerRef },
  );

  return (
    <section className="bg-bone-200/60 dark:bg-dark-900 min-h-svh md:min-h-auto md:py-16 xl:py-0 xl:h-[calc(100svh-104px)] w-full py-8" ref={containerRef}>
      <div className="container mx-auto h-full w-full flex flex-col md:flex-row px-4">
        <div className="flex-1 w-full max-w-full flex flex-col justify-center items-start gap-y-8 xl:gap-y-14 max-sm:mb-8">
          <Title
            className={cn(
              "page-title text-[clamp(1.25rem,7vw,6.5rem)] font-black",
              "leading-[0.85] text-bone-600 dark:text-dark-contrast-100",
            )}
          >
            {title.firstPart}
            <span className="text-bone-400 dark:text-dark-contrast-50">{title.secondPart}</span>
          </Title>
          <div
            className={cn(
              "page-content text-[clamp(1rem,1.25vw,2.5rem)] text-bone-700 dark:text-white",
              "text-balance font-inter font-medium leading-8 max-sm:leading-6 scale-0",
            )}
            dangerouslySetInnerHTML={sanitizedData(content)}
          />
          <ButtonLinkWithIcon
            textButton={almanaqueButtonTextDownload}
            link={almanaqueDownloadLink}
            bgColor={cn(
              "page-button bg-mate-400 dark:bg-dark-contrast-100 hover:bg-mate-500",
              "dark:hover:bg-dark-contrast-100/90 text-white dark:text-dark-950 -translate-x-200 max-sm:mx-auto"
            )}
            iconColor="bg-white text-mate-700 dark:text-white"
            target={true}
          />
        </div>
        <div className="flex-1 h-full w-full max-w-full flex justify-end items-center">
          <figure className="sm:perspective-dramatic sm:perspective-origin-center sm:transform-3d">
            <img className="page-image w-80 xl:w-120 -rotate-y-4 mr-8" src={almanaqueImageSrc} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboveTheFold;
