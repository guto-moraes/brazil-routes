import { createFileRoute } from "@tanstack/react-router";
import { MoveDown } from "lucide-react";
import TextReveal from "@/components/text-reveal";
import TimelineGroup from "@/components/timeline";
export const Route = createFileRoute("/linha-do-tempo")({
  component: Timeline,
});

function Timeline() {
  return (
    <>
      <section className="hero px-4 xl:px-0 xl:h-[calc(100vh-6.5rem)] xl:py-16 w-full flex flex-col gap-y-16 overflow-hidden">
        <div className="hero-title relative xl:container mx-auto">
          <h1 className="text-[7.5rem] text-terracotta-950 font-cabinet font-black uppercase leading-24 tracking-wide">
            O "desbravar"
            <br />
            do leste de
            <br />
            Mato Grosso
          </h1>
          <div className="absolute bottom-2.5 right-0 w-full xl:max-w-120">
            <TextReveal
              id="resume"
              onTrigger=".hero-title"
              className="text-lg xl:text-3xl text-right text-balance"
              initialTextColor="text-tan-400"
              endTextColor="text-terracotta-950"
              text="Breve linha do tempo da colonização não indígena na atual região do Vale do Araguaia (1943-1967)"
            />
          </div>
        </div>

        <div className="timeline-boxes relative h-72.5 xl:min-h-72.5 container mx-auto grid grid-cols-3 border border-terracotta-950 overflow-y-hidden">
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-darkgreen-950 text-shadow-lg font-black tracking-tighter">
              1940-1949
            </h2>
            <p className="text-2xl text-center text-darkgreen-900 uppercase font-black">Lançamento das bases</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 border-x border-terracotta-950 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-darkgreen-950 text-shadow-lg font-black tracking-tighter">
              1950-1959
            </h2>
            <p className="text-2xl text-center text-darkgreen-900 uppercase font-black">Período de consolidação</p>
          </div>
          <div className="timeline-boxes-item bg-darkgreen-500 h-72 flex flex-col justify-around">
            <h2 className="text-7xl text-center text-darkgreen-950 text-shadow-lg font-black tracking-tighter">
              1960-1967
            </h2>
            <p className="text-2xl text-center text-darkgreen-900 uppercase font-black">Expansão e declínio da FBC</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-y-1/2 w-max grid place-content-center">
          <MoveDown size={48} className="text-tan-700 animate-bounce" />
        </div>
      </section>

      <TimelineGroup />
    </>
  );
}
