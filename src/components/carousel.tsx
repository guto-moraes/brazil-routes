"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import image_one from "@/assets/images/experiments/1.webp";
import image_two from "@/assets/images/experiments/2.webp";
import image_three from "@/assets/images/experiments/3.webp";
import logo_guto from "@/assets/images/builtby.webp";
import logo_cbc from "@/assets/images/logo-icon.webp";

type StoriesTypes = {
  profileIconSrc: string;
  profileName: string;
  title: string[];
  linkSrc: string;
  linkLabel: string;
  imageSrc: string;
};

const stories: StoriesTypes[] = [
  {
    profileIconSrc: logo_cbc,
    profileName: "Caminhos do Brasil Central",
    title: ["História", "Memória", "e Patrimônio"],
    linkSrc: "https://caminhosdobrasilcentral.com",
    linkLabel: "Descubra",
    imageSrc: image_one,
  },
  {
    profileIconSrc: logo_guto,
    profileName: "Guto Moraes",
    title: ["Teologia", "História", "e Front-end"],
    linkLabel: "Saiba mais",
    linkSrc: "https://github.com/guto-moraes",
    imageSrc: image_two,
  },
  {
    profileIconSrc: logo_cbc,
    profileName: "Caminhos do Brasil Central",
    title: ["Expedição Roncador-Xingu", "Fundação Brasil Central", "e Vale do Araguaia"],
    linkLabel: "Saiba mais",
    linkSrc: "https://caminhosdobrasilcentral.com",
    imageSrc: image_three,
  },
];

