import Title from "@/components/title";
import Main from "@/layouts/main";
import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/images/agenda/encontro-pioneiros_nova-xavantina_mar-2026.webp";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/agenda")({
  component: Events,
});

type TimeProps = {
  datetime: string;
  day: string;
  month: string;
};

const Time = ({ datetime, day, month }: TimeProps) => {
  return (
    <time className="text-tan-400 flex flex-col justify-center items-end gap-y-px pr-12" dateTime={datetime}>
      <span className="text-5xl font-bold -tracking-widest">{day}</span>
      <span className="text-xl font-bold uppercase tracking-tight">{month}</span>
    </time>
  );
};

function Events() {
  return (
    <>
      <Main className="max-w-5xl mx-auto pb:12 xl:pb-24">
        <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black text-center">
          Agenda <span className="text-tan-400">de Eventos</span>
        </Title>
        <section className="flex flex-col items-center gap-y-6">
          <article className="rounded-2xl shadow-lg bg-tan-100 flex divide-x divide-dashed divide-tan-200 py-4 px-8">
            <Time datetime="2026-03-07T19:00-08:00" day="07" month="Mar" />
            <div className="flex-1 flex justify-center items-center">
              <div className="rounded-2xl h-24 w-32 overflow-hidden">
                <img className="h-full w-full object-cover" src={photo} alt="" />
              </div>
            </div>
            <div className="flex-2 flex flex-col justify-center items-start gap-y-2.5 pl-12">
              <h2 className="text-2xl text-bone-800 font-inter font-bold uppercase leading-none -tracking-wide">
                Participação no XXXV Encontro dos Pioneiros da Marcha para o Oeste
              </h2>
              <ul className="text-bone-600 font-medium leading-5">
                <li className="flex justify-start items-center gap-x-1">
                  <MapPin className="text-mate-duo-400" />
                  Pavilhão de Eventos da EUBIOSE, Nova Xavantina - MT
                </li>
              </ul>
            </div>
          </article>
        </section>
      </Main>
    </>
  );
}
