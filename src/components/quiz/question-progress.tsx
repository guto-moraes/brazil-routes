import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { ChevronRight, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const QuestionProgress = ({
  totalQuestions,
  answeredQuestions,
}: {
  totalQuestions: number;
  answeredQuestions: number[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const amount: number[] = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <Collapsible className="w-full data-open:shadow-lg data-open:rounded-b-lg" open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "rounded-t-lg rounded-b-lg aria-expanded:rounded-t-lg aria-expanded:rounded-b-none",
          "bg-blue-retro-500 dark:bg-dark-contrast-100 w-full py-3 px-2 flex gap-x-0.5",
          "justify-between items-center group cursor-pointer",
          "transition-all duration-300 shadow-lg aria-expanded:shadow-none",
        )}
      >
        <p className="text-xs text-white dark:text-dark-950 font-medium uppercase tracking-tighter">Ver Progresso</p>
        <ChevronRight className="size-4 text-white dark:text-dark-950 rotate-90 group-aria-expanded:-rotate-90 transition-transform duration-500" />
        <span className="sr-only">Alternar exibição de detalhes</span>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "bg-bege-50 dark:bg-dark-800 text-xs font-medium uppercase divide-y divide-tan-200",
          "dark:divide-dark-900 tracking-tighter rounded-b-lg transition-all duration-300",
        )}
      >
        {amount.map((questionNumber) => (
          <div className="w-full flex gap-x-2 items-center justify-between py-2.5 px-2" key={questionNumber}>
            <span
              className={cn(
                answeredQuestions.includes(questionNumber)
                  ? "text-blue-retro-700 dark:text-dark-contrast-100"
                  : "text-tan-600 dark:text-white",
              )}
            >
              Questão {questionNumber}
            </span>
            <CircleCheck
              className={cn(
                "size-5 stroke-tan-100",
                answeredQuestions.includes(questionNumber)
                  ? "fill-blue-retro-500 dark:fill-dark-contrast-100 dark:stroke-dark-800"
                  : "fill-tan-600 dark:fill-dark-500 dark:stroke-dark-800",
              )}
            />
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default QuestionProgress;
