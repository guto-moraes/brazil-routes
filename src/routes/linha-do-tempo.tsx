"use client";

import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
// import Title from "@/components/title";
import { HorizontalSlidesScroll } from "@/components/horizontal-slide-scroll";
import TimelineSlide from "@/components/timeline-slide";
// import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { MoveDown } from "lucide-react";
import TextRevealHidden from "@/components/text-reveal-hidden";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const Route = createFileRoute("/linha-do-tempo")({
  head: () => ({
    meta: [
      {
        title: "Linha do Tempo Histórica | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Linha do tempo com alguns do principais eventos ocorridos no recorte temporal do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/linha-do-tempo",
      },
    ],
  }),
  component: Timeline,
});

function Timeline() {
  const min = 1930;
  const max = 1967;
  const skipInterval = 1;
  const ticks = Array.from({ length: (max - min) / skipInterval + 1 }, (_, index) => min + index * skipInterval);
  const [year, setYear] = useState(1930);

  useGSAP(() => {
    const timelineContainer = document.querySelector<HTMLElement>(".horizontal-slides-scroll");
    const slides = document.querySelectorAll<HTMLElement>(".horizontal-slides-scroll-item");
    const timelineAnchors = document.querySelectorAll<HTMLAnchorElement>(".timeline-anchor");
    let tween;

    timelineAnchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e: MouseEvent) {
        // e.preventDefault();
        const targetHref = (e.target as HTMLElement).getAttribute("href");
        if (!targetHref) return;

        const targetElem = document.querySelector<HTMLElement>(targetHref);
        let yValue: number | HTMLElement | null = targetElem;

        if (targetElem && timelineContainer!.isSameNode(targetElem.parentElement)) {
          const totalScroll = tween!.scrollTrigger.end - tween!.scrollTrigger.start;
          const totalMovement = (slides.length - 1) * targetElem.offsetWidth;
          yValue = Math.round(tween!.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
          scrollTo: {
            y: Number(yValue),
            autoKill: false,
          },
          duration: 1,
        });
      });
    });
  });

  const handleSliding = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      const id = event.currentTarget.dataset.slide;
      setYear(Number(id));
      //   const st = ScrollTrigger.getById(id);
      //   if(st)
      //   gsap.to(window, {
      //     scrollTo: { x: st.start + 1, autoKill: false },
      //     duration: 1
      //   });
    }
  };

  return (
    <Main>
      <section className="px-4 xl:px-0 xl:h-[calc(100vh-6.5rem)] xl:py-16 w-full flex flex-col gap-y-16 overflow-hidden">
        <div className="hero-title relative xl:container mx-auto">
          <h1 className="text-[7.5rem] text-terracotta-950 font-cabinet font-black uppercase leading-24">
            Desbravamento
            <br />
            do leste de
            <br />
            Mato Grosso
          </h1>
          <div className="absolute bottom-2.5 right-0 w-full xl:max-w-120">
            <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea">
              <p className="resume text-lg xl:text-3xl text-right text-balance">
                Uma breve cronologia da história da colonização não indígena na região do Vale do Araguaia (1943-1967)
              </p>
            </TextRevealHidden>
          </div>
        </div>

        <div className="timeline-boxes relative h-72.5 xl:min-h-72.5 container mx-auto grid grid-cols-3 border border-terracotta-950 overflow-y-hidden">
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1943-1949</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Lançamento das bases</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 border-x border-terracotta-950 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1950-1959</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Período de consolidação</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1960-1967</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Expansão e declínio</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-y-1/2 w-max grid place-content-center">
          <MoveDown size={48} className="text-terracotta-600 animate-bounce" />
        </div>
      </section>

      <div id="timeline">
        <HorizontalSlidesScroll>
          <TimelineSlide />
          <div className="bg-bone-900 h-20 w-full flex items-center fixed bottom-0 left-0 z-100 overflow-hidden">
            <div className="w-[95%] mx-auto py-20 border-t">
              <hr className="bg-none border-chocolate-300 w-[99%] mx-auto" />
              {/* <Slider
              // defaultValue={year}
              min={min}
              max={max}
              step={skipInterval}
              onValueChange={(vals) => setYear(Number(vals))}
              className="timeline-range"
            /> */}
              <span
                aria-hidden="true"
                className="text-bone-200 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
              >
                {ticks.map((tick) => (
                  <span key={tick} className="flex w-0 flex-col items-center justify-center gap-2">
                    <span className={cn("bg-chocolate-300 h-1.5 w-px", tick % skipInterval !== 0 && "h-1")} />
                    <a
                      // to="/linha-do-tempo"
                      // hash={String(tick)}
                      href={`#${String(tick)}`}
                      className={cn(
                        "timeline-anchor hover:scale-150 transition-all duration-400 cursor-pointer",
                        tick % skipInterval !== 0 && "opacity-0",
                        tick === Number(year) && "text-white font-bold scale-200",
                      )}
                      data-slide={tick}
                      onClick={() => handleSliding}
                    >
                      {tick}
                    </a>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </HorizontalSlidesScroll>
      </div>
    </Main>
  );
}
