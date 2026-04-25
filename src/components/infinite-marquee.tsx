"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import barra from "@/assets/images/marquee/barra-do-garcas.webp";
import carneiro from "@/assets/images/marquee/general-carneiro.webp";
import serra from "@/assets/images/marquee/serra-do-roncador.webp";
import india from "@/assets/images/marquee/indianapolis.webp";
import nova from "@/assets/images/marquee/nova-xavantina.webp";

const InfiniteMarquee = () => {
  const infiniteMarqueeContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const marquee = gsap.utils.toArray<HTMLDivElement>(".infinite-marquee-item");

    gsap.to(marquee, {
      xPercent: -100,
      repeat: -1,
      duration: 8,
      ease: "linear",
    });
  }, { scope: infiniteMarqueeContainer });

  return (
    <section className="bg-tan-900 py-8 h-80 w-full">
        <div className="infinite-marquee-wrapper relative h-40 border-y-2 border-bege-300 w-full -rotate-z-2 overflow-hidden" ref={infiniteMarqueeContainer}>
          <div className="infinite-marquee-container w-fit flex flex-auto flex-row gap-x-8">
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={barra} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={carneiro} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={serra} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={india} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={nova} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={barra} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={carneiro} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={serra} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={india} className="h-full w-full object-fit" />
            </div>
            <div className="infinite-marquee-item text-bege-200 uppercase p-4 h-40 min-w-80 max-w-fit flex flex-col shrink-0 justify-center items-center">
              <img src={nova} className="h-full w-full object-fit" />
            </div>
          </div>
        </div>



      {/* <div className="banners-wrapper relative bg-tan-900 border-y-2 border-bege-300 w-full -rotate-z-2">
        <div className="banner-marquee-left will-change-transform xl:h-50 w-fit flex flex-auto flex-row">
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.25rem] font-black leading-[0.8] tracking-tighter">Barra</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-wide">do Garças</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[4.25rem] font-light leading-none tracking-tighter scale-125">General</span>
            <span className="text-[4rem] font-black leading-[0.925] -tracking-wider scale-111">Carneiro</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md pt-3 pb-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] tracking-tighter">Serra</span>
            <span className="text-[3.25rem] leading-[0.8] -tracking-widest whitespace-nowrap">do Roncador</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[4.25rem] leading-[0.8] -tracking-wider">Indiana</span>
            <span className="text-[5.85rem] font-black leading-[0.8] -tracking-wider">polis</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] -tracking-wider">Nova</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-widest">Xavantina</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.25rem] font-black leading-[0.8] tracking-tighter">Barra</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-wide">do Garças</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[4.25rem] font-light leading-none tracking-tighter scale-125">General</span>
            <span className="text-[4rem] font-black leading-[0.925] -tracking-wider scale-111">Carneiro</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md pt-3 pb-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] tracking-tighter">Serra</span>
            <span className="text-[3.25rem] leading-[0.8] -tracking-widest whitespace-nowrap">do Roncador</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[4.25rem] leading-[0.8] -tracking-wider">Indiana</span>
            <span className="text-[5.85rem] font-black leading-[0.8] -tracking-wider">polis</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit min-w-80 max-w-md py-4 flex shrink-0 flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] -tracking-wider">Nova</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-widest">Xavantina</span>
          </div>
        </div>
      </div>

      <div className="banners-wrapper relative bg-tan-900 border-y-2 border-bege-300 w-screen overflow-hidden -mt-14 -ml-4 rotate-z-2">
        <div className="banner-marquee-right will-change-transform xl:h-50 w-fit flex flex-auto flex-row">
          <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] -tracking-wider">Nova</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-widest">Xavantina</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
            <span className="text-[4.25rem] leading-[0.8] -tracking-wider">Indiana</span>
            <span className="text-[5.85rem] font-black leading-[0.8] -tracking-wider">polis</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit pt-3 pb-4 flex flex-col justify-center items-center">
            <span className="text-[6.5rem] font-black leading-[0.8] tracking-tighter">Serra</span>
            <span className="text-[3.25rem] leading-[0.8] -tracking-widest whitespace-nowrap">do Roncador</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
            <span className="text-[4.25rem] font-light leading-none tracking-tighter scale-125">General</span>
            <span className="text-[4rem] font-black leading-[0.925] -tracking-wider scale-111">Carneiro</span>
          </div>
          <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
            <span className="text-[6.25rem] font-black leading-[0.8] tracking-tighter">Barra</span>
            <span className="text-[3.7rem] leading-[0.8] -tracking-wide">do Garças</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default InfiniteMarquee;
