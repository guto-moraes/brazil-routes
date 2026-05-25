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
  const questions = useMemo(() => shuffle(dataQuestions), [dataQuestions]);
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
    setUserAnswers((prevUserAnswers) => [
      ...prevUserAnswers,
      { question: index + 1, correct: isCorrect }
    ])
  };
  

  const handleNextQuestion = () => {
    if (index + 1 < dataQuestions.length) {
      setIndex(index + 1);
      setSelectedAnswer(-1);
      setIsLocked(false);
    } else {
      setIsQuizCompleted(true);
      onPause(true);
    }
  };

  return (
    <QuestionWrapper>
      <QuestionContainer>
        <QuestionBadgeAndStatement questionNumber={index + 1} statement={currentQuestion.excerpt} />
        <QuestionAnswerList>
          {currentQuestion.answers.answersOptions.map((option, index) => {
            return (
              <QuestionAnswerOption
                key={index}
                index={index}
                correctAnswer={answerCorrect}
                selectedAnswer={selectedAnswer}
                option={option.answer}
                onAnswer={handleSelectAnswer}
              />
            );
          })}
        </QuestionAnswerList>

        {isLocked && (
          <Button
            className={cn(
              "rounded-sm bg-blue-retro-500 hover:bg-tan-500 text-white uppercase h-12 px-4",
              "transition-colors duration-500 cursor-pointer mx-auto",
            )}
            onClick={handleNextQuestion}
            disabled={isQuizCompleted}
          >
            {index + 1 < dataQuestions.length ? "Próxima Questão" : "Questionário Concluído"}
          </Button>
        )}

        {!isQuizCompleted && selectedAnswer !== -1 && (
          <QuestionAnswerExplain correctAnswer={answerCorrect} selectedAnswer={selectedAnswer} explain={currentQuestion.answers.answerExplain} />
        )}
        {isQuizCompleted && (
          <Dialog>
            <DialogTrigger render={<Button />}>Ver Resultados</DialogTrigger>
            <DialogContent className="bg-tan-100 md:min-w-1/2! p-8 flex items-center justify-center!">
              <ResultPage results={userAnswers} onPage={onPage} />
            </DialogContent>
          </Dialog>
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
