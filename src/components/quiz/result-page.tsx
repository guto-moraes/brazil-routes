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
  const percentage = (amountCorrectAnswer * 100) / totalQuestions; //Check the percentage of correct answers
  const index =
    percentage < 50 ? 0 : percentage >= 50 && percentage <= 70 ? 1 : percentage > 70 && percentage <= 90 ? 2 : 3;

  return (
    <div className="rounded-2xl bg-bege-50 p-6 flex flex-col md:flex-row gap-8">
      <figure className="flex-2 h-[95%] w-full hidden md:flex justify-center items-center my-auto">
        <img
          className="h-full w-full object-cover object-center"
          src={notice[index].imgSrc.node.sourceUrl}
          alt={notice[index].title}
        />
      </figure>
      <div className="flex-3 flex flex-col justify-around items-center gap-y-4">
        <h2 className="text-[clamp(1.25rem,4vw,1.75rem)] text-bone-600 font-cabinet font-black text-center">
          {notice[index].title}
        </h2>
        <div className="rounded-full bg-bone-500 size-32 flex flex-col justify-center items-center">
          <h3 className="text-xs text-bone-100 font-semibold uppercase tracking-tighter">Você acertou</h3>
          <p className="text-4xl text-bone-100">
            <span className="font-black">{amountCorrectAnswer}</span>
            <span className="opacity-50">/{totalQuestions}</span>
          </p>
        </div>
        <p className="text-sm text-bone-700 text-center text-balance font-medium">{notice[index].message}</p>
      </div>
    </div>
  );
};

const QuestionItem = ({ isCorrect, questionNumber }: { isCorrect: boolean; questionNumber: number }) => (
  <li
    className={cn(
      "rounded-md bg-bege-50 border-2 uppercase tracking-tighter py-2 px-3 flex justify-between items-center",
      isCorrect ? "border-darkgreen-500 text-darkgreen-600" : "border-terracotta-500 text-terracotta-600",
    )}
  >
    <span>Questão {questionNumber.toString().padStart(2, "0")}</span>
    {isCorrect ? (
      <CircleCheck className="size-5 text-darkgreen-500" />
    ) : (
      <CircleX className="size-5 text-terracotta-600" />
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
        <ul className="columns-2 sm:columns-3 lg:columns-5 space-y-2.5">
          {results.map((item) => (
            <QuestionItem key={item.question} questionNumber={item.question} isCorrect={item.correct} />
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          "rounded-none text-white bg-bone-500 hover:bg-blue-retro-500 text-lg! py-6! uppercase",
          "border-0 transition-colors duration-500 w-74 mx-auto tracking-tighter cursor-pointer mt-6",
        )}
        onClick={() => onPage("initial")}
      >
        Fazer um novo Questionário
      </Button>
    </div>
  );
};

export default ResultPage;
