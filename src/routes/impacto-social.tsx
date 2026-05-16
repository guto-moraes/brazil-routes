import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";
import { SocialImpactSectionTitle, SocialImpactStatsCard } from "@/components/social-impact-stats-card";
import Article from "@/components/article";

export const Route = createFileRoute("/impacto-social")({
  component: SocialImpact,
});

function SocialImpact() {
  return (
    <ScrollRotateWrapper>
      <ScrollRotateSection>
        <ScrollRotateContent>
          <Title className="max-w-7xl mx-auto text-tan-700 font-cabinet font-black">
            Impacto <span className="text-tan-400">Social</span>
          </Title>
          <div className="container mx-auto bg-bone-200 xl:py-32">
            <div className="max-w-7xl mx-auto py-16 px-8 bg-bone-600">
              <Article
                className="[&_p]:text-white"
                content={`
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa, porro provident ad placeat maxime, minus optio impedit soluta pariatur mollitia reprehenderit laudantium harum dolores omnis dolorum illum dicta asperiores fuga? Nemo consequuntur nihil accusamus eius facilis atque, quasi voluptates accusantium ullam, ut dicta, deserunt sed asperiores quibusdam numquam consequatur.
                </p>
              
              `}
              />
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
