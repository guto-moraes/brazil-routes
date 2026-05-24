import React, { useState, useEffect } from "react";

interface CircleCuntdownTimerProps {
  initialMinutes: number;
  isStart: boolean;
  isPaused: boolean;
  onComplete?: () => void;
}

export const CircleCountdownTimer: React.FC<CircleCuntdownTimerProps> = ({
  initialMinutes,
  isStart,
  isPaused = false, // Padrão é não pausado
  onComplete,
}) => {
  const totalSeconds = initialMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  // Lógica do intervalo do cronômetro (só roda se iniciar E NÃO estiver pausado)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isStart && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isStart && timeLeft === 0) {
      onComplete?.();
    }

    return () => clearInterval(interval);
  }, [isStart, isPaused, timeLeft, onComplete]);

  // Reseta o cronômetro se o botão iniciar for desligado
  useEffect(() => {
    if (!isStart && timeLeft !== totalSeconds) {
      const timeout = setTimeout(() => setTimeLeft(totalSeconds), 0);
      return () => clearTimeout(timeout);
    }
  }, [isStart, totalSeconds, timeLeft]);

  // Cálculos do SVG
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = -circumference + (timeLeft / totalSeconds) * circumference;

  // Formatação do tempo (MM:SS)
  const minutesStr = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const secondsStr = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="rounded-xl shadow-lg size-48 bg-bege-50 flex justify-center items-center">
      <div className="relative flex items-center justify-center size-48">
        <svg className="w-full h-full transform -rotate-90">
          {/* Círculo de fundo */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            className="text-tan-200"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
          />
          {/* Círculo de contagem regressiva animado */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            className="text-blue-retro-500 transition-all duration-1000 ease-linear"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        {/* Contador centralizado */}
        <div className="absolute flex flex-col items-center">
          <span className="timer text-4xl font-bold text-tan-700 font-mono -tracking-widest">
            {minutesStr}:{secondsStr}
          </span>
          <span className="text-[0.625rem] text-tan-500 font-medium uppercase -tracking-wider">
            {minutesStr === "00" && secondsStr === "00" ? "Tempo Encerrado" : "Tempo Restante"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircleCountdownTimer;
