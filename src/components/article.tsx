import { cn, sanitizedData } from "@/lib/utils"

const Article = ({ className, content }: { className?: string; content: string }) => {
    return(
        <article
            className={cn(
                "md:mb-8 *:not-last:mb-8 max-[500px]:w-[99%]! sm:max-w-full! selection:bg-darkgreen-400 selection:text-white", //Todos os elementos
                "[&_h2.wp-block-heading]:text-[clamp(1.25rem,8vw,1.5rem)] [&_h2.wp-block-heading]:text-mate-duo-500", //Elementos H2
                "[&_h2.wp-block-heading]:tracking-tighter [&_h2.wp-block-heading]:font-semibold",
                "[&_h2.wp-block-heading]:uppercase [&_h2.wp-block-heading]:leading-none",
                "[&_p]:text-[clamp(0.9rem,4vw,1.05rem)]! [&_p]:text-tan-800 sm:[&_p]:text-justify", //Elemento Parágrafo
                "[&_p]:text-pretty sm:[&_p]:indent-8 [&_p]:hyphens-auto",
                "[&_.wp-block-image]:h-52 md:[&_.wp-block-image]:h-auto md:[&_.wp-block-image]:max-h-150", //Elemento Figure
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
                "[&_.aspect-vertical]:relative [&_.aspect-vertical]:w-full [&_.aspect-vertical]:max-w-sm! [&_.wp-block-video]:mb-8", //Vídeo Vertical
                "[&_.aspect-vertical]:aspect-9/16 [&_.aspect-vertical]:h-[80svh] [&_.aspect-vertical]:max-h-180 [&_.aspect-vertical]:my-0",
                "[&_.aspect-vertical]:mx-auto [&_.aspect-vertical_video]:w-full [&_.aspect-vertical_video]:h-full",
                "[&_.aspect-vertical_video]:object-cover [&_.aspect-vertical_video]:absolute [&_.aspect-vertical_video]:top-0",
                "[&_.aspect-vertical_video]:left-0 [&_.aspect-vertical_video]:object-cover",
                "[&_.aspect-horizontal_div]:relative [&_.aspect-horizontal_div]:rounded-2xl [&_.aspect-horizontal_div]:h-0", //Video Horizontal
                "[&_.aspect-horizontal_div]:pb-[56.25%] [&_.aspect-horizontal_div]:overflow-hidden [&_.aspect-horizontal_div_iframe]:h-full",
                " [&_.aspect-horizontal_div_iframe]:w-full [&_.aspect-horizontal_div_iframe]:absolute [&_.aspect-horizontal_div_iframe]:top-0",
                "[&_.aspect-horizontal_div_iframe]:left-0",
                "md:[&_.wp-block-media-text]:columns-2 [&_.wp-block-media-text]:space-x-6", //Bloco com texto e mídia
                "[&_.wp-block-media-text_div_p]:not-last:mb-6 max-sm:[&_.wp-block-media-text_div]:not-last:mb-6",
                "max-md:[&_.wp-block-media-text_figure]:mb-6 max-md:[&_.wp-block-media-text_figure]:rounded-2xl",
                "max-md:[&_.wp-block-media-text_figure]:overflow-hidden max-md:[&_.wp-block-media-text_figure_img]:h-full",
                "max-md:[&_.wp-block-media-text_figure_img]:w-full max-md:[&_.wp-block-media-text_figure_img]:object-cover",
                "[&_.wp-block-table]:overflow-x-auto [&_.wp-block-table::-webkit-scrollbar]:h-2 [&_.wp-block-table::-webkit-scrollbar-thumb]:rounded-none", //Tabela
                "max-md:[&_.wp-block-table]:scroll-thumb-sky-500 [&_.wp-block-table_table]:min-w-full [&_.wp-block-table_table]:divide-y",
                "[&_.wp-block-table_table]:divide-table-line [&_.wp-block-table_table_th]:px-6 [&_.wp-block-table_table_th]:py-3 [&_.wp-block-table_table_th]:text-start",
                "[&_.wp-block-table_table_thead]:bg-tan-200 [&_.wp-block-table_table_th]:text-xs [&_.wp-block-table_table_th]:font-semibol",
                "[&_.wp-block-table_table_th]:text-bone-800 [&_.wp-block-table_table_th]:uppercase [&_.wp-block-table_table_tbody_tr]:odd:bg-tan-100/25",
                "[&_.wp-block-table_table_tbody_tr]:even:bg-tan-100 [&_.wp-block-table_table_tbody_td]:px-6 [&_.wp-block-table_table_tbody_td]:py-4",
                "[&_.wp-block-table_table_tbody_td]:whitespace-nowrap [&_.wp-block-table_table_tbody_td]:text-sm [&_.wp-block-table_table_tbody_td]:font-medium",
                "[&_.wp-block-table_table_tbody_td]:text-bone-700",
                className
            )}
            dangerouslySetInnerHTML={sanitizedData(content)}
        />
    )
}

export default Article;