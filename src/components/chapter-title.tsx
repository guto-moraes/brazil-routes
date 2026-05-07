import { cn } from "@/lib/utils";

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
  return (
    <div className="h-max w-full">
      <h3 className="text-lg text-tan-500 uppercase tracking-tighter">{chapter}</h3>
      <h1 className="text-[clamp(2rem,5vw,4rem)] text-tan-600 font-cabinet font-black leading-none">
        {firstTitle} <span className="text-tan-400">{lastTitle}</span>
      </h1>
      {subtitle && (<h2 className={cn("text-2xl text-bone-500 font-cintarini font-medium leading-12 mt-2.5", className)}>{subtitle}</h2>)}
    </div>
  );
};

export default ChapterTitle;
