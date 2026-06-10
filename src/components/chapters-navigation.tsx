import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChapterLink = ({ chapterNumber, dir }: { chapterNumber: number; dir: string }) => (
  <Link
    to="/almanaque-digital/capitulo-{-$number}"
    params={{ number: String(chapterNumber) }}
    title={`Ir para o Capítulo ${chapterNumber}`}
    className={cn(
      "rounded-sm font-medium uppercase tracking-tighter py-1 px-3 border-2 flex items-center gap-x-1",
      "border-blue-retro-600 hover:border-bone-400 text-blue-retro-600 hover:text-bone-400",
      "dark:border-dark-contrast-100 dark:hover:border-dark-contrast-100/60",
      "dark:text-dark-contrast-100 dark:hover:text-dark-contrast-100/60 transition-colors duration-300",
    )}
  >
    {dir === "prev" && <ChevronLeft />} 
    {" "}Capítulo {chapterNumber}{" "} 
    {dir === "next" && <ChevronRight />}
  </Link>
);

const PreviousAndNextChapter = ({ chapterNumber }: { chapterNumber: number }) => {
  if (chapterNumber > 1 && chapterNumber < 5) {
    return (
      <>
        <ChapterLink chapterNumber={chapterNumber - 1} dir="prev" />
        <ChapterLink chapterNumber={chapterNumber + 1} dir="next" />
      </>
    );
  } else if (chapterNumber === 1) {
    return <ChapterLink chapterNumber={chapterNumber + 1} dir="next" />;
  } else {
    return <ChapterLink chapterNumber={chapterNumber - 1} dir="prev" />;
  }
};

const ChapterNavigation = ({ chapterTitle }: { chapterTitle: string }) => {
  const chapterNumber = Number(chapterTitle.split(" ")[1]);
  return (
    <nav
      className={cn(
        "w-full container max-w-5xl mx-auto flex items-center mt-16",
        chapterNumber > 1 && chapterNumber < 5 ? "justify-between" : "justify-end",
      )}
    >
      <PreviousAndNextChapter chapterNumber={chapterNumber} />
    </nav>
  );
};

export default ChapterNavigation;
