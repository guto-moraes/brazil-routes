import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX } from "lucide-react";
import belowAverage from "@/assets/images/quiz/below-average.svg";
import average from "@/assets/images/quiz/average.svg";
import aboveAverage from "@/assets/images/quiz/above-average.svg";
import theBest from "@/assets/images/quiz/the-best.svg";

type NoticeTypes = {
  imageSrc: string;
  title: string;
  message: string;
};

const notices: NoticeTypes[] = [
  {
    imageSrc: belowAverage,
    title: "Oxê! Como assim?",
    message:
      "Deste vez seu desempenho não foi bom. Mas não desista! Releia o Alamanque e faça um novo questionário. Temos certeza que seu resultado será melhor.",
  },
  {
    imageSrc: average,
    title: "Bom! Mas que tal melhorar?",
    message:
      "O seu desempenho não foi ruim, porém, acreditamos no seu potencial. Releia o Alamanque e faça um novo questionário e certamente você se sairá melhor.",
  },
  {
    imageSrc: aboveAverage,
    title: "Uau! Você sabe muito.",
    message:
      "Parabéns! O seu desempenho foi muito bom. Um desafio: que tal fazer um novo questionário e tentar gabaritar todas as questões?",
  },
  {
    imageSrc: theBest,
    title: "Você gabaritou!",
    message:
      "Incrível! Você acertou todas as questões. Que tal tentar um novo questionário? Novas questões podem ser apresentadas para você testar ainda mais seu conhecimento.",
  },
];

const QuestionNotice = ({ amount }: { amount: number }) => {
  const notice: NoticeTypes =
    amount < 5
      ? notices[0]
      : amount >= 5 && amount <= 7
        ? notices[1]
        : amount > 7 && amount <= 9
          ? notices[2]
          : notices[3];

  return (
    <div className="rounded-2xl bg-bege-50 p-6 flex gap-8">
      <figure className="flex-2 h-[95%] w-full flex justify-center items-center my-auto">
        <img className="h-full w-full object-cover object-center" src={notice.imageSrc} alt={notice.title} />
      </figure>
      <div className="flex-3 flex flex-col justify-around items-center gap-y-4">
        <h2 className="text-[clamp(1.25rem,4vw,2rem)] text-bone-600 font-cabinet font-black text-center">
          {notice.title}
        </h2>
        <div className="rounded-full bg-bone-500 size-32 flex flex-col justify-center items-center">
          <h3 className="text-xs text-bone-100 font-semibold uppercase -tracking-wider">Você acertou</h3>
          <p className="text-4xl text-bone-100">
            <span className="font-black">{amount}</span>
            <span className="opacity-50">/10</span>
          </p>
        </div>
        <p className="text-sm text-bone-700 text-center text-balance font-medium">{notice.message}</p>
      </div>
    </div>
  );
};

const QuestionItem = ({ isCorrect, questionNumber }: { isCorrect: boolean; questionNumber: number }) => (
  <li
    className={cn(
      "rounded-md bg-bege-50 border-2 uppercase -tracking-wider py-2 px-3 flex justify-between items-center",
      isCorrect ? "border-darkgreen-500 text-darkgreen-600" : "border-terracotta-500 text-terracotta-600",
    )}
  >
    <span>Questão {questionNumber.toString().padStart(2, '0')}</span>
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

const ResultPage = ({ results, onPage }: { results: QuizResultsTypes[], onPage: (page: string) => void }) => {
  const totalCorrectAnswer = results.filter(item => item.correct);

  return (
    <div className="h-full w-full md:w-[90%] flex flex-col justify-around gap-y-6 px-8">
      <QuestionNotice amount={totalCorrectAnswer.length} />
      <div className="w-full">
        <ul className="columns-2 space-y-2.5">
          {
            results.map((item) => (
              <QuestionItem key={item.question} questionNumber={item.question}  isCorrect={item.correct} />
            ))
          }
        </ul>
      </div>
      <Button
        className={cn(
          "rounded-none text-white bg-bone-500 hover:bg-blue-retro-500 text-lg! py-6! uppercase",
          "border-0 transition-colors duration-500 w-74 mx-auto tracking-tighter cursor-pointer",
        )}
        onClick={() => onPage("initial")}
      >
        Fazer um novo Questionário
      </Button>
    </div>
  );
};

export default ResultPage;
