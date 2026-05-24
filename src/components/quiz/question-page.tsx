import { useEffect, useState } from "react";
import CircleCountdownTimer from "./countdown-timer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
// import ButtonOption from "./button-option";
import QuestionProgress from "./question-progress";
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

const shuffle = (array: QuestionTypes[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const QuestionPage = ({ isStartCountDown }: { isStartCountDown: boolean }) => {
  const [questions, setQuestions] = useState<QuestionTypes[]>([]);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(2);
  // const [score, setScore] = useState(0);
  // const [isCompleted, setIsCompleted] = useState(false);

  const data = shuffle(questionsData);

  useEffect(() => {
    setQuestions(data);
  }, [data]);

const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  event.preventDefault();
}

const handleSelected = (index: number) => {
  setSelected(index);
}

  return (
    <QuestionWrapper>
      <QuestionContainer>
        {questions.slice(0, 1).map((question) => {
          console.log(selected, question.answer)
          return(
          <>
            <QuestionBadge questionNumber={question.questionId} />
            <QuestionStatement statement={question.question} />
            <QuestionAnswerList>
              {question.options.map((option, index) => {
                return (
                  <QuestionAnswerOption
                    correct={question.answer}
                    selectedAnswer={selected}
                    index={index}
                    option={option}
                    key={index}
                    onAnswer={() => handleSelected(index)}
                  />
                );
              })}
            </QuestionAnswerList>
            {selected !== -1 && <QuestionAnswerExplain correct={question.answer} selected={selected} />}
            <Button
              className={cn(
                "rounded-none bg-tan-500 hover:bg-blue-retro-500 text-lg! py-6! uppercase",
                "border-0 transition-colorstatements duration-500 w-72 mx-auto tracking-tighter",
              )}
            >
              Enviar Resposta
            </Button>
          </>
        )})}
      </QuestionContainer>

      <QuestionSidebar>
        <CircleCountdownTimer isStart={isStartCountDown} initialMinutes={5} />
        <QuestionProgress />
      </QuestionSidebar>
    </QuestionWrapper>
  );
};

export default QuestionPage;
