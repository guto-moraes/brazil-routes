import { createFileRoute } from "@tanstack/react-router";
// import Title from "@/components/title";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";
import { SocialImpactStatsCard } from "@/components/social-impact-stats-card";
import { cn } from "@/lib/utils";
import { Title } from "@/components/title";

export const Route = createFileRoute("/impacto-social")({
  component: SocialImpact,
});

function SocialImpact() {
  return (
    <ScrollRotateWrapper>
      {/* <ScrollRotateSection>
        <ScrollRotateContent>
          <Title className="max-w-7xl mx-auto text-tan-700 text-center font-cabinet font-black -mt-14 lg:-mt-8">
            Impacto <span className="text-tan-400">Social</span>
          </Title>
          <div className="max-w-7xl mx-auto mt-16 text-center">
            <h2
              className={cn(
                "w-full text-[clamp(2rem,5vw,3.5rem)] text-center text-balance font-semibold text-white",
                "bg-tan-900 z-1 leading-17 inline relative px-4 after:content-none after:block",
                "after:border-b-8 after:relative after:z-0 after:-mt-1.75",
              )}
            >
              Perceber a forma como pessoas de diferentes idades passam a tangenciar a importância de de se{" "}
              <span className="text-chocolate-300">conhecer, valorizar e preservar</span> a história, a memória e o
              patrimônio da região leste e nordeste do Mato Grosso, nos motivo a avançar.
            </h2>
          </div>
        </ScrollRotateContent>
      </ScrollRotateSection> */}
      <ScrollRotateSection className="h-full">
        <ScrollRotateContent className="bg-[#d8d9bc]">
          <div className="max-w-7xl mx-auto py-24">
            <Title className="text-bone-600 max-sm:-mt-24">Alcance do Projeto</Title>
            <p className="text-[clamp(1rem,5vw,1.65rem)] sm:text-justify mb-16">
              Perceber a forma como pessoas de diferentes idades passam a tangenciar a importância de de se{" "}
              <strong className="text-terracotta-700">conhecer, valorizar e preservar</strong> a história, a memória e o
              patrimônio da região leste e nordeste do Mato Grosso, nos motivo a avançar. Por isso, o Projeto Caminhos
              do Brasil Central está engajado em, cada vez mais, ampliar o número de pessoas alcançadas.
            </p>
            <div
              className={cn(
                "grid grid-cols-1 xl:grid-cols-3 gap-8 divide-y md:divide-y-0",
                "md:divide-x divide-mate-duo-50 bg-mate-duo-700 py-10 px-8 rounded-4xl",
              )}
            >
              <SocialImpactStatsCard
                value="1"
                title="Palestras realizadas"
                description="Para divulgação do Almanaque e para incentivar a valorização da história da região do Vale do Araguaia, em Mato Grosso."
              />
              <SocialImpactStatsCard
                value="100+"
                title="Público Presencial"
                description="As ações presenciais são fundamentais para promover e aprofundas a troca de saberes e viabilizar mais interação com o público."
              />
              <SocialImpactStatsCard
                value="2000+"
                title="Downloads do Almanaque"
                description="O aumento da circulação do Almanaque é uma forma de fortaler a história, a memória e a preservação do patrimônio."
              />
            </div>
          </div>
        </ScrollRotateContent>
      </ScrollRotateSection>
      <ScrollRotateSection className="h-svh">
        <ScrollRotateContent className="bg-bone-200">
          <div className="container mx-auto py-24">Terceira</div>
        </ScrollRotateContent>
      </ScrollRotateSection>
    </ScrollRotateWrapper>
  );
}
