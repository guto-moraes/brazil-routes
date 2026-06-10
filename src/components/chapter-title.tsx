import { cn, pageTitle } from "@/lib/utils";
import { Title } from "./title";

const ChapterTitle = ({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) => {
  const fullTitle = pageTitle(title);

  return (
    <div className="h-max w-full">
      <Title
        className={cn(
          "container max-w-6xl mx-auto text-[clamp(1.75rem,4vw,4rem)] text-bone-700",
          "dark:text-dark-contrast-100 font-cabinet font-black leading-[0.9]",
        )}
      >
        {fullTitle.firstPart}
        <span className="text-bone-400 dark:text-dark-contrast-50">{fullTitle.secondPart}</span>
      </Title>
      {subtitle && (
        <h2
          className={cn(
            "text-2xl text-bone-500 dark:text-dark-300 font-cintarini font-medium leading-12 mt-2.5",
            className,
          )}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default ChapterTitle;
