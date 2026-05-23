import type { QuestionTypes } from "@/data/quiz"
import { useEffect, useState } from "react"

type QuestionCardTypes = {
    question: QuestionTypes[],
    onAnswer: (isCorrect: boolean) => void,
}

const QuestionCardQuiz = ({ question, onAnswer }: QuestionCardTypes) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setSelectedOption(null);
        setIsAnswered(false);
    }, [question])

    return(
        <div>Quiz</div>
    )
}

export default QuestionCardQuiz;