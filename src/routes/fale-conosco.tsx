"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { createFileRoute } from "@tanstack/react-router";
// import TextNewSectionReveal from "@/components/text-new-section-reveal";
// import ScrollableSections from "@/components/scrollable-sections";
// import InstagramCarousel from "@/components/carousel";

import { useRef } from "react";
// import Navigation from "@/components/navigation";
// import { cn } from "@/lib/utils";
// import videoSrc from "@/assets/video-background.mp4";
import InfiniteMarquee from "@/components/infinite-marquee";
import IntroCardsStick from "@/components/intro-cards-stick";
import Intro from "@/layouts/partials/home/intro";
// import LogoSvg from "@/components/logo-svg";

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

      const container = document.querySelector<HTMLDivElement>(".above-the-fold");
      const videoContainer = document.querySelector<HTMLDivElement>(".video-container");
      const heading = document.querySelector<HTMLHeadElement>(".site-name h2");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "50% 50%",
          end: "500% 60%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl.fromTo(
        heading,
        { rotateX: "0deg" },
        {
          rotateX: "-110deg",
          duration: 1.5,
          opacity: 0,
          ease: "power4.inOut",
        },
        "rc",
      ).fromTo(
        videoContainer,
        {
          height: "40%",
          width: "72%",
        },
        {
          height: "100%",
          width: "125%",
          duration: 5,
          ease: "power4.inOut",
        },
        "rc",
      );
    },
    { scope: videoContainer },
  );

  return (
    <>
      {/* <InstagramCarousel /> */}
      {/* <ScrollableSections /> */}
      {/* <TextNewSectionReveal /> */}

      {/* <section className="above-the-fold relative bg-hero h-svh w-full overflow-hidden">
        <Navigation isHome={true} />

        <div className="h-[calc(100svh-104px)] container mx-auto px-4 lg:px-0">
          <div
            className={cn(
              "video-container absolute top-1/2 left-1/2 -translate-1/2 h-[40%] w-[72%]",
              "[clip-path:polygon(10%_0%,90%_0%,90%_100%,10%_100%)]",
            )}
          >
            <video autoPlay loop muted className="h-full w-full object-cover opacity-50">
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
          <div className="site-name h-max absolute bottom-60 left-1/2 -translate-x-1/2 perspective-distant transform-3d">
            <h2
              className={cn(
                "text-[clamp(2.5rem,4vw,8vw)] text-chocolate-800 font-black leading-[0.85] uppercase -tracking-[0.075em] w-max",
              )}
            >
              Caminhos do Brasil Central
            </h2>
          </div>
        </div>
      </section> */}

      <Intro />

      <InfiniteMarquee />

      <IntroCardsStick />
    </>
  );
}
