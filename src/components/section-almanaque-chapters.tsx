"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Col = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn("col flex-1 flex flex-col justify-center items-center gap-8", className)}>{children}</div>;
};


const servicesCopy: string[][] = [
  [
    "Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Casamentiss faiz malandris se pirulitá. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.",
  ],
  [
    "Cevadis im ampola pa arma uma pindureta. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Bota 1 metro de cachacis aí pra viagem!",
  ],
  [
    "Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Quem num gosta di mim que vai caçá sua turmis! Viva Forevis aptent taciti sociosqu ad litora torquent.",
  ],
  [
    "Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. In elementis mé pra quem é amistosis quis leo. Morbi viverra placerat justo, vel pharetra turpis. Interagi no mé, cursus quis, vehicula ac nisi.",
  ],
  [
    "Delegadis gente finis, bibendum egestas augue arcu ut est. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Si num tem leite então bota uma pinga aí cumpadi! Cevadis im ampola pa arma uma pindureta.",
  ],
  [
    "Leite de capivaris, leite de mula manquis sem cabeça. Quem manda na minha terra sou euzis! Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mim que vai caçá sua turmis!",
  ],
  [
    "Suco de cevadiss deixa as pessoas mais interessantis. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.",
  ],
  [
    "Casamentiss faiz malandris se pirulitá. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.",
  ],
];

