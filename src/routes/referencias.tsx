import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import ProjectTeam from "@/components/project-team";
// import TextRevealHidden from "@/components/text-reveal-hidden";
// import CardStacking from "@/components/card-stacking";

export const Route = createFileRoute("/referencias")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Main>
        {/* <CardStacking /> */}
        {/* <div className="bg-bone-200 h-svh w-full grid place-content-center">
          <TextRevealHidden blockColor="#2f312c">
            <h2 className="text-4xl text-bone-800 font-inter font-black uppercase leading-none tracking-tighter max-w-5xl mx-auto">O que é o Almanaque Desbravando o sertão, conconquistando o Brasil: a Expedição Roncador-Xingu e a Fundação Brasil Central em Mato Grosso (1943/1967)</h2>
          </TextRevealHidden>
        </div> */}
        <ProjectTeam />
      </Main>
    </>
  );
}
