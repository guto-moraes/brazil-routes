"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const CookieConsentBanner = () => {
  const [isCookieConsent, setIsCookieConsent] = useState(true);

  const handleCookieConsent = () => {
    setIsCookieConsent(false);
  };

  return (
    <>
      {isCookieConsent && (
        <div
          className={cn(
            "rounded-2xl bg-bege-50 dark:bg-dark-900 min-h-60 max-h-96 w-full",
            "lg:max-w-1/3 max-w-full absolute bottom-2 left-1/2 -translate-x-1/2",
            "p-6 flex flex-col gap-y-4",
          )}
        >
          <h2 className="text-2xl text-blue-retro-500 font-semibold mx-auto">
            Gerenciar Preferências de <em>Cookies</em>
          </h2>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="[&>svg]:hidden hover:text-bone-600 hover:no-underline py-1 cursor-pointer group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-lg text-bone flex items-center gap-x-2">
                    <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform duration-300" />
                    <span>
                        <em>Cookies</em> Essenciais
                    </span>  
                  </div>
                  <Switch className="bg-bone-200! data-[state=checked]:bg-darkgreen-500!" defaultChecked />
                </div>
              </AccordionTrigger>
              <AccordionContent className={cn(
                "rounded bg-tan-50 text-tan-800 group-data-[state=close]:scale-0",
                "group-data-[state=open]:scale-100 p-2 transition-all duration-500"
              )}>
                <p>
                  Necessário para habilitar a funcionalidade básica do site. Você não pode desativar os cookies
                  essenciais.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none">
              <AccordionTrigger className="[&>svg]:hidden hover:text-bone-600 hover:no-underline py-1 cursor-pointer group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-lg text-bone flex items-center gap-x-2">
                    <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform duration-300" />
                    <span>
                        <em>Cookies</em> Essenciais
                    </span>  
                  </div>
                  <Switch className="bg-bone-200! data-[state=checked]:bg-darkgreen-500!" defaultChecked />
                </div>
              </AccordionTrigger>
              <AccordionContent className={cn(
                "rounded bg-tan-50 text-tan-800 group-data-[state=close]:scale-0",
                "group-data-[state=open]:scale-100 p-2 transition-all duration-500"
              )}>
                <p>
                  Necessário para habilitar a funcionalidade básica do site. Você não pode desativar os cookies
                  essenciais.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-center items-center gap-4">
            <Button onClick={handleCookieConsent}>Rejeitar <em>Cookies</em></Button>
            <Button onClick={handleCookieConsent}>Aceitar <em>Cookies</em></Button>
            <Button onClick={handleCookieConsent}>Salvar Preferências</Button>
          </div>
          <p className="text-sm text-bone-700 text-justify hyphens-auto">
            Para mais informações, leia a nossa Política de Privacidade ou acesse a página dedicada à Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
