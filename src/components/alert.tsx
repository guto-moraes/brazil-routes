import { cn } from "@/lib/utils";

const Alert = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-md border-2 border-blue-retro-600 bg-white/80 dark:bg-slate-950 py-4",
        "px-8 mt-8 w-max max-w-full mx-auto flex justify-center items-center gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Alert;
