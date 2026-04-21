import { cn } from "@/lib/utils";
import type { FieldsActivityCardItem } from "@/types/theme-graphql";

const ActionSection = ({ project, title, description }: { project: string; title: string; description: string }) => {
  return (
    <section className="action-section relative bg-tan-400 h-full w-full flex flex-col justify-center items-center gap-y-1">
      <p className="text-xl text-tan-600 font-medium uppercase">{project}</p>
      <h2
        className={cn(
          "text-[clamp(2.5rem,10vw,5.5rem)] text-chocolate-900 font-extrabold",
          "leading-[0.85] -tracking-[0.02em] uppercase w-220 text-center",
        )}
      >
        {title}
      </h2>
      <p className="text-xl text-tan-800 text-center text-balance font-medium max-w-1/2 mx-auto mt-8">{description}</p>
    </section>
  );
};

const Card = ({ color, title, description, tags, number, className }: FieldsActivityCardItem) => {
  const splitTags = tags.split(",");
  const num = typeof number === "number" ? String(number).padStart(2, "0") : number;
  const background = color
    ? `
      radial-gradient(ellipse 120% 95% at 14% -8%, ${color} 0%, transparent 52%),
      linear-gradient(176deg, ${color} 0%, ${color} 46%, ${color} 100%)
    `
        .replace(/\s+/g, " ")
        .trim()
    : `linear-gradient(176deg, ${color} 0%, ${color} 100%)`;

  return (
    <article
      className={[
        "flex min-h-112 w-full min-w-0 max-w-[min(42rem,calc(100vw-3rem))] flex-col justify-between gap-12 overflow-hidden rounded-2xl p-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:min-h-144 md:gap-14 md:p-12 lg:min-h-152 lg:p-14",
        className ?? "",
      ].join(" ")}
      style={{ background }}
    >
      <div className="max-w-[min(100%,26rem)]">
        <h2 className="text-[clamp(1.5rem,3.75vw,2.25rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.055em] text-zinc-900">
          {title}
        </h2>
        <div className="mt-6 font-sans font-medium leading-snug text-base text-zinc-600 md:text-[1.2rem]">
          {description}
        </div>
      </div>

      <div className="flex items-end justify-between gap-8">
        {splitTags && splitTags.length > 0 ? (
          <ul className="flex flex-col gap-1 font-sans text-lg font-bold uppercase tracking-[-0.02em] text-zinc-800 md:text-2xl">
            {splitTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : (
          <span />
        )}

        <span className="shrink-0 font-sans text-[clamp(3.25rem,13vw,6rem)] font-extrabold leading-none tracking-[-0.04em] text-black/20 tabular-nums">
          {num}
        </span>
      </div>
    </article>
  );
};

export { Card, ActionSection };
