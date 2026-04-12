import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import TextRevealHidden from "@/components/text-reveal-hidden";
import { TextReveal, TextScrollReveal } from "@/components/text-scroll-reveal";
import { cn } from "@/lib/utils";
// import CardStacking from "@/components/card-stacking";

export const Route = createFileRoute("/referencias")({
  head: () => ({
    meta: [
      {
        title: "Referências",
      },
      {
        name: "description",
        content:
          "Lista de referências citadas no site do Projeto Caminhos do Brasil Central",
      },
    ],
  }),
  component: References,
});

function References() {
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

        <TextScrollReveal>
          <TextReveal text="Esta animação" spanText="textual" />
          <TextReveal text="Foi aplicada" spanText="utilizando" />
          <TextReveal text="Para fazer" spanText="uma frescura" />
          <TextReveal text="Estilização" spanText="destacada" />
          <TextReveal text="De texto" spanText="sem noção" />
        </TextScrollReveal>
      </Main>
    </>
  );
}
