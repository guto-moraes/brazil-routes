import { cn } from "@/lib/utils";

const Main = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <main className={cn("bg-bege-50 dark:bg-dark-950 max-h-max 2xl:min-h-[calc(100svh-104px)] w-full p-4", className)}>{children}</main>;
};

export default Main;
