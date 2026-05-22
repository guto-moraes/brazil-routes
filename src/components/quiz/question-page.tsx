import { useState } from "react";
import CircleCountdownTimer from "./countdown-timer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import ButtonOption from "./button-option";

const indexes: string[] = ["A", "B", "C", "D", "E"];

type AnswerTypes = {
  check: boolean;
  text: string;
};

type QuestionTypes = {
  questionNumber: number;
  question: string;
  answers: AnswerTypes[];
};

const options: QuestionTypes[] = [
  {
    questionNumber: 1,
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit provident et, nihil veniam est voluptatum recusandae repellendus dolorem, assumenda commodi obcaecati accusantium!",
    answers: [
      {
        check: false,
        text: "Mussum Ipsum, cacilds vidis litro abertis",
      },
      {
        check: false,
        text: "Mauris nec dolor in eros commodo tempor",
      },
      {
        check: false,
        text: "Aenean aliquam molestie leo, vitae iaculis nisl",
      },
      {
        check: false,
        text: "Interagi no mé, cursus quis, vehicula ac nisi",
      },
      {
        check: true,
        text: "Diuretics paradis num copo é motivis de denguis",
      },
    ],
  },
];

const shuffle = (array: AnswerTypes[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuestionPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className="h-full w-full md:w-[90%] flex gap-8 px-8">
      <section className="flex-3 flex flex-col gap-y-12">
        {options.map((option, index) => {
          const answers = shuffle(option.answers);
          return (
            <div className="flex flex-col gap-y-12" key={index}>
              <h3
                className={cn(
                  "border-2 border-tan-600 rounded-full text-lg text-tan-600",
                  "font-medium uppercase leading-none -tracking-wider w-max py-2 px-3",
                )}
              >
                Questão {option.questionNumber}
              </h3>
              <h2 className=" text-[clamp(1rem,3.75vw,1.65rem)] text-tan-800 font-medium leading-8">
                {option.question}
              </h2>

              <div role="list" className="flex flex-col gap-y-4">
                {answers.map((answer, index) => (
                  <ButtonOption
                    isSubmitted={isSubmitted}
                    index={indexes[index]}
                    check={answer.check}
                    answer={answer.text}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <Button
          className={cn(
            "rounded-none bg-tan-500 hover:bg-tan-600 text-lg! py-6! uppercase",
            "border-0 transition-colors duration-500 w-72 mx-auto tracking-tighter",
          )}
          onClick={handleSubmit}
        >
          Enviar Resposta
        </Button>
      </section>
      <aside className="flex-1 flex flex-col justify-start items-center">
        <div className="rounded-xl shadow-lg size-48 bg-bege-50 flex justify-center items-center">
          <CircleCountdownTimer isStart={isSubmitted} initialMinutes={5} />
        </div>
      </aside>
    </div>
  );
};

export default QuestionPage;
