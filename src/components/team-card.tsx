import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-to-clipboad";
import Instagram from "@/components/instagram";
import { Mail } from "lucide-react";
import type { TeamSocialTypes } from "@/types/components-types";
import Article from "./article";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

type TeamCardTypes = {
  imageSrc: string;
  memberName: string;
  role: string;
  synopsis: string;
  socials: TeamSocialTypes[];
  handleToggle: () => void;
};

const TeamCard = ({ imageSrc, memberName, role, synopsis, socials, handleToggle }: TeamCardTypes) => {
  const name = memberName.split(" ");
  return (
    <div
      className={cn(
        "team-member flex-1 relative rounded-3xl h-max lg:h-[80svh] w-full max-w-100 lg:max-w-full",
        "outline-2 outline-terracotta-800 dark:outline-dark-contrast-100 outline-dashed",
        "outline-offset-4 translate-y-0 lg:translate-y-[125%] will-change-transform",
      )}
    >
      <div className="team-member-initial-name absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className={cn(
          "text-[clamp(8rem,15vw,20rem)] text-terracotta-800 dark:text-dark-contrast-100",
          "font-cabinet font-black will-change-transform lg:scale-0"
        )}>
          {name[0].charAt(0)}
        </h2>
      </div>
      <div className="team-member-card relative">
        <figure className="team-member-img rounded-2xl aspect-[1] mb-4 overflow-hidden">
          <img className="h-full w-full object-cover object-top" src={imageSrc} alt={memberName} />
        </figure>
        <div className="team-member-info flex flex-col items-center gap-4 text-center">
          <p className="text-chocolate-900 dark:text-dark-100 font-mono">( {role} )</p>
          <h2 className={cn(
            "text-[clamp(1.75rem,5vw,4rem)] text-terracotta-800 dark:text-dark-contrast-100",
            "font-inter font-black uppercase leading-[0.9] tracking-tight"
          )}>
            {name[0]} <span className="text-bone-800 dark:text-dark-300">{name[1]}</span>
          </h2>
        </div>
        <div className="w-full absolute bottom-8 left-0 flex justify-between items-center px-8">
          <ul className="flex justify-start items-center gap-x-2">
            {socials.map((social, idx) =>
              social.socialName[0] !== "Email" ? (
                <li key={idx}>
                  <a
                    className={cn(
                      "text-terracotta-800 hover:text-terracotta-700 transition-colors duration-300",
                      "flex gap-x-1 dark:text-dark-200 dark:hover:text-dark-contrast-100"
                    )}
                    href={social.socialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Seguir ${memberName} no Instagram`}
                  >
                    <Instagram className="size-6" /> <span className="text-bone-600 dark:text-dark-100">{social.socialAt}</span>
                  </a>
                </li>
              ) : (
                <li className="w-full flex gap-x-1" key={idx}>
                  <CopyButton
                    toastTitle="E-mail copiado com sucesso!"
                    toastMessage={`O e-mail de ${memberName} foi copiado para área de transferência.`}
                    title={`Copiar endereço de e-mail de ${memberName}`}
                    value={social.socialUrl}
                    className="gap-0 shadow-none border-none bg-transparent hover:bg-transparent p-0! cursor-pointer group"
                  >
                    <Mail className={cn(
                      "size-6 text-terracotta-800 dark:text-dark-200 group-hover:text-terracotta-700",
                      "dark:group-hover:text-dark-contrast-100 transition-colors duration-300"
                    )} />
                  </CopyButton>
                </li>
              ),
            )}
          </ul>

          <Dialog>
            <DialogTrigger
              onClick={handleToggle}
              className={cn(
                "rounded-sm bg-chocolate-300 hover:bg-chocolate-400 border border-chocolate-400",
                "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/70 dark:border-dark-contrast-100",
                "text-white dark:text-dark-950 text-xs font-medium uppercase py-1 px-2 transition-colors duration-400 cursor-pointer",
              )}
            >
              Outras Informações
            </DialogTrigger>
            <DialogContent className="bg-bege-50 dark:bg-dark-950 dark:border-dark-950">
              <DialogHeader>
                <DialogDescription className="shadow-md w-max mx-auto rounded-3xl h-80 overflow-hidden">
                  <img className="h-full w-full object-scale-down" src={imageSrc} alt={memberName} />
                </DialogDescription>
                <DialogTitle className="text-xl text-bone-500 dark:text-dark-contrast-100 text-center font-bold uppercase tracking-tight pt-4">{memberName}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-72 w-full rounded-md!">
                <Article content={synopsis} className="bg-tan-100 dark:bg-dark-800 p-4 shadow-inner" />
                <ScrollBar className={cn(
                  "bg-tan-200! **:data-[slot=scroll-area-thumb]:bg-bone-400! **:data-[slot=scroll-area-thumb]:z-2",
                  "dark:bg-dark-600! dark:**:data-[slot=scroll-area-thumb]:bg-dark-contrast-100!",
                )} />
              </ScrollArea>
              <DialogFooter>
                <DialogClose>
                  <Button
                    variant="outline"
                    onClick={handleToggle}
                    className={cn(
                      "bg-darkgreen-400 hover:bg-darkgreen-500 text-white hover:text-white dark:hover:border-dark-contrast-100",
                      "dark:bg-dark-contrast-100 dark:hover:bg-dark-contrast-100/80 dark:text-dark-950 dark:hover:text-dark-950",
                      "transition-colors duration-300 cursor-pointer"
                    )}
                  >
                    Fechar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
