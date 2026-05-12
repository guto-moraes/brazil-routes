"use client";

import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import Timeline from "@/components/timeline";

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
        href: "https://caminhosdobrasilcentral.com/linha-do-tempo",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <Main>
      <section className="px-4 xl:px-0 xl:h-[calc(100vh-6.5rem)] xl:py-16 w-full flex flex-col gap-y-16 overflow-hidden">
        <div className="hero-title relative xl:container mx-auto">
          <h1 className="text-[7.5rem] text-terracotta-950 font-cabinet font-black uppercase leading-24">
            Desbravamento
            <br />
            do leste de
            <br />
            Mato Grosso
          </h1>
          <div className="absolute bottom-2.5 right-0 w-full xl:max-w-120">
            <TextRevealHidden animateOnScroll={false} blockColor="#fbf6ea">
              <p className="resume text-lg xl:text-3xl text-right text-balance">
                Uma breve cronologia da história da colonização não indígena na região do Vale do Araguaia (1943-1967)
              </p>
            </TextRevealHidden>
          </div>
        </div>

        <div className="timeline-boxes relative h-72.5 xl:min-h-72.5 container mx-auto grid grid-cols-3 border border-terracotta-950 overflow-y-hidden">
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1943-1949</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Lançamento das bases</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 border-x border-terracotta-950 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1950-1959</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Período de consolidação</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-terracotta-950 font-black tracking-tighter">1960-1967</h2>
            <p className="text-2xl text-center text-terracotta-950 uppercase font-black">Expansão e declínio</p>
          </div>
        </div>
      </section>

      <Timeline />
    </Main>
  );
}
