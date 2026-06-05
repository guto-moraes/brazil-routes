"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";

const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroller;
