import { cn } from "@/lib/utils";

const GoFurtherItem = ({
  subject,
  description,
  title,
  link,
}: {
  subject: string;
  description: string;
  title: string;
  link: string;
}) => (
  <div className="h-auto lg:h-40 relative overflow-hidden flex justify-start items-center group max-sm:py-4">
    <div
      className={cn(
        "h-full lg:h-40 w-full absolute top-0 left-0 -translate-y-full bg-chocolate-900 dark:bg-dark-contrast-100",
        "group-hover:translate-y-0 transition-tranform duration-500 will-change-transform",
      )}
    ></div>
    <div className="h-full w-full flex flex-col md:flex-row gap-4 px-4 md:px-8 hover:z-1">
      <div className="flex-2 h-full w-full flex justify-start items-center">
        <h2 className={cn(
          "text-terracotta-700 dark:text-dark-contrast-100 text-xl font-semibold font-cabinet",
          "group-hover:text-chocolate-300 dark:group-hover:text-dark-950 transition-colors duration-500"
        )}>
          {subject}
        </h2>
      </div>
      <div className="flex-3 h-full flex justify-center items-center">
        <p className="text-sm font-light group-hover:text-white dark:group-hover:text-dark-950 md:px-6">{description}</p>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <a
          className={cn(
            "text-xs font-semibold text-terracotta-700 dark:text-dark-contrast-100 bg-transparent group-hover:bg-chocolate-300",
            "group-hover:text-dark-950 uppercase py-1.5 px-5 rounded-full border border-terracotta-700 dark:border-dark-contrast-100",
            "hover:border-chocolate-300 group-hover:border-chocolate-300 transition-colors duration-500",
            "dark:group-hover:bg-dark-950"
          )}
          href={link}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar o site
        </a>
      </div>
    </div>
  </div>
);

export default GoFurtherItem;
