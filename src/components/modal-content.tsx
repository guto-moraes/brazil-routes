import { cn, sanitizedData } from "@/lib/utils";

const ModalContent = ({ content }: { content: string }) => {
  return (
    <div
      className={cn(
        "*:not-last:mb-8", // Geral
        "[&_.wp-block-image]:relative [&_.wp-block-image]:w-full [&_.wp-block-image]:max-w-full", //Imagem solo
        "[&_.wp-block-image]:rounded-2xl [&_.wp-block-image]:overflow-hidden [&_.wp-block-image_img]:h-full",
        "[&_.wp-block-image_img]:w-full [&_.wp-block-image_img]:object-cover [&_.wp-block-image_img]:object-center",
        "[&_.wp-element-caption]:bg-black/60 [&_.wp-element-caption]:py-1 [&_.wp-element-caption]:px-3", //Legenda
        "[&_.wp-element-caption]:text-xs [&_.wp-element-caption]:text-white [&_.wp-element-caption]:w-full",
        "[&_.wp-element-caption]:absolute [&_.wp-element-caption]:bottom-0 [&_.wp-element-caption]:left-0",
        "[&_.wp-block-video]:w-full [&_.wp-block-video]:aspect-video", //Vídeo Vertical
        "[&_.aspect-vertical]:relative [&_.aspect-vertical]:w-full [&_.aspect-vertical]:max-w-sm! [&_.wp-block-video]:mb-8", //Vídeo Vertical
        "[&_.aspect-vertical]:aspect-9/16 [&_.aspect-vertical]:h-[80svh] [&_.aspect-vertical]:max-h-180 [&_.aspect-vertical]:my-0",
        "[&_.aspect-vertical]:mx-auto [&_.aspect-vertical_video]:w-full [&_.aspect-vertical_video]:h-full",
        "[&_.aspect-vertical_video]:object-cover [&_.aspect-vertical_video]:absolute [&_.aspect-vertical_video]:top-0",
        "[&_.aspect-vertical_video]:left-0 [&_.aspect-vertical_video]:object-cover",
        "[&_.wp-block-paragraph]:text-[clamp(0.9rem,5vw,1rem)] [&_.wp-block-paragraph]:text-justify [&_.wp-block-paragraph]:text-pretty", //Pagágrafos
        "[&_.wp-block-paragraph]:text-tan-800 [&_.wp-block-paragraph]:hyphens-auto",
      )}
      dangerouslySetInnerHTML={sanitizedData(content)}
    />
  );
};

export default ModalContent;
