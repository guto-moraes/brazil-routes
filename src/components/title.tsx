import { cn } from "@/lib/utils";

const Title = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h1 className={cn(
      "text-[clamp(3rem,8vw,5.5rem)] text-bege-700 font-cabinet",
      "font-black py-24 px-4 leading-none", className)}>
      {children}
    </h1>
  );
};

export default Title;
