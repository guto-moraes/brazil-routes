"use client";

import { createFileRoute } from '@tanstack/react-router'

import {
  useRef,
  useState,
  useEffect
} from "react";

import gsap from "gsap";

const questions = [
  {
    id: 0,
    text: "Em qual ano o primeiro escalão da Expedição Roncador-Xingu (ERX) chegou no Rio das Mortes?",
    answers: [
      1945,
      1944,
      1951,
      "A ERX não chegou no Rio das Morte"
    ],
    correct: 1,
    selection: null
  },
  {
    id: 1,
    text:
      "Qual das alternativas abaixo traz os núcleos populacionais que foram diretamente desenvolvidos pela Fundação Brasil Central?",
    answers: ["Aragarças, Barra do Garças, Cuiabá, Sinop e Rondonópolis", "Barra Goiana, Uberlândia, Caiapônia e Tangará da Serra", "General Carneiro, Goiânia, Canarana, Querência e Água Boa", "Aragarças, Barra do Garças, Nova Xavantina, Vale dos Sonhos, Indianópolis"],
    correct: 3,
    selection: null
  },
  {
    id: 2,
    text: "Qual foi a relação feita entre os brasileiros que lutaram na 2° Guerra e os integrantes da Roncador-Xingu?",
    answers: ["Ambos eram militares", "Ambos eram missionários", "Ambos eram expedicionários", "Ambos eram voluntários"],
    correct: 2,
    selection: null
  },
  {
    id: 3,
    text: "De acordo com o decreto de criação da FBC, qual era o seu objetivo?",
    answers: ["Abrir um nova rodovia federal", "Desbravar a região no contorno do Rio Xingu e Araguaia", "Catequizar os indígenas", "Criar uma rota de navegação no Rio das Mortes"],
    correct: 1,
    selection: null
  },
  {
    id: 4,
    text: "Em qual dos empreendimentos abaixo a Fundação Brasil Central não atuou?",
    answers: ["Fabricação de automóvel", "Estrada de Ferro", "Abertura de estradas;", "Usina de Açúcar"],
    correct: 0,
    selection: null
  },
  {
    id: 5,
    text: "Qual era o nome do militar que desapareceu na região do Vale do Araguaia e que foi inspiração para o personagem Indiana Jones?",
    answers: ["Coronel Flaviano de Matos Vanique", "General Eurico Gaspar Dutra", "Coronel Percy Fawcett", "Major Silo Furtado Soares de Meireles"],
    correct: 2,
    selection: null
  },
  {
    id: 6,
    text: "Quantos povos indígenas vivem no Parque Indígena do Xingu?",
    answers: ["O Paque Indígena do Xingu não existe", 6, 24, 16],
    correct: 3,
    selection: null
  },
  {
    id: 7,
    text: "Qual o nome do militar que participou do Tenentismo, da Coluna Prestes e depois se tornou o primeiro presidente da FBC?",
    answers: ["Archimedes Pereira Lima", "João Alberto Lins de Barros", "Orlando Villas Boas", "Paulo Osório Jordão de Brito"],
    correct: 1,
    selection: null
  },
  {
    id: 8,
    text:
      "Qual doença deixou 18 homens doentes antes durante o percurso até o Rio das Mortes?",
    answers: ["Beribéri", "Malário", "Doença de Chagas", "Febre maculosa"],
    correct: 0,
    selection: null
  },
  {
    id: 9,
    text: "O que é a Associação dos Pioneiros da Marcha para o Oeste (APMPO)?",
    answers: [
      "Um clube de lazer dos pioneiros de Nova Xavnatina - MT",
      "Uma associação somente para quem trabalhou na ERX ou na FBC",
      "Entidade que promove e preserva a memória relacionadas à ERX e a FBC",
      "Entidade que luta direitos dos aposentados da Marcha para o Oeste"
    ],
    correct: 2,
    selection: null
  }
];

function useCounter(initialState: number) {
  const [value, setValue] = useState(initialState);
  const reset = () => setValue(0);

  const add = () => setValue((value: number) => (value += 1));

  return { value, add, reset };
}

