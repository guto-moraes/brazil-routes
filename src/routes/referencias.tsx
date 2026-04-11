import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
// import CardStacking from "@/components/card-stacking";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      {
        title: "Equipe do Projeto",
      },
      {
        name: "description",
        content:
          "Equipe multidisciplinar que atuou no desenvolvimento e na execução do Projeto Caminhos do Brasil Central",
      },
    ],
  }),
  component: References,
});

// const Heading2 = ({ text, spanText }: { text: string; spanText: string }) => {
//   return (
//     <h2
//       className={cn(
//         "text-reveal text-[10vw] text-bone-600 font-black tracking-[-0.01em] leading-[100%] w-full transition-[background-size_cubic-bezier(.1,.5,.5,1)]",
//         "bg-linear-r from-bone-400 to-bone-500 bg-size-[0%] bg-no-repeat bg-clip-text duration-500 flex flex-col items-start",
//         "justify-center relative border border-b border-bone-600 hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] uppercase",
//       )}
//     >
//       {text}
//       <span
//         className={cn(
//           "absolute h-full w-full bg-terracotta-500 text-bone-900 [clip-path:polygon(0%_50%,100%_50%,100%_50%,0%_50%)]",
//           "origin-center transition-[all_cubic-bezier(.1,.5,.5,.1)] duration-400 flex flex-col justify-center",
//         )}
//       >
//         {spanText}
//       </span>
//     </h2>
//   );
// };

function References() {
  const containerScope = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      const textElements = document.querySelectorAll<HTMLHeadingElement>(".text-reveal");

      textElements.forEach((text) => {
        gsap.to(text, {
          backgroundSize: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: containerScope },
  );

  return (
    <>
      <Main>
        {/* <CardStacking /> */}
        <div className="bg-bone-200 h-svh w-full grid place-content-center">
          <TextRevealHidden blockColor="#2f312c">
            <h2 className="text-4xl text-bone-800 font-inter font-black uppercase leading-none tracking-tighter max-w-5xl mx-auto">
              O que é o Almanaque Desbravando o sertão, conconquistando o Brasil: a Expedição Roncador-Xingu e a
              Fundação Brasil Central em Mato Grosso (1943/1967)
            </h2>
          </TextRevealHidden>
        </div>
        <div className="relative bg-darkgreen-600 h-svh w-full flex justify-center items-center">
          <div
            className={cn(
              "bg-amber-400 h-[90%] w-[90%] transform will-change-transform",
              "[clip-path:polygon(0%_50%,50%_100%,100%_50%,50%_0%)]",
            )}
          ></div>
          <div className="bg-sky-700 size-150 [clip-path:circle(50%)] absolute top-1/2 left-1/2 -translate-1/2"></div>
        </div>

        <div className="container-text-reveal bg-bone-900 px-32">
          <h2 className="text-reveal font-inter font-black tracking-tighter">
            ESTA ANIMAÇÃO <span>TEXTUAL</span>
          </h2>
          <h2 className="text-reveal font-inter font-black tracking-tighter">
            FOI APLICADA <span>UTILIZANDO</span>
          </h2>
          <h2 className="text-reveal font-inter font-black tracking-tighter">
            PARA FAZER <span>UMA FRESCURA</span>
          </h2>
          <h2 className="text-reveal font-inter font-black tracking-tighter">
            ESTILIZAÇÃO <span>DESTACADA</span>
          </h2>
          <h2 className="text-reveal font-inter font-black tracking-tighter">
            DE TEXTO<span>SEM NOÇÃO</span>
          </h2>
        </div>
      </Main>
    </>
  );
}
