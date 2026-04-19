import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const InfiniteMarquee = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const bannerLeft = document.querySelector<HTMLDivElement>(".banner-scroll-left");
    const bannerRight = document.querySelector<HTMLDivElement>(".banner-scroll-right");

    const leftBanners = gsap.utils.toArray<HTMLDivElement>(".banner-item", bannerLeft);
    const rightBanners = gsap.utils.toArray<HTMLDivElement>(".banner-item", bannerRight);

    leftBanners.forEach((banner) => {
      const clone = banner.cloneNode(true);
      bannerLeft!.appendChild(clone);
    });
	
    rightBanners.forEach((banner) => {
      const clone = banner.cloneNode(true);
      bannerRight!.appendChild(clone);
    });
 
    const tl = gsap.timeline({ x: 0, visibility: "visible", opacity: 0, autoAlpha: 0, });

    tl.to(bannerLeft, {
      x: -250,
	  opacity: 1,
	  autoAlpha: 1,
      duration: 4,
      repeat: -1,
      ease: "linear",
    }, "rc").totalProgress(0.5)
    .to(bannerRight, {
      x: 250,
	  opacity: 1,
      autoAlpha: 1,
      duration: 4,
      repeat: -1,
      ease: "linear",
    }, "rc").totalProgress(0.5);
  });

  return (
    <>
      <section className="bg-tan-900 pt-16 pb-8 w-full overflow-hidden">
        <div className="banners-wrapper bg-tan-900 border-y-2 border-bege-300 w-full -mt-8 -rotate-z-2">
          <div className="banner-scroll-left opacity-0 invisible will-change-transform xl:h-50 w-full flex justify-center items-center gap-x-16">
            <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
              <span className="text-[6.25rem] font-black leading-[0.8] tracking-tighter">Barra</span>
              <span className="text-[3.7rem] leading-[0.8] -tracking-wide">do Garças</span>
            </div>
            <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
              <span className="text-[4.25rem] font-light leading-none tracking-tighter scale-125">General</span>
              <span className="text-[4rem] font-black leading-[0.925] -tracking-wider scale-111">Carneiro</span>
            </div>
            <div className="banner-item text-bege-300 uppercase h-full w-fit pt-3 pb-4 flex flex-col justify-center items-center">
              <span className="text-[6.5rem] font-black leading-[0.8] tracking-tighter">Serra</span>
              <span className="text-[3.25rem] leading-[0.8] -tracking-widest whitespace-nowrap">do Roncador</span>
            </div>
            <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
              <span className="text-[4.25rem] leading-[0.8] -tracking-wider">Indiana</span>
              <span className="text-[5.85rem] font-black leading-[0.8] -tracking-wider">polis</span>
            </div>
            <div className="banner-item text-bege-300 uppercase h-full w-fit py-4 flex flex-col justify-center items-center">
              <span className="text-[6.5rem] font-black leading-[0.8] -tracking-wider">Nova</span>
              <span className="text-[3.7rem] leading-[0.8] -tracking-widest">Xavantina</span>
            </div>
          </div>
        </div>

        <div className="banners-wrapper bg-tan-900 border-y-2 border-bege-300 w-screen overflow-hidden -mt-14 -ml-4 rotate-z-2">
          <div className="banner-scroll-right opacity-0 invisible will-change-transform xl:h-50 w-full flex justify-center items-center gap-x-16">
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
        </div>
      </section>
    </>
  );
};

export default InfiniteMarquee;
