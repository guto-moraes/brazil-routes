import { createFileRoute } from "@tanstack/react-router";
import { useQueryChaptersAlmanaqueHome } from "@/queries/theme-settings";
import SectionPinRotate from "@/components/section-pin-rotate";
import PhotosScrollingSection from "@/components/photos-scrolling-section";
import AboveTheFold from "@/layouts/partials/home/above-the-fold";

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
          <AboveTheFold />
          <SectionPinRotate dataChapters={data} />
          <PhotosScrollingSection />
        </>
      )}
    </>
  );
}
