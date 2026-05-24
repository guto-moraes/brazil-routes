import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { questionsData } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";
import {
  QuestionAnswerList,
  QuestionBadge,
  QuestionSidebar,
  QuestionStatement,
} from "@/components/quiz/question-components-structure";
import CircleCountdownTimer from "@/components/quiz/countdown-timer";
import QuestionProgress from "@/components/quiz/question-progress";

export const Route = createFileRoute("/quiz")({
  component: RouteComponent,
});

function RouteComponent() {
  const [index, setIndex] = useState(0);
  const currentQuestion = questionsData[index];
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean | null>(null);
  const [isLocked, setIsLocked] = useState<boolean | null>(null);

  const handleSelectAnswer = (answer: number) => {
    if (isLocked) return;

    if (currentQuestion.answer === answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(answer);
    setIsLocked(true);
  };

  const handleNextQuestion = () => {
    if (index + 1 < questionsData.length) {
      setIndex(index + 1);
      setSelectedAnswer(-1);
      setIsLocked(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const indexes = ["A", "B", "C", "D", "E"];

  return (
    <main className="grid grid-cols-2 lg:h-[calc(100svh-104px)]">
      <div className="col-span1 flex justify-center items-center py-16"></div>
      <div className="col-span1 bg-tan-200/50 flex justify-center items-center py-16">
        <div className="h-full w-full md:w-[90%] flex gap-8 px-8">
          <section className="flex-3 max-w-full flex flex-col justify-between items-center gap-y-8">
            <QuestionBadge questionNumber={index + 1} />
            <QuestionStatement statement={currentQuestion.question} />
            <QuestionAnswerList>
              {currentQuestion.options.map((option, index) => {
                const correct = currentQuestion.answer;

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
                        "text-lg flex justify-start items-center gap-x-1.5 cursor-pointer text-tan-600",
                        "group-data-[correct=true]:text-darkgreen-500 group-data-[selected=true]:text-terracotta-700",
                      )}
                      disabled={selectedAnswer !== -1}
                      onClick={() => handleSelectAnswer(index)}
                    >
                      {" "}
                      <span
                        className={cn(
                          "rounded-xs h-full w-8 text-white font-medium bg-tan-600",
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
              })}
            </QuestionAnswerList>
            {isLocked && (
              <Button onClick={handleNextQuestion}>{index < questionsData.length && "Próxima"}</Button>
            )}
            <div className="mt-16">
              <p>
                Questões corretas: <strong>{score}</strong>
              </p>
              <p>
                Questão Correta: <strong>{selectedAnswer !== null && indexes[questionsData[index].answer]}</strong>
              </p>
              <p>
                Questão selecionada: <strong>{selectedAnswer !== null && indexes[selectedAnswer]}</strong>
              </p>
            </div>
          </section>
          <QuestionSidebar>
            <CircleCountdownTimer isStart={false} initialMinutes={5} />
            <QuestionProgress />
          </QuestionSidebar>
        </div>
      </div>
    </main>
  );
}
