"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const ThemeModeToggle = ({ isHome = false, isActiveMenu }: { isHome?: boolean; isActiveMenu: boolean; }) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border-none p-0">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-none p-0! cursor-pointer bg-black/20 hover:bg-black/30"
        >
          <Sun
            className={cn(
              "size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-9",
              isHome === true || isActiveMenu ? "text-white" : "text-tan-900 dark:text-white",
            )}
          />
          <Moon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Mudar o tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-none bg-tan-100 dark:bg-dark-900">
        <DropdownMenuItem className="hover:bg-tan-200 dark:hover:bg-dark-800 cursor-pointer" onClick={() => setTheme("light")}>
          Padrão
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-tan-200 dark:hover:bg-dark-800 cursor-pointer" onClick={() => setTheme("dark")}>
          Contraste
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-tan-200 dark:hover:bg-dark-800 cursor-pointer" onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeModeToggle;
