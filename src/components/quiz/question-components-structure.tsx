import { cn, sanitizedData } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const indexes: string[] = ["A", "B", "C", "D", "E"];

//Encapisulador do componente
const QuestionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full w-full md:w-[90%] flex gap-8 px-8">{children}</div>
);

//Container do componente
const QuestionContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="flex-3 max-w-full flex flex-col justify-start items-center gap-y-8">{children}</section>
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
  <div
    className={cn("[&_p]:text-[clamp(1rem,4vw,1.45rem)] [&_p]:text-tan-700 [&_p]:font-medium [&_p]:leading-7")}
    dangerouslySetInnerHTML={sanitizedData(statement)}
  />
);

//Lista de Respostas
const QuestionAnswerList = ({ children }: { children: React.ReactNode }) => (
  <ul className="w-full flex flex-col gap-y-5 z-10">{children}</ul>
);

//Opção de Resposta
const QuestionAnswerOption = ({
  index,
  answerCorrect,
  answerSelected,
  option,
  onAnswer,
}: {
  index: number;
  answerCorrect: number;
  answerSelected: number;
  option: string;
  onAnswer: (answerSelected: number, index: number) => void;
}) => {
  return (
    <li
      className={cn(
        "rounded-xs outline-2  outline-offset-2 bg-bege-50 flex justify-between items-center p-0.5 group",
        "outline-tan-600 data-[correct=true]:outline-darkgreen-500 data-[selected=true]:outline-terracotta-700",
      )}
      data-correct={answerCorrect === index && answerSelected !== -1}
      data-selected={answerCorrect !== answerSelected && answerSelected === index}
    >
      <button
        role="radio"
        aria-checked={answerCorrect === index}
        aria-pressed={answerSelected === index}
        className={cn(
          "w-full flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600",
          "group-data-[correct=true]:text-darkgreen-500 group-data-[selected=true]:text-terracotta-700",
        )}
        onClick={() => onAnswer(index, index)}
      >
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
      {answerCorrect === index && answerSelected !== -1 && <CircleCheck className="text-darkgreen-500" />}
      {answerCorrect !== answerSelected && answerSelected === index && <CircleX className="text-terracotta-600" />}
    </li>
  );
};

const QuestionAnswerExplainBullet = ({ alert, text }: { alert: boolean; text: string }) => (
  <span
    className={cn(
      "rounded-full size-5.5 inline-block text-white",
      "font-medium leading-tight",
      alert ? "bg-blue-retro-600" : "bg-chocolate-600",
    )}
  >
    {text}
  </span>
);

const QuestionAnswerExplain = ({
  answerCorrect,
  answerSelected,
}: {
  answerCorrect: number;
  answerSelected: number;
}) => {
  const alert = answerCorrect === answerSelected;
  return (
    <div
      className={cn(
        "rounded-sm border-l-3 shadow-lg py-4 px-3 text-center w-full",
        alert
          ? "border-blue-retro-600 bg-blue-retro-50 text-blue-retro-600"
          : "border-chocolate-600 bg-bege-100 text-chocolate-600",
      )}
    >
      {alert ? (
        <h3 className="font-semibold">Você acertou esta questão!</h3>
      ) : (
        <>
          <h3 className="font-semibold">Você errou esta questão!</h3>
          <p className="leading-8">
            A resposta marcada foi a letra <QuestionAnswerExplainBullet alert={alert} text={indexes[answerSelected]} />,
            porém, a correta é <QuestionAnswerExplainBullet alert={alert} text={indexes[answerCorrect]} />.
          </p>
        </>
      )}
    </div>
  );
};

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