const InstagramCarousel = () => {
  useGSAP(() => {
    let activeStory = 0;
    const storyDuration = 4000;
    const contentUpdateDelay = 0.4;
    let direction = "next";
    let storyTimeout: number;

    const cursor = document.querySelector<HTMLDivElement>(".carousel-cursor");
    const cursorText = cursor!.querySelector<HTMLParagraphElement>("p");
    const imageContainer = document.querySelector<HTMLDivElement>(".carousel-image-wrapper");
    const currentImageContainer = document.querySelector<HTMLDivElement>(".carousel-image-wrapper .carousel-image");
    const currentImage = currentImageContainer!.querySelector<HTMLImageElement>("img");
    const profileNameContainer = document.querySelector<HTMLDivElement>(".carousel-profile-name");
    const profileImage = document.querySelector<HTMLImageElement>(".carousel-profile-icon img");
    const titleRows = document.querySelectorAll<HTMLDivElement>(".carousel-content-title-row");
    const link = document.querySelector<HTMLAnchorElement>(".carousel-content-link a");
    const highlight = document.querySelectorAll<HTMLDivElement>(".carousel-index .carousel-index-highlight");

    function changeStory() {
      const previousStory = activeStory;
      if (direction === "next") {
        activeStory = (activeStory + 1) % stories.length;
      } else {
        activeStory = (activeStory - 1 + stories.length) % stories.length;
      }

      const story = stories[activeStory];

      gsap.to(".carousel-profile-name p", {
        y: direction === "next" ? -24 : 24,
        duration: 0.5,
        delay: contentUpdateDelay,
      });

      gsap.to(".carousel-title-row h2", {
        y: direction === "next" ? -48 : 48,
        duration: 0.5,
        delay: contentUpdateDelay,
      });

      setTimeout(() => {
        const newProfileName = document.createElement("p");
        newProfileName.classList.add("text-white");
        newProfileName.innerText = story.profileName;
        newProfileName.style.transform = direction === "next" ? "translateY(24px)" : "translateY(-24px)";
        profileNameContainer!.appendChild(newProfileName);

        gsap.to(newProfileName, {
          y: 0,
          duration: 0.5,
          delay: contentUpdateDelay,
        });

        story.title.forEach((line, index) => {
          if (titleRows[index]) {
            const newTitle = document.createElement("h2");
            newTitle.classList.add("absolute", "top-0", "text-white", "text-[2.25rem]");
            newTitle.innerText = line;
            newTitle.style.transform = direction === "next" ? "translateY(48px)" : "translateY(-48px)";
            titleRows[index].appendChild(newTitle);

            gsap.to(newTitle, {
              y: 0,
              duration: 0.5,
              delay: contentUpdateDelay,
            });
          }
        });

        const newImageContainer = document.createElement("div");
        newImageContainer.classList.add("carousel-image", "absolute", "top-0", "left-0", "h-full", "w-full");
        const newImage = document.createElement("img");
        newImage.classList.add("absolute", "top-0", "left-0", "h-full", "w-full", "object-cover");
        newImage.src = story.imageSrc;
        newImage.alt = story.profileName;
        newImageContainer.appendChild(newImage);
        imageContainer!.appendChild(newImageContainer);

        animateNewImage(newImageContainer);

        const upcomingImage = newImage;
        animateImageScale(currentImage!, upcomingImage);

        resetIndexHighlight(previousStory);
        animateIndexHighlight(activeStory);

        clearUpElements();
        clearTimeout(storyTimeout);
        storyTimeout = setTimeout(changeStory, storyDuration);
      }, 200);

      setTimeout(() => {
        profileImage!.src = story.profileIconSrc;
        link!.textContent = story.linkLabel;
        link!.href = story.linkSrc;
      }, 600);
    }

    function animateNewImage(imageContainer: HTMLDivElement) {
      gsap.set(imageContainer, {
        clipPath:
          direction === "next"
            ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      });

      gsap.to(imageContainer, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.inOut",
      });
    }

    function animateImageScale(currentImage: HTMLDivElement, upcomingImage: HTMLElement) {
      gsap.fromTo(
        currentImage,
        {
          scale: 1,
          rotate: 0,
        },
        {
          scale: 2,
          rotate: direction === "next" ? -25 : 25,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            currentImage!.parentElement!.remove();
          },
        },
      );

      gsap.fromTo(
        upcomingImage,
        {
          scale: 2,
          rotate: direction === "next" ? 25 : -25,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power4.inOut",
        },
      );
    }

    function resetIndexHighlight(index: number) {
      gsap.killTweensOf(highlight[index]);
      gsap.to(highlight[index], {
        width: direction === "next" ? "100%" : "0%",
        duration: 0.3,
        onStart: () => {
          gsap.to(highlight[index], {
            transformOrigin: "right center",
            scaleX: 0,
            duration: 0.3,
          });
        },
      });
    }

    function animateIndexHighlight(index: number) {
      gsap.set(highlight[index], {
        width: "0%",
        scaleX: 1,
        transformOrigin: "right center",
      });
      gsap.to(highlight[index], {
        width: "100%",
        duration: storyDuration / 1000,
        ease: "none",
      });
    }

    function clearUpElements() {
      while (profileNameContainer!.childElementCount > 2) {
        profileNameContainer!.removeChild(profileNameContainer!.firstChild!);
      }

      titleRows.forEach((titleRow) => {
        while (titleRow!.childElementCount > 2) {
          titleRow!.removeChild(titleRow!.firstChild!);
        }
      });
    }

    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      gsap.to(cursor, {
        x: clientX - cursor!.offsetWidth / 2,
        y: clientY - cursor!.offsetHeight / 2,
        ease: "power2.out",
        duration: 0.3,
      });

      const viewportWidth = window.innerWidth;
      if (clientX < viewportWidth / 2) {
        cursorText!.textContent = "Ant.";
        direction = "prev";
      } else {
        cursorText!.textContent = "Próx.";
        direction = "next";
      }
    });

    document.addEventListener("click", () => {
      clearTimeout(storyTimeout);
      resetIndexHighlight(activeStory);
      changeStory();
    });

    storyTimeout = setTimeout(changeStory, storyDuration);
    animateIndexHighlight(activeStory);
  });

  return (
    <>
      <div className="carousel-container relative bg-black h-svh w-full cursor-none overflow-hidden">
        <div
          className={cn(
            "carousel-cursor rounded-full bg-white/5 absolute top-0 left-0 size-20 flex",
            "justify-center items-center backdrop-blur-[1.25rem] pointer-event-none z-2",
          )}
        >
          <p className="text-[0.725rem] text-white uppercase"></p>
        </div>

        <div className="carousel-image-wrapper absolute top-0 left-0 h-svh w-full opacity-50 overflow-hidden">
          <div className="carousel-image absolute top-0 left-0 h-full w-full">
            <img className="absolute top-0 left-0 h-full w-full object-cover" src={image_two} alt="" />
          </div>
        </div>

        <div className="carousel-content absolute top-1/2 left-1/2 -translate-1/2 h-full w-[30%] py-[4em] flex flex-col justify-between">
          <div className="carousel-content-row">
            <div className="carousel-indices h-px w-full flex justify-between items-center gap-[0.25em]">
              {stories.map((story) => (
                <div className="carousel-index bg-white/25 relative h-px w-full" key={story.imageSrc}>
                  <div className="carousel-index-highlight bg-white absolute top-0 left-0 h-full w-0 scale-x-100"></div>
                </div>
              ))}
            </div>

            <div className="carousel-profile h-15 w-full flex items-center gap-[1em]">
              <div className="carousel-profile-icon relative rounded-full size-10 overflow-hidden">
                <img className="absolute top-0 left-0 h-full w-full object-cover" src={logo_guto} alt="" />
              </div>
              <div className="carousel-profile-name relative h-5 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                <p className="text-white"></p>
              </div>
            </div>
          </div>

          <div className="carousel-content-row">
            <div className="carousel-content-title">
              <div className="carousel-content-title-row relative h-12 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                <h2 className="absolute top-0 text-[2.25rem] text-white no-underline">Sua criatividade</h2>
              </div>
              <div className="carousel-content-title-row relative h-12 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                <h2 className="absolute top-0 text-[2.25rem] text-white no-underline">não terá limites</h2>
              </div>
              <div className="carousel-content-title-row relative h-12 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                <h2 className="absolute top-0 text-[2.25rem] text-white no-underline">se você ousar</h2>
              </div>
            </div>
            <div className={cn(
                "carousel-content-link relative w-max my-[2em] py-[0.25em] after:content-['']",
                "after:bg-white after:absolute after:top-full after:left-0 after:h-px after:w-full"
            )}>
              <a className="text-white no-underline" href="">
                {" "}
                Leia mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramCarousel;
