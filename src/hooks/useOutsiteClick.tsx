import { useEffect, type RefObject } from "react";

function useOutsideClick(ref: RefObject<HTMLElement | null>, callback: () => void): void {
  useEffect(() => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
      // Check if the click target is NOT inside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Add listeners for both mouse and touch events
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      // Cleanup: remove listeners on unmount
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]); // Re-run if ref or callback changes
}

export default useOutsideClick;
