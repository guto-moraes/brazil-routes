import { cn } from "@/lib/utils";

const Title = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h1
      className={cn(
        "text-[clamp(1.75rem,4vw,4.5rem)] text-tan-700 font-inter md:font-cabinet font-black",
        "max-md:uppercase leading-none max-md:tracking-tighter", className,
      )}
    >
      {children}
    </h1>
  );
};

const TitleH2 = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h2
      className={cn(
        "text-[clamp(1.5rem,4vw,4.5rem)] text-tan-700 font-inter md:font-cabinet font-black",
        "max-md:uppercase leading-none max-md:tracking-tighter", className,
      )}
    >
      {children}
    </h2>
  );
};

export { Title, TitleH2 };
