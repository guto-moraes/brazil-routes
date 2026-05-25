import { useMemo, useState } from "react";
import { shuffle } from "lodash";
import { cn } from "@/lib/utils";
import CircleCountdownTimer from "./countdown-timer";
import { questionsData, type QuestionTypes } from "@/data/quiz";
import {
  QuestionWrapper,
  QuestionContainer,
  QuestionBadge,
  QuestionStatement,
  QuestionAnswerList,
  QuestionAnswerOption,
  QuestionAnswerExplain,
  QuestionSidebar,
} from "./question-components-structure";
import QuestionProgress from "./question-progress";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ResultPage from "./result-page";

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

  const [index, setIndex] = useState(0);
  const questions = useMemo(() => shuffle(questionsData), []);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionTypes>(questions[index]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState<number>(-1);
  const [answerCorrect, setAnswerCorrect] = useState<number>(-1);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserQuizResultsTypes[]>([]);

  const handleSelectAnswer = (answer: number) => {
    if (isLocked) return;
    
    const isCorrect = currentQuestion.answer === answer;

    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswerCorrect(currentQuestion.answer);
    setAnswerSelected(answer);
    setIsLocked(true);
    setAnsweredQuestions((prevItems) => [...prevItems, index + 1]);
    setUserAnswers((prevUserAnswers) => [
      ...prevUserAnswers,
      { question: index + 1, correct: isCorrect }
    ])
  };
  

  const handleNextQuestion = () => {
    if (index + 1 < questionsData.length) {
      setCurrentQuestion(questions[index]);
      setIndex(index + 1);
      setAnswerSelected(-1);
      setIsLocked(false);
    } else {
      setIsQuizCompleted(true);
      onPause(true);
    }
  };

  return (
    <QuestionWrapper>
      <QuestionContainer>
        <QuestionBadge questionNumber={index + 1} />
        <QuestionStatement statement={currentQuestion.question} />
        <QuestionAnswerList>
          {currentQuestion.options.map((option, index) => {
            return (
              <QuestionAnswerOption
                key={index}
                index={index}
                answerCorrect={answerCorrect}
                answerSelected={answerSelected}
                option={option}
                onAnswer={handleSelectAnswer}
              />
            );
          })}
        </QuestionAnswerList>

        {isLocked && (
          <Button
            className={cn(
              "rounded-sm bg-blue-retro-500 hover:bg-tan-500 text-white uppercase h-12 px-4",
              "transition-colors duration-500 cursor-pointer",
            )}
            onClick={handleNextQuestion}
            disabled={isQuizCompleted}
          >
            {index + 1 < questionsData.length ? "Próxima Questão" : "Questinário Concluído"}
          </Button>
        )}

        {!isQuizCompleted && answerSelected !== -1 && (
          <QuestionAnswerExplain answerCorrect={answerCorrect} answerSelected={answerSelected} />
        )}
        {isQuizCompleted && (
          <Dialog>
            <DialogTrigger render={<Button className="mt-4" />}>Ver Resultados</DialogTrigger>
            <DialogContent className="bg-tan-100 md:min-w-1/2! p-8 flex items-center justify-center!">
              <ResultPage results={userAnswers} onPage={onPage} />
            </DialogContent>
          </Dialog>
        )}
      </QuestionContainer>
      <QuestionSidebar>
        <CircleCountdownTimer isStart={isStartCountdown} isPaused={isPauseCountdown} initialMinutes={5} />
        <QuestionProgress answeredQuestions={answeredQuestions} />
      </QuestionSidebar>
    </QuestionWrapper>
  );
};

export default QuestionPage;
