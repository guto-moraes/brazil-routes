import { cn } from "@/lib/utils";
// import { CircleCheck, CircleX } from "lucide-react";

const ButtonOption = ({
  index,
  choice,
  onClick,
}: {
  index: string | number;
  answer: number;
  choice: string;
  onClick: () => void;
}) => (
  <button
    role="listitem"
    className={cn(
      "rounded-sm outline-2  outline-offset-2 flex justify-between items-center gap-2 cursor-pointer outline-tan-500",
    )}
    onClick={onClick}
  >
    <span className={cn("size-11 rounded-sm text-lg font-semibold grid place-content-center bg-tan-300 text-tan-800")}>
      {index}
    </span>
    <p className={cn("h-full grow text-left font-medium leading-5 flex items-center text-tan-800")}>{choice}</p>

    {/* <CircleCheck className="size-7 text-darkgreen-500" />
        <CircleX className="size-7 text-terracotta-600" /> */}
  </button>
);

export default ButtonOption;
