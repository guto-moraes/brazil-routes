"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import type { TextLoaderPropsTypes } from "@/types/components-types";

gsap.registerPlugin(ScrollTrigger);

const TextLoader: React.FC<TextLoaderPropsTypes> = ({
  text,
  className = "",
  onComplete,
  gradientColors = ["#ff0000", "#ff3333", "#ff6600", "#cc0000"],
  backgroundColor = "#17171A",
  duration = {
    slideUp: 0.6,
    reveal: 0.8,
    slideDown: 0.6,
  },
  delays = {
    stagger: 0.05,
    betweenAnimations: 0.3,
    beforeSlideDown: 0.5,
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;
      const letters = textRef.current.querySelectorAll(".letter");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          pin: true,
          scrub: 1,
        },
      });

      // Set initial state
      gsap.set(letters, {
        y: 140,
        "--clipPath": "inset(100% 0 0 0)",
      });

      // Animation sequence
      tl.to(letters, {
        duration: duration.slideUp,
        y: 0,
        stagger: delays.stagger,
        ease: "power2.out",
      })
        .to(letters, {
          "--clipPath": "inset(0% 0 0 0)",
          duration: duration.reveal,
          delay: delays.betweenAnimations,
          ease: "power1.inOut",
        })
        .to(letters, {
          duration: duration.slideDown,
          y: -140,
          stagger: delays.stagger,
          delay: delays.beforeSlideDown,
          ease: "power2.in",
        })
        .to(
          containerRef.current,
          {
            y: "-140%",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.3,
          },
          "-=0.2",
        );
    },
    { scope: containerRef, dependencies: [text, duration, delays, onComplete] },
  );

  const gradientString = `linear-gradient(45deg, ${gradientColors.join(", ")})`;

  return (
    <div
      ref={containerRef}
      className={cn("text-loader-wrapper absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden z-10", className)}
      style={{ backgroundColor }}
    >
      <div
        ref={textRef}
        className={cn(
          "text-container font-black leading-none xl:text-[clamp(3rem,12vw,9rem)] max-[22.5rem]:text-[clamp(1.2rem,14vw,2.5rem)]",
          "max-sm:text-[clamp(2rem,10vw,4rem)] max-[30rem]:text-[clamp(1.5rem,12vw,3rem)] flex relative overflow-hidden",
        )}
      >
        {text.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={cn("letter inline-block relative translate-y-25 text-white/20 max-md:-tracking-[0.02em]")}
            data-text={char}
            style={{ "--clipPath": "inset(100% 0 0 0)" } as React.CSSProperties}
          >
            {char}
            <span
              className="absolute left-0 top-0 w-full h-full"
              style={{
                content: `"${char}"`,
                backgroundImage: gradientString,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                clipPath: "var(--clipPath)",
                WebkitClipPath: "var(--clipPath)",
                transition: "clip-path 0s",
              }}
            >
              {char}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextLoader;
