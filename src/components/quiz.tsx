import { useState } from "react";
import InitialPage from "./quiz/initial-page";
import QuestionPage from "./quiz/question-page";

const Quiz = () => {
  const [currentSectionPage, setCurrentSectionPage] = useState<string>("initial");
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleStarQuiz = () => {
    setIsStart(!isStart);
    setCurrentSectionPage("quiz");
  };

  const handlePauseCompletedQuiz = () => {
    setIsPaused(!isPaused);
  };

  return currentSectionPage === "initial" ? (
    <InitialPage onStart={handleStarQuiz} />
  ) : currentSectionPage === "quiz" && (
    <QuestionPage
      isStartCountdown={isStart}
      isPauseCountdown={isPaused}
      onPause={handlePauseCompletedQuiz}
      onPage={setCurrentSectionPage}
    />
  )
};

export default Quiz;
