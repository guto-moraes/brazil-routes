import { createFileRoute } from "@tanstack/react-router";
import Title from "@/components/title";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";

export const Route = createFileRoute("/impacto-social")({
  component: SocialImpact,
});

function SocialImpact() {
  return (
    <ScrollRotateWrapper>
      <ScrollRotateSection>
        <ScrollRotateContent>
          <div className="container mx-auto">
            <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
              Impacto <span className="text-tan-400">Social</span>
            </Title>
          </div>
        </ScrollRotateContent>
      </ScrollRotateSection>
      <ScrollRotateSection>
        <ScrollRotateContent className="bg-tan-100">
          <div className="container mx-auto py-24">
            <div className="grid grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-tan-300">
              <div className="flex flex-col justify-center items-center gap-y-3">
                <h2 className="text-7xl text-chocolate-600 font-black -tracking-widest">20+</h2>
                <h3 className="text-darkgreen-800 font-medium uppercase">Palestras Realizadas</h3>
                <p className="max-w-[80%] text-sm text-tan-700 text-center text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus architecto distinctio molestias
                  et pariatur!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-3">
                <h2 className="text-7xl text-chocolate-600 font-black -tracking-widest">500+</h2>
                <h3 className="text-darkgreen-800 font-medium uppercase">Público Presencial</h3>
                <p className="max-w-[80%] text-sm text-tan-700 text-center text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus architecto distinctio molestias
                  et pariatur!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-3">
                <h2 className="text-7xl text-chocolate-600 font-black -tracking-widest">1000+</h2>
                <h3 className="text-darkgreen-800 font-medium uppercase">Visualizações mensais no site</h3>
                <p className="max-w-[80%] text-sm text-tan-700 text-center text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus architecto distinctio molestias
                  et pariatur!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-3">
                <h2 className="text-7xl text-chocolate-600 font-black -tracking-widest">2000+</h2>
                <h3 className="text-darkgreen-800 font-medium uppercase">Downloads do Almanaque</h3>
                <p className="max-w-[80%] text-sm text-tan-700 text-center text-balance">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ducimus architecto distinctio molestias
                  et pariatur!
                </p>
              </div>
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
