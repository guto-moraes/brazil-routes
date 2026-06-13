"use client";

import { useState, useEffect, useRef } from "react";
import { Pause, Play, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

// Média de palavras lidas por minuto para um leitura "natural" em uma taxa de 1.0
const WORDS_PER_MINUTE = 140;
interface AudioTextReaderProps {
  className?: string;
  contentRef: React.RefObject<HTMLElement | null>;
}

const AudioTextReader = ({ className, contentRef }: AudioTextReaderProps) => {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const charIndexRef = useRef<number>(0);
  const textToReadRef = useRef<string>("");
  const isStoppingRef = useRef<boolean>(false);

  // Inicializa o SpeechSynthesis e limpa ao desmontar o componente
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Extrai o texto do elemento DOM e calcula o tempo total estimado
  useEffect(() => {
    if (contentRef.current) {
      const text = contentRef.current.innerText || contentRef.current.textContent || "";
      textToReadRef.current = text.trim();

      const wordCount = textToReadRef.current.split(/\s+/).filter(Boolean).length;
      const totalSeconds = Math.ceil((wordCount / WORDS_PER_MINUTE) * 60);

      setTotalTime(totalSeconds);
      setTimeRemaining(totalSeconds);
    }
  }, [contentRef]);

  const formatTime = (seconds: number): string => {
    if (seconds <= 0 || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getBrazilianVoice = (synth: SpeechSynthesis): SpeechSynthesisVoice | null => {
    const voices = synth.getVoices();
    return voices.find((voice) => voice.lang.toLowerCase().replace("_", "-").startsWith("pt-br")) || null;
  };

  const speakFromIndex = (startIndex: number) => {
    const synth = synthRef.current;
    if (!synth) return;

    // Cancela qualquer reprodução atual antes de iniciar uma nova
    synth.cancel();

    isStoppingRef.current = false;
    setIsPlaying(true);

    const textSegment = textToReadRef.current.substring(startIndex);
    if (!textSegment.trim()) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textSegment);
    utteranceRef.current = utterance;
    utterance.rate = 1.0;

    const voice = getBrazilianVoice(synth);
    if (voice) utterance.voice = voice;

    // Rastreia a palavra atual para atualizar a barra de progresso e o tempo restante
    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const globalCharIndex = startIndex + event.charIndex;
        charIndexRef.current = globalCharIndex;

        const totalChars = textToReadRef.current.length; // Se estiver muito próximo do fim (última palavra), força a renderização para 100%
        if (totalChars > 0) {
          const isNearEnd = totalChars - globalCharIndex < 30;
          const percentage = isNearEnd ? 100 : Math.round((globalCharIndex / totalChars) * 100);
          setProgress(percentage);

          // Atualiza o tempo restante proporcionalmente ao texto que falta ler
          const remainingRatio = 1 - globalCharIndex / totalChars;
          setTimeRemaining(Math.ceil(totalTime * remainingRatio));
        }
      }
    };

    utterance.onend = () => {
      if (!isStoppingRef.current) {
        setIsPlaying(false);
        setProgress(100);
        setTimeRemaining(0);
        charIndexRef.current = 0;
      }
    };

    utterance.onerror = (event) => {
      if (event.error !== "interrupted") {
        console.error("Erro no SpeechSynthesisUtterance:", event);
        setIsPlaying(false);
      }
    };

    synth.speak(utterance);
  };

  const handlePlayPause = () => {
    const synth = synthRef.current;
    if (!synth) return;

    if (isPlaying) {
      isStoppingRef.current = true; // Pausa lógica (salva o índice atual e cancela a emissão física do áudio)
      setIsPlaying(false);
      synth.cancel();
    } else {
      speakFromIndex(charIndexRef.current); // Retoma exatamente de onde parou usando o índice salvo
    }
  };

  const handleReset = () => {
    isStoppingRef.current = true;
    setIsPlaying(false);
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    charIndexRef.current = 0;
    setProgress(0);
    setTimeRemaining(totalTime);
  };

  return (
    <div className={cn("w-full max-w-full container mx-auto", className)}>
      <div className="rounded-sm border border-tan-200 dark:border-dark-contrast-100 bg-tan-100 dark:bg-dark-900 flex items-center gap-4 p-3">
        <div className="flex items-center gap-x-1.5">
          <button
            onClick={handlePlayPause}
            className={cn(
              "rounded-full bg-blue-retro-400 hover:bg-blue-retro-600 size-8 text-white grid",
              "place-content-center transition-colors duration-300 cursor-pointer",
              "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/60 dark:text-dark-950",
            )}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleReset}
            className={cn(
              "rounded-full bg-mauve-400 hover:bg-mauve-500 size-8 text-white grid",
              "place-content-center transition-colors duration-300 cursor-pointer",
              "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/60 dark:text-dark-950",
            )}
          >
            <RefreshCcw size={20} />
          </button>
        </div>
        <div className="grow flex flex-col justify-center items-center gap-1">
          <div className="w-full bg-tan-200 dark:bg-stone-900 rounded-full h-2">
            <div
              className="bg-blue-retro-500 dark:bg-dark-contrast-100 h-2 rounded-full transition-[width] ease-linear duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-xs text-neutral-600 dark:text-white font-medium h-full w-full flex justify-between items-center gap-2">
            <span>Progresso: {progress}%</span>
            <span>
              {formatTime(timeRemaining)} / {formatTime(totalTime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioTextReader;
