import { Marquee } from "@/components/ui/marquee";
// import LogoSvg from "@/components/logo-svg";
import xpoint from "@/assets/images/press/o-x-da-questao.webp";
import baggas from "@/assets/images/press/baggas-cast.webp";

const press = [
  {
    title: "Podcast O X do Problema",
    imageSrc: xpoint,
    imageAlt: "Logotipo do Podast O X do Problema",
    link: "https://www.youtube.com/watch?v=ygZg1aHD5Z0"
  },
  {
    title: "Baggas Cast",
    imageSrc: baggas,
    imageAlt: "Baggas Cast",
    link: "https://www.youtube.com/watch?v=NRiPIFs8Fj4"
  },
];

const Press = () => {
  return (
    <section className="flex flex-col gap-y-16 py-32">
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-8">
        <h2 className="text-6xl text-bone-600 font-cabinet font-black">Caminhos do Brasil Central nas Mídias</h2>
        <p className="max-w-5xl mx-auto text-xl text-center text-bone-700">
          Desde de 2025, o <strong>Almanaque Desbravando o sertão, descobrindo o Brasil</strong> tem sido publicizado
          em diferentes mídias. Clicar nas imagens abaixo, você e leia, ouça ou assista algumas dessas publicações.{" "}
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
