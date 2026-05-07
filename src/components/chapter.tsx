"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const ChapterAside = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <aside className={cn("chapter-aside relative col-span-2 w-full h-max rounded-2xl p-6", className)}>
      {children}
    </aside>
  );
};

const ChapterContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <main className={cn("chapter-content relative col-span-5 w-full", className)}>{children}</main>;
};

const ChapterWrapper = ({ children }: { children: React.ReactNode }) => {
  const mainWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const sticky = gsap.utils.toArray<HTMLElement>(".chapter-aside");

      gsap.set(sticky, { x: 0 });

      // Pin the container and scroll one column
      ScrollTrigger.create({
        trigger: mainWrapperRef.current,
        start: "top top",
        end: `+=100`, // Adjust based on scroll length
        pin: sticky,
        scrub: true,
      });

      // Animate the scrolling column (e.g., .right)
      gsap.to(".chapter-content", {
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
    <div className="chapter-wrapper container mx-auto grid grid-cols-7 gap-16 px-4 py-24" ref={mainWrapperRef}>
      {children}
    </div>
  );
};

export { ChapterAside, ChapterContent, ChapterWrapper };
