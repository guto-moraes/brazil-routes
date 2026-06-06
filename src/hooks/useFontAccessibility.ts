import { useState, useEffect, useCallback } from 'react';

const MIN_SCALE = 75;
const MAX_SCALE = 200; // WCAG standard benchmark
const STEP = 12.5;
const STORAGE_KEY = 'user-font-scale';

export const useAccessibility = () => {
  // Initialize state directly from localStorage if it exists
  const [currentScale, setCurrentScale] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= MIN_SCALE && parsed <= MAX_SCALE) {
          return parsed;
        }
      }
    }
    return 100; // Default fallback percentage
  });

  // Apply the scale to the <html> tag whenever it changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${currentScale}%`;
    localStorage.setItem(STORAGE_KEY, String(currentScale));
  }, [currentScale]);

  const increaseFontSize = useCallback(() => {
    setCurrentScale((prev) => Math.min(prev + STEP, MAX_SCALE));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setCurrentScale((prev) => Math.max(prev - STEP, MIN_SCALE));
  }, []);

  const resetFontSize = useCallback(() => {
    setCurrentScale(100);
  }, []);

  return {
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    isMin: currentScale <= MIN_SCALE,
    isMax: currentScale >= MAX_SCALE,
  };
};