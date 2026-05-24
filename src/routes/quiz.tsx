import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { shuffle } from "lodash"
import { questionsData, type QuestionTypes } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import {
  QuestionAnswerList,
  QuestionAnswerOption,
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
  const questions = useMemo(() => shuffle(questionsData), []);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionTypes>(questions[index]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean | null>(null);

  // useEffect(() => {
  //   if (index === questions.length) {
  //     setIsQuizCompleted(true);
  //   } else {
  //     setCurrentQuestion(questions[index]);
  //     setIsLocked(false);
  //     setSelectedAnswer(-1);
  //   }
  // }, [index, questions, questions.length]);

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
      setCurrentQuestion(questions[index]);
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
          <section className="flex-3 max-w-full flex flex-col justify-start items-center gap-y-16">
            <QuestionBadge questionNumber={index + 1} />
            <QuestionStatement statement={currentQuestion.question} />
            <QuestionAnswerList>
              {currentQuestion.options.map((option, index) => {
                const correct = currentQuestion.answer;

                return (
                  <QuestionAnswerOption
                    index={index}
                    correct={correct}
                    selectedAnswer={selectedAnswer}
                    option={option}
                    onAnswer={handleSelectAnswer}
                  />
                );
              })}
            </QuestionAnswerList>
            {isLocked && ( 
              <Button onClick={handleNextQuestion} disabled={isQuizCompleted}>
                {index + 1 < questionsData.length ? "Próxima" : "Questinário Concluído"}
              </Button>
)}
            {
              isQuizCompleted && (
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
              )
            }
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
