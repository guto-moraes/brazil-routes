import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";
import { SocialImpactSectionTitle, SocialImpactStatsCard } from "@/components/social-impact-stats-card";
import Article from "@/components/article";
import image from "@/assets/images/tablet-cover-book.png"
import LiquidImageReveal from "@/components/liquid-image-reveal";

export const Route = createFileRoute("/impacto-social")({
  component: SocialImpact,
});

function SocialImpact() {
  return (
    <ScrollRotateWrapper>
      <ScrollRotateSection className="h-[200svh]">
        <ScrollRotateContent>
          <Title className="max-w-7xl mx-auto text-tan-700 font-cabinet font-black">
            Impacto <span className="text-tan-400">Social</span>
          </Title>
          <div className="max-w-7xl mx-auto flex gap-8">
            <LiquidImageReveal src={image} height={720} width={550} alt="" className="flex-2" />

            <div className="flex-3 bg-bone-200 xl:py-12 xl:px-12">
              <div className="max-w-7xl mx-auto py-16 px-8 bg-bone-600">
                <Article
                  className="[&_p]:text-white"
                  content={`
                  <p>
                    Mudanças na sociedade parecem ter seus efeitos mais impactantes quando podem ser observados. No caso do Projeto Caminhos do Brasil Central, perceber a forma como pessoas de diferentes idades passam a tangenciar a importância de de se conhecer, valorizar e preservar a história, a memória e o patrimônio da região leste e nordeste do Mato Grosso, nos motivo a avançar.
                
                `}
                />
              </div>
            </div>
          </div>

        </ScrollRotateContent>
      </ScrollRotateSection>
      <ScrollRotateSection>
        <ScrollRotateContent className="bg-[#d8d9bc]">
          <div className="max-w-7xl mx-auto py-24 px-4">
            <SocialImpactSectionTitle text="O Alcance do projeto" className="text-bone-600 mb-24" />
            <div className="grid grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-mate-duo-50 bg-mate-duo-700 py-16 px-8 rounded-4xl">
              <SocialImpactStatsCard
                value="20+"
                title="Palestras realizadas"
                description="Por meio da concientização, buscamos incentivar e valorizar a história da região do Vale do Araguaia, em Mato Grosso."
              />
              <SocialImpactStatsCard
                value="500+"
                title="Público Presencial"
                description="As ações presenciais são fundamentais para viabilizar mais interação com o público e aprofundar a troca de saberes."
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
      <ScrollRotateSection>
        <ScrollRotateContent className="bg-bone-200">
          <div className="container mx-auto py-24">Terceira</div>
        </ScrollRotateContent>
      </ScrollRotateSection>
    </ScrollRotateWrapper>
  );
}
