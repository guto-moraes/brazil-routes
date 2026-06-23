import { cn, sanitizedData } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

const indexes: string[] = ["A", "B", "C", "D", "E"];

// Encapisulador do componente
const QuestionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-[calc(100vh-80px)] 2xl:min-h-[calc(100vh-104px)] max-w-6xl container mx-auto flex flex-col md:flex-row gap-8 lg:gap-10 xl:gap-12 py-12">
    {children}
  </div>
);

// Container do componente
const QuestionContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="flex-3 max-w-full flex flex-col justify-start items-start gap-y-7">{children}</section>
);

// Enunciado da Questão
const QuestionBadgeAndStatement = ({
  questionNumber,
  statement,
}: {
  questionNumber: number | string;
  statement: string;
}) => (
  <div className="flex flex-col gap-y-3">
    <span
      className={cn(
        "rounded-full border-2 border-blue-retro-500 dark:border-blue-retro-300",
        "text-xs text-blue-retro-500 dark:text-blue-retro-300",
        "font-medium uppercase tracking-tight w-max py-1 px-3",
      )}
    >
      Questão {questionNumber}
    </span>
    <div
      className="[&_p]:text-[clamp(0.85rem,4vw,1rem)] [&_p]:text-tan-700 dark:[&_p]:text-white [&_p]:font-medium [&_p]:leading-6"
      dangerouslySetInnerHTML={sanitizedData(statement)}
    />
  </div>
);

// Lista de Respostas
const QuestionAnswerList = ({ children }: { children: React.ReactNode }) => (
  <ul className="w-full max-w-full flex flex-col gap-y-4">{children}</ul>
);

// Opção de Resposta
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
        "rounded-xs outline-2 outline-offset-2 bg-bege-50 dark:bg-dark-800 flex",
        "justify-between items-center p-0.5 group outline-tan-600 dark:outline-dark-600",
        "data-[correct=true]:outline-darkgreen-500 dark:data-[correct=true]:outline-green-500",
        "data-[selected=true]:outline-terracotta-700 dark:data-[selected=true]:outline-rose-500",
      )}
      data-correct={correctAnswer === index && selectedAnswer !== -1}
      data-selected={correctAnswer !== selectedAnswer && selectedAnswer === index}
    >
      <button
        role="radio"
        aria-checked={correctAnswer === index}
        aria-pressed={selectedAnswer === index}
        className={cn(
          "w-full flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600 dark:text-dark-100 text-sm text-left",
          "group-data-[correct=true]:text-darkgreen-500 group-data-[selected=true]:text-terracotta-700",
          "dark:group-data-[correct=true]:text-green-400 dark:group-data-[selected=true]:text-rose-500",
        )}
        onClick={() => onAnswer(index, index)}
      >
        <span
          className={cn(
            "rounded-xs h-full min-h-8 min-w-8 text-base text-white dark:text-dark-200 font-medium bg-tan-600 dark:bg-dark-600",
            "flex justify-center items-center group-data-[correct=true]:bg-darkgreen-500 dark:group-data-[correct=true]:text-white",
            "dark:group-data-[selected=true]:text-white group-data-[selected=true]:bg-terracotta-700",
            "dark:group-data-[correct=true]:bg-green-400 dark:group-data-[selected=true]:bg-rose-500",
          )}
        >
          {indexes[index]}
        </span>
        {option}
      </button>
      {correctAnswer === index && selectedAnswer !== -1 && (
        <CircleCheck className="text-darkgreen-500 dark:text-green-400" />
      )}
      {correctAnswer !== selectedAnswer && selectedAnswer === index && (
        <CircleX className="text-terracotta-600 dark:text-rose-500" />
      )}
    </li>
  );
};

const QuestionAnswerExplainBullet = ({ alert, text }: { alert: boolean; text: string }) => (
  <span
    className={cn(
      "rounded-full size-5 inline-block text-white font-medium leading-5",
      alert ? "bg-blue-retro-600 dark:bg-blue-retro-300" : "bg-chocolate-600",
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
        "rounded-sm border-l-3 shadow-md py-2 px-3 text-center w-full dark:border-dark-900 dark:bg-dark-900",
        alert
          ? "border-blue-retro-50 bg-blue-retro-50 text-blue-retro-600 dark:text-dark-contrast-100"
          : "border-chocolate-600 bg-bege-100 text-chocolate-600 dark:text-white text-sm",
      )}
    >
      {alert ? (
        <h3 className="font-bold uppercase">Você acertou esta questão!</h3>
      ) : (
        <>
          <h3 className="font-bold uppercase">Você errou esta questão!</h3>
          <p className="leading-7">
            A resposta marcada foi a letra <QuestionAnswerExplainBullet alert={alert} text={indexes[selectedAnswer]} />,
            porém, a correta é a letra <QuestionAnswerExplainBullet alert={alert} text={indexes[correctAnswer]} />.
          </p>
        </>
      )}
      <Dialog>
        <DialogTrigger
          className={cn(
            "rounded-xs bg-bone-500 dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/80 text-xs text-white",
            "dark:text-dark-950 font-medium uppercase py-1.5 px-3 mt-3 cursor-pointer transition-colors duration-300",
          )}
        >
          Ver Explicação
        </DialogTrigger>
        <DialogContent
          className={cn(
            "[&_button]:rounded-full border-bege-300 dark:border-dark-950 bg-bege-50 dark:bg-dark-950 p-6",
            "m[&_button]:bg-tan-600 [&_button]:hover:bg-tan-700 &_button]:text-white [&_button]:hover:text-white",
            "[&_button]:transition-colors [&_button]:duration-300 [&_button]:cursor-pointer [&_button]:p-1",
          )}
        >
          <DialogTitle className="text-lg text-tan-800 dark:text-[#ffe27d] font-bold">
            Explicação da Resposta
          </DialogTitle>
          <div
            className="text-sm text-tan-700 dark:text-white text-justify text-pretty hyphens-auto"
            dangerouslySetInnerHTML={sanitizedData(explain)}
          />
        </DialogContent>
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
