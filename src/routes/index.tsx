"use client";

import { createFileRoute } from "@tanstack/react-router";
import { useQueryAlmanaqueChapters } from "@/queries/theme-queries";
import Intro from "@/layouts/partials/home/intro";
import InfiniteMarquee from "@/components/infinite-marquee";
import EbookPresentationSection from "@/components/ebook-presentation-section";
import ActivitiesFieldsSection from "@/components/activities-fields";
import AlmanaqueChaptersSection from "@/components/almanaque-chapters";


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
  const { data, isLoading, isError, error } = useQueryAlmanaqueChapters();

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
        <AlmanaqueChaptersSection dataChapters={data} />
        <ActivitiesFieldsSection />
      </>
    )
  );
}
