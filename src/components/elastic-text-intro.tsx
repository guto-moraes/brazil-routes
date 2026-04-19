"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { cn } from "@/lib/utils";

import image from "@/assets/images/experiments/2.webp";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ElasticTextIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      const header = document.querySelector<HTMLHeadingElement>(".header h2");
      const textElement1 = document.querySelector<HTMLHeadingElement>(".sticky-text-1 .text-container h2");
      const textElement2 = document.querySelector<HTMLHeadingElement>(".sticky-text-2 .text-container h2");
      const textElement3 = document.querySelector<HTMLHeadingElement>(".sticky-text-3 .text-container h2");
      const textContainer3 = document.querySelector<HTMLDivElement>(".sticky-text-3 .text-container");
      const otherTextBgColor = getComputedStyle(document.documentElement).getPropertyValue("--color-lime-950").trim();

      let headerSplit: SplitText | null = null;

      if (header) {
        headerSplit = SplitText.create(header, {
          type: "words",
          wordsClass: "spotlight-word",
        });
        gsap.set(headerSplit.words, { opacity: 0 });
      }

      const targetScales: number[] = [];

      function calculateDynamicScale() {
        for (let i = 1; i <= 3; i++) {
          const section = document.querySelector<HTMLElement>(`.sticky-text-${i}`);
          const text = document.querySelector<HTMLHeadingElement>(`.sticky-text-${i} .text-container h2`);

          if (!section || !text) continue;

          const sectionHeight = section.offsetHeight;
          const textHeight = text.offsetHeight;
          targetScales[i - 1] = sectionHeight / textHeight;
        }
      }

      calculateDynamicScale();
      window.addEventListener("resize", calculateDynamicScale);

      function setScaleY(element: HTMLHeadingElement, scale: number) {
        element.style.transform = `scaleY(${scale})`;
      }

      // First Text Start Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-1",
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          const currentScale = targetScales[0] * self.progress;
          if (textElement1) setScaleY(textElement1, currentScale);
        },
      });

      // First Text End Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-1",
        start: "top top",
        end: `+=${window.innerHeight * 1}px`,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const currentScale = targetScales[0] * (1 - self.progress);
          if (textElement1) setScaleY(textElement1, currentScale);
        },
      });

      // Second Text Start Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-2",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const currentScale = targetScales[1] * self.progress;
          if (textElement2) setScaleY(textElement2, currentScale);
        },
      });

      // Second Text End Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-2",
        start: "top top",
        end: `+=${window.innerHeight * 1}px`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          const currentScale = targetScales[1] * (1 - self.progress);
          if (textElement2) setScaleY(textElement2, currentScale);
        },
      });

      // Third Text Start Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-3",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const currentScale = targetScales[2] * self.progress;
          if (textElement3) setScaleY(textElement3, currentScale);
        },
      });

      // Third Text End Animation
      ScrollTrigger.create({
        trigger: ".sticky-text-3",
        start: "top top",
        end: `+=${window.innerHeight * 4}px`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress === 0) {
            textContainer3!.style.backgroundColor = otherTextBgColor;
            textContainer3!.style.opacity = "1";
          }

          if (progress < 0.75) {
            const scaleProgress = progress / 0.75;
            const currentScale = 1 + 9 * scaleProgress;
            textContainer3!.style.transform = `scale3d(${currentScale}, ${currentScale}, 1)`;
          } else {
            textContainer3!.style.transform = "scale3d(10,10,1)";
          }

          if (progress < 0.25) {
            textContainer3!.style.backgroundColor = otherTextBgColor;
            textContainer3!.style.opacity = "1";
          } else if (progress >= 0.25 && progress <= 0.5) {
            const fadeProgress = (progress - 0.25) / 0.25;
            const bgOpacity = Math.max(0, Math.min(1, 1 - fadeProgress));

            textContainer3!.style.backgroundColor = otherTextBgColor.replace("1)", `${bgOpacity})`);
          } else if (progress > 0.5) {
            textContainer3!.style.backgroundColor = otherTextBgColor.replace("1)", "0)");
          }

          if (progress >= 0.5 && progress <= 0.75) {
            const textProgess = (progress - 0.5) / 0.25;
            const textOpcity = 1 - textProgess;
            textContainer3!.style.opacity = String(textOpcity);
          } else if (progress > 0.75) {
            textContainer3!.style.opacity = "0";
          }

          if(headerSplit && headerSplit.words.length > 0){
            if (progress >= 0.75 && progress <= 0.95) {
                const textProgess = (progress - 0.75) / 0.2;
                const totalWords = headerSplit.words.length;

                headerSplit.words.forEach((word, index) => {
                    const wordRevealProgress = index / totalWords;
                    const opacity = textProgess >= wordRevealProgress ? 1 : 0;
                    gsap.set(word, { opacity })
                });
            } else if (progress < 0.75){                
                gsap.set(headerSplit.words, { opacity: 0 })
            } else if (progress > 0.95){                
                gsap.set(headerSplit.words, { opacity: 1 })
            }
          }
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <>
      <section className="hero bg-lime-950 h-svh w-full grid place-content-center">
        <h2 className="text-8xl text-lime-400 font-cabinet font-black uppercase">Início</h2>
      </section>

      <div className="elastic-text-wrapper h-auto w-full" ref={containerRef}>
        <section className="sticky-wrapper sticky-text-1">
          <div className="text-container">
            <h2>Caminhos</h2>
          </div>
        </section>
        <section className="sticky-wrapper sticky-text-2">
          <div className="text-container">
            <h2>do Brasil</h2>
          </div>
        </section>
        <section className="sticky-wrapper sticky-text-3">
          <div className="reveal-image">
            <img className="h-full w-full object-cover" src={image} alt="Título da imagem" />
          </div>
          <div className="text-container">
            <h2>Central</h2>
          </div>
          <div className="header">
            <h2>História, memória e patrimônio</h2>
          </div>
        </section>
      </div>

      <section className="other bg-lime-950 h-svh w-full grid place-content-center">
        <h2 className="text-8xl text-lime-400 font-cabinet font-black uppercase">Fim</h2>
      </section>
    </>
  );
};

export default ElasticTextIntro;
