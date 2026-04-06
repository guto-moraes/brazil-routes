import { cn } from "@/lib/utils";

const Main = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <main className={cn("w-full min-h-[calc(100svh-313px)] [view-transition-name:main-content]", className)}>{children}</main>;
};

export default Main;
