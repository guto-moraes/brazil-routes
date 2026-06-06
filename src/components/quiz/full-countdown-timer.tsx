"use client";

import React, { useState, useEffect } from "react";
interface TimerProps {
  initialMinutes: number;
  isStart: boolean;
  isPaused?: boolean; // Opção para controlar pausa externamente
  onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({ 
  initialMinutes, 
  isStart, 
  isPaused = false, // Padrão é não pausado
  onComplete 
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
    if (!isStart) {
      const timeout = setTimeout(() => {
        setTimeLeft(totalSeconds);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isStart, totalSeconds]);

  // Cálculos do SVG
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = -circumference + (timeLeft / totalSeconds) * circumference;

  // Formatação do tempo (MM:SS)
  const minutesStr = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const secondsStr = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div style={{ position: "relative", width: "200px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <svg width="200" height="200">
        {/* Círculo de fundo */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        {/* Círculo de progresso */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={isPaused ? "#9ca3af" : "#3b82f6"} // Fica cinza se estiver pausado
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s" }}
        />
      </svg>
      {/* Texto do tempo centralizado */}
      <div style={{ position: "absolute", fontSize: "24px", fontWeight: "bold", fontFamily: "monospace" }}>
        {minutesStr}:{secondsStr}
      </div>
    </div>
  );
};

const PomodoroPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleComplete = () => {
    alert("O tempo acabou! 🎉");
    setIsRunning(false);
    setIsPaused(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Meu Cronômetro</h1>
      
      {/* Componente do Timer */}
      <Timer 
        initialMinutes={5} // Define o tempo (ex: 5 minutos)
        isStart={isRunning} 
        isPaused={isPaused} 
        onComplete={handleComplete} 
      />

      {/* Botões de Controle */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        
        {/* Botão Iniciar / Resetar */}
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Iniciar</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Parar/Resetar</button>
        )}

        {/* Botão Pausar / Retomar (só aparece se o timer estiver rodando) */}
        {isRunning && (
          <button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "Retomar" : "Pausar"}
          </button>
        )}
        
      </div>
    </div>
  );
};

export default PomodoroPage;