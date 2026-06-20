import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX } from "lucide-react";
import { useQueryQuizHome } from "@/hooks/queries/pages-and-posts-queries";

const QuestionNotice = ({
  amountCorrectAnswer,
  totalQuestions,
}: {
  amountCorrectAnswer: number;
  totalQuestions: number;
}) => {
  const { content: notice } = useQueryQuizHome("/almanaque-digital/teste-de-conhecimento").data.page.quiz;
  const percentage = (amountCorrectAnswer * 100) / totalQuestions; // Check the percentage of correct answers
  const index =
    percentage < 50 ? 0 : percentage >= 50 && percentage <= 70 ? 1 : percentage > 70 && percentage <= 90 ? 2 : 3;

  return (
    <div className="rounded-2xl bg-bege-50 dark:bg-dark-900 p-6 flex flex-col md:flex-row gap-8">
      <figure className="flex-2 h-[95%] w-full hidden md:flex justify-center items-center my-auto">
        <img
          className={cn(
            "h-full w-full object-cover object-center dark:invert-80 dark:brightness-70",
            "dark:contrast-75 dark:hue-rotate-260 dark:saturate-150",
          )}
          src={notice[index].imgSrc.node.sourceUrl}
          alt={notice[index].title}
        />
      </figure>
      <div className="flex-3 flex flex-col justify-around items-center gap-y-4">
        <h2 className="text-[clamp(1.25rem,4vw,1.75rem)] text-bone-600 dark:text-white font-cabinet font-black text-center">
          {notice[index].title}
        </h2>
        <div
          className={cn(
            "rounded-full bg-bone-500 dark:bg-dark-950 text-bone-100 size-32",
            "dark:text-dark-contrast-100 flex flex-col justify-center items-center",
          )}
        >
          <h3 className="text-xs font-semibold uppercase tracking-tighter">Você acertou</h3>
          <p className="text-4xl">
            <span className="font-black">{amountCorrectAnswer}</span>
            <span className="opacity-50">/{totalQuestions}</span>
          </p>
        </div>
        <p className="text-sm text-bone-700 dark:text-white text-center text-balance font-medium">
          {notice[index].message}
        </p>
      </div>
    </div>
  );
};

const QuestionItem = ({ isCorrect, questionNumber }: { isCorrect: boolean; questionNumber: number }) => (
  <li
    className={cn(
      "text-xs rounded-md bg-bege-50 dark:bg-dark-950 border-2 uppercase tracking-tighter py-2 px-3 flex justify-between items-center",
      isCorrect
        ? "border-darkgreen-500 dark:border-green-400 text-darkgreen-600 dark:text-green-400"
        : "border-terracotta-500 dark:border-rose-500 text-terracotta-600 dark:text-rose-600",
    )}
  >
    <span>Questão {questionNumber.toString().padStart(2, "0")}</span>
    {isCorrect ? (
      <CircleCheck className="size-5 text-darkgreen-500 dark:text-green-400" />
    ) : (
      <CircleX className="size-5 text-terracotta-600 dark:text-rose-600" />
    )}
  </li>
);

type QuizResultsTypes = {
  question: number;
  correct: boolean;
};

const ResultPage = ({
  totalQuestions,
  results,
  onPage,
}: {
  totalQuestions: number;
  results: QuizResultsTypes[];
  onPage: (page: string) => void;
}) => {
  const totalCorrectAnswer = results.filter((item) => item.correct);

  return (
    <div className="h-full w-full flex flex-col justify-around gap-y-6">
      <QuestionNotice totalQuestions={totalQuestions} amountCorrectAnswer={totalCorrectAnswer.length} />
      <div className="w-full">
        <ul className="columns-2 sm:columns-3 lg:columns-4 space-y-2.5">
          {results.map((item) => (
            <QuestionItem key={item.question} questionNumber={item.question} isCorrect={item.correct} />
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          "rounded-none text-white dark:text-dark-50 bg-bone-500 dark:bg-blue-retro-400",
          "hover:bg-blue-retro-500 dark:hover:bg-blue-retro-400/80 text-lg! py-6! uppercase",
          "border-0 mt-6 transition-colors duration-500 w-74 mx-auto tracking-tighter cursor-pointer",
        )}
        onClick={() => onPage("initial")}
      >
        Fazer um novo Questionário
      </Button>
    </div>
  );
};

export default ResultPage;
