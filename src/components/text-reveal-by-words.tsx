"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const TextRevealByWords = ({ className, children }: { className: string; children: React.ReactNode }) => {
  const textContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        gsap.set(".text-container", { opacity: 1 });
        const split = SplitText.create(".animate-me", { type: "words", aria: "hidden" });

        gsap.from(split.words, {
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.1,
        });
      });
    },
    { scope: textContainer },
  );

  return (
    <>
      <div className="text-container" ref={textContainer}>
        <h2 className={cn("animate-me", className)} aria-hidden="true">
          {children}
        </h2>
      </div>
    </>
  );
};

export default TextRevealByWords;
