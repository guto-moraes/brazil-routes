import { cn } from "@/lib/utils";

type MenuNavigationTypeProps = {
  isHome?: boolean;
  isOpen: boolean;
  className?: string;
  children: React.ReactNode;
};

const NavigationWrapper = ({ isHome, isOpen, className, children }: MenuNavigationTypeProps) => (
  <div
    className={cn(
      "dark:bg-tan-950 h-full w-full absolute top-0 left-0 z-2 transition-colors duration-500 px-4",
      className,
      isHome && isOpen || isOpen ? "bg-tan-800 dark:bg-dark-800 z-5" : isHome ? "bg-transparent dark:bg-transparent" : "bg-white dark:bg-dark-800",
    )}
  >
    {children}
  </div>
);

const NavigationContainer = ({ children }: { children: React.ReactNode }) => (
  <nav className="navbar container mx-auto h-full flex justify-between items-center">{children}</nav>
)

type MenuContainerTypeProps = MenuNavigationTypeProps & {
  ref: React.RefObject<HTMLDivElement | null>;
};

const MenuWrapper = ({ isOpen, ref, children }: MenuContainerTypeProps) => {
  return (
    <div
      className={cn("nav-content w-full absolute top-20 xl:top-26 left-0 pointer-events-auto", isOpen ? "z-1" : "-z-10")}
      aria-labelledby="menubutton"
      tabIndex={-1}
      ref={ref}
    >
      {children}
    </div>
  );
};

const MenuContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-8">{children}</section>
);

const MenuPanelTransition = ({ className }: { className: string }) => (
  <div
    className={cn(
      "nav-bg h-full w-full absolute top-0 left-0 scale-y-0 origin-top will-change-transform pointer-events-none -z-1",
      className,
    )}
  ></div>
);

const MenuGroupContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="nav-items bg-tan-800 dark:bg-dark-800 p-8 md:p-16 [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] will-change-[clip-path]">
    {children}
  </div>
);

const MenuGroup = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("nav-items-col flex flex-col justify-between gap-4 md:gap-8", className)}>{children}</div>
);

const MenuList = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <ul role="menu" aria-labelledby="menu-list" className={cn("flex flex-col gap-y-0.5 md:gap-y-1.5", className)}>
    {children}
  </ul>
);

const MenuListItem = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <li className={cn("line", className)} role="presentation">
    {children}
  </li>
);

export {
  NavigationWrapper,
  NavigationContainer,
  MenuWrapper,
  MenuContainer,
  MenuPanelTransition,
  MenuGroupContainer,
  MenuGroup,
  MenuList,
  MenuListItem,
};
