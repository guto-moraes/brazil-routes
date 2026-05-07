"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ScrollRotateContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "content-container relative h-full w-full min-w-full p-8 flex rotate-30",
        "origin-bottom-left will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  );
};

const ScrollRotateSection = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <section className={cn("rotate-section relative h-svh min-h-svh w-full overflow-hidden", className)}>
      {children}
    </section>
  );
};

const ScrollRotateWrapper = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const containersRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sections = document.querySelectorAll<HTMLElement>(".rotate-section");

      sections.forEach((section, index) => {
        const container = section.querySelector<HTMLDivElement>(".content-container");

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
      <main className={cn(className)} ref={containersRef}>{children}</main>
    </>
  );
};

export { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper };
