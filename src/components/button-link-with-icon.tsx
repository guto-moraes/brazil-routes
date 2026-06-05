import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const ButtonLinkWithIcon = ({
  textButton,
  link,
  bgColor,
  iconColor,
  target,
}: {
  textButton: string | undefined;
  link: string | undefined;
  bgColor: string;
  iconColor: string;
  target: boolean;
}) => {
  return (
    <Link
      to={link}
      viewTransition={{ types: ["slide-right"] }}
      className={cn(
        "relative text-sm font-medium rounded-full h-10 p-1 ps-6 pe-14 group transition-all",
        "duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer flex items-center",
        bgColor,
      )}
      target={target ? "_blank" : "_parent"}
    >
      <span className="relative z-10 transition-all duration-500">{textButton}</span>
      <span
        className={cn(
          "absolute right-1 size-8 bg-background dark:bg-dark-950 text-foreground rounded-full grid place-content-center",
          "transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45",
          iconColor,
        )}
      >
        <ArrowUpRight className="size-5 sm:size-6" />
      </span>
    </Link>
  );
};

export default ButtonLinkWithIcon;
