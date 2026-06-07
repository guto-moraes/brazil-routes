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
import { ScrollArea } from "./ui/scroll-area";
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
      <DropdownMenu>
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
          className="w-44 flex items-center flex-col gap-x-1 border-none bg-tan-100 dark:bg-dark-900"
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
                "stroke-2 stroke-dark-950 dark:stroke-dark-contrast-100",
              )}
            />{" "}
            <span className="text-xs font-medium text-dark-950 dark:text-white">
              {theme === "dark" || theme === "system" ? "Sem Contraste" : "Contraste"}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "w-full flex justify-start items-center gap-6 text-dark-950 dark:text-dark-contrast-100 font-medium",
              "hover:bg-tan-200! dark:hover:bg-dark-800! transition-colors duration-300 cursor-pointer group",
            )}
          >
            <ALargeSmall
              className={cn(
                "size-5 fill-tan-100 dark:fill-dark-950 group-hover:fill-tan-200 dark:group-hover:fill-dark-800",
                "stroke-2 stroke-dark-950 dark:stroke-dark-contrast-100",
              )}
            />{" "}
            <FontSizeController />
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "w-full flex justify-start items-center gap-6 text-dark-950 dark:text-dark-contrast-100 font-medium",
              "hover:bg-tan-200! dark:hover:bg-dark-800! transition-colors duration-300 cursor-pointer group",
            )}
          >
            <Keyboard className="size-5 stroke-dark-950 dark:stroke-dark-contrast-100" />{" "}
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
        <DialogContent className={cn(
          "bg-bone-100 dark:bg-dark-900 dark:[&_button]:data-[slot=dialog-close]:bg-dark-contrast-100!",
          "dark:[&_button]:rounded-full dark:[&_button]:data-[slot=dialog-close]:text-dark-950",
          "dark:[&_button]:p-1 dark:[&_button]:cursor-pointer lg:min-w-140!"
        )}>
          <DialogHeader>
            <DialogTitle className="text-bone-700 dark:text-white">Lista de Teclas de Atalho</DialogTitle>
            <DialogDescription className="mt-2">Navegue entre as páginas do site utilizando as seguintes combinações de teclas:</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-72 sm:h-96">
            <HotkeysList />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AccessibiltiyDropdownButton;
