"use client";

import { useCookie, type CookiePreferencesType } from "@/contexts/useCookieContext";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const CookieConsentBanner = () => {
  const { showPreferences, setShowPreferences, preferences, setPreferences, saveConsent } = useCookie();

  if (!showPreferences) return null;

  const handleCheckboxChange = (category: keyof CookiePreferencesType): void => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <Dialog open={showPreferences} onOpenChange={() => setShowPreferences(false)}>
        <DialogContent className="bg-tan-100 dark:bg-dark-800">
          <DialogFooter>
            <h2 className="text-2xl text-tan-700 dark:text-white font-semibold mx-auto">
              Gerenciar Preferências de <em>Cookies</em>
            </h2>
          </DialogFooter>
          <Accordion collapsible type="single" className="space-y-2 border-0 [&>*>[data-slot=accordion-content]]:px-0">
            <AccordionItem value="item-1" className="rounded bg-tan-200 dark:bg-dark-950 border-none py-1 px-2">
              <AccordionTrigger
                className={cn(
                  "hover:text-bone-600 hover:no-underline py-2 cursor-pointer peer group",
                  "w-full flex items-center [&_svg]:order-first [&_svg]:size-5 [&_svg]:-mt-1",
                  "[&_svg]:ml-0 [&_svg]:flex-nowrap dark:[&_svg]:stroke-dark-contrast-100!",
                )}
              >
                <span className="text-lg text-tan-800 dark:text-dark-contrast-100 dark:text-dark-contrast-10 leading-0">
                  <em>Cookies</em> essenciais
                </span>
                <div onClick={(e) => e.stopPropagation()} className="grow flex justify-end items-center">
                  <Switch
                    className={cn(
                      "data-[state=unchecked]:bg-tan-300! data-[state=checked]:bg-tan-600! cursor-pointer!",
                      "data-[state=unchecked]:[&_span]:bg-tan-50! data-[state=checked]:[&_span]:bg-tan-50",
                      "dark:data-[state=unchecked]:bg-dark-300! dark:data-[state=checked]:bg-dark-contrast-100!",
                      "dark:data-[state=unchecked]:[&_span]:bg-dark-700! dark:data-[state=checked]:[&_span]:bg-dark-950",
                    )}
                    checked={preferences.essentials}
                    disabled
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "rounded bg-tan-100 dark:bg-dark-800 peer-data-[state=closed]:scale-0",
                  "peer-data-[state=open]:scale-100 p-2 transition-all duration-500",
                )}
              >
                <p className="text-tan-700 dark:text-white text-justify hyphens-auto">
                  Os <em>cookies</em> desse grupo não realizam a coleta de quaisquer dados do usuário, são utilizados
                  exclusivamente para que o <em>site</em> funcione corretamente. Em virtude disso, não permitimos que os
                  usuários alterem esta configuração.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="rounded bg-tan-200 dark:bg-dark-950 border-none py-1 px-2">
              <AccordionTrigger
                className={cn(
                  "hover:text-bone-600 hover:no-underline py-2 cursor-pointer peer group",
                  "w-full flex items-center [&_svg]:order-first [&_svg]:size-5 [&_svg]:-mt-1",
                  "[&_svg]:ml-0 [&_svg]:flex-nowrap dark:[&_svg]:stroke-dark-contrast-100!",
                )}
              >
                <span className="text-lg text-tan-800 dark:text-dark-contrast-100 dark:text-dark-contrast-10 leading-0">
                  <em>Cookies</em> não essenciais
                </span>
                <div onClick={(e) => e.stopPropagation()} className="grow flex justify-end items-center">
                  <Switch
                    className={cn(
                      "data-[state=unchecked]:bg-tan-300! data-[state=checked]:bg-tan-600! cursor-pointer!",
                      "data-[state=unchecked]:[&_span]:bg-tan-50! data-[state=checked]:[&_span]:bg-tan-50",
                      "dark:data-[state=unchecked]:bg-dark-300! dark:data-[state=checked]:bg-dark-contrast-100!",
                      "dark:data-[state=unchecked]:[&_span]:bg-dark-700! dark:data-[state=checked]:[&_span]:bg-dark-950",
                    )}
                    checked={preferences.noEssentials}
                    onClick={() => handleCheckboxChange("noEssentials")}
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "rounded bg-tan-100 dark:bg-dark-800 peer-data-[state=closed]:scale-0",
                  "peer-data-[state=open]:scale-100 p-2 transition-all duration-500",
                )}
              >
                <p className="text-tan-700 dark:text-white text-justify hyphens-auto">
                  Embora sejam listados como não essenciais, pois não impedem a utilização do <em>site</em>, alguns
                  desses <em>cookies</em> são importantes para gerenciar o estado da <em>chache</em> e melhorar o
                  desempenho do <em>site</em>. Outros, ainda, acionam recursos de acessibilidade, como o contraste e o
                  tamanha da fonte do <em>site</em>. Por este motivo,{" "}
                  <strong>recomendamos que eles se mantenham habilitados</strong>.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-center items-center gap-4 my-2">
            <Button
              className={cn(
                "rounded-sm bg-terracotta-800 hover:bg-terracotta-900 transition-colors duration-300 cursor-pointer",
                "dark:bg-transparent dark:hover:bg-dark-contrast-100 dark:text-dark-contrast-100",
                "dark:hover:text-dark-950 dark:border-2 dark:border-dark-contrast-100 dark:hover:bg-dark-contrast-100",
              )}
              onClick={() => setShowPreferences(false)}
            >
              Cancelar
            </Button>
            <Button
              className={cn(
                "rounded-sm bg-darkgreen-700 hover:bg-darkgreen-800 transition-colors duration-300 cursor-pointer",
                "dark:bg-dark-contrast-100 dark:hover:border-dark-950! dark:hover:bg-dark-950!",
                "dark:text-dark-950 dark:hover:text-white dark:border-2 dark:border-dark-contrast-100 dark:hover:bg-dark-contrast-100",
              )}
              onClick={() => saveConsent(preferences)}
            >
              Salvar Preferências
            </Button>
          </div>
          <p className="text-sm text-bone-700 dark:text-white text-justify hyphens-auto">
            Para mais informações, leia a nossa{" "}
            <Link
              className="text-blue-retro-500 hover:text-tan-400 dark:text-dark-contrast-100 dark:hover:text-dark-contrast-100/60"
              to="/$slug"
              params={{ slug: "politica-de-privacidade" }}
            >
              Política de Privacidade
            </Link>{" "}
            ou acesse a página dedicada à{" "}
            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
              title="Lei Geral de Proteção de Dados Pessoais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-retro-500 hover:text-tan-400 dark:text-dark-contrast-100 dark:hover:text-dark-contrast-100/60"
            >
              Lei Geral de Proteção de Dados Pessoais
            </a>{" "}
            (LGPD).
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsentBanner;
