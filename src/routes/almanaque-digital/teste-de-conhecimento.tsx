import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import quizz from "@/assets/images/quiz.webp";
import { cn } from "@/lib/utils";
import Quiz from "@/components/quiz";

export const Route = createFileRoute("/almanaque-digital/teste-de-conhecimento")({
  component: QuizzPage,
});

function QuizzPage() {
  return (
    <Main className="grid grid-cols-2 lg:h-[calc(100svh-104px)]">
      <div className="col-span1 flex justify-center items-center py-16">
        <div className="flex flex-col">
          <figure className="w-72 max-w-full mx-auto">
            <img className="h-full w-full object-cover object-center" src={quizz} alt="" />
          </figure>
          <h1 className="text-[clamp(1.25rem,4vw,2rem)] text-tan-700 font-cabinet font-black text-center">
            Teste seu <span className="text-tan-500">Conhecimento</span>
          </h1>
          <p
            className={cn(
              "text-[clamp(0.85rem,2vw,1.15rem)] text-tan-800 text-justify",
              "text-pretty hyphens-auto max-w-2xl max-sm:px-4 mt-8",
            )}
          >
            Este teste de conhecimento faz uso das informações contidas no{" "}
            <strong>Almanaque Desbravando o sertão, descobrindo o Brasil</strong>. O objetivo é ajudá-lo a fixar o
            conhecimento que você obteve a partir da leitura do almanaque sobre os processos que tratam da{" "}
            <strong>Expedição Roncador-Xingu</strong> e da <strong>Fundação Brasil Central</strong> na região do Vale do
            Araguaia, em Mato Grosso.
          </p>
        </div>
      </div>
      <div className="col-span1 bg-tan-200/50 flex justify-center items-center py-16">
        <Quiz />
      </div>
    </Main>
  );
}
