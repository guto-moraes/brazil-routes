import { cn } from "@/lib/utils";

const ApproachContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approach rounded-2xl bg-darkgreen-950/40 text-darkgreen-950 h-auto md:h-52 w-80",
        "flex flex-col justify-center items-center gap-y-4 max-sm:py-2",
        "outline-2 outline-offset-2 outline-dashed outline-darkgreen-950/40"
    )}>
      {children}
    </div>
  );
};

const Approach = ({ text }: { text: string }) => {
  return <h3 className="text-[clamp(0.75rem,3vw,1.5rem)] text-white uppercase font-semibold">{text}</h3>;
};

const ResearchApproaches = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approaches container mx-auto min-h-80 absolute -bottom-34 md:-bottom-10 left-1/2 -translate-x-1/2",
        "flex justify-center items-center gap-4 md:gap-6 lg:gap-16 z-6 overflow-y-hidden max-sm:px-4"
    )}>
      {children}
    </div>
  );
};

export { Approach, ApproachContainer, ResearchApproaches };
