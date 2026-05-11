"use client";

// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Carousel = () => {
  // const panelsContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const panelsSection: HTMLElement | null = document.querySelector("#panels");
const panelsContainer: HTMLElement | null = document.querySelector("#panels-container");

if (panelsSection && panelsContainer) {
  let tween: gsap.core.Tween | undefined = undefined;

  document.querySelectorAll<HTMLAnchorElement>(".anchor").forEach((anchor: HTMLAnchorElement) => {
    anchor.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();

      const clickedTarget: EventTarget | null = e.target;
      if (!(clickedTarget instanceof Element)) return;

      const href: string | null = clickedTarget.getAttribute("href");
      if (!href) return;

      const targetElem: HTMLElement | null = document.querySelector(href);
      if (!targetElem || !tween) return;

      let y: number = targetElem as unknown as number;

      if (panelsContainer.isSameNode(targetElem.parentElement)) {
        const totalScroll: number =
          (tween.scrollTrigger?.end ?? 0) - (tween.scrollTrigger?.start ?? 0);

        const panelCountMinusOne: number = panels.length - 1;
        const totalMovement: number = panelCountMinusOne * targetElem.offsetWidth;

        y = Math.round(
          (tween.scrollTrigger?.start ?? 0) + ((targetElem.offsetLeft / totalMovement) * totalScroll)
        );
      }

      gsap.to(window, {
        scrollTo: {
          y,
          autoKill: false,
        },
        duration: 1,
      });
    });
  });

  const panels: HTMLElement[] = gsap.utils.toArray<HTMLElement>("#panels-container .panel");

  tween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: "#panels-container",
      pin: true,
      start: "top top",
      scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: {min: 0.1, max: 0.1}
    },
      end: () => "+=" + String(panelsContainer.offsetWidth - window.innerWidth),
    } as ScrollTrigger.Vars,
  });

}



      /* Main navigation */
      // let panelsContainer =
      //   document.querySelector<HTMLDivElement>(".panels-container");
      // let tween: gsap.core.Tween;
      // document.querySelectorAll(".anchor").forEach((anchor) => {
      //   anchor.addEventListener("click", function (e: Event) {
      //     e.preventDefault();
      //     const target = e.target as HTMLAnchorElement;
      //     const href = target.getAttribute("href");
      //     if (href) {
      //       let targetElem = document.querySelector(href);
      //       let yValue: Element | null | number = targetElem;
      //       if (
      //         targetElem &&
      //         panelsContainer!.isSameNode(targetElem.parentElement)
      //       ) {
      //         let totalScroll =
      //           tween!.scrollTrigger!.end - tween!.scrollTrigger!.start;
      //         let totalMovement = (panels.length - 1) * targetElem.clientWidth;
      //         yValue = Math.round(
      //           tween!.scrollTrigger!.start +
      //             (targetElem.offsetLeft / totalMovement) * totalScroll,
      //         );
      //       }

      //       gsap.to(window, {
      //         scrollTo: {
      //           y: Number(yValue),
      //           autoKill: false,
      //         },
      //         duration: 1,
      //       });
      //     }
      //   });
      // });

      // /* Panels */
      // const panels = gsap.utils.toArray<HTMLDivElement>(
      //   ".panels-container .panel",
      // );
      // tween = gsap.to(panels, {
      //   xPercent: -100 * (panels.length - 1),
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: panelsContainerRef.current,
      //     pin: true,
      //     start: "top top",
      //     scrub: 1,
      //     snap: {
      //       snapTo: 1 / (panels.length - 1),
      //       inertia: false,
      //       duration: { min: 0.1, max: 0.1 },
      //     },
      //     end: () => "+=" + (panelsContainer!.offsetWidth - innerWidth),
      //   },
      // });
    },
    // { scope: panelsContainerRef },
  );

  return (
   <div id="page" className="site">

  <div id="feather" className="feather"></div>

  <nav className="fixed-nav" role="navigation">
    <a href="#intro" className="anchor">Home</a>
    <a href="#panel-1" className="anchor">Panel 1</a>
    <a href="#panel-3" className="anchor">Panel 3</a>
    <a href="#panel-5" className="anchor">Panel 5</a>
    <a href="#panel-6" className="anchor">Panel 6</a>
  </nav>

  <main id="content" className="site-content" role="main">

    <section id="intro" className="description panel">
      <div>
        <h1>Anchor navigation, ScrollTrigger</h1>
        <div className="scroll-down">Scroll down<div className="arrow"></div>
        </div>
      </div>
    </section>

    <section id="panels">

      <div id="panels-container" style={{ width: "500%" }}>
        <article id="panel-1" className="panel full-screen bg-green-500">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-column">

                <h2 className="panel__number">1</h2>

                <div className="panels-navigation text-right">
                  <div className="nav-panel" data-sign="plus"><a href="#panel-2" className="anchor">Next</a></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article id="panel-2" className="panel full-screen bg-sky-500">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-column">

                <h2 className="panel__number">2</h2>

                <div className="panels-navigation">
                  <div className="nav-panel" data-sign="minus"><a href="#panel-1" className="anchor">Prev</a></div>
                  <div className="nav-panel" data-sign="plus"><a href="#panel-3" className="anchor">Next</a></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article id="panel-3" className="panel full-screen bg-purple-500">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-column">

                <h2 className="panel__number">3</h2>

                <div className="panels-navigation">
                  <div className="nav-panel" data-sign="minus"><a href="#panel-2" className="anchor">Prev</a></div>
                  <div className="nav-panel" data-sign="plus"><a href="#panel-4" className="anchor">Next</a></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article id="panel-4" className="panel full-screen bg-amber-500">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-column">

                <h2 className="panel__number">4</h2>

                <div className="panels-navigation">
                  <div className="nav-panel" data-sign="minus"><a href="#panel-3" className="anchor">Prev</a></div>
                  <div className="nav-panel" data-sign="plus"><a href="#panel-5" className="anchor">Next</a></div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article id="panel-5" className="panel full-screen bg-rose-500">
          <div className="container">
            <div className="row">
              <div className="col-6 d-flex flex-column">

                <h2 className="panel__number">5</h2>

                <div className="panels-navigation text-right">
                  <div className="nav-panel" data-sign="minus"><a href="#panel-4" className="anchor">Prev</a></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="panel-6" className="panel h-svh w-full bg-indigo-500">
      <h2 className="panel__number">6</h2>
    </section>

  </main>

</div>
  );
}

export default Carousel;
