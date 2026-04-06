"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { socials, legals, primaryLinks, secondaryLinks } from "@/data/menu";
import { cn } from "@/lib/utils";
import negatiLogo from "@/assets/images/negative-logo.webp";

gsap.registerEffect(SplitText);

const Navigation = ({
  isHome,
  logo,
  logoWidth,
  className,
  menuIconColor = "bg-terracotta-950",
}: {
  isHome?: boolean;
  logo: string;
  logoWidth: string;
  className?: string;
  menuIconColor?: string;
}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [screenWidth] = useState<number | null>(typeof window !== "undefined" ? window.innerWidth : 0);

  const handleActiveMenu = () => {
    if (isActiveMenu) {
      setTimeout(() => {
        setIsActiveMenu(false);
      }, 1000);
    }
    setIsActiveMenu(true);
  };

  const menuTextColor = menuIconColor.split("-")[2]
    ? `text-${menuIconColor.split("-")[1]}-${menuIconColor.split("-")[2]}`
    : `text-${menuIconColor.split("-")[1]}`;

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
          "p-4 lg:px-0 h-26 w-full flex justify-center items-center",
          isActiveMenu || isHome ? "shadow-none bg-mate-500" : className,
        )}
      >
        <nav className="navigation absolute top-0 w-full max-w-384 flex justify-between items-center overflow-x-hidden z-40">
          <div className="nav-logo p-4 lg:px-0 border-none z-50">
            <a role="menu-item" href="/" title="Página Inicial">
              <img
                src={isActiveMenu || isHome ? negatiLogo : logo}
                alt="Logotipo do Projeto Caminhos do Brasil Central"
                title="Logotipo do Projeto Caminhos do Brasil Central"
                className={logoWidth}
              />
            </a>
          </div>
          <button
            className="nav-toggler p-4 cursor-pointer border-0 group flex items-center gap-x-1.5"
            id="menubutton"
            aria-haspopup="true"
            aria-controls="menu"
            tabIndex={0}
            onClick={handleActiveMenu}
          >
            {!isActiveMenu && screenWidth && screenWidth >= 640 && (
              <span className={cn("uppercase", isActiveMenu || isHome ? "text-white" : menuTextColor)}>Menu</span>
            )}
            <div className="h-12 flex flex-col justify-center items-center gap-1.25 overflow-hidden">
              <span
                className={cn(
                  "bg-white w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                  "group-[.open]:translate-y-2 group-[.open]:rotate-45",
                  isActiveMenu || isHome ? "bg-white" : menuIconColor,
                )}
              ></span>
              <span
                className={cn(
                  "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 group-[.open]:translate-x-100",

                  isActiveMenu || isHome ? "bg-white" : menuIconColor,
                )}
              ></span>
              <span
                className={cn(
                  "w-8 sm:w-10 h-0.75 transition-all ease-in-out duration-400 pointer-events-none",
                  "group-[.open]:-translate-y-2 group-[.open]:-rotate-45",
                  isActiveMenu || isHome ? "bg-white" : menuIconColor,
                )}
              ></span>
            </div>
          </button>
        </nav>
      </header>

      <div className="nav-content w-full absolute top-0 left-0 z-30" aria-labelledby="menubutton" tabIndex={-1}>
        <div className="nav-transition bg-[#a9c1b3] h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-[#94ae96] h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-[#5a7462] h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>
        <div className="nav-transition bg-[#536c5b] h-full w-full absolute top-0 left-0 -z-1 scale-y-0 origin-top will-change-transform pointer-events-none"></div>

        <div
          className={cn(
            "nav-items flex gap-8 xl:pt-64 xl:px-48 xl:pb-32 bg-mate-800 pointer-events-auto",
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
                    className="text-[1.5rem] text-[#a9c1b3] tracking-[-2%] leading-[1.1] no-underline mb-2 block"
                    to={url}
                    title={title}
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
                    className="text-3xl text-white tracking-[-2%] leading-[1.1] no-underline mb-2 block z-40"
                    to={url}
                    title={title}
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
                      className="text-[1.5rem] text-white tracking-[-2%] leading-[1.1] no-underline mb-2 block"
                      activeProps={{ className: "font-bold" }}
                      viewTransition={{ types: transition }}
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
