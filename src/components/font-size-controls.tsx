"use client";

import { ButtonGroup } from "./ui/button-group";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAccessibility } from "@/hooks/useFontAccessibility";

export const FontSizeController: React.FC = () => {
  const { 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize, 
    isMin, 
    isMax 
  } = useAccessibility();

  return (
    <ButtonGroup className={cn(
        "h-8 w-max p-0! rounded-xs flex gap-x-2 items-center",
        "[&_button]:text-dark-950! dark:[&_button]:text-white!"
    )}>
      <Button 
        disabled={isMin}
        aria-label="Diminui o tamanho das fontes"
        aria-disabled={isMin}
        className="bg-transparent! p-0! cursor-pointer" 
        onClick={decreaseFontSize}
      >
        <Minus className="text-dark-950! dark:text-white!" />
      </Button>
      <Button 
        aria-label="Redefini as fontes para os tamanhos originais"
        className="bg-transparent! text-xs p-0! cursor-pointer" 
        onClick={resetFontSize}
      >
        Redefinir
      </Button>
      <Button 
        disabled={isMax}
        aria-label="Aumenta o tamanho das fontes"
        aria-disabled={isMax}
        className="bg-transparent! p-0! cursor-pointer" 
        onClick={increaseFontSize}
      >
        <Plus className="text-dark-950! dark:text-white!" />
      </Button>
    </ButtonGroup>
  );
};
