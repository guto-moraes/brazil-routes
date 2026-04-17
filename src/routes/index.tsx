import { createFileRoute } from "@tanstack/react-router";
import { useQueryChaptersAlmanaqueHome } from "@/queries/theme-settings";
import SectionPinRotate from "@/components/section-pin-rotate";
import PhotosScrollingSection from "@/components/photos-scrolling-section";
import AboveTheFold from "@/layouts/partials/home/above-the-fold";
import LogoSvg from "@/components/logo-svg";
import ElasticTextIntro from "@/components/elastic-text-intro";

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
          <section className="h-svh w-full grid place-content-center">
            <LogoSvg className="fill-bege-300 size-128" />
          </section>
          <ElasticTextIntro />

          <section className="h-svh w-full bg-mate-500 grid place-content-center">
            <h2 className="text-8xl text-white font-cabinet font-black">Teste</h2>
          </section>
        </>
      )}
    </>
  );
}
