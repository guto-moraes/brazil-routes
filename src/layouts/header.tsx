import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";

const Header = ({ isHome, className }: { isHome?: boolean; className?: string }) => {
  return (
    <header className={cn("relative h-20 xl:h-26 w-full", className)}>
      <Navigation isHome={isHome} />
    </header>
  );
};

export default Header;
