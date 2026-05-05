import LogoSvg from "@/components/logo-svg";
import { Marquee } from "@/components/ui/marquee";

const Press = () => {
  return (
    <section className="flex flex-col gap-y-16 py-32">
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-8">
        <h2 className="text-7xl text-bone-600 font-cabinet font-black">Caminhos do Brasil Central na Imprensa</h2>
        <p className="max-w-5xl mx-auto text-2xl text-center text-bone-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis ipsa quae placeat error dignissimos
          suscipit, labore impedit repellat in, esse autem sit quidem nesciunt culpa dolor corrupti ad! Optio ratione
          nihil assumenda dicta debitis veniam.{" "}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Marquee className="[--duration:20s] p-0" pauseOnHover>
          <LogoSvg className="size-32 fill-mate-300 mr-6 lg:mr-20" />
          <LogoSvg className="size-32 fill-tan-500 mr-6 lg:mr-20" />
          <LogoSvg className="size-32 fill-mate-300 mr-6 lg:mr-20" />
          <LogoSvg className="size-32 fill-tan-500 mr-6 lg:mr-20" />
          <LogoSvg className="size-32 fill-mate-300 mr-6 lg:mr-20" />
        </Marquee>
      </div>
    </section>
  );
};

export default Press;
