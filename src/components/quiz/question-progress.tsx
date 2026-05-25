import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRight, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const QuestionProgress = ({ totalQuestions, answeredQuestions }: { totalQuestions: number; answeredQuestions: number[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const amount: number[] = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <Collapsible className="w-full data-open:shadow-lg data-open:rounded-b-lg" open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "rounded-t-lg rounded-b-lg aria-expanded:rounded-t-lg aria-expanded:rounded-b-none",
          "bg-blue-retro-500 w-full py-3 px-2 flex gap-x-0.5 justify-between items-center group cursor-pointer",
          "transition-all duration-300 shadow-lg aria-expanded:shadow-none",
        )}
      >
        <p className="text-xs text-white font-medium uppercase -tracking-wider">Visualizar Progresso</p>
        <ChevronRight className="size-4 text-white rotate-90 group-aria-expanded:-rotate-90 transition-transform duration-500" />
        <span className="sr-only">Toggle details</span>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "bg-bege-50 text-xs text-tan-600 font-medium uppercase divide-y",
          "divide-tan-200 -tracking-wider rounded-b-lg transition-all duration-300",
        )}
      >
        {amount.map((questionNumber) => (
          <div className="w-full flex gap-x-2 items-center justify-between py-2.5 px-2" key={questionNumber}>
            <span className={cn(answeredQuestions.includes(questionNumber) ? "text-blue-retro-700" : undefined)}>
              Questão {questionNumber}
            </span>
            <CircleCheck
              className={cn(
                "size-5 stroke-tan-100",
                answeredQuestions.includes(questionNumber) ? "fill-blue-retro-500" : "fill-tan-600",
              )}
            />
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default QuestionProgress;
