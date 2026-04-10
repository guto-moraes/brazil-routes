import { cn } from "@/lib/utils";

const Main = ({
  className,
  ref,
  children,
}: {
  className?: string;
  ref?: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
}) => {
  return <main className={cn("h-full w-full [view-transition-name:main-content]", className)} ref={ref}>{children}</main>;
};

export default Main;
