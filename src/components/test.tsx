"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const Section = ({
  className,
  bgColor = "#c1c9b8",
  children,
}: {
  className?: string;
  bgColor?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="rotate-section relative h-svh min-h-svh w-full overflow-hidden">
      <div
        className={cn(
          "container bg-bone-400 relative h-full w-full min-w-full p-8 flex",
          "rotate-30 origin-bottom-left will-change-transform",
          className,
        )}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </section>
  );
};

const SectionScrollRotate = ({ children }: { children: React.ReactNode }) => {
  const containersRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = document.querySelectorAll<HTMLElement>(".rotate-section");

      sections.forEach((section, index) => {
        const container = section.querySelector<HTMLDivElement>(".container");

        gsap.to(container, {
          rotate: 0,
          ease: "note",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });

        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containersRef },
  );
  return (
    <>
      {/* <section className="h-svh w-full bg-mate-400"></section> */}
      <div className="h-full w-full" ref={containersRef}>{children}</div>
    </>
  );
};

export { Section, SectionScrollRotate };
