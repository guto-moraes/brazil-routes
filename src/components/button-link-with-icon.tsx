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
  textButton: string;
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
        "relative text-base font-medium rounded-full h-12 p-1 ps-6 pe-14 group flex items-center",
        "transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer",
        bgColor,
      )}
      target={target ? "_blank" : "_parent"}
    >
      <span className="relative z-10 transition-all duration-500">
        {textButton}
      </span>
      <div
        className={cn(
          "absolute right-1 size-10 rounded-full flex items-center justify-center",
          "transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
          iconColor,
        )}
      >
        <ArrowUpRight size={24} />
      </div>
    </Link>
  );
};

export default ButtonLinkWithIcon;
