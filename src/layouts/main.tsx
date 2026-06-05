import { cn } from "@/lib/utils";

const Main = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <main className={cn("bg-bege-50 dark:bg-dark-950 min-h-[calc(100svh-80px)] xl:min-h-[calc(100svh-104px)] w-full p-4", className)}>{children}</main>;
};

export default Main;
