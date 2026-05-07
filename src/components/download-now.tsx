"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import almanaqueSrc from "@/assets/images/tablet-cover-book.png";

gsap.registerPlugin(ScrollTrigger);

const DownloadNow = ({ link }: { link: string }) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = document.querySelector<HTMLElement>(".donwload-now-container")
      const title = gsap.utils.toArray<HTMLHeadingElement>(".page-title");
      const button = gsap.utils.toArray<HTMLButtonElement>(".page-button");
      const image = gsap.utils.toArray<HTMLImageElement>(".page-image");

      gsap.set(image, { yPercent: 300 });
      gsap.set(title, { yPercent: -300 });
      gsap.set(button, { xPercent: 300 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=" + 2000,
          pin: true,
          scrub: true,
        },
      });

      tl.to(image, { yPercent: 0, duration: 1, ease: "power3.out" })
      .to(title, { yPercent: 0, duration: 1, ease: "power2.out" }, "a")
      .to(button, { xPercent: 0, duration: 1, ease: "power2.out " }, "a");
    },
    { scope: containerRef },
  );

  return (
    <section className="donwload-now-container bg-bone-200/60 h-svh w-full overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto h-full w-full flex justify-center items-center px-4">
        <div className="flex-1 h-full w-full max-w-full flex justify-start items-center">
          <div className="perspective-dramatic perspective-origin-center transform-3d">
            <img className="page-image w-100 xl:w-120 rotate-y-4 xl:mr-8" src={almanaqueSrc} alt="" />
          </div>
        </div>
        <div className="flex-1 w-full max-w-full flex flex-col justify-center items-end gap-y-8 xl:gap-y-14">
          <h1 className="page-title text-[clamp(3rem,30vw,6rem)] text-bone-600 text-right [&_span]:text-bone-400 font-cabinet font-black leading-[0.85]">
            Baixe o Almanaque <span>Agora!</span>
          </h1>
          <ButtonLinkWithIcon
            textButton="Baixar o Almanaque"
            link={link}
            bgColor="page-button bg-mate-400 hover:bg-mate-500 text-white translate-x-200"
            iconColor="bg-white text-mate-700"
            target={true}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadNow;
