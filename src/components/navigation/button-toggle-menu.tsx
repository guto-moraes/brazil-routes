import { useState } from "react";
import { cn } from "@/lib/utils";

type ButtonToggleMenuProps = {
  isHome?: boolean;
  isOpen: boolean;
  handleToggle: () => void;
};

const ButtonToggleMenu = ({ isHome, isOpen, handleToggle }: ButtonToggleMenuProps) => {
  const [screenWidth] = useState<number | null>(typeof window !== "undefined" ? window.innerWidth : 0);

  return (
    <div className="h-12 w-max flex items-center gap-2">
      {screenWidth && screenWidth > 640 && (
        <span className={cn("uppercase duration-500 transition-all dark:text-white", isHome ? "text-white" : "text-chocolate-800", isOpen && "scale-0")}>
          Menu
        </span>
      )}
      <button
        id="menubutton"
        aria-haspopup="true"
        aria-controls="menu"
        data-open={isOpen}
        tabIndex={0}
        className={cn(
          "nav-toggler min-h-full w-10 bg-none border-none flex flex-col justify-center items-center gap-1.25 cursor-pointer overflow-x-hidden",
          "py-0.5 [&_span]:h-0.5 [&_span]:w-10 [&_span]:bg-tan-700 data-[open=true]:[&_span]:bg-white [&_span]:transition-all",
          "[&_span]:duration-400 [&_span]:ease-in data-[open=true]:[&_span:nth-child(1)]:translate-y-1.75",
          "data-[open=true]:[&_span:nth-child(1)]:rotate-45 data-[open=true]:[&_span:nth-child(1)]:scale-x-75",
          "data-[open=true]:[&_span:nth-child(3)]:-translate-y-1.75 data-[open=true]:[&_span:nth-child(3)]:-rotate-45",
          "data-[open=true]:[&_span:nth-child(3)]:scale-x-75 data-[open=true]:[&_span:nth-child(2)]:translate-x-100",
          "dark:[&_span]:bg-white", isHome && "[&_span]:bg-white"
        )}
        onClick={handleToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default ButtonToggleMenu;
