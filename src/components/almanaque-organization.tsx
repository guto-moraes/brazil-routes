"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { cn } from "@/lib/utils";
import { alamanaqueChapters } from "@/data/almanaqueChapters";

gsap.registerPlugin(Observer, ScrollTrigger);

const AlmanaqueOrganization = () => {
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.defaults({
      duration: 1.3,
      ease: "power2.inOut",
    });

    const section = document.querySelector<HTMLElement>(".main-section");
    const slides = gsap.utils.toArray<HTMLDivElement>(".slide", section);

    let currentIndex = 0;
    let isAnimating = false;

    gsap.set(slides, { autoAlpha: 0, zIndex: 0 });

    const firstSlide = slides[0];
    gsap.set(firstSlide, { autoAlpha: 1, zIndex: 1 });

    gsap.set(firstSlide.querySelector<HTMLDivElement>(".content"), { clipPath: "inset(0% 0% 0% 0%)" });
    gsap.set(firstSlide.querySelector<HTMLDivElement>(".image-wrapper"), { clipPath: "inset(0% 0% 0% 0%)" });

    function resetSlides(slide: HTMLElement) {
      const content = slide.querySelector(".content");
      const imageWrapper = slide.querySelector(".image-wrapper");
      const image = imageWrapper!.querySelector("img");

      gsap.set(slide, { autoAlpha: 1 });
      gsap.set(content, { clipPath: "inset(0% 0% 0% 100%)", opacity: 1 });
      gsap.set(content!.children, { xPercent: 50, });
      
      gsap.set(imageWrapper, { clipPath: "inset(0% 100% 0% 0%)", opacity: 1 });
      gsap.set(image, { xPercent: -50, });
    }

    function changeSlideDirection(direction: number){
        if( isAnimating ) return;

        const nextIndex = currentIndex + direction;

        if(nextIndex < 0 || nextIndex >= slides.length) return;

        isAnimating = true;

        const currentSlide = slides[currentIndex];
        const nextSlide = slides[nextIndex];
        
        resetSlides(nextSlide);

        gsap.set(nextSlide, { zIndex: 2 });
        gsap.set(currentSlide, { zIndex: 1 });

        const content = nextSlide.querySelector(".content");
        const imageWrapper = nextSlide.querySelector(".image-wrapper");
        const image = imageWrapper!.querySelector("img");

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(currentSlide, { autoAlpha: 0, zIndex: 0, });
                currentIndex = nextIndex;
                isAnimating = false;
            }
        });

        tl.to(
            [content, imageWrapper],
            {
                clipPath: "inset(0% 0% 0% 0%)",
            },
            0,
        )
        .to(content!.children, { xPercent: 0, }, 0,)
        .to(image, { xPercent: 0, }, 0,)
    }

    ScrollTrigger.create({
        trigger: ".main-section",
        start: "bottom bottom",
        end: 3500,
        endTrigger: ".other",
        pin: true,
        scrub: 1,
        onUpdate: () => changeSlideDirection(1),
    })

    ScrollTrigger.refresh();
  });

  return (
    <>
      <section className="bg-chocolate-400 text-8xl text-white font-cabinet font-black h-svh w-full grid place-content-center">
        Início
      </section>

      <section className="main-section relative h-svh w-full overflow-hidden">
        {alamanaqueChapters.map(({ chapter, chapterTitle, synopsis, image }, index) => (
          <div
            className={cn("slide bg-tan-800 absolute inset-0 grid max-md:grid-rows-2 md:grid-cols-2 select-none")}
            key={index}
          >
            <div
              className={cn(
                "content will-change-[clip-path,transform] *:will-change-transform overflow-hidden",
                "text-center flex flex-col justify-center items-center gap-y-8 py-15 px-25",
              )}
            >
              <span className="text-lg text-chocolate-300 font-inter font-medium">{chapter}</span>
              <h1 className="text-[clamp(1.8rem,3vw,5rem)] text-mate-200 font-cabinet font-black leading-none">
                {chapterTitle}
              </h1>
              <p className="text-[clamp(0.90rem,2.5vw,1.3rem)] text-white font-inter">{synopsis}</p>
            </div>
            <div className="image-wrapper will-change-[clip-path,transform] overflow-hidden">
              <img
                className="block h-full w-full object-cover will-change-transform absolute inset-0"
                src={image}
                alt={chapter}
                title={chapter}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="other bg-chocolate-400 text-8xl text-white font-cabinet font-black h-svh w-full grid place-content-center">
        Início
      </section>
    </>
  );
};

export default AlmanaqueOrganization;
