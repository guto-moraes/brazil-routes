"use client";

import { createFileRoute } from "@tanstack/react-router";
import Intro from "@/layouts/partials/home/intro";
import InfiniteMarquee from "@/components/infinite-marquee";
import EbookPresentationSection from "@/components/ebook-presentation-section";
import ActivitiesFieldsSection from "@/components/activities-fields";
import PioneersMemoryPhotosSection from "@/components/pioneers-memory-photos-sections";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Página Inicial | Caminhos do Brasil Central",
      },
    ],
  }),
  component: Index,
});

function Index() {

  return (
      <>
        <Intro />
        <InfiniteMarquee />
        <EbookPresentationSection />
        <PioneersMemoryPhotosSection />
        <ActivitiesFieldsSection />
      </>
  );
}
