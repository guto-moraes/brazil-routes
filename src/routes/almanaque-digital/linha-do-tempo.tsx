import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import Timeline from "@/components/timeline";
import { useEffect } from "react";

export const Route = createFileRoute("/almanaque-digital/linha-do-tempo")({
  head: () => ({
    meta: [
      {
        title: "Linha do Tempo Histórica | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Linha do tempo com alguns do principais eventos ocorridos no recorte temporal do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/almanaque-digital/linha-do-tempo",
      },
    ],
  }),
  component: TimelinePage,
});

const TimelineBoxResume = ({ period, text }: { period: string; text: string }) => (
  <div
    className={cn(
      "timeline-boxes-item bg-darkgreen-500 dark:bg-dark-900 h-auto xl:h-72 py-6 xl:py-0 flex",
      "flex-col justify-center gap-y-3 max-sm:border max-sm:border-terracotta-950 max-sm:dark:border-dark-contrast-100",
    )}
  >
    <h2
      className={cn(
        "text-[1.75rem] min-[375px]:text-3xl md:text-4xl lg:text-5xl text-center",
        "text-terracotta-950 dark:text-dark-200 font-black md:tracking-tighter",
      )}
    >
      {period}
    </h2>
    <p className={cn(
      "min-[375px]:text-lg min-[425px]:text-xl md:text-[1.105rem] lg:text-2xl",
      "text-center text-terracotta-950 dark:text-dark-200 uppercase",
      "font-semibold md:font-medium tracking-tighter sm:font-black"
    )}>
      {text}
    </p>
  </div>
);

function TimelinePage() {
  useEffect(() => {
    document.title = "Linha do Tempo | Projeto Caminhos do Brasil Central";
  });

  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0 md:py-8 lg:py-0 max-w-full">
        <section className={cn(
          "px-4 xl:px-0 h-[calc(100vh-80px)] 2xl:h-[calc(100vh-104px)] w-full",
          "max-w-screen flex flex-col gap-y-8 xl:gap-y-16 xl:py-16"
        )}>
          <div className="hero-title relative container mx-auto mt-10 xl:mt-0">
            <h1
              className={cn(
                "text-[1.75rem] min-[375px]:text-[2rem] min-[425px]:text-[2.25rem] md:text-7xl lg:text-[5rem]",
                "xl:text-[4.5rem] text-terracotta-950 dark:text-dark-contrast-100 max-sm:font-inter",
                "font-cabinet font-black uppercase max-sm:tracking-tighter leading-8 min-[425px]:leading-9",
                "md:leading-15 lg:leading-20 xl:leading-18 2xl:leading-24",
              )}
            >
              Desbravamento
              <br />
              do leste de
              <br />
              Mato Grosso
            </h1>
            <div className={cn(
              "mt-6 md:mt-12 md:mb-8 2xl:mt-0 xl:absolute xl:bottom-2.5 xl:right-0",
              "max-w-70 sm:max-w-76 md:max-w-full xl:max-w-120"
            )}>
              <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea">
                <p className={cn(
                  "resume min-[425px]:text-lg md:text-2xl text-right dark:text-white text-balance",
                  "leading-5 min-[425px]:leading-6 md:leading-8"
                )}>
                  Uma breve cronologia da história da colonização não indígena na região do Vale do Araguaia (1943-1967)
                </p>
              </TextRevealHidden>
            </div>
          </div>

          <div
            className={cn(
              "timeline-boxes relative 2xl:h-72.5 2xl:min-h-72.5 container mx-auto sm:border",
              "dark:border-dark-contrast-100 grid grid-rows-3 gap-y-4 grid-cols-1 md:grid-rows-1 md:grid-cols-3",
              "md:divide-x md:divide-terracotta-950 dark:md:divide-dark-contrast-100 mb-12 xl:mb-0",
            )}
          >
            <TimelineBoxResume period="1943-1949" text="Lançamento das bases" />
            <TimelineBoxResume period="1950-1959" text="Período de consolidação" />
            <TimelineBoxResume period="1960-1967" text="Expansão e declínio" />
          </div>
        </section>
        <Timeline />
      </Main>
    </>
  );
}
