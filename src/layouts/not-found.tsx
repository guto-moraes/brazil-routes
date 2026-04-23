"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import TextRevealHidden from "@/components/text-reveal-hidden";

const NotFound = () => {
  const notFoundRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const span = gsap.utils.toArray<HTMLSpanElement>(".not-found-content span");

      gsap.from(span, {
        top: "-100vh",
        delay: 0.75,
        stagger: 0.2,
        ease: "bounce.out",
      });
    },
    { scope: notFoundRef },
  );

  return (
    <>
      <section className="bg-tan-300 relative h-[calc(100svh-104px)] w-full overflow-hidden" ref={notFoundRef}>
        <div className="not-found-container absolute h-[calc(100svh-104px)] w-full flex flex-col justify-center items-center">
          <div className={cn(
            "not-found-content text-[clamp(5rem,40vw,25rem)] text-tan-300 font-medium leading-none -tracking-widest -ml-12 [&_span]:relative",
            "[&_span]:drop-shadow-[1px_1px_0_rgb(255_255_255/40%),-1px_-1px_0_rgb(0_0_0_/40%)]"
          )}>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <TextRevealHidden blockColor="#c7c1ad">
            <p className="not-found-notification container mx-auto text-2xl text-tan-800 text-center font-medium">
                Infelizmente, não encontramos o que você está procurando.
            </p>
          </TextRevealHidden>
        </div>
      </section>
    </>
  );
};

export default NotFound;
