import React, { useState, useEffect } from "react";

interface CircleCuntdownTimerProps {
  initialMinutes: number;
  isStart: boolean;
  onComplete?: () => void;
}

export const CircleCountdownTimer: React.FC<CircleCuntdownTimerProps> = ({ initialMinutes, isStart, onComplete }) => {
  const totalSeconds = initialMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isStart && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      onComplete?.();
    }

    return () => clearInterval(interval);
  }, [isStart, timeLeft, onComplete]);

  // Reset timer if the start prop is toggled off
  useEffect(() => {
    if (!isStart) {
      const timeout = window.setTimeout(() => {
        setTimeLeft(totalSeconds);
      }, 0);

      return () => window.clearTimeout(timeout);
    }

    return undefined;
  }, [isStart, totalSeconds]);

  // Calculate SVG circumference and dash offset for clockwise fill
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / totalSeconds) * circumference;

  // Format time as MM:SS
  const minutesStr = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const secondsStr = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <div className="relative flex items-center justify-center size-48">
      <svg className="w-full h-full transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          className="text-tan-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
        />
        {/* Animated Countdown Circle */}
        <circle
          cx="96"
          cy="96"
          r={radius}
          className="text-blue-retro-600 transition-all duration-1000 ease-linear"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Center Timer Text */}
      <div className="absolute flex flex-col items-center">
        <span className="timer text-4xl font-bold text-tan-700 font-mono -tracking-wider">
          {minutesStr}:{secondsStr}
        </span>
        <span className="text-[0.625rem] text-tan-500 font-medium uppercase -tracking-wider">
          {minutesStr === "00" && secondsStr === "00" ? "Tempo Encerrado" : "Tempo Restante"}
        </span>
      </div>
    </div>
  );
};

export default CircleCountdownTimer;