function Question({
  data,
  buttonText,
  hasButton = true,
  onQuestionButtonClick,
  showAnswer = false,
  markSelection = null
}) {
  const [answer, setAnswer] = useState(null);
  const parseValue = (value) => (value ? parseInt(value.split("-")[1]) : null);
  const questionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current.querySelector(".question-text"),
      {
        x: 40,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4
      }
    );
    gsap.fromTo(
      questionRef.current.querySelectorAll("li"),
      {
        opacity: 0,
        x: 40
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1
      }
    );
  }, [data]);

  return (
    <div className="question" ref={questionRef}>
      <div className="question-inner">
        <h2 className="question-text">{data.text}</h2>
        <ul className="question-answers">
          {data.answers.map((text, index) => {
            const value = `q${data.id}-${index}`;
            return (
              <li
                className={
                  index === data.correct && showAnswer ? "is-true" : ""
                }
                data-selected={markSelection === index ? true : null}
              >
                <input
                  type="radio"
                  name={`q_${data.id}`}
                  value={value}
                  id={value}
                  onChange={(e) => setAnswer(e.target.value)}
                  checked={
                    !showAnswer ? answer === value : markSelection === index
                  }
                />
                <label className="question-answer" htmlFor={value}>
                  {text}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {hasButton && (
        <button
          className="question-button"
          onClick={() => onQuestionButtonClick(parseValue(answer), data)}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

function Results({ wrong, correct, empty }) {
  return (
    <div className="result">
      <div className="result-item is-correct">
        <span className="result-count">{correct}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01 9 11.01"></path>
          </svg>
          RESPOSTAS CORRETAS
        </span>
      </div>
      <div className="result-item is-wrong">
        <span className="result-count">{wrong}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9L9 15"></path>
            <path d="M9 9L15 15"></path>
          </svg>
          RESPOSTAS ERRADAS
        </span>
      </div>
      <div className="result-item is-empty">
        <span className="result-count">{empty}</span>
        <span className="result-text">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="css-i6dzq1"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12L16 12"></path>
          </svg>
          VAZIO
        </span>
      </div>
    </div>
  );
}

function QuestionCorrection({ wrong, correct, empty }) {
  return (
    <div className="correction">
      {questions.map((question) => {
        return (
          <Question
            hasButton={false}
            markSelection={question.selection}
            showAnswer={true}
            data={question}
          />
        );
      })}
    </div>
  );
}

export const Route = createFileRoute('/almanaque-digital/quizz')({
  component: RouteComponent,
})

function RouteComponent() {
const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameSize, setGameSize] = useState({});
  const totalQuestion = questions.length - 1;
  const gameRef = useRef(null);
  const gameOverlayRef = useRef(null);

  const question = useCounter(0);
  const correct = useCounter(0);
  const wrong = useCounter(0);
  const empty = useCounter(0);

  const handleNewQuestionClick = (selectedValue, currQuestion) => {
    if (totalQuestion >= question.value) {
      if (selectedValue === currQuestion.correct) {
        correct.add();
      } else if (
        selectedValue !== null &&
        selectedValue !== currQuestion.correct
      ) {
        wrong.add();
      } else {
        empty.add();
      }
      questions[currQuestion.id].selection = selectedValue;
      question.add();
    }
  };

  const resetSelection = () => {
    questions.forEach((q) => (q.selection = null));
  };

  const handleRestartClick = () => {
    setGameFinished(false);
    setGameStarted(false);
    resetSelection();
    question.reset();
    correct.reset();
    wrong.reset();
    empty.reset();
  };

  const indicatorBg = (index) => {
    if (question.value > index) {
      return "#fff";
    } else if (question.value === index) {
      return "#29b5d5";
    } else {
      return "rgba(255,255,255,.2)";
    }
  };

  useEffect(() => {
    if (gameStarted) {
      document.body.classList.add("game-started");
    } else {
      document.body.classList.remove("game-started");
    }
  }, [gameStarted]);

  useEffect(() => {
    if (question.value > totalQuestion) {
      gameRef.current.scrollTop = 0;
    }
  }, [question.value]);

  return (
    <div
      className="game bg-blue-retro-950!"
      ref={gameRef}
      data-game-started={gameStarted ? true : null}
      data-game-finished={question.value > totalQuestion ? true : null}
    >
      <div className="intro bg-linear-to-r! from-blue-retro-500! to-blue-retro-700!">
        <div className="intro-inner flex flex-col justify-around items-center gap-y-5">
          <h1 className="intro-title">Almanaque Quizz</h1>
          {!gameStarted && (
            <>
              <p className="intro-desc">
                {`Este quizz possui ${questions.length} e não há tempo limite para concluí-lo.`}
              </p>

              <button
                className="bg-darkgreen-500 py-4 px-6 cursor-pointer"
                onClick={() => setGameStarted(true)}
              >
                Iniciar Quiz
              </button>
            </>
          )}
          {gameStarted && (
            <div className="indicator">
              {questions.map((q, index) => {
                return (
                  <span
                    className="indicator-item"
                    style={{
                      backgroundColor: indicatorBg(index)
                    }}
                  />
                );
              })}
            </div>
          )}
          <Results
            wrong={wrong.value}
            correct={correct.value}
            empty={empty.value}
          />
          <button
            className="restart-button"
            onClick={() => handleRestartClick()}
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
      <div className="game-area">
        {questions[question.value] && (
          <Question
            data={questions[question.value]}
            buttonText={
              question.value !== totalQuestion ? "Próxima Questão" : "Concluir"
            }
            onQuestionButtonClick={handleNewQuestionClick}
          />
        )}

        {!questions[question.value] && (
          <>
            <QuestionCorrection data={questions} />
          </>
        )}
      </div>
    </div>
  )
}
