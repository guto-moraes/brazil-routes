"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const ChapterAside = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <aside className={cn("chapter-aside relative col-span-1", className)}>{children}</aside>;
};

const ChapterContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <main
      className={cn("chapter-content relative col-span-4 [&_p]:text-lg [&_p]:not-last:mb-6", className)}
    >
      {children}
    </main>
  );
};

const ChapterWrapper = ({ children }: { children: React.ReactNode }) => {
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const sticky = gsap.utils.toArray<HTMLElement>(".chapter-aside");

      gsap.set(sticky, { x: 16, y: 96 });

      // Pin the container and scroll one column
      ScrollTrigger.create({
        trigger: mainWrapperRef.current,
        start: "top top",
        end: `+=${mainWrapperRef.current?.clientHeight}`, // Adjust based on scroll length
        pin: sticky,
        scrub: true,
      });

      // Animate the scrolling column (e.g., .right)
      gsap.to(".right-col", {
        // y: "10%", // Adjust based on total content height
        scrollTrigger: {
          trigger: mainWrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: mainWrapperRef },
  );

  return (
    <div className="chapter-wrapper container mx-auto min-h-[calc(100svh-104px)] grid grid-cols-5 gap-16 px-4 py-24" ref={mainWrapperRef}>
      {children}
    </div>
  );
};

export { ChapterAside, ChapterContent, ChapterWrapper };
