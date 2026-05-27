"use client";

import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.webp";
import negativeLogo from "@/assets/images/logo-negative.webp";
import { useQueryMenu } from "@/hooks/queries/menus";

gsap.registerEffect(SplitText);

const Navigation = ({
  isHome,
  isNegativeLogo,
  className,
}: {
  isHome?: boolean;
  isNegativeLogo?: boolean;
  className?: string;
}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [screenWidth] = useState<number | null>(typeof window !== "undefined" ? window.innerWidth : 0);
  const navigationRef = useRef<HTMLDivElement | null>(null);

  //Carrega dados dos menus
  const { menuItems: primary } = useQueryMenu("Principal").data.menu;
  const { menuItems: secondary } = useQueryMenu("Secundário").data.menu;
  const { menuItems: legals } = useQueryMenu("Legal").data.menu;
  const { menuItems: socials } = useQueryMenu("Social").data.menu;

  const handleActiveMenu = () => {
    if (isActiveMenu) {
      setTimeout(() => {
        setIsActiveMenu(false);
      }, 1000);
    }
    setIsActiveMenu(true);
  };

  const handleCloseMenu = () => {
    setTimeout(() => {
      setIsActiveMenu(false);
    }, 1000);
    ScrollTrigger.refresh();
  };

  useGSAP(
    () => {
      const navToggler = document.querySelector<HTMLButtonElement>(".nav-toggler");
      const navTransitions = document.querySelectorAll<HTMLDivElement>(".nav-transition");
      const navItems = document.querySelector<HTMLDivElement>(".nav-items");

      let isMenuOpen = false;
      let isAnimating = false;

      document.fonts.ready.then(() => {
        const tl = gsap.timeline({
          paused: true,
          onComplete: () => {
            isAnimating = false;
          },
          onReverseComplete: () => {
            gsap.set(linkBlocks.join(", "), {
              y: "100%",
            });
            isAnimating = false;
          },
        });

        navToggler!.addEventListener("click", () => {
          if (isAnimating) return;

          isAnimating = true;

          navToggler!.classList.toggle("open");

          if (!isMenuOpen) {
            tl.play();
            animateLinksIn();
          } else {
            tl.reverse();
          }

          isMenuOpen = !isMenuOpen;
        });

        tl.to(navTransitions, {
          scaleY: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.inOut",
        });

        tl.to(
          navItems,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.75,
            ease: "power3.inOut",
          },
          "-=0.6",
        );

        SplitText.create(".nav-items a", {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });

        const linkBlocks = [
          ".nav-socials .line, .nav-legal .line",
          ".nav-primary-links .line",
          ".nav-secondary-links .line",
        ];

        function animateLinksIn() {
          linkBlocks.forEach((selector) => {
            gsap.fromTo(
              selector,
              { y: "100%" },
              {
                y: "0%",
                duration: 0.75,
                stagger: 0.05,
                ease: "power3.out",
                delay: 0.85,
              },
            );
          });
        }
      });
    },
    { scope: navigationRef },
  );

  return (
    <div className={cn("container-navigation")}>
      <header
        className={cn(
          "p-4 lg:px-0 h-22 xl:h-26 w-full overflow-hidden",
          (isActiveMenu && isHome) || !isNegativeLogo ? "shadow-none bg-none" : "shadow-lg bg-white",
          isActiveMenu || isHome ? "shadow-none bg-none" : "shadow-lg bg-white",
          className,
        )}
      >
        <div className="container mx-auto">
          <nav
            className={cn(
              "navigation absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-full",
              "xl:max-w-384 flex justify-between items-center overflow-x-hidden z-8",
            )}
          >
            <div className="nav-logo py-4 pl-3 xl:pl-0 text-left border-none">
              <a role="menu-item" href="/" title="Página Inicial">
                <img
                  src={isActiveMenu || isNegativeLogo ? negativeLogo : logo}
                  alt="Logotipo do Projeto Caminhos do Brasil Central"
                  title="Logotipo do Projeto Caminhos do Brasil Central"
                  className={cn("w-40 md:w-48 lg:w-52")}
                />
              </a>
            </div>
            <button
              className={cn(
                "nav-toggler p-4 cursor-pointer border-0 group flex items-center gap-x-1.5",
                isActiveMenu && "open",
              )}
              id="menubutton"
              aria-haspopup="true"
              aria-controls="menu"
              tabIndex={0}
              onClick={handleActiveMenu}
            >
              <span
                className={cn(
                  "text-chocolate-800 uppercase duration-700 transition-all",
                  isActiveMenu || (isHome && isNegativeLogo) ? "text-white" : "text-chocolate-800",
                  isActiveMenu ? "scale-0" : "scale-100",
                  screenWidth && screenWidth < 640 ? "hidden" : "block",
                )}
              >
                Menu
              </span>
              <div className=" h-full xl:h-12 flex flex-col justify-center items-center gap-y-1.25 overflow-hidden">
                <span
                  className={cn(
                    "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                    "group-[.open]:translate-y-2 group-[.open]:rotate-45",
                    isActiveMenu || (isHome && isNegativeLogo) ? "bg-white" : "bg-chocolate-800",
                  )}
                ></span>
                <span
                  className={cn(
                    "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 group-[.open]:translate-x-100",
                    isActiveMenu || (isHome && isNegativeLogo) ? "bg-white" : "bg-chocolate-800",
                  )}
                ></span>
                <span
                  className={cn(
                    "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                    "group-[.open]:-translate-y-2 group-[.open]:-rotate-45",
                    isActiveMenu || (isHome && isNegativeLogo) ? "bg-white" : "bg-chocolate-800",
                  )}
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn("nav-content w-full absolute top-0 left-0", isActiveMenu ? "z-7" : "-z-1")}
        aria-labelledby="menubutton"
        tabIndex={-1}
        ref={navigationRef}
      >
        <div className="nav-transition bg-tan-400 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-tan-500 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-tan-600 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-tan-700 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>

        <div
          className={cn(
            "nav-items lg:container lg:mx-auto flex flex-col lg:flex-row gap-8 py-12 px-8 xl:px-0",
            "mt-16 xl:mt-24 pointer-events-auto will-change-[clip-path] [clip-path:polygon(0%_0%,100%_0%,100%_0,0%_0%)]",
          )}
        >
          <div className="nav-items-col flex-2 flex flex-col justify-between">
            <ul role="menu" className="nav-socials flex flex-col gap-y-2 z-2">
              {socials.nodes.map(({ label, uri }, index) => (
                <li className="line" role="presentation" key={index}>
                  <a
                    role="menuitem"
                    className={cn(
                      "text-[clamp(1rem,3vw,1.5rem)] text-white hover:text-darkgreen-500 no-underline block",
                      "tracking-[-2%] leading-[1.1] transition-colors duration-300 data-[status=active]:text-chocolate-300",
                    )}
                    href={uri}
                    title={label}
                    target="_blank"
                    rel="noopener"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul role="menu" className="nav-legal flex flex-col gap-y-2 z-2">
              {legals.nodes.map(({ label, uri }, index) => (
                <li className="line" role="presentation" key={index}>
                  <Link
                    role="menuitem"
                    className={cn(
                      "text-[clamp(1rem,3vw,1.5rem)] text-darkgreen-500 hover:text-white no-underline block",
                      "tracking-[-2%] leading-[1.1] transition-colors duration-300 data-[status=active]:text-chocolate-300",
                    )}
                    activeProps={{ className: "font-bold" }}
                    activeOptions={{ exact: true }}
                    to={uri}
                    title={label}
                    onClick={handleCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-items-col flex-4 flex flex-col md:flex-row justify-between gap-8">
            <ul role="menu" className="nav-primary-links w-full flex flex-col gap-y-3 z-5">
              {primary.nodes.map(({label, uri}, index) => (
                <li className="line" role="presentation" key={index}>
                  <Link
                    role="menuitem"
                    className={cn(
                      "text-[clamp(1.25rem,5vw,1.75rem)] text-white hover:text-darkgreen-500 no-underline block whitespace-nowrap",
                      "tracking-[-2%] leading-[1.1] data-[status=active]:text-chocolate-300 transition-colors duration-300",
                    )}
                    activeProps={{ className: "font-bold" }}
                    activeOptions={{ exact: true }}
                    to={uri}
                    title={label}
                    onClick={handleCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul role="menu" className="nav-secondary-links z-2">
              {secondary.nodes.map(({ label, uri }, index) => {
                return (
                  <li className="line" role="presentation" key={index}>
                    <Link
                      role="menuitem"
                      to={uri}
                      title={label}
                      className={cn(
                        "text-[clamp(1rem,3vw,1.5rem)] text-white hover:text-darkgreen-500 no-underline mb-2 block whitespace-nowrap",
                        "tracking-[-2%] leading-[1.1] transition-colors duration-300 data-[status=active]:text-chocolate-300",
                      )}
                      activeProps={{ className: "font-bold" }}
                      activeOptions={{ exact: true }}
                      onClick={handleCloseMenu}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
