import { Marquee } from "@/components/ui/marquee";
// import LogoSvg from "@/components/logo-svg";
import xpoint from "@/assets/images/press/o-x-da-questao.webp";
import baggas from "@/assets/images/press/baggas-cast.webp";
import seciteci from "@/assets/images/press/secitec.webp";
import sevenWeek from "@/assets/images/press/semana-7.webp"
import behindTheScenes from "@/assets/images/press/bastidores-do-poder.webp"

const press = [
  {
    title: "Secretaria de Estado de Ciência, Tecnologia e Inovação (Seciteci)",
    imageSrc: seciteci,
    imageAlt: "Secretaria de Estado de Ciência, Tecnologia e Inovação (Seciteci)",
    link: "https://www.secom.mt.gov.br/web/secitec/w/pesquisa-sobre-hist%C3%B3ria-do-vale-do-araguaia-que-venceu-programa-da-seciteci-e-fapemat-se-torna-almanaque",
  },
  {
    title: "Podcast O X do Problema",
    imageSrc: xpoint,
    imageAlt: "Logotipo do Podast O X do Problema",
    link: "https://www.youtube.com/watch?v=ygZg1aHD5Z0",
  },
  {
    title: "Baggas Cast",
    imageSrc: baggas,
    imageAlt: "Baggas Cast",
    link: "https://www.youtube.com/watch?v=NRiPIFs8Fj4",
  },
  {
    title: "Semana 78 - Acesso à verdade",
    imageSrc: sevenWeek,
    imageAlt: "Semana 78 - Acesso à verdade",
    link: "https://www.youtube.com/watch?v=NRiPIFs8Fj4",
  },
  {
    title: "Bastidores do Poder - Vale o que está escrito",
    imageSrc: behindTheScenes,
    imageAlt: "Bastidores do Poder - Vale o que está escrito",
    link: "https://www.youtube.com/watch?v=NRiPIFs8Fj4",
  },
];

const Press = () => {
  return (
    <section className="flex flex-col gap-y-16 py-12 sm:py-18 md:py-24 lg:py-32 max-sm:px-4">
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-8">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] text-bone-600 max-sm:text-center font-cabinet font-black max-sm:leading-none">Divulgação do Almanaque nas Mídias</h2>
        <p className="max-w-5xl mx-auto text-[clamp(1rem,1.75vw,1.125rem)] text-center text-bone-700">
          Desde de 2025, o <strong>Almanaque Desbravando o sertão, descobrindo o Brasil</strong> tem sido publicizado em
          diferentes mídias. Uma ação importante e que serviu de motivação para alçar o{" "}
          <strong>Projeto Caminhos do Brasil Central</strong>. Ao clicar nas imagens abaixo, você poder ler, ouvir ou
          assistir algumas dessas divulgações.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {press && press.length > 3 ? (
          <Marquee className="[--duration:20s] p-0" pauseOnHover>
            {press.map((item, index) => (
              <a href={item.link} title={item.title} target="_black" rel="noopener noreferrer">
                <img className="rounded-lg h-32" src={item.imageSrc} alt={item.imageAlt} key={index} />
              </a>
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-center items-center gap-x-8">
            {press.map((item, index) => (
              <a href={item.link} title={item.title} target="_black" rel="noopener noreferrer">
                <img className="rounded-lg h-32" src={item.imageSrc} alt={item.imageAlt} key={index} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Press;
