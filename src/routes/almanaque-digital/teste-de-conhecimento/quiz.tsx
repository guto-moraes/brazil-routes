import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import InitialPage from "@/components/quiz/initial-page";
import QuestionPage from "@/components/quiz/question-page";
import Header from "@/layouts/header";
import Main from "@/layouts/main";

export const Route = createFileRoute("/almanaque-digital/teste-de-conhecimento/quiz")({
  component: QuizPage,
});

function QuizPage() {
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

  return (
    <>
      <Header className="shadow-md" />
      <Main className="flex justify-center items-center p-0">
        {currentSectionPage === "initial" ? (
          <InitialPage onStart={handleStarQuiz} />
        ) : (
          currentSectionPage === "quiz" && (
            <QuestionPage
              isStartCountdown={isStart}
              isPauseCountdown={isPaused}
              onPause={handlePauseCompletedQuiz}
              onPage={setCurrentSectionPage}
            />
          )
        )}
      </Main>
    </>
  );
}
