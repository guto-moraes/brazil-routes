"use client";

import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import useHotkeysAccessibility from "@/hooks/useHotkeysAccessibility";
import { ALargeSmall, Contrast, Keyboard, PersonStanding } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontSizeController } from "./font-size-controls";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import HotkeysList from "./hotkeys-table";

const AccessibiltiyDropdownButton = ({ isHome = false, isActiveMenu }: { isHome?: boolean; isActiveMenu: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [hotkeysList, setHotkeysList] = useState(false);

  //Navegação pelo teclado
  useHotkeysAccessibility();

  const handleToggleContrast = () => {
    if (theme === "dark" || theme === "system") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleHotkeysList = () => {
    setHotkeysList(!hotkeysList);
  };

  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild className="border-none p-0">
          <Button
            variant="outline"
            size="icon"
            className={cn("rounded-full bg-black/10 hover:bg-black/30 p-0! cursor-pointer")}
          >
            <span
              className={cn(
                "rounded-full border-2! dark:border-dark-contrast-100",
                isHome === true || isActiveMenu ? "border-white" : "border-blue-retro-500",
              )}
            >
              <PersonStanding
                className={cn(
                  "size-6 scale-100 rotate-0 transition-all dark:fill-dark-900 dark:stroke-dark-contrast-100",
                  isHome === true || isActiveMenu ? "text-white" : "text-blue-retro-500 dark:text-white",
                )}
              />
            </span>
            <span className="sr-only">Contraste</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="relative w-46 flex items-center flex-col gap-x-1 border-none bg-tan-100 dark:bg-dark-900"
        >
          <DropdownMenuItem
            className={cn(
              "flex justify-start items-center gap-6 w-full hover:bg-tan-200! dark:hover:bg-dark-800!",
              "transition-colors duration-300 cursor-pointer group",
            )}
            onClick={handleToggleContrast}
          >
            <Contrast
              className={cn(
                "size-5 fill-tan-100 dark:fill-dark-950 group-hover:fill-tan-200 dark:group-hover:fill-dark-800",
                "stroke-2 stroke-bone-500 dark:stroke-dark-contrast-100",
              )}
            />{" "}
            <span className="text-xs font-medium text-dark-950 dark:text-white">
              {theme === "dark" || theme === "system" ? "Remover Contraste" : "Aplicar Contraste"}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "h-8 w-full flex justify-start items-center gap-6 text-dark-950 dark:text-dark-contrast-100 font-medium",
              "hover:bg-tan-200! dark:hover:bg-dark-800! transition-colors duration-300 cursor-pointer group",
            )}
          >
            <ALargeSmall
              className={cn(
                "size-5 fill-tan-100 dark:fill-dark-950 group-hover:fill-tan-200 dark:group-hover:fill-dark-800",
                "stroke-2 stroke-bone-500 dark:stroke-dark-contrast-100",
              )}
            />{" "}
            <FontSizeController />
            <div className={cn(
              "rounded bg-bone-400 dark:bg-slate-950 text-xs text-white text-center w-full py-0.5 px-1 scale-0",
              "group-hover:scale-100 group-hover:absolute group-hover:left-0 group-hover:-top-5 transition-all duration-300"
            )}>
              Mudar o tamanho da fonte
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "h-8 w-full flex justify-start items-center gap-6 text-dark-950 dark:text-dark-contrast-100 font-medium",
              "hover:bg-tan-200! dark:hover:bg-dark-800! transition-colors duration-300 cursor-pointer group",
            )}
          >
            <Keyboard className="size-5 stroke-bone-500 dark:stroke-dark-contrast-100" />{" "}
            <Button
              className="bg-transparent! text-xs text-dark-950 dark:text-white p-0! cursor-pointer"
              onClick={handleHotkeysList}
            >
              Teclas de Atalho
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={hotkeysList} onOpenChange={handleHotkeysList}>
        <DialogContent
          className={cn(
            "bg-bone-100 dark:bg-dark-900 dark:[&_button]:data-[slot=dialog-close]:bg-dark-contrast-100!",
            "dark:[&_button]:rounded-full dark:[&_button]:data-[slot=dialog-close]:text-dark-950",
            "dark:[&_button]:p-1 dark:[&_button]:cursor-pointer lg:min-w-140!",
          )}
        >
          <DialogHeader>
            <DialogTitle className="text-bone-700 dark:text-white">Lista de Teclas de Atalho</DialogTitle>
            <DialogDescription className="mt-2">
              Navegue entre as páginas do site utilizando as seguintes combinações de teclas:
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-72 sm:h-96">
            <HotkeysList />
            <ScrollBar
              className={cn(
                "bg-tan-200! **:data-[slot=scroll-area-thumb]:bg-bone-400! **:data-[slot=scroll-area-thumb]:z-2",
                "dark:bg-dark-600! dark:**:data-[slot=scroll-area-thumb]:bg-dark-contrast-100!",
              )}
            />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessibiltiyDropdownButton;
