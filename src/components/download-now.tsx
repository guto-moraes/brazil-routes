import ButtonLinkWithIcon from "@/components/button-link-with-icon";
import almanaqueSrc from "@/assets/images/tablet-cover-book.webp";

const DownloadNow = ({ link }: { link: string }) => {
  return (
    <section className="donwload-now-container bg-bone-200/60 max-md:py-8 h-auto lg:h-[75svh] w-full">
      <div className="h-full max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-content-center overflow-hidden">
        <figure className="md:perspective-midrange md:transform-3d max-md:mx-auto max-md:overflow-hidden">
          <img
            className="almanaque-cover w-full xl:w-100 rotate-y-40 md:ml-6 max-md:h-full max-md:w-full max:object-cover max-md:object-center"
            src={almanaqueSrc}
            title="Baixe o Almanaque agora!"
          />
        </figure>
        <div className="flex flex-col justify-center items-end gap-y-12">
          <hgroup className="flex flex-col items-end gap-y-8">
            <h3 className="text-alert-warning text-4xl text-bone-400 text-right font-semibold uppercase -tracking-wider">
              Não perca tempo!
            </h3>
            <h2 className="text-alert-emphasis text-7xl text-bone-600 text-right text-balance font-cabinet font-black leading-[0.9em]">
              O Almanaque é gratuito
            </h2>
          </hgroup>
          <ButtonLinkWithIcon
            textButton="Baixar Agora!"
            link={link}
            bgColor="link-button-download text-white bg-darkgreen-500 hover:bg-darkgreen-600"
            iconColor="bg-white text-darkgreen-800"
            target={true}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadNow;
