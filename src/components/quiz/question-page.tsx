import { useMemo, useState } from "react";
import { shuffle } from "lodash";
import { cn } from "@/lib/utils";
import CircleCountdownTimer from "./countdown-timer";
import {
  QuestionWrapper,
  QuestionContainer,
  QuestionBadgeAndStatement,
  QuestionAnswerList,
  QuestionAnswerOption,
  QuestionAnswerExplain,
  QuestionSidebar,
} from "./question-components-structure";
import QuestionProgress from "./question-progress";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ResultPage from "./result-page";
import { useQueryQuestions } from "@/hooks/queries/custom-posts-queries";
import type { QuizQuestion } from "@/types/custom-post-types";

type UserQuizResultsTypes = {
  question: number;
  correct: boolean;
};

const QuestionPage = ({
  isStartCountdown,
  isPauseCountdown,
  onPause,
  onPage,
}: {
  isStartCountdown: boolean;
  isPauseCountdown: boolean;
  onPause: (pause: boolean) => void;
  onPage: (page: string) => void;
}) => {
  const { nodes: dataQuestions } = useQueryQuestions().data.questions;

  const [index, setIndex] = useState(0);
  const questions = useMemo(() => shuffle(dataQuestions).slice(0, 10), [dataQuestions]);
  const currentQuestion: QuizQuestion = questions[index];
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
  const [answerCorrect, setAnswerCorrect] = useState<number>(-1);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<UserQuizResultsTypes[]>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleSelectAnswer = (answer: number) => {
    if (isLocked) return;

    const isCorrect = Number(currentQuestion.answers.correctAnswer) === answer;

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswerCorrect(Number(currentQuestion.answers.correctAnswer));
    setSelectedAnswer(answer);
    setIsLocked(true);
    setAnsweredQuestions((prevItems) => [...prevItems, index + 1]);
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, { question: index + 1, correct: isCorrect }]);
  };

  const handleNextQuestion = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelectedAnswer(-1);
      setIsLocked(false);
    } else {
      setIsQuizCompleted(true);
      onPause(true);
    }
  };

  const quizAnswers = currentQuestion.answers.answersOptions;

  return (
    <QuestionWrapper>
      <QuestionContainer>
        <QuestionBadgeAndStatement questionNumber={index + 1} statement={currentQuestion.excerpt} />
        <QuestionAnswerList>
          {quizAnswers.map((option, idx) => {
            return (
              <QuestionAnswerOption
                key={idx}
                index={idx}
                correctAnswer={answerCorrect}
                selectedAnswer={selectedAnswer}
                option={option.answer}
                onAnswer={handleSelectAnswer}
              />
            );
          })}
        </QuestionAnswerList>

        <div className="w-full text-center space-x-2!">
          {isLocked && !isQuizCompleted && (
            <Button
              className={cn(
                "rounded-sm bg-blue-retro-500 dark:bg-blue-retro-400 hover:bg-tan-500",
                "dark:hover:bg-blue-retro-600 text-white uppercase h-12 px-4 transition-colors",
                "duration-500 cursor-pointer mx-auto inline-block disabled:cursor-not-allowed",
              )}
              onClick={handleNextQuestion}
              disabled={isQuizCompleted}
            >
              {index + 1 < questions.length ? "Próxima Questão" : "Concluir Questionário"}
            </Button>
          )}
          {isQuizCompleted && (
            <Dialog>
              <DialogTrigger>
                <Button
                  className={cn(
                    "rounded-sm bg-blue-retro-500 hover:bg-blue-retro-600 text-white uppercase h-12 px-4",
                    "transition-colors duration-500 cursor-pointer mx-auto inline-block",
                  )}
                >
                  Ver Resultado
                </Button>
              </DialogTrigger>
              <DialogContent
                className={cn(
                  "bg-tan-100 dark:bg-dark-950 dark:border-dark-950 md:min-w-1/2! p-8 flex items-center justify-center!",
                  "[&>button]:bg-bone-600 [&>button]:hover:bg-bone-500 [&>button]:text-white",
                  "[&>button]:hover:text-white [&>button]:rounded-full [&>button]:cursor-pointer:transition-colors",
                  "[&>button]:duration-500 [&>button]:cursor-pointer [&>button]:p-1",
                )}
              >
                <ResultPage totalQuestions={questions.length} results={userAnswers} onPage={onPage} />
              </DialogContent>
            </Dialog>
          )}
        </div>
        {!isQuizCompleted && selectedAnswer !== -1 && (
          <QuestionAnswerExplain
            correctAnswer={answerCorrect}
            selectedAnswer={selectedAnswer}
            explain={currentQuestion.answers.answerExplain}
          />
        )}
      </QuestionContainer>
      <QuestionSidebar>
        <CircleCountdownTimer isStart={isStartCountdown} isPaused={isPauseCountdown} initialMinutes={5} />
        <QuestionProgress totalQuestions={questions.length} answeredQuestions={answeredQuestions} />
      </QuestionSidebar>
    </QuestionWrapper>
  );
};

export default QuestionPage;
