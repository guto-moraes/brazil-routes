"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

import { createFileRoute } from "@tanstack/react-router";
// import TextNewSectionReveal from "@/components/text-new-section-reveal";
// import ScrollableSections from "@/components/scrollable-sections";
// import InstagramCarousel from "@/components/carousel";

import { useRef } from "react";
import videoSrc from "@/assets/video-background.mp4";
import LogoSvg from "@/components/logo-svg";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco",
      },
      {
        name: "description",
        content: "Página de contato do site",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  const videoContainer = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      const video = document.querySelector<HTMLHeadingElement>(".video-container");
      const logo = gsap.utils.toArray<SVGAElement>(".video-mask svg");

      gsap.to(logo,{
        scale: 200,
        yPercent: 1000,
        duration: 5,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: 5000,
          pin: true,
          scrub: 1,
          markers: true,
        },
      });
    },
    { scope: videoContainer },
  );

  return (
    <>
      {/* <InstagramCarousel /> */}
      {/* <ScrollableSections /> */}
      {/* <TextNewSectionReveal /> */}

      <section className="video-container relative bg-linear-to-bl bg-darkgreen-500 from-10% via-darkgreen-600 to-darkgreen-800 bg-hero h-[calc(100svh-104px)] w-full overflow-hidden" ref={videoContainer}>
        <video
          muted
          loop
          autoPlay
          className="h-full w-full absolute inset-0 scale-125 object-cover opacity-50 -z-1 [clip-path:polygon(10%_0%,90%_0%,90%_100%,10%_100%)]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video-mask relative bg-white mix-blend-screen h-[calc(100svh-104px)] w-full">
          <LogoSvg className="size-150 absolute top-1/2 left-1/2 -translate-1/2 animate-pulse" />
        </div>
        <div className="bg-linear-to-bl bg-darkgreen-500/40 from-10% via-darkgreen-600/40 to-darkgreen-800/40 bg-hero absolute inset-0 h-full w-full -z-1"></div>
      </section>

      <section className="h-svh w-full bg-chocolate-300 grid place-content-center">
        <h2 className="text-8xl text-terracotta-900 font-cabinet font-black">Fim</h2>
      </section>
    </>
  );
}
