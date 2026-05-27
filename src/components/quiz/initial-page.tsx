import { Button } from "@/components/ui/button";
import { useQueryQuizHome } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import { BadgeCheck, CircleQuestionMark, Clock } from "lucide-react";

const InitialPage = ({ onStart }: { onStart: () => void}) => {
  const { data } = useQueryQuizHome("/almanaque-digital/teste-de-conhecimento")

  return (
    <div className="w-full md:w-2/3 max-w-full mx-auto flex flex-col gap-y-8 max-sm:px-4">
      <h2 className="text-[clamp(1.25rem,4vw,2rem)] text-tan-700 font-cabinet font-black text-center">
        Informaçãoes <span className="text-tan-500">sobre o questionário</span>
      </h2>
      <div className="max-sm:px-4 grid grid-cols-3 gap-3 sm:gap-8">
        <div className="bg-bone-200 rounded-2xl md:h-48 flex flex-col gap-2 justify-between items-center p-3 md:p-8">
          <CircleQuestionMark className="text-bone-500 size-[clamp(1.85rem,5vw,2.5rem)]" />
          <h2 className="text-bone-600 text-[clamp(1.5rem,5vw,2.25rem)] font-bold leading-none tracking-tighter">{data.page.quiz.totalQuestions}</h2>
          <h2 className="text-bone-500 font-medium leading-none">Questões</h2>
        </div>
        <div className="bg-bone-300/50 rounded-2xl md:h-48 flex flex-col justify-between items-center p-3 md:p-8">
          <Clock className="text-bone-500 size-[clamp(1.85rem,5vw,2.5rem)]" />
          <h2 className="text-bone-600 text-[clamp(1.5rem,5vw,2.25rem)] font-bold leading-none tracking-tighter">{data.page.quiz.countdown}:00</h2>
          <h2 className="text-bone-500 font-medium leading-none">Tempo</h2>
        </div>
        <div className="bg-bone-200 rounded-2xl md:h-48 flex flex-col gap-2 justify-between items-center p-3 md:p-8">
          <BadgeCheck className="text-bone-500 size-[clamp(1.85rem,5vw,2.5rem)]" />
          <h2 className="text-bone-600 text-[clamp(1.5rem,5vw,2.25rem)] font-bold leading-none tracking-tighter">100%</h2>
          <h2 className="text-bone-500 font-medium leading-none">Correção</h2>
        </div>
      </div>
      <div className="shadow-lg rounded-2xl bg-tan-100 max-w-full gap-2 flex flex-col gap-y-8 p-4 md:p-8">
        <h2 className="text-xl text-tan-700 font-bold uppercase tracking-tighter w-max mx-auto">Regras e Informes</h2>
        <ol className="list-decimal text-sm text-tan-800 font-inter max-w-full space-y-1.5 pl-6">
          {
            data.page.quiz.rules.map((rule, index) => (
              <li key={index}>{rule.message}</li>
            ))
          }
        </ol>
      </div>
      <Button
        className={cn(
          "rounded-none bg-bone-500 hover:bg-bone-600 text-lg! py-6! uppercase cursor-pointer",
          "border-0 transition-colors duration-500 w-72 mx-auto tracking-tighter",
        )}
        onClick={onStart}
      >
        Responder Questões
      </Button>
    </div>
  );
};

export default InitialPage;
