import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import almanaqueSrc from "@/assets/images/tablet-cover-book.webp";
import { cn } from "@/lib/utils";

const DownloadNow = ({ link }: { link: string }) => {
  return (
    <section className="donwload-now-container bg-bone-200/60 max-md:py-8 h-max lg:h-[75svh] w-full">
      <div className="h-full max-w-6xl mx-auto grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 md:place-content-center overflow-hidden">
        <figure className={cn(
          "max-md:h-[80%] w-full xl:w-100 md:perspective-midrange",
          "md:transform-3d max-md:mx-auto max-md:overflow-hidden",
          "max-md:row-span-2 max-md:flex max-md:justify-center max-md:items-center"
        )}>
          <img
            className="almanaque-cover h-full w-full rotate-y-40 md:ml-6 max:object-cover max-md:object-center"
            src={almanaqueSrc}
            title="Baixe o Almanaque agora!"
          />
        </figure>
        <div className="max-md:row-span-1 flex flex-col justify-center items-end gap-y-12">
          <hgroup className="flex flex-col items-center sm:items-end gap-y-8">
            <h3 className={cn(
              "text-alert-warning text-[clamp(1.85rem,5vw,2.25rem)] text-bone-400",
              "text-center sm:text-right font-semibold uppercase tracking-tighter"
            )}>
              Não perca tempo!
            </h3>
            <h2 className={cn(
              "text-alert-emphasis text-[clamp(2.75rem,6vw,4.5rem)] text-bone-600 text-center",
              "md:text-right text-balance font-cabinet font-black leading-[0.9em]"
            )}>
              O Almanaque é gratuito
            </h2>
          </hgroup>
          <ButtonLinkWithIcon
            textButton="Baixar Agora!"
            link={link}
            bgColor="link-button-download text-white bg-darkgreen-500 hover:bg-darkgreen-600 max-sm:mx-auto"
            iconColor="bg-white text-darkgreen-800"
            target={true}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadNow;
