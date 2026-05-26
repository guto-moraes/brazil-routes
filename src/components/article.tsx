import { cn, sanitizedData } from "@/lib/utils"

const Article = ({ className, content }: { className?: string; content: string }) => {
    return(
        <article
            className={cn(
                "md:mb-8 *:not-last:mb-6 max-[500px]:w-[99%]! sm:max-w-full! selection:bg-darkgreen-400 selection:text-white", //Todos os elementos
                "[&_h2.wp-block-heading]:text-[clamp(1.25rem,8vw,1.25rem)] [&_h2.wp-block-heading]:text-mate-duo-500", //Elementos H2
                "[&_h2.wp-block-heading]:-tracking-wider [&_h2.wp-block-heading]:font-semibold",
                "[&_h2.wp-block-heading]:uppercase [&_h2.wp-block-heading]:leading-none",
                "[&_p]:text-[clamp(0.9rem,4vw,1.15rem)]! [&_p]:text-tan-800 sm:[&_p]:text-justify", //Elemento Parágrafo
                "[&_p]:text-pretty sm:[&_p]:indent-8 [&_p]:hyphens-auto",
                "[&_.wp-block-image]:h-52 md:[&_.wp-block-image]:h-100", //Elemento Figure
                "[&_.wp-block-image]:max-w-svw [&_.wp-block-image]:rounded-2xl",
                "[&_.wp-block-image]:overflow-hidden max-[500px]:[&_.wp-block-image]:max-w-full [&_.wp-block-image]:relative",
                "[&_.wp-block-image_img]:h-full [&_.wp-block-image_img]:w-full", //Elemento Img
                "[&_.wp-block-image_img]:object-cover [&_.wp-block-image_img]:object-top",
                "[&_.wp-block-image_.wp-element-caption]:absolute [&_.wp-block-image_.wp-element-caption]:bottom-0", //Elemento Figcaption
                "[&_.wp-block-image_.wp-element-caption]:rounted-b-2xl max-[500px]:[&_.wp-block-image_.wp-element-caption]:text-center", 
                "[&_.wp-block-image_.wp-element-caption]:w-full [&_.wp-block-image_.wp-element-caption]:bg-black/60",
                "[&_.wp-block-image_.wp-element-caption]:py-1 [&_.wp-block-image_.wp-element-caption]:px-3",
                "[&_.wp-block-image_.wp-element-caption]:text-white",
                "[&_.wp-block-image_.wp-element-caption]:text-[clamp(0.625rem,2vw,0.85rem)]",
                "[&_.wp-block-quote]:max-w-max [&_.wp-block-quote]:mx-auto [&_.wp-block-quote_p]:text-[clamp(1.25rem,5vw,1.5rem)]", //Elemento Blockquote
                "max-[500px]:[&_.wp-block-quote_p]:leading-6 [&_.wp-block-quote_p]:bg-tan-200/50 [&_.wp-block-quote_p]:py-2",
                "[&_.wp-block-quote_p]:text-left [&_.wp-block-quote_p]:indent-0 [&_.wp-block-quote_p]:pr-2",
                "[&_.wp-block-quote_p]:border-l-6 [&_.wp-block-quote_p]:border-mate-duo-500 [&_.wp-block-quote_p]:pl-3",
                "[&_.wp-block-separator]:h-px [&_.wp-block-separator]:border-tan-200", //Elemento HR
                "[&_.wp-block-footnotes]:whitespace-break-spaces [&_.wp-block-footnotes]:text-xs [&_.wp-block-footnotes]:ml-4", //Elemento OL (notas de rodapé)
                "[&_.wp-block-footnotes]:text-tan-600 [&_.wp-block-footnotes]:list-decimal [&_.wp-block-footnotes]:not-last:mb-1",
                "[&_a]:text-blue-retro-500 [&_a]:hover:text-gray-500 [&_a]:transition-colors [&_a]:duration-300", //Elemento Anchor
                "[&_.wp-block-gallery]:grid [&_.wp-block-gallery]:grid-cols-2 [&_.wp-block-gallery]:gap-4",//Galeria de Imagens
                "[&_.wp-block-gallery_.wp-block-image]:h-32 sm:[&_.wp-block-gallery_.wp-block-image]:h-52",
                "md:[&_.wp-block-gallery_.wp-block-image]:h-64 sm:[&_.wp-block-gallery]:grid-cols-3 sm:[&_.wp-block-gallery]:gap-8",
                className
            )}
            dangerouslySetInnerHTML={sanitizedData(content)}
        />
    )
}

export default Article;