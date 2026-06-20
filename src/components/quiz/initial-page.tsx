import { useQueryQuizHome } from "@/hooks/queries/pages-and-posts-queries";
import { cn } from "@/lib/utils";
import { BadgeCheck, CircleQuestionMark, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

const InitialPage = ({ onStart }: { onStart: () => void}) => {
  const { data } = useQueryQuizHome("/almanaque-digital/teste-de-conhecimento")

  return (
    <div className="h-[calc(100vh-80px)] 2xl:h-[calc(100vh-104px)] w-full max-w-3xl mx-auto flex flex-col justify-center gap-y-8 max-sm:px-4">
      <h2 className="text-[clamp(1.5rem,4vw,3rem)] text-tan-700 dark:text-dark-contrast-100 font-cabinet font-black text-center">
        Informaçãoes <span className="text-tan-500 dark:text-dark-contrast-50">Gerais</span>
      </h2>
      <div className="max-sm:px-4 flex justify-center items-center gap-3 sm:gap-8">
        <div className="flex-1 bg-bone-200 dark:bg-dark-800 rounded-2xl md:h-36 flex flex-col gap-2 justify-between items-center p-3 md:p-4">
          <CircleQuestionMark className="text-bone-500 dark:text-dark-300 size-[clamp(1.5rem,5vw,2rem)]" />
          <h2 className="text-bone-600 dark:text-dark-500 text-[clamp(1.25rem,5vw,2rem)] font-bold leading-none tracking-tighter">{data.page.quiz.totalQuestions}</h2>
          <h2 className="text-bone-500 dark:text-dark-200 font-medium leading-none">Questões</h2>
        </div>
        <div className="flex-1 bg-bone-300/50 dark:bg-dark-900 rounded-2xl md:h-36 flex flex-col justify-between items-center p-3 md:p-4">
          <Clock className="text-bone-500 dark:text-dark-300 size-[clamp(1.5rem,5vw,2rem)]" />
          <h2 className="text-bone-600 dark:text-dark-500 text-[clamp(1.25rem,5vw,2rem)] font-bold leading-none tracking-tighter">{data.page.quiz.countdown}:00</h2>
          <h2 className="text-bone-500 dark:text-dark-200 font-medium leading-none">Tempo</h2>
        </div>
        <div className="flex-1 bg-bone-200 dark:bg-dark-800 rounded-2xl md:h-36 flex flex-col gap-2 justify-between items-center p-3 md:p-4">
          <BadgeCheck className="text-bone-500 dark:text-dark-300 size-[clamp(1.5rem,5vw,2rem)]" />
          <h2 className="text-bone-600 dark:text-dark-500 text-[clamp(1.25rem,5vw,2rem)] font-bold leading-none tracking-tighter">100%</h2>
          <h2 className="text-bone-500 dark:text-dark-200 font-medium leading-none">Correção</h2>
        </div>
      </div>
      <div className="shadow-lg rounded-2xl bg-tan-100 dark:bg-dark-900 max-w-full gap-2 flex flex-col gap-y-8 p-4 md:p-8">
        <h2 className="text-xl text-tan-700 dark:text-dark-400 font-bold uppercase tracking-tighter w-max mx-auto">Regras e Informes</h2>
        <ol className="list-decimal text-sm text-tan-800 dark:text-white font-inter max-w-full space-y-1.5 pl-6">
          {
            data.page.quiz.rules.map((rule, index) => (
              <li key={index}>{rule.message}</li>
            ))
          }
        </ol>
      </div>
      <Link
        className={cn(
          "text-white text-center font-bold",
          "rounded-none bg-bone-500 dark:bg-dark-contrast-100 hover:bg-bone-600",
          "dark:hover:bg-dark-contrast-100/80 text-lg! py-6! uppercase cursor-pointer",
          "border-0 dark:text-dark-950 transition-colors duration-500 w-72 mx-auto tracking-tighter",
        )}
        to="/almanaque-digital/teste-de-conhecimento/quiz"
        onClick={onStart}
      >
        Responder Questões
      </Link>
    </div>
  );
};

export default InitialPage;
