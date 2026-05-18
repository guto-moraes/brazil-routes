import { cn } from "@/lib/utils";

const SocialImpactSectionTitle = ({ className, text }: { className: string; text: string }) => (
  <h2 className={cn(
    "text-[clamp(2.5rem,8vw,5.5rem)] font-cabinet font-black tracking-tight",
    "md:mb-16 max-sm:uppercase leading-none", className)}>
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
  <div className="flex flex-col justify-center items-center gap-y-3 max-sm:not-last-of-type:pb-8">
    <h2 className="text-[clamp(3rem,16vw,4.5rem)] text-[#eef5d3] font-black -tracking-widest">{value}</h2>
    <h3 className="text-chocolate-300 font-semibold uppercase">{title}</h3>
    <p className="max-w-[80%] text-sm text-white text-center text-balance">{description}</p>
  </div>
);

export { SocialImpactSectionTitle, SocialImpactStatsCard };
