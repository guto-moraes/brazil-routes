import { dateFormat } from "@/lib/client-utils";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import z from "zod";

export const BlogCardSchema = z.object({
  imageSrc: z.string(),
  date: z.string(),
  tag: z.string(),
  uri: z.string(),
  title: z.string(),
});

type BlogCardTypes = z.infer<typeof BlogCardSchema>;

const BlogCard = ({ imageSrc, date, tag, uri, title }: BlogCardTypes) => (
  <article className="relative shadow hover:scale-110 transition-all duration-300 rounded-2xl bg-white dark:bg-dark-800 dark:hover:bg-dark-900 p-4">
    <figure className="rounded-t-xl h-54 w-full max-w-full overflow-hidden">
      <img className="h-full w-full object-cover object-top" src={imageSrc} />
    </figure>
    <div className="text-xs text-bone-600 dark:text-white font-mono font-medium flex items-center gap-x-3 py-6">
      <time>{dateFormat(date)}</time>
      &#x2022;
      <span className={cn(
        "rounded-full bg-bone-100 dark:bg-blue-retro-400 font-medium leading-none",
        "dark:text-white grid place-content-center pt-1 pb-0.5 px-2"
      )}>
        {tag}
      </span>
    </div>
    <Link
      to={uri}
      className={cn(
        "text-2xl text-bone-700 dark:text-dark-contrast-100 font-semibold leading-[1.1] hover:opacity-80",
        "after:absolute after:inset-0 transition-all duration-300 line-clamp-3"
      )}
      title={title}
    >
      {title}
    </Link>
  </article>
);

export default BlogCard;
