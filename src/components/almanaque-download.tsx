import { cn } from "@/lib/utils";
import ButtonLinkWithIcon from "./button-link-with-icon";
import { Title } from "./title";
import { useQueryAlmanaquePage } from "@/hooks/queries/almanaque-queries";

const AlmanaqueDownload = () => {
  const { almanaqueLink, image, text } = useQueryAlmanaquePage().data.page.almanaque.almanaqueDownload;

  return (
    <section className="bg-bone-200 dark:bg-dark-800 h-full lg:h-[63svh] w-full py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="md:flex-1 flex flex-col gap-y-8 justify-center items-center md:items-start">
          <Title
            className={cn(
              "container max-w-6xl mx-auto text-[clamp(2.75rem,4vw,4.25rem)]",
              "text-bone-700 dark:text-dark-contrast-100 text-center md:text-left font-black leading-[0.9]",
            )}
          >
            Almanaque <span className="text-bone-400 dark:text-dark-contrast-50">Digital</span>
          </Title>
          <p className="text-[clamp(1.05rem,5vw,1.25rem)] text-bone-700 dark:text-white text-center md:text-left leading-[1.2]">
            {text}
          </p>
          <ButtonLinkWithIcon
            textButton="Baixe Agora"
            link={almanaqueLink}
            bgColor="bg-darkgreen-400 dark:bg-dark-contrast-100 hover:bg-darkgreen-500 dark:hover:bg-dark-contrast-100/80 text-white dark:text-dark-950"
            iconColor="text-darkgreen-900 dark:text-white"
            target={true}
          />
        </div>
        <figure className="md:max-h-[50svh] md:flex-1 md:perspective-distant md:perspective-origin-center md:transform-3d flex justify-end">
          <img
            src={image.node.sourceUrl}
            alt="Baixe agora o Almanaque Digital"
            className="md:h-[50svh] object-cover object-center -rotate-y-24"
          />
        </figure>
      </div>
    </section>
  );
};

export default AlmanaqueDownload;
