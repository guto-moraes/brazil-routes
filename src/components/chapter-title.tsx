import { Link } from "@tanstack/react-router";
import { useQueryMenu } from "@/hooks/queries/menus";
import { cn, pageTitle } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowRightLeft, BookOpen, BookOpenCheck } from "lucide-react";
import { Title } from "./title";

const ChapterTitle = ({
  chapter,
  title,
  subtitle,
  className,
}: {
  chapter: string;
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  const { menuItems: menus } = useQueryMenu("Almanaque").data.menu;
  const fullTitle = pageTitle(title);

  return (
    <div className="h-max w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-x-2 mb-2 cursor-pointer" title="Mudar de capítulo">
          <p className="text-lg text-tan-500 dark:text-white uppercase tracking-tighter">{chapter}</p>
          <span className="rounded-xs bg-chocolate-300 dark:bg-blue-retro-400 size-5 flex justify-center items-center">
            <ArrowRightLeft className="size-3 text-white" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none w-48 dark:bg-dark-900">
          <DropdownMenuGroup>
            <DropdownMenuLabel className="uppercase">Índice</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menus.nodes.map((item, index) => (
              <DropdownMenuItem key={index} className="w-full">
                <Link
                  to="/almanaque-digital/capitulo-{-$number}"
                  params={{ number: item.uri.split("-")[2].split("/")[0] }}
                  title={item.uri}
                  className="text-sm text-bone-600 dark:text-white hover:text-bone-500 dark:hover:text-dark-contrast-100 uppercase flex items-center gap-x-1"
                  activeProps={{ className: "font-bold text-darkgreen-500! dark:text-dark-contrast-100!" }}
                >
                  {chapter === item.label ? <BookOpenCheck className="text-white dark:text-dark-contrast-100" /> : <BookOpen className="text-white" />} {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Title className="container max-w-6xl mx-auto text-[clamp(1.75rem,4vw,4rem)] text-bone-700 dark:text-dark-contrast-100 font-cabinet font-black leading-[0.9]">
        {fullTitle.firstPart}
        <span className="text-bone-400 dark:text-dark-contrast-50">{fullTitle.secondPart}</span>
      </Title>
      {subtitle && (
        <h2 className={cn("text-2xl text-bone-500 dark:text-dark-300 font-cintarini font-medium leading-12 mt-2.5", className)}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default ChapterTitle;
