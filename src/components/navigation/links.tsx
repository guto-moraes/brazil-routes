import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LinkTypeProps = {
  uri: string;
  label: string;
  className?: string;
};

type RouterLinkTypeProps = LinkTypeProps & {
  handleToggleMenu: () => void;
};

const ExternalLink = ({ uri, label }: LinkTypeProps) => (
  <a
    role="menuitem"
    className={cn(
      "text-[clamp(1rem,2.75vw,1.25rem)] text-white hover:text-darkgreen-400 dark:hover:text-dark-contrast-100",
      "no-underline block tracking-[-2%] leading-[1.1] transition-colors duration-300",
    )}
    href={uri}
    title={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

const RouterLink = ({ className, uri, label, handleToggleMenu }: RouterLinkTypeProps) => (
  <Link
    role="menuitem"
    className={cn(
      "no-underline block tracking-[-2%] leading-none",
      "transition-colors duration-300 data-[status=active]:text-chocolate-300 dark:data-[status=active]:text-blue-retro-300",
      className,
    )}
    activeProps={{ className: "font-bold" }}
    activeOptions={{ exact: true }}
    to={uri}
    title={label}
    onClick={handleToggleMenu}
  >
    {label}
  </Link>
);

export { ExternalLink, RouterLink };
