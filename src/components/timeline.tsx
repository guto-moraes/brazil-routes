"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineGroup = () => {
  useGSAP(() => {
    const wrapper = document.querySelector<HTMLElement>(".timeline-wrapper");
    const panels = gsap.utils.toArray(".timeline-panel", wrapper);
    const totalPanels = panels.length;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "-20% -20%",
          end: "+=" + (80 * totalPanels + 1) + "%",
          scrub: true,
          pin: true,
        },
      })
      .to(wrapper, {
        backgroundColor: "#2c2c29",
        clipPath: "circle(71% at 50% 50%)",
        duration: 1 / totalPanels,
      })
      .to(
        ".period",
        {
          top: "50.5%",
          left: "13%",
          fontSize: "5rem",
          duration: 0.3,
        },
        "<",
      )
      .to(
        ".period-text",
        {
          marginTop: "-7rem",
          duration: 0.3,
        },
        "<",
      )
      .to(
        ".period-title",
        {
          marginBottom: "0rem",
          duration: 0.3,
        },
        "<",
      )
      .to(panels, {
        xPercent: -100 * (totalPanels - 1),
        duration: 1,
        ease: "none",
      });
  });

  return (
    <>

      <section className="timeline-wrapper h-svh w-full [clip-path: circle(1% at 50% 50%)] overflow-hidden">
        <div className="timeline-content h-svh w-full flex flex-nowrap">
          <div className="timeline-panel relative flex-1 shrink-0 basis-full h-svh w-full flex justify-between items-center">
            <p className="period-text text-2xl text-white uppercase pl-8">Primeiro Período</p>
            <h2 className="period text-[clamp(1.8rem,8vw,24rem)] text-tan-50 font-inter font-black tracking-tight absolute top-1/2 left-1/2 -translate-1/2 -z-5">
              1940-1949
            </h2>
            <h3 className="period-title text-5xl text-white text-right font-cabinet uppercase pr-8 -mb-60">
              Da Expedição Roncador-Xingu
              <br />à criação da Fundação Brasil Central
            </h3>
          </div>
          <div className="timeline-panel flex-1 shrink-0 basis-full bg-bege-200 h-svh flex justify-center items-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Segundo Slide</h2>
          </div>
          <div className="timeline-panel flex-1 shrink-0 basis-full bg-terracotta-500 h-svh w-full flex justify-center items-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Terceiro Slide</h2>
          </div>
          <div className="timeline-panel flex-1 shrink-0 basis-full bg-darkgreen-400 h-svh w-full flex justify-center items-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Quarto Slide</h2>
          </div>
          <div className="timeline-panel flex-1 shrink-0 basis-full bg-tan-600 h-svh w-full flex justify-center items-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Quinto Slide</h2>
          </div>
        </div>
      </section>

      <section className="other-timeline bg-chocolate-300 h-svh w-full grid place-content-center">
        <h1 className="text-8xl text-white font-cabinet font-black">Other</h1>
      </section>
    </>
  );
};

export default TimelineGroup;
