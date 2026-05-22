import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeCheck, CircleQuestionMark, Clock } from "lucide-react";

const InitialPage = () => {
  return (
    <div className="w-2/3 max-w-full mx-auto flex flex-col gap-y-8">
      <h2 className="text-[clamp(1.25rem,4vw,2rem)] text-tan-700 font-cabinet font-black text-center">
        Informaçãoes <span className="text-tan-500">sobre o questionário</span>
      </h2>
      <div className="max-sm:px-4 grid grid-cols-3 gap-8">
        <div className="bg-tan-200 rounded-2xl h-48 flex flex-col justify-between items-center p-8">
          <CircleQuestionMark className="text-tan-500 size-10" />
          <h2 className="text-tan-600 text-4xl font-bold leading-none tracking-tighter">10</h2>
          <h2 className="text-tan-500 font-medium leading-none">Questões</h2>
        </div>
        <div className="bg-tan-300/50 rounded-2xl h-48 flex flex-col justify-between items-center p-8">
          <Clock className="text-tan-500 size-10" />
          <h2 className="text-tan-600 text-4xl font-bold leading-none tracking-tighter">5:00</h2>
          <h2 className="text-tan-500 font-medium leading-none">Tempo</h2>
        </div>
        <div className="bg-tan-200 rounded-2xl h-48 flex flex-col justify-between items-center p-8">
          <BadgeCheck className="text-tan-500 size-10" />
          <h2 className="text-tan-600 text-4xl font-bold leading-none tracking-tighter">100%</h2>
          <h2 className="text-tan-500 font-medium leading-none">Correção</h2>
        </div>
      </div>
      <div className="shadow-lg rounded-2xl bg-tan-100 max-w-full flex flex-col gap-y-8 p-8">
        <h2 className="text-xl text-tan-700 font-bold uppercase -tracking-wider w-max mx-auto">Regras e Informes</h2>
        <ol className="list-decimal text-sm text-tan-800 font-inter max-w-full space-y-1.5 pl-6">
          <li>Cada questão possui resposta de múltipla escolha;</li>
          <li>O tempo total para responder o questionário é de 5 minutos;</li>
          <li>Explicações para as respostas, certas ou erradas, só serão exibidas após a submissão;</li>
          <li>Não é possível rever respostas de questionários concluídos;</li>
          <li>Antes de finalizar o questionário é possível voltar para rever as questões já respondidas.</li>
        </ol>
      </div>
      <Button
        className={cn(
          "rounded-none bg-tan-500 hover:bg-tan-600 text-lg! py-6! uppercase",
          "border-0 transition-colors duration-500 w-72 mx-auto tracking-tighter",
        )}
      >
        Responder Questões
      </Button>
    </div>
  );
};

export default InitialPage;
