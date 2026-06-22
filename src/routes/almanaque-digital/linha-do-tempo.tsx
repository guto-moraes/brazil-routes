"use client";

import { createFileRoute } from "@tanstack/react-router";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import { Title } from "@/components/title";

import { cn } from "@/lib/utils";
import Timeline from "@/components/timeline";

const PeriodBox = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="border border-darkgreen-700 bg-darkgreen-500 min-h-34 flex flex-col justify-center items-center gap-2 p-4">
    <h2 className="text-2xl min-[425px]:text-4xl md:text-5xl text-white font-inter font-black leading-none">{title}</h2>
    <p className="min-[425px]:text-[1.15rem] md:text-[1.25rem] text-white font-inter font-semibold uppercase">
      {subtitle}
    </p>
  </div>
);

export const Route = createFileRoute("/almanaque-digital/linha-do-tempo")({
  component: NewTimeline,
});

function NewTimeline() {
  return (
    <>
      <Header className="shadow-md" />
      <Main className="p-0">
        <section
          className={cn(
            "md:h-[calc(100dvh-80px)] 2xl:h-[calc(100dvh-104px)] container mx-auto",
            "flex flex-col xl:flex-row xl:gap-16 py-8 lg:py-16 2xl:py-24 px-4 sm:px-6 md:px-8",
          )}
        >
          <div className="flex-2 flex flex-col lg:gap-y-8 2xl:gap-y-12">
            <Title
              className={cn(
                "min-[425px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:text-terracotta-900",
                "sm:tracking-normal uppercase lg:max-w-full",
              )}
            >
              Desbravamento do <span className="max-sm:text-tan-500">leste de Mato Grosso</span>
            </Title>
            <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea" className="my-8 sm:w-full max-w-screen">
              <p
                className={cn(
                  "sm:text-lg lg:text-2xl 2xl:text-[26px] text-tan-800 leading-5 sm:leading-6",
                  "lg:leading-7 xl:leading-9 sm:max-w-full lg:max-w-[85%]!",
                )}
              >
                Para compreender melhor os eventos que sucederam durante o período de atividades promovidas pelas Expedição
                Roncador-Xingu e Fundação Brasil Central (1943-1967) no atual Vale do Araguaia, em Mato Grosso, abaixo
                apresentamos um breve contexto histórico do início da colonização não indígena na região
              </p>
            </TextRevealHidden>
          </div>

          <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
            <PeriodBox title="1943-1949" subtitle="Lançamento das bases" />
            <PeriodBox title="1950-1959" subtitle="Período de consolidação" />
            <PeriodBox title="1960-1967" subtitle="Expansão e declínio" />
          </div>
        </section>
        <Timeline />
      </Main>
    </>
  );
}
