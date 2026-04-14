"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { cn } from "@/lib/utils";
import image_one from "@/assets/images/experiments/1.webp";
import image_two from "@/assets/images/experiments/2.webp";
import image_three from "@/assets/images/experiments/3.webp";
import logo_guto from "@/assets/images/builtby.webp";
import logo_cbc from "@/assets/images/logo192.png";

type StoriesTypes = {
  profileImage: string;
  profileName: string;
  title: string[];
  link: string;
  linkLabel: string;
  storyImage: string;
};

const stories: StoriesTypes[] = [
  {
    profileImage: logo_cbc,
    profileName: "Caminhos",
    title: ["História", "Memória", "e Patrimônio"],
    link: "https://caminhosdobrasilcentral.com",
    linkLabel: "Saiba mais",
    storyImage: image_one,
  },
  {
    profileImage: logo_guto,
    profileName: "Guto Moraes",
    title: ["Teologia", "História", "e Front-end"],
    linkLabel: "Saiba mais",
    link: "https://github.com/guto-moraes",
    storyImage: image_two,
  },
  {
    profileImage: logo_cbc,
    profileName: "Caminhos",
    title: ["Expedição Roncador-Xingu", "Fundação Brasil Central", "e Vale do Araguaia"],
    linkLabel: "Saiba mais",
    link: "https://caminhosdobrasilcentral.com",
    storyImage: image_three,
  },
];

const InstagramCarousel = () => {
  useGSAP(() => {
    let activeStory = 0;
    const storyDuration = 4000;
    const contentUpdateDelay = 0.4;
    let direction = "next";
    let storyTimeout = 0;

    const cursor = document.querySelector<HTMLDivElement>(".carousel-cursor");
    const cursorText = cursor!.querySelector<HTMLParagraphElement>("p");
    const imageContainer = document.querySelector<HTMLDivElement>(".carousel-image-wrapper");
    const currentImageContainer = document.querySelector<HTMLDivElement>(".carousel-image-wrapper .carousel-image");
    const currentImage = currentImageContainer!.querySelector<HTMLImageElement>("img");
    const profileNameContainer = document.querySelector<HTMLDivElement>(".carousel-profile-name");
    const profileImage = document.querySelector<HTMLImageElement>(".carousel-profile-image img");
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
        newImageContainer.classList.add("carousel-image");
        const newImage = document.createElement("img");
        newImage.src = story.storyImage;
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
        profileImage!.src = story.profileImage;
        link!.textContent = story.linkLabel;
        link!.href = story.link;
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
          rotate: direction === "next" ? -25 : 25,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            currentImage!.parentElement!.remove();
          },
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
      <div className="carousel-container relative">
        <div className="carousel-cursor">
          <p></p>
        </div>

        <div className="carousel-image-wrapper">
          <div className="carousel-image">
            <img src={image_two} alt="" />
          </div>
        </div>

        <div className="carousel-content">
          <div className="carousel-content-row">
            <div className="carousel-indices">
              <div className="carousel-index">
                <div className="carousel-index-highlight"></div>
              </div>
              <div className="indexcarousel-">
                <div className="carousel-index-highlight"></div>
              </div>
              <div className="indexcarousel-">
                <div className="carousel-index-highlight"></div>
              </div>
            </div>

            <div className="carousel-profile">
              <div className="carousel-profile-icon">
                <img src={logo_guto} alt="" />
              </div>
              <div className="carousel-profile-name">
                <p></p>
              </div>
            </div>
          </div>

          <div className="carousel-content-row">
            <div className="carousel-content-title">
              <div className="carousel-content-title-row">
                <h2>Sua criatividade</h2>
              </div>
              <div className="carousel-content-title-row">
                <h2>não terá limites</h2>
              </div>
              <div className="carousel-content-title-row">
                <h2>se você ousar</h2>
              </div>
            </div>
            <div className="carousel-content-link">
              <a href=""> Leia mais</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="carousel-container relative h-svh w-ful overflow-hidden cursor-none">
                <div className={cn(
                    "cursor rounded-full bg-white/5 backdrop-blur-xl absolute top-0 left-0",
                    "size-25 grid place-content-center pointer-events-none z-2"
                )}>
                    <p className="text-xs uppercase"></p>
                </div>

                <div className="story-image-wrapper absolute top-0 left-0 h-svh w-svw mx-auto overflow-hidden opacity-85">
                    <div className="story-img absolute top-0 left-0 h-full w-full">
                        <img className="absolute top-0 left-0 h-full w-full object-cover" src={image_two} alt="" />
                    </div>
                </div>

                <div className="story-content-wrapper absolute top-1/2 left-1/2 -translate-1/2 h-full w-[30%] py-[4em] flex flex-col justify-between">
                    <div className="story-content-row">
                        <div className="story-indices h-[10%] w-full flex justify-between items-center gap-1">
                            <div className="story-index relative h-px w-full bg-white/25">
                                <div className="story-index-highlight bg-white absolute top-0 left-0 h-full w-0 scale-100"></div>
                            </div>
                            <div className="story-index relative h-px w-full bg-white/25">
                                <div className="story-index-highlight bg-white absolute top-0 left-0 h-full w-0 scale-100"></div>
                            </div>
                            <div className="story-index relative h-px w-full bg-white/25">
                                <div className="story-index-highlight bg-white absolute top-0 left-0 h-full w-0 scale-100"></div>
                            </div>
                        </div>
                        <div className="profile h-15 w-full flex items-center gap-4">
                            <div className="profile-icon rounded-full relative size-10 overflow-hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src={logo_guto} alt="" />
                            </div>
                            <div className="profile-name relative h-5 w-50 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                                <p className="absolute top-0 text-white">Guto Moraes</p>
                            </div>
                        </div>
                    </div>
                    <div className="story-content-row">
                        <div className="story-title text-white">
                            <div className="story-title-row relative h-10.5 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                                <h2 className="absolute top-0 text-4xl">Uma Capela que</h2>
                            </div>
                            <div className="story-title-row relative h-10.5 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                                <h2 className="absolute top-0 text-4xl">transformou-se em</h2>
                            </div>
                            <div className="story-title-row relative h-10.5 w-full [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
                                <h2 className="absolute top-0 text-4xl">um patrimônio</h2>
                            </div>
                        </div>
                        <div className={cn(
                            "story-content-link relative w-max my-[2em] py-[0.25em]",
                            "after:content-[''] after:bg-white after:absolute after:top-full after:left-0 after:h-px after:w-full"
                        )}>
                            <a href="/" title="">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};

export default InstagramCarousel;
