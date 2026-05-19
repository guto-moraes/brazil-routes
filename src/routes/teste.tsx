import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import gabriel from "@/assets/images/luiz-gabriel.webp";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Instagram from "@/components/instagram";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Route = createFileRoute("/teste")({
  component: RouteComponent,
});

function RouteComponent() {
  const teamContainerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
    },
    { scope: teamContainerRef },
  );

  return (
    <Main className="pb-16 px-4">
      <Title>
        Equipe do <span className="text-tan-400">Projeto</span>
      </Title>

      <section className="team-card-section px-4 md:px-0">
        <div className="team-card-container rounded-2xl bg-tan-50 drop-shadow-2xl p-6">
          <div className="team-member-card flex flex-col md:flex-row gap-6">
            <figure className="team-member-photo rounded-xl h-72 w-full max-w-full overflow-hidden">
              <img src={gabriel} alt="" className="h-full w-full object-cover object-top" />
            </figure>
            <div className="team-member-details md:h-72 flex flex-col gap-y-6">
              <hgroup>
                <h2 className="text-[clamp(2rem,3vw,3.5rem)] text-terracotta-700 font-cabinet font-bold leading-none">Luiz Gabriel de Souza Nogueira</h2>
                <h3 className="text-chocolate-400 mt-2">Líder do Projeto</h3>
              </hgroup>
              <ScrollArea className="h-80 md:h-48">
                <div className="[&_p]:not-last:mb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae illum doloremque eveniet.
                    Beatae reprehenderit at ullam provident commodi laudantium blanditiis aliquid. Sed tempore est
                    repudiandae? Animi repellendus ratione adipisci!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae illum doloremque eveniet.
                    Beatae reprehenderit at ullam provident commodi laudantium blanditiis aliquid. Sed tempore est
                    repudiandae? Animi repellendus ratione adipisci!
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}
