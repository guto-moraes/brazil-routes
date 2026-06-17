import { useState } from "react";
import InitialPage from "./quiz/initial-page";
import QuestionPage from "./quiz/question-page";
import { useRouter } from "@tanstack/react-router";

const Quiz = () => {
  const [currentSectionPage, setCurrentSectionPage] = useState<string>("initial");
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  const handleStarQuiz = () => {
    setIsStart(!isStart);
    router.invalidate();
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
