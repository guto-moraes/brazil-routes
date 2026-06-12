"use client";

import { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Média de palavras lidas por minuto para um leitura "natural" em uma taxa de 1.0
const WORDS_PER_MINUTE = 140;

const AudioTextReader = ({ className, contentRef }: { className?: string; contentRef: React.RefObject<HTMLElement | null> }) => {
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const charIndexRef = useRef<number>(0);
  const textToReadRef = useRef<string>("");
  // Referência auxiliar para bloquear redefinições falsas de estado causadas por cancelamentos assíncronos
  const isStoppingRef = useRef<boolean>(false);

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

  const formatTime = (seconds: number): string => {
    if (seconds <= 0) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getBrazilianVoice = (synth: SpeechSynthesis): SpeechSynthesisVoice | null => {
    const voices = synth.getVoices();
    return voices.find((voice) => voice.lang === "pt-BR" || voice.lang.startsWith("pt-BR")) || null;
  };

  // Ativa explicitamente o estado visual do botão antes de interagir com o motor de áudio
  const speakFromIndex = (startIndex: number) => {
    const synth = synthRef.current;
    if (!synth) return;

    isStoppingRef.current = false;
    setIsPlaying(true);

    const textSegment = textToReadRef.current.substring(startIndex);
    if (!textSegment.trim()) {
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textSegment);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.lang = "pt-BR";

    const brVoice = getBrazilianVoice(synth);
    if (brVoice) {
      utterance.voice = brVoice;
    }

    utterance.onboundary = (event: SpeechSynthesisEvent) => {
      if (isStoppingRef.current) return;

      const absoluteCharIndex = startIndex + event.charIndex;
      charIndexRef.current = absoluteCharIndex;

      const fullTextLength = textToReadRef.current.length;
      // Se estiver muito próximo do fim (última palavra), força a renderização para 100%
      if (fullTextLength > 0) {
        const isNearEnd = fullTextLength - absoluteCharIndex < 30;
        const percentage = isNearEnd ? 100 : Math.round((absoluteCharIndex / fullTextLength) * 100);
        setProgress(percentage);
        // Se for a última palavra, força o zeramento do timer imediatamente
        const remainingText = textToReadRef.current.substring(absoluteCharIndex);
        const remainingWords = remainingText
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 0).length;

        const estimatedRemainingSeconds =
          remainingWords <= 1 || isNearEnd ? 0 : Math.ceil((remainingWords / WORDS_PER_MINUTE) * 60);

        setTimeRemaining(estimatedRemainingSeconds);
      }
    };

    utterance.onend = () => {
      if (isStoppingRef.current) return;

      // Restaura totalmente o leitor de forma limpa ao atingir o fim natural do áudio
      setIsPlaying(false);
      setProgress(0); // Restaura a barra de progresso visual para 0%
      setTimeRemaining(totalTime); // Restaura o cronômetro para exibir o tempo total novamente
      charIndexRef.current = 0; // Restaura o ponteiro de leitura interna para o início
    };

    utterance.onerror = (e) => {
      // Ignora falhas de interrupção intencional provocadas pelo comando .cancel()
      if (isStoppingRef.current || e.error === "interrupted") return;
      setIsPlaying(false);
    };

    synth.speak(utterance);
  };

  const handleTogglePlay = (): void => {
    const synth = synthRef.current;
    if (!synth) return;

    if (isPlaying) {
      // Parada intencional para blindar o estado visual do botão
      isStoppingRef.current = true;
      synth.cancel();
      setIsPlaying(false);
      return;
    }

    if (charIndexRef.current > 0) {
      speakFromIndex(charIndexRef.current);
      return;
    }

    const rawText = contentRef.current?.innerText || "";
    if (!rawText.trim()) return;

    textToReadRef.current = rawText;
    charIndexRef.current = 0;

    const totalWords = rawText.trim().split(/\s+/).length;
    const estimatedTotalSeconds = Math.ceil((totalWords / WORDS_PER_MINUTE) * 60);

    setTotalTime(estimatedTotalSeconds);
    setTimeRemaining(estimatedTotalSeconds);
    setProgress(0);

    // Pequeno atraso assíncrono para garantir que buffers antigos do navegador limpem antes da nova leitura
    synth.cancel();
    setTimeout(() => {
      speakFromIndex(0);
    }, 50);
  };

  //   const handleStop = (): void => {
  //     const synth = synthRef.current;
  //     if (synth) {
  //       isStoppingRef.current = true;
  //       synth.cancel();
  //       setIsPlaying(false);
  //       setProgress(0);
  //       setTimeRemaining(totalTime);
  //       charIndexRef.current = 0;
  //     }
  //   };

  return (
    <div className={cn("w-full max-w-full container mx-auto", className)}>
      <div className="rounded-sm border border-tan-200 dark:border-dark-contrast-100 bg-tan-100 dark:bg-dark-900 flex items-center gap-4 p-3">
        <button
          onClick={handleTogglePlay}
          className={cn(
            "rounded-full bg-blue-retro-400 hover:bg-blue-retro-600 size-8 text-white grid",
            "place-content-center transition-colors duration-300 cursor-pointer",
            "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/60 dark:text-dark-950"
          )}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
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
