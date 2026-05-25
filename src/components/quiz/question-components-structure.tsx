import { cn, sanitizedData } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";
import { Dialog, DialogContent, DialogPopup, DialogTrigger } from "../ui/dialog";

const indexes: string[] = ["A", "B", "C", "D", "E"];

//Encapisulador do componente
const QuestionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full w-full md:w-[90%] flex gap-8 px-8 overflow-hidden">{children}</div>
);

//Container do componente
const QuestionContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="flex-3 max-w-full flex flex-col justify-start items-start gap-y-10">{children}</section>
);

// Enunciado da Questão
const QuestionBadgeAndStatement = ({ questionNumber, statement }: { questionNumber: number | string; statement: string }) => (
  <div className="flex flex-col gap-y-2.5">
    <span
      className={cn(
        "rounded-full border-2 border-blue-retro-500 text-xs text-blue-retro-500",
        "font-medium uppercase -tracking-wide w-max py-1 px-3",
      )}
    >
      Questão {questionNumber}
    </span>
    <div 
      className="[&_p]:text-[clamp(1rem,4vw,1.15rem)] [&_p]:text-tan-700 [&_p]:font-medium [&_p]:leading-7"
      dangerouslySetInnerHTML={sanitizedData(statement)}
    />
  </div>
);

//Lista de Respostas
const QuestionAnswerList = ({ children }: { children: React.ReactNode }) => (
  <ul className="w-full flex flex-col gap-y-5">{children}</ul>
);

//Opção de Resposta
const QuestionAnswerOption = ({
  index,
  correctAnswer,
  selectedAnswer,
  option,
  onAnswer,
}: {
  index: number;
  correctAnswer: number;
  selectedAnswer: number;
  option: string;
  onAnswer: (selectedAnswer: number, index: number) => void;
}) => {
  return (
    <li
      className={cn(
        "rounded-xs outline-2  outline-offset-2 bg-bege-50 flex justify-between items-center p-0.5 group",
        "outline-tan-600 data-[correct=true]:outline-darkgreen-500 data-[selected=true]:outline-terracotta-700",
      )}
      data-correct={correctAnswer === index && selectedAnswer !== -1}
      data-selected={correctAnswer !== selectedAnswer && selectedAnswer === index}
    >
      <button
        role="radio"
        aria-checked={correctAnswer === index}
        aria-pressed={selectedAnswer === index}
        className={cn(
          "w-full flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600 text-sm text-left",
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
      {correctAnswer === index && selectedAnswer !== -1 && <CircleCheck className="text-darkgreen-500" />}
      {correctAnswer !== selectedAnswer && selectedAnswer === index && <CircleX className="text-terracotta-600" />}
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
  correctAnswer,
  selectedAnswer,
  explain,
}: {
  correctAnswer: number;
  selectedAnswer: number;
  explain: string;
}) => {
  const alert = correctAnswer === selectedAnswer;
  return (
    <div
      className={cn(
        "rounded-sm border-l-3 shadow-md py-2 px-3 text-center w-full",
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
            A resposta marcada foi a letra <QuestionAnswerExplainBullet alert={alert} text={indexes[selectedAnswer]} />,
            porém, a correta é <QuestionAnswerExplainBullet alert={alert} text={indexes[correctAnswer]} />.
          </p>
        </>
      )}
      <Dialog>
        <DialogTrigger
          className={cn(
            "rounded-xs bg-bone-500 hover:bg-bone-600 text-xs text-white",
            "font-medium uppercase py-1.5 px-3 mt-3 cursor-pointer transition-colors duration-300",
          )}
        >
          Ver Explicação
        </DialogTrigger>
        <DialogPopup>
          <DialogContent
            className={cn(
              "[&_button]:rounded-full border-bege-300 bg-bege-50 p-6 [&_button]:bg-tan-600 [&_button]:hover:bg-tan-700 ",
              "[&_button]:text-white [&_button]:hover:text-white [&_button]:transition-colors [&_button]:duration-300 [&_button]:cursor-pointer",
            )}
          >
            <h3 className="text-lg text-tan-800 font-bold">Explicação da Resposta</h3>
            <div
              className="text-sm text-tan-700 text-justify text-pretty hyphens-auto mt-4"
              dangerouslySetInnerHTML={sanitizedData(explain)}
            />
          </DialogContent>
        </DialogPopup>
      </Dialog>
    </div>
  );
};

const QuestionSidebar = ({ children }: { children: React.ReactNode }) => (
  <aside className="flex-1 flex flex-col justify-start items-center gap-y-6">{children}</aside>
);

export {
  QuestionWrapper,
  QuestionContainer,
  QuestionBadgeAndStatement,
  QuestionAnswerList,
  QuestionAnswerOption,
  QuestionAnswerExplain,
  QuestionSidebar,
};
