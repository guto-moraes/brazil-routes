import { createFileRoute } from "@tanstack/react-router";
import { useQueryChaptersAlmanaqueHome } from "@/queries/theme-settings";
import Navigation from "@/components/navigation";
import SectionPinRotate from "@/components/section-pin-rotate";
import PhotosScrollingSection from "@/components/photos-scrolling-section";
import Video from "@/layouts/partials/home/video-cover";
import videoSrc from "@/assets/video-background.mp4";

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
          <section className="relative h-svh w-full overflow-hidden bg-artic-400">
            <Navigation isHome={true} />
            <div className="absolute bg-hero inset-0 bg-darkgreen-500/20 z-1"></div>
            <Video videoUrl={videoSrc} height="absolute inset-0 h-svh" />
            <div className="paths absolute bottom-4 left-52 z-30">
              <h1 className="text-darkgreen-950 text-[clamp(2.5rem,11vw,13vw)] font-black uppercase leading-[0.85] -tracking-[0.08em] flex flex-col">
                <span>Caminhos</span>{" "}
                <span className="text-[clamp(2rem,7vw,10vw)] font-normal -tracking-[0.13em]">do Brasil Central</span>
              </h1>
            </div>
          </section>
          <SectionPinRotate dataChapters={data} />
          <PhotosScrollingSection />
        </>
      )}
    </>
  );
}
