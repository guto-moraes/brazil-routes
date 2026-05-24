import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const indexes: string[] = ["A", "B", "C", "D", "E"];

//Encapisulador do componente
const QuestionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full w-full md:w-[90%] flex gap-8 px-8">{children}</div>
);

//Container do componente
const QuestionContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="flex-3 max-w-full flex flex-col justify-between items-center gap-y-8">{children}</section>
);

//Marcador do número da Questão
const QuestionBadge = ({ questionNumber }: { questionNumber: string | number }) => (
  <span
    className={cn(
      "rounded-full border-2 border-blue-retro-500 text-sm text-blue-retro-500",
      "font-medium uppercase -tracking-wide w-max py-1.5 px-3",
    )}
  >
    Questão {questionNumber}
  </span>
);

// Enunciado da Questão
const QuestionStatement = ({ statement }: { statement: string }) => (
  <p className={cn("text-[clamp(1rem,4vw,1.45rem)] text-tan-700 font-medium leading-7")}>{statement}</p>
);

//Lista de Respostas
const QuestionAnswerList = ({ children }: { children: React.ReactNode }) => (
  <ul className="w-full flex flex-col gap-y-5 z-10">{children}</ul>
);

//Opção de Resposta
const QuestionAnswerOption = ({
  index,
  correct,
  selectedAnswer,
  option,
  onAnswer,
}: {
  index: number;
  correct: number;
  selectedAnswer: number;
  option: string;
  onAnswer: (selected: number) => void;
}) => {
  return (
    <li
      className={cn(
        "rounded-xs outline-2  outline-offset-2 bg-bege-50 flex justify-between items-center p-0.5 group",
        "outline-tan-600 data-[correct=true]:outline-darkgreen-500 data-[selected=true]:outline-terracotta-700",
      )}
      data-correct={correct === index && selectedAnswer !== -1}
      data-selected={selectedAnswer === index && selectedAnswer !== correct}
    >
      <button
        role="radio"
        aria-checked={correct === index}
        aria-pressed={selectedAnswer === index}
        className={cn(
          "flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600",
          "group-data-[correct=true]:text-darkgreen-500 group-data-[selected=true]:text-terracotta-700",
        )}
        onClick={() => onAnswer(index)}
      >
        {" "}
        <span
          className={cn(
            "rounded-xs h-full size-10 text-xl text-white font-medium bg-tan-600 flex justify-center items-center",
            "group-data-[correct=true]:bg-darkgreen-500 group-data-[selected=true]:bg-terracotta-700",
          )}
        >
          {indexes[index]}
        </span>
        {option}
      </button>
      {correct === index && selectedAnswer === index && <CircleCheck className="text-darkgreen-500" />}
      {correct !== index && selectedAnswer === index && <CircleX className="text-terracotta-600" />}
    </li>
  );
};

const QuestionAnswerExplainBullet = ({ text }: { text: string }) => (
  <span className={cn("rounded-full size-5.5 inline-block bg-blue-retro-600 text-white", "font-medium leading-tight")}>
    {text}
  </span>
);

const QuestionAnswerExplain = ({ correct, selected }: { correct: number; selected: number }) =>
  correct === selected ? (
    <div
      className={cn(
        "rounded-sm border-l-3 border-blue-retro-600 bg-blue-retro-50 py-2 px-3",
        "text-center text-blue-retro-600",
      )}
    >
      <h3 className="font-semibold">Você acertou esta questão!</h3>
    </div>
  ) : (
    <div
      className={cn(
        "rounded-sm border-l-3 border-blue-retro-600 bg-blue-retro-50 py-2 px-3",
        "text-center text-blue-retro-600",
      )}
    >
      <h3 className="font-semibold">Você errou esta questão!</h3>
      <p>
        A resposta marcada foi a letra <QuestionAnswerExplainBullet text={indexes[selected]} />, porém, a correta é{" "}
        <QuestionAnswerExplainBullet text={indexes[correct]} />.
      </p>
    </div>
  );

const QuestionSidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="flex-1 flex flex-col justify-start items-center gap-y-6">{children}</aside>
);

export {
  QuestionWrapper,
  QuestionContainer,
  QuestionBadge,
  QuestionStatement,
  QuestionAnswerList,
  QuestionAnswerOption,
  QuestionAnswerExplain,
  QuestionSidebar,
};
