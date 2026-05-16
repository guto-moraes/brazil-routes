import { cn } from "@/lib/utils";

const SocialImpactSectionTitle = ({ className, text }: { className: string; text: string }) => (
  <h2 className={cn("text-[clamp(2rem,8vw,5.5rem)] font-cabinet font-black tracking-tight mb-16", className)}>
    {text}
  </h2>
);

const SocialImpactStatsCard = ({
  value,
  title,
  description,
}: {
  value: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col justify-center items-center gap-y-3">
    <h2 className="text-7xl text-[#eef5d3] font-black -tracking-widest">{value}</h2>
    <h3 className="text-chocolate-300 font-semibold uppercase">{title}</h3>
    <p className="max-w-[80%] text-sm text-white text-center text-balance">{description}</p>
  </div>
);

export { SocialImpactSectionTitle, SocialImpactStatsCard };
