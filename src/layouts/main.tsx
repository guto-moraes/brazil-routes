import { cn } from "@/lib/utils";

const Main = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <main className={cn("h-full w-full [view-transition-name:main-content]", className)}>{children}</main>;
};

export default Main;
