"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { socials, legals, primaryLinks, secondaryLinks } from "@/data/menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.webp";
import negativeLogo from "@/assets/images/logo-negative.webp";

gsap.registerEffect(SplitText);

const Navigation = ({ isHome, className }: { isHome?: boolean; className?: string }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [screenWidth] = useState<number | null>(typeof window !== "undefined" ? window.innerWidth : 0);

  const handleActiveMenu = () => {
    if (isActiveMenu) {
      setTimeout(() => {
        setIsActiveMenu(false);
        ScrollTrigger.refresh();
      }, 1000);
    }
    setIsActiveMenu(true);
  };

  const handleCloseMenu = () => {
    setIsActiveMenu(false);
    ScrollTrigger.refresh();
  };

  useGSAP(() => {
    const navToggler = document.querySelector<HTMLButtonElement>(".nav-toggler");
    const navTransitions = document.querySelectorAll<HTMLDivElement>(".nav-transition");
    const navItems = document.querySelector<HTMLDivElement>(".nav-items");

    let isMenuOpen = false;
    let isAnimating = false;

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

  return (
    <>
      <header
        className={cn(
          "p-4 lg:px-0 h-26 w-full overflow-hidden",
          isActiveMenu || isHome ? "shadow-none bg-transparent" : "shadow-lg bg-white",
          className,
        )}
      >
        <div className="container mx-auto">
          <nav className="navigation absolute top-0 w-full max-w-384 flex justify-between items-center overflow-x-hidden z-70">
            <div className="nav-logo p-4 lg:px-0 border-none z-50">
              <a role="menu-item" href="/" title="Página Inicial">
                <img
                  src={isActiveMenu || isHome ? negativeLogo : logo}
                  alt="Logotipo do Projeto Caminhos do Brasil Central"
                  title="Logotipo do Projeto Caminhos do Brasil Central"
                  className={cn(
                    "w-32 md:w-48 lg:w-52",
                    isHome && "ml-6"
                  )}
                />
              </a>
            </div>
            <button
              className="nav-toggler p-4 cursor-pointer border-0 group flex items-center gap-x-1.5 z-80"
              id="menubutton"
              aria-haspopup="true"
              aria-controls="menu"
              tabIndex={0}
              onClick={handleActiveMenu}
            >
              <span
                className={cn(
                  "uppercase duration-700 transition-all",
                  isActiveMenu || isHome ? "text-white" : "text-gray-600",
                  isActiveMenu ? "scale-0" : "scale-100",
                  screenWidth && screenWidth < 640 ? "hidden" : "block",
                )}
              >
                Menu
              </span>
              <div className="h-12 flex flex-col justify-center items-center gap-1.25 overflow-hidden z-75">
                <span
                  className={cn(
                    "bg-white w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                    "group-[.open]:translate-y-2 group-[.open]:rotate-45",
                    isActiveMenu || isHome ? "bg-white" : "bg-gray-600",
                  )}
                ></span>
                <span
                  className={cn(
                    "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 group-[.open]:translate-x-100",
                    isActiveMenu || isHome ? "bg-white" : "bg-gray-600",
                  )}
                ></span>
                <span
                  className={cn(
                    "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                    "group-[.open]:-translate-y-2 group-[.open]:-rotate-45",
                    isActiveMenu || isHome ? "bg-white" : "bg-gray-600",
                  )}
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>

      <div
        className={cn("nav-content w-full absolute top-0 left-0 overflow-hidden", isActiveMenu ? "z-60" : "z-0")}
        aria-labelledby="menubutton"
        tabIndex={-1}
      >
        <div className="nav-transition bg-artic-300 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-artic-400 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-artic-500 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-artic-600 h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>

        <div
          className={cn(
            "nav-items flex gap-8 xl:pt-64 xl:px-48 xl:pb-32 bg-artic-500 pointer-events-auto",
            "will-change-[clip-path] [clip-path:polygon(0%_0%,100%_0%,100%_0,0%_0%)]",
          )}
        >
          <div className="nav-items-col flex-2 flex flex-col justify-between gap-8">
            <ul role="menu" className="nav-socials z-2">
              {socials.map(({ title, url }, index) => (
                <li className="line" role="presentation" key={index}>
                  <a
                    role="menuitem"
                    className="text-[1.5rem] text-white tracking-[-2%] leading-[1.1] no-underline mb-2 block cursor-pointer"
                    href={url}
                    title={title}
                    target="_blank"
                    rel="noopener"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <ul role="menu" className="nav-legal z-2">
              {legals.map(({ title, url }, index) => (
                <li className="line" role="presentation" key={index}>
                  <Link
                    role="menuitem"
                    className="text-[1.5rem] text-artic-700 tracking-[-2%] leading-[1.1] no-underline mb-2 block data-[status=active]:text-artic-800"
                    activeProps={{ className: "font-bold" }}
                    to={url}
                    title={title}
                    onClick={handleCloseMenu}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-items-col flex-4 flex justify-between gap-8">
            <ul role="menu" className="nav-primary-links flex flex-col gap-y-4 z-2">
              {primaryLinks.map(({ title, url }, index) => (
                <li className="line" role="presentation" key={index}>
                  <Link
                    role="menuitem"
                    className="text-3xl text-white tracking-[-2%] leading-[1.1] no-underline mb-2 block z-40 data-[status=active]:text-artic-800"
                    activeProps={{ className: "font-bold" }}
                    to={url}
                    title={title}
                    onClick={handleCloseMenu}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul role="menu" className="nav-secondary-links z-2">
              {secondaryLinks.map(({ url, title, transition }, index) => {
                return (
                  <li className="line" role="presentation" key={index}>
                    <Link
                      role="menuitem"
                      to={url}
                      title={title}
                      className="text-[1.5rem] text-white tracking-[-2%] leading-[1.1] no-underline mb-2 block data-[status=active]:text-artic-800"
                      activeProps={{ className: "font-bold" }}
                      viewTransition={{ types: transition }}
                      onClick={handleCloseMenu}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
