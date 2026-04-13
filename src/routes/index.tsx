import { createFileRoute } from "@tanstack/react-router";
import SectionPinRotate from "@/components/section-pin-rotate";
import PhotosScrollingSection from "@/components/photos-scrolling-section";
import { useQueryChaptersAlmanaqueHome } from "@/queries/theme-settings";

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

  if (isLoading) return <h1>Carregando...</h1>;
  if (isError)
    return (
      <h1>
        Ocorreu o seguinte erro: <strong>{error.message}</strong>
      </h1>
    );

  return (
    <>
      {data && (
        <>
          <div className="relative bg-gray-600 h-[calc(100svh-104px)] w-full overflow-hidden">
          </div>
          <SectionPinRotate dataChapters={data} />
          <PhotosScrollingSection />
        </>
      )}
    </>
  );
}
