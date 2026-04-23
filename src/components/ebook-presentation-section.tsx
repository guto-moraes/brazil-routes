import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLinkWithIcon from "./button-link-with-icon";
import ebookCover from "@/assets/images/tablet-cover-book.png";
import projectIcon from "@/assets/images/logo-icon.webp";

gsap.registerPlugin(ScrollTrigger);

const EbookPresentationSection = () => {
  const ebookPresentationRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const icon = gsap.utils.toArray<HTMLImageElement>(".project-icon");
      const cover = gsap.utils.toArray<HTMLImageElement>(".ebook-cover");
      const presentation = gsap.utils.toArray<HTMLImageElement>(".ebook-presentation");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ebookPresentationRef.current,
          start: "top top",
          end: `${window.innerHeight / 3}%`,
          pin: true,
          scrub: 1,
        },
      });

      tl.fromTo(
        icon,
        {
          y: -400,
          x: -400,
          opacity: 0,
        },
        {
          y: -100,
          x: -100,
          opacity: 0.25,
          duration: 1,
        },
        "a",
      )
        .fromTo(
          cover,
          {
            y: -500,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          "a",
        )
        .fromTo(
          presentation,
          {
            x: 500,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
          },
          "a",
        );
    },
    { scope: ebookPresentationRef },
  );

  return (
    <section
      className="ebook-presentation bg-bone-200 relative h-svh w-full overflow-hidden"
      ref={ebookPresentationRef}
    >
      <img className="project-icon size-100 absolute" src={projectIcon} alt="Marca do Projeto" />
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center gap-12 px-8">
        <div className="perspective-dramatic">
          <img
            src={ebookCover}
            alt="E-book no formato PDF"
            title="E-book no formato PDF"
            className="ebook-cover w-100 rotate-y-4"
          />
        </div>
        <div className="ebook-presentation h-full min-h-125 w-full max-w-180 flex flex-col justify-center items-end gap-y-16">
          <div className="flex flex-col items-end gap-y-10">
            <h2 className="text-6xl text-right text-mate-800 text-balance font-black">Almanaque Digital</h2>
            <p className="text-xl text-bone-800 text-right text-balance w-[90%]">
              O <strong>Desbravando o sertão, conconquistando o Brasil</strong>, projeto inédito que contou com
              financiamento da Fundação de Amparo à Pesquisa do Estado de Mato Grosso (Fapemat), narra e analise a
              história da expedição forjou a colonização não indígena na região que hoje é conhecida como Vale do
              Araguaia, entre as divisas dos estados de Goiás e Mato Grosso, a Expedição Roncador-Xingu, bem como dos
              processos que culminaram com a criação e a atuação da Fundação Brasil Central na região e os seus
              desdobramentos.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <ButtonLinkWithIcon
              textButton="Faça o download agora!"
              link="/files/ebook.pdf"
              bgColor="bg-mate-400 hover:bg-mate-500 text-white"
              iconColor="bg-white text-mate-700"
              target={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EbookPresentationSection;
