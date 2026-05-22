import { cn } from "@/lib/utils";
import { CircleCheck, CircleX } from "lucide-react";

const ButtonOption = ({
  index,
  isSubmitted,
  check,
  answer,
}: {
  index: string | number;
  isSubmitted: boolean;
  check: boolean;
  answer: string;
}) => (
  <button
    role="listitem"
    className={cn(
      "rounded-sm outline-2  outline-offset-2 flex justify-between items-center gap-2",
      !isSubmitted
        ? "outline-tan-500"
        : isSubmitted && check
          ? "outline-darkgreen-500 bg-bege-50/70"
          : "outline-terracotta-600 bg-bege-50/70",
    )}
  >
    <span
      className={cn(
        "size-11 rounded-sm text-lg font-semibold grid place-content-center",
        !isSubmitted
          ? "bg-tan-300 text-tan-800"
          : isSubmitted && check
            ? "bg-darkgreen-500 text-white"
            : "bg-terracotta-600 text-white",
      )}
    >
      {index}
    </span>
    <p
      className={cn(
        "h-full grow text-left font-medium leading-5 flex items-center",
        !isSubmitted ? "text-tan-800" : isSubmitted && check ? "text-darkgreen-800" : "text-terracotta-800",
      )}
    >
      {answer}
    </p>
    {isSubmitted &&
      (check ? (
        <CircleCheck className="size-7 text-darkgreen-500" />
      ) : (
        <CircleX className="size-7 text-terracotta-600" />
      ))}
  </button>
);

export default ButtonOption;
