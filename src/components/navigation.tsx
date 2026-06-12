"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useQueryMenu } from "@/hooks/queries/menus";

import ButtonToggleMenu from "@/components/navigation/button-toggle-menu";
import Brand from "@/components/navigation/brand";
import {
  MenuContainer,
  MenuGroup,
  MenuGroupContainer,
  MenuList,
  MenuListItem,
  MenuPanelTransition,
  MenuWrapper,
  NavigationContainer,
  NavigationWrapper,
} from "./navigation/menu";
import { ExternalLink, RouterLink } from "./navigation/links"
import { cn } from "@/lib/utils";
import AccessibiltiyDropdownButton from "./accessibility-dropdown-button";

const Navigation = ({ isHome }: { isHome?: boolean }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    if(isActiveMenu){
      setTimeout(() => {
        setIsActiveMenu(false)
      },1000)
    }
    setIsActiveMenu(true);
  };

  /**
   * Carrega os cados dos menus
   */
  const { menuItems: primary } = useQueryMenu("Principal").data.menu;
  const { menuItems: secondary } = useQueryMenu("Secundário").data.menu;
  const { menuItems: legals } = useQueryMenu("Legal").data.menu;
  const { menuItems: socials } = useQueryMenu("Social").data.menu;

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const navToggler = document.querySelector<HTMLButtonElement>(".nav-toggler");
      const navBgs = document.querySelectorAll<HTMLDivElement>(".nav-bg");

      let isMenuOpen = false;
      let isAnimating = false;

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          isAnimating = false;
        },
        onReverseComplete: () => {
          gsap.set(linkBlocks.join(", "), { y: "100%" });
          isAnimating = false;
        },
      });

      navToggler?.addEventListener("click", () => {
        if (isAnimating) return;
        isAnimating = true;

        navToggler.classList.toggle("open");

        if (!isMenuOpen) {
          tl.play();
          animateLinksIn();
        } else {
          tl.reverse();
        }

        isMenuOpen = !isMenuOpen;
      });

      tl.to(navBgs, {
        scaleY: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      tl.to(
        ".nav-items",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.75,
          ease: "power3.inOut",
        },
        "-=0.6",
      );

      SplitText.create(".nav-items li", {
        type: "lines",
        mask: "lines",
        linesClass: "line",
      });

      const linkBlocks = [
        ".nav-socials .line, .nav-legal .line",
        ".nav-primary-links .line, .nav-secondary-links .line",
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
    },
    { scope: menuWrapperRef },
  );
  return (
    <>
      <NavigationWrapper isHome={isHome} isOpen={isActiveMenu}>
        <NavigationContainer>
          <Brand isOpen={isActiveMenu} isHome={isHome} />
          <div className="flex items-center gap-x-2.5">
            <ButtonToggleMenu isHome={isHome} isOpen={isActiveMenu} handleToggle={handleToggleMenu} />
            <AccessibiltiyDropdownButton isHome={isHome} isActiveMenu={isActiveMenu} />
          </div>
        </NavigationContainer>
      </NavigationWrapper>

      <MenuWrapper isOpen={isActiveMenu} ref={menuWrapperRef}>
        <MenuPanelTransition className="bg-tan-400 dark:bg-dark-700" />
        <MenuPanelTransition className="bg-tan-500 dark:bg-dark-800" />
        <MenuPanelTransition className="bg-tan-600 dark:bg-dark-900" />
        <MenuPanelTransition className="bg-tan-700 dark:bg-dark-950" />

        <MenuGroupContainer>
          <MenuContainer>
            <MenuGroup className="flex-2">
              <MenuList className="nav-socials">
                {socials.nodes.map((item, index) => (
                  <MenuListItem key={index}>
                    <ExternalLink uri={item.uri} label={item.label} />
                  </MenuListItem>
                ))}
              </MenuList>

              <MenuList className="nav-legal">
                {legals.nodes.map((item, index) => (
                  <MenuListItem key={index}>
                    <RouterLink
                      uri={item.uri}
                      label={item.label}
                      handleToggleMenu={handleToggleMenu}
                      className={cn(
                        "text-[clamp(1rem,2.75vw,1.25rem)] text-darkgreen-400 dark:text-dark-contrast-100",
                        "hover:text-white dark:hover:text-dark-contrast-100/50"
                      )}
                    />
                  </MenuListItem>
                ))}
              </MenuList>
            </MenuGroup>
            <MenuGroup className="flex-4 md:flex-row">
              <MenuList className="nav-primary-links">
                {primary.nodes.map((item, index) => (
                  <MenuListItem key={index}>
                    <RouterLink
                      uri={item.uri}
                      label={item.label}
                      handleToggleMenu={handleToggleMenu}
                      className="text-[clamp(1rem,3vw,1.5rem)] text-white hover:text-darkgreen-400 dark:hover:text-dark-contrast-100"
                    />
                  </MenuListItem>
                ))}
              </MenuList>

              <MenuList className="nav-secondary-links">
                {secondary.nodes.map((item, index) => (
                  <MenuListItem key={index}>
                    <RouterLink
                      uri={item.uri}
                      label={item.label}
                      handleToggleMenu={handleToggleMenu}
                      className="text-[clamp(1rem,2.75vw,1.25rem)] text-white hover:text-darkgreen-400 dark:hover:text-dark-contrast-100"
                    />
                  </MenuListItem>
                ))}
              </MenuList>
            </MenuGroup>
          </MenuContainer>
        </MenuGroupContainer>
      </MenuWrapper>
    </>
  );
};

export default Navigation;
