import { cn } from "@/lib/utils";

const ApproachContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approach rounded-2xl bg-darkgreen-950/40 text-darkgreen-950 h-52 w-80",
        "flex flex-col justify-center items-center gap-y-4",
        "outline-2 outline-offset-2 outline-dashed outline-darkgreen-950/40"
    )}>
      {children}
    </div>
  );
};

const Approach = ({ text }: { text: string }) => {
  return <h3 className="text-2xl text-white uppercase font-semibold">{text}</h3>;
};

const ResearchApproaches = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
        "approaches container mx-auto min-h-80 absolute -bottom-10 left-1/2 -translate-x-1/2",
        "flex justify-center items-center gap-16 z-6 overflow-y-hidden"
    )}>
      {children}
    </div>
  );
};

export { Approach, ApproachContainer, ResearchApproaches };
