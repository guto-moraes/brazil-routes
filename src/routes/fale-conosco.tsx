import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import LogoSvg from "@/components/logo-svg";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Página de contato com a equipe do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/fale-conosco",
      },
    ],
  }),
  component: ContactUs,
});

function ContactUs() {
  return (
    <Main className="container mx-auto pb:12 xl:pb-28 px-4">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Fale <span className="text-tan-400">Conosco</span>
      </Title>

      <section className="flex gap-12 min-h-96 w-full">
        <div className="flex-3 min-h-96 relative rounded-4xl bg-mate-duo-600/30 p-6 overflow-hidden">
          <LogoSvg className="fill-mate-duo-900/7.5 size-72 absolute -bottom-25 -left-25" />
          <h2 className="text-4xl text-bone-600 font-cabinet font-black tracking-tight">Queremos sua participação!</h2>
          <div className="flex flex-col gap-y-6 [&_p]:text-xl [&_p]:text-bone-700 [&_p]:font-medium [&_p]:text-justify [&_p]:hyphens-auto mt-12">
            <p>
              O site do <strong>Projeto Caminhos do Brasil Central</strong> foi desenvolvido com muito empenho e
              dedicação por todos os membros da nossa equipe. Porém, mesmo após termos investido muito muito tempo com o
              objetivo de oferecer a você a melhor experiência de utilização possível, não é improvável que alguns erros
              de digitação tenham permanecido ou, ainda, que alguns dos recursos que disponibilizamos não esteja
              funcionando adequadamente.
            </p>
            <p>
              Por este motivo, a criação deste espaço de interação é muito importante para nós. Assim, caso você tenha
              gostado do nosso trabalho e tem algo a nos dizer (pode ser uma crítica construtiva, alguma sugestão, uma
              correção ou, até mesmo, um elogio), não hesite em nos enviar uma mensagem 😉.
            </p>
          </div>
        </div>
        <div className="flex-4">
          
        </div>
      </section>
    </Main>
  );
}
