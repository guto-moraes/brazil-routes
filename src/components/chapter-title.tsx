import { Link } from "@tanstack/react-router";
import { useQueryAlmanqueMenu } from "@/hooks/queries/menus";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowRightLeft } from "lucide-react";

const ChapterTitle = ({
  chapter,
  firstTitle,
  lastTitle,
  subtitle,
  className,
}: {
  chapter: string;
  firstTitle: string;
  lastTitle: string;
  subtitle?: string;
  className?: string;
}) => {
  const { menuItems: menus } = useQueryAlmanqueMenu().data.menu;

  return (
    <div className="h-max w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-x-2 cursor-pointer" title="Mudar de capítulo">
          <p className="text-lg text-tan-500 uppercase tracking-tighter">{chapter}</p>
          <span className="rounded-xs bg-chocolate-300 size-5 flex justify-center items-center">
            <ArrowRightLeft className="size-3 text-white" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel className="uppercase">Índice</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menus.nodes.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link
                  to="/almanaque-digital/capitulo-{-$slug}"
                  params={{ slug: item.uri.split("-")[2].split("/")[0] }}
                  title={item.uri}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className="text-[clamp(2rem,5vw,4rem)] text-tan-600 font-cabinet font-black leading-none">
        {firstTitle} <span className="text-tan-400">{lastTitle}</span>
      </h1>
      {subtitle && (
        <h2 className={cn("text-2xl text-bone-500 font-cintarini font-medium leading-12 mt-2.5", className)}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default ChapterTitle;
