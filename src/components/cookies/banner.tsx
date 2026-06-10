import React from "react";
import { useCookie } from "@/contexts/useCookieContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Cookie } from "lucide-react";

export const CookieBanner: React.FC = () => {
  const { showBanner, acceptAll, setShowPreferences } = useCookie();

  if (!showBanner) return null;

  return (
    <div
      className={cn(
        "rounded-xl bg-tan-100 dark:bg-dark-900 w-[96%] max-w-full xl:max-w-6xl absolute bottom-4",
        "left-1/2 -translate-x-1/2 flex justify-between items-center gap-x-4 p-3",
        "md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 z-80",
      )}
    >
      <div className="flex gap-2">
        <Cookie className="size-8 text-tan-600 dark:text-tan-200" />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg text-tan-800 dark:text-dark-contrast-100 font-bold">
            Usamos <em>cookies</em> para melhorar sua experiência
          </h2>
          <p className="flex-2 text-sm text-tan-800 dark:text-white text-center md:text-left">
            Mas, você pode configurar os <em>cookies</em> não essenciais que deseja aceitar. Neste o caso, basta clicar
            no botão ao lado, definar suas preferências e salvá-las.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-[425px]:flex-row justify-end items-center gap-2 md:gap-4">
        <Button
          className={cn(
            "bg-tan-600 dark:bg-transparent hover:bg-tan-700 dark:border-2 dark:border-dark-contrast-100",
            "dark:hover:border-dark-contrast-100/60 dark:hover:bg-dark-contrast-100/60 text-dark:950 dark:text-dark-contrast-100",
            "dark:hover:text-dark-950 w-44 min-[425px]:w-max transition-colors duration-300 cursor-pointer",
          )}
          onClick={() => setShowPreferences(true)}
        >
          Configurar <em>Cookies</em>
        </Button>
        <Button
          className={cn(
            "bg-blue-retro-500 dark:bg-dark-contrast-100 hover:bg-blue-retro-600 dark:hover:bg-dark-contrast-100/60",
            "text-white dark:text-dark-950 *:w-44 min-[425px]:w-max transition-colors duration-300 cursor-pointer",
          )}
          onClick={acceptAll}
        >
          Aceitar Todos
        </Button>
      </div>
    </div>
  );
};
