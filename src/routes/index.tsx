"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useQueryChaptersAlmanaqueHomePresentation } from "@/queries/theme-queries";
import Intro from "@/layouts/partials/home/intro";
import InfiniteMarquee from "@/components/infinite-marquee";
import EbookPresentationSection from "@/components/ebook-presentation-section";
import SectionPinRotate from "@/components/section-pin-rotate";
import ActivitiesFields from "@/components/activities-fields";

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
  const { data, isLoading, isError, error } = useQueryChaptersAlmanaqueHomePresentation();

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }
  if (isError) {
    return (
      <h1>
        Ocorreu o seguinte erro: <strong>{error.message}</strong>
      </h1>
    );
  }

  return (
    data && (
      <>
        <Intro />
        <InfiniteMarquee />
        <EbookPresentationSection />
        <SectionPinRotate dataChapters={data} />
        <ActivitiesFields />
      </>
    )
  );
}