const SectionAlmanaqueChapters = () => {
  const stickyCardsContainer = useRef<HTMLElement>(null);
  
  useGSAP(() => {

    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector<HTMLElement>(".sticky-chapters");
    const stickyHeight = window.innerHeight * 8;
    const services = document.querySelectorAll<HTMLDivElement>(".service");
    const indicator = document.querySelector<HTMLDivElement>(".indicator");
    const currentCount = document.querySelector<HTMLSpanElement>("#current-count");
    const serviceImg = document.querySelector<HTMLDivElement>(".service-img");
    const serviceCopy = document.querySelector<HTMLParagraphElement>(".service-copy p");
    const serviceHeight = 48;
    const imgHeight = 250;

    if (serviceCopy) {
      serviceCopy.textContent = servicesCopy[0][0];
    }
    let currentSplitText = new SplitText(serviceCopy, { type: "lines", linesClass: "line relative will-change-transform" });

    const measureContainer = document.createElement("div");
    measureContainer.classList.add("text-6xl", "font-cabinet", "font-semibold", "absolute", "invisible", "h-auto", "w-auto", "whitespace-nowrap", "uppercase");
    document.body.appendChild(measureContainer);

    const serviceWidths = Array.from(services).map((service) => {
      measureContainer.textContent = service.querySelector("p")!.textContent;
      return measureContainer.offsetWidth + 8;
    });

    document.body.removeChild(measureContainer);

    gsap.set(indicator, {
      width: serviceWidths[0],
      xPercent: -50,
      left: "50%"
    });

    const scrollPerService = window.innerHeight;
    let currentIndex = 0;

    const animateTextChange = (index: number) => {
      return new Promise((resolve) => {
        gsap.to(currentSplitText.lines, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.inOut",
          onComplete: () => {
            currentSplitText.revert();
            
            const newText = servicesCopy[index][0];
            serviceCopy!.textContent = newText;
            
            currentSplitText = new SplitText(serviceCopy, {
              type: "lines",
              linesClass: "line relative will-change-transform"
            });
            
            gsap.set(currentSplitText.lines, {
              opacity: 0,
              y: 20,
            });
            
            gsap.to(currentSplitText.lines, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.03,
              ease: "power3.out",
              onComplete: resolve,
            });
          }
        })
      })
    }

    ScrollTrigger.create({
      trigger: stickySection,
      start:  "top top",
      end: `${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: async (self) => {
        const progress = self.progress;

        gsap.set(".progress", { scaleY: progress });

        const scrollPosition = Math.max(0, self.scroll() - window.innerHeight);
        const activeIndex = Math.floor(scrollPosition / scrollPerService);

        if(
          activeIndex >= 0 &&
          activeIndex < services.length &&
          currentIndex !== activeIndex
        ){
          currentIndex = activeIndex;

          services.forEach((service) => service.classList.remove("active"));
          services[activeIndex].classList.add("active");

          await Promise.all([
            gsap.to(indicator, {
              y: activeIndex * serviceHeight,
              width: serviceWidths[activeIndex],
              duration: 0.5,
              ease: "power3.inOut",
              overwrite: true,
            }),
            
            gsap.to(serviceImg, {
              y: -(activeIndex * imgHeight),
              duration: 0.5,
              ease: "power3.inOut",
              overwrite: true,
            }),
            
            gsap.to(currentCount, {
              innerText: activeIndex + 1,
              snap: { innerText: 1 },
              duration: 0.3,
              ease: "power3.out",
            }),
  
            animateTextChange(activeIndex),
  
          ]);
        }
      }
    });

    ScrollTrigger.refresh();

  }, { scope: stickyCardsContainer });

  return (
    <>
      <section className="sticky-chapters bg-chocolate-300 relative h-svh w-full flex max-lg:flex-col" ref={stickyCardsContainer}>
        <Col className="max-lg:pt-[25%] max-lg:justify-start">
          <div className="services relative flex flex-col items-center">
            <div className="indicator bg-chocolate-800 absolute top-0 left-0 w-full h-10 translate-y-0 -z-1"></div>
            <div className="group service w-max h-12 active">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 1
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 2
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 3
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 4
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 5
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 6
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 7
              </p>
            </div>
            <div className="group service w-max h-12">
              <p className="text-4xl text-chocolate-600/50 group-[.active]:text-white font-semibold transition-colors duration-300 uppercase">
                Serviço 8
              </p>
            </div>
          </div>
        </Col>
        <Col className="max-lg:flex-row gap-6">
          <div className="service-img-wrapper relative w-[60%] h-62.5 overflow-hidden [clip-path:polygon(50% 0, 100% 0, 100% 85%, 90% 100%, 50% 100%, 0 100%, 0 0)] max-lg:w-[25%]">
            <div className="service-img w-full h-500 transform-y-0 will-change-transform">
              <div className="img h-62.5 w-full">
                <img className="h-full w-full object-cover" src="/images/experiments/1.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/2.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/3.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/1.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/2.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/3.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/1.webp" alt="" />
                <img className="h-full w-full object-cover" src="/images/experiments/2.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="service-copy w-[60%]">
            <p className="text-sm text-chocolate-900 lg:text-lg font-mono leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolore placeat vel voluptatibus adipisci,
              cumque, veniam repellat velit quos laboriosam, eveniet quasi eaque voluptas!
            </p>
          </div>
        </Col>

        <div className="progress-bar bg-chocolate-100 absolute -top-[15%] lg:top-1/2 left-1/2 -translate-1/2 h-[50%] lg:h-[60%] w-[2.5px] max-lg:-rotate-90">
          <div className="progress bg-chocolate-800 absolute top-0 left-0 h-full w-full origin-top scale-y-0 will-change-transform"></div>
        </div>

        <div className="index bg-chocolate-900 text-white absolute max-lg:top-[5%] max-lg:bottom-[unset] bottom-[10%] left-1/2 -translate-x-1/2 flex justify-between items-center w-15 pt-1 pb-0.5 px-0.5">
          <span
            id="current-count"
            className="text-xl font-mono font-semibold leading-3 w-3 flex justify-center items-center"
          >
            1
          </span>
          <span className="separator text-xl font-mono font-semibold leading-3  h-0.5 w-5 flex justify-center items-center bg-chocolate-300 relative -top-px"></span>
          <span className="total-count text-xl font-mono font-semibold leading-3 w-3 flex justify-center items-center">
            8
          </span>
        </div>
      </section>
    </>
  );
};

export default SectionAlmanaqueChapters;