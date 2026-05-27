import { cn } from "@/lib/utils";

const ResearchApproaches = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approaches container max-w-3xl mx-auto h-auto absolute bottom-0 left-1/2 -translate-x-1/2",
        "flex justify-center md:justify-around items-center gap-4 sm:gap-8 lg:gap-16",
        "z-6 overflow-y-hidden py-4 max-sm:px-4 sm:px-6 lg:px-0"
    )}>
      {children}
    </div>
  );
};

const ApproachContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approach rounded-2xl bg-darkgreen-950/40 text-darkgreen-950 sm:h-30 w-80",
        "flex flex-col justify-center items-center gap-y-4 max-sm:py-2",
        "outline-2 outline-offset-2 outline-dashed outline-darkgreen-950/40",
    )}>
      {children}
    </div>
  );
};

const Approach = ({ text }: { text: string }) => {
  return <h3 className="text-[clamp(0.75rem,3vw,1.5rem)] text-white uppercase font-semibold">{text}</h3>;
};

export { Approach, ApproachContainer, ResearchApproaches };
