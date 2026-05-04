"use client";

import { HorizontalSlideItem, HorizontalSlidesScroll } from "@/components/horizontal-slide-scroll";
import TextLoader from "@/components/text-loader";
import { createFileRoute } from "@tanstack/react-router";
// import { useState, useLayoutEffect, useRef } from "react";
// import ScrollGallery from "@/components/scroll-gallery";

export const Route = createFileRoute("/testando")({
  component: Testing,
});

// const works = [
//   { image: "/images/mpo-getulio.webp", imageAlt: "Gori the Gorilla", title: "Gori", subtitle: "Jungle Sage" },
//   { image: "/images/posse-getulio.webp", imageAlt: "Snap the Croc", title: "Snap", subtitle: "Swamp King" },
//   {
//     image: "/images/irmaos_villas-boas.webp",
//     imageAlt: "Crowley the Crow",
//     title: "Crowley",
//     subtitle: "Night Watcher",
//   },
//   {
//     image: "/images/vila-de-garimpeiros_araguaia-mt.webp",
//     imageAlt: "Foxy the Fox",
//     title: "Foxy",
//     subtitle: "Forest Trickster",
//   },
//   { image: "/images/folia-de-reis__1948.webp", imageAlt: "Foxy the Fox", title: "Foxy", subtitle: "Forest Trickster" },
//   { image: "/images/marco-da-expedicao.webp", imageAlt: "Foxy the Fox", title: "Foxy", subtitle: "Forest Trickster" },
// ];

function Testing() {
  // const galleryRef = useRef<HTMLDivElement | null>(null);
  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   if (galleryRef.current) {
  //     // clientHeight provides the inner height (padding included)
  //     setHeight(galleryRef.current.clientHeight);
  //   }
  // }, []);

  return (
    <div className="relative overflow-hidden">
      {/* <div
        className="gallery-container relative min-h-svh w-full flex justify-center items-center"
        style={{ height: `${height}` }}
        ref={galleryRef}
      >
        <ScrollGallery title="Galeria de Imagens" gallery={works} className="bg-gray-950 absolute top-0 left-0 -z-1" />
      </div> */}
      {/* <div className="end-trigger h-svh w-full bg-tan-500"></div> */}
      <HorizontalSlidesScroll>
        <TextLoader text="1941-1950" />
        <HorizontalSlideItem bgColor="#d6ccc2" className="grid place-content-center">
          <h1>Slide 1</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ccd5ae" className="grid place-content-center">
          <h1>Slide 2</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ffcc99" className="grid place-content-center">
          <h1>Slide 3</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#bcbd8b" className="grid place-content-center">
          <h1>Slide 4</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ffc8dd" className="grid place-content-center">
          <h1>Slide 5</h1>
        </HorizontalSlideItem>
      </HorizontalSlidesScroll>

      <HorizontalSlidesScroll>
        <TextLoader text="1951-1960" />
        <HorizontalSlideItem bgColor="#d6ccc2" className="grid place-content-center">
          <h1>Slide 1</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ccd5ae" className="grid place-content-center">
          <h1>Slide 2</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ffcc99" className="grid place-content-center">
          <h1>Slide 3</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#bcbd8b" className="grid place-content-center">
          <h1>Slide 4</h1>
        </HorizontalSlideItem>
        <HorizontalSlideItem bgColor="#ffc8dd" className="grid place-content-center">
          <h1>Slide 5</h1>
        </HorizontalSlideItem>
      </HorizontalSlidesScroll>
    </div>
  );
}
