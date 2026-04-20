import { createFileRoute } from "@tanstack/react-router";
import { useQueryChaptersAlmanaqueHome } from "@/queries/theme-settings";
import Intro from "@/layouts/partials/home/intro";
import PhotosScrollingSection from "@/components/photos-scrolling-section";
import SectionPinRotate from "@/components/section-pin-rotate";
import InfiniteMarquee from "@/components/infinite-marquee";
import FieldsOfActivity from "@/components/fields-of-activity";

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
  const { data, isLoading, isError, error } = useQueryChaptersAlmanaqueHome();

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
    <>
      {data && (
        <>
          <Intro />
          <InfiniteMarquee />
          <section className="bg-bone-200 h-svh w-full"></section>
          <SectionPinRotate dataChapters={data} />
          <FieldsOfActivity />
          <PhotosScrollingSection />
          <section className="bg-tan-300 h-svh w-full"></section>
        </>
      )}
    </>
  );
}
