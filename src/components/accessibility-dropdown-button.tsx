"use client";

import { ALargeSmall, Contrast, PersonStanding } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { FontSizeController } from "./font-size-controls";

const AccessibiltiyDropdownButton = ({ isHome = false, isActiveMenu }: { isHome?: boolean; isActiveMenu: boolean }) => {
  const { theme, setTheme } = useTheme();

  const handleToggleContrast = () => {
    if (theme === "dark" || theme === "system") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none p-0">
        <Button
          variant="outline"
          size="icon"
          className={cn("rounded-full bg-black/10 hover:bg-black/30 p-0! cursor-pointer")}
        >
          <span className={cn(
            "rounded-full border-2! dark:border-dark-contrast-100",
            isHome === true || isActiveMenu ? "border-white" : "border-blue-retro-500"
          )}>
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
            "w-full flex justify-start items-center gap-6 text-dark-900 dark:text-dark-contrast-100 font-medium",
            "hover:bg-tan-200! dark:hover:bg-dark-800! transition-colors duration-300 cursor-pointer group",
          )}
        >
          <ALargeSmall
            className={cn(
              "size-5 fill-tan-100 dark:fill-dark-900 group-hover:fill-tan-200 dark:group-hover:fill-dark-800",
              "stroke-2 stroke-dark-950 dark:stroke-dark-contrast-100",
            )}
          />{" "}
          <FontSizeController />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccessibiltiyDropdownButton;
