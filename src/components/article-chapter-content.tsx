import { cn, sanitizedData } from "@/lib/utils"

const ArticleChapterContent = ({ className, content }: { className?: string; content: string }) => {
    return(
        <article
            className={cn(
                "*:not-last:mb-16 xl:[&_p]:text-xl [&_p]:text-tan-700 [&_p]:text-justify [&_p]:hyphens-auto [&_p]:not-last:mb-10",
                "[&_.wp-block-gallery]:max-w-full [&_.wp-block-gallery]:grid [&_.wp-block-gallery]:grid-cols-3 [&_.wp-block-gallery]:gap-8",
                "[&_.wp-block-gallery]:mx-auto [&_.wp-block-gallery_img]:rounded-xl [&_figure_img]:rounded-t-xl",
                "[&_.wp-block-gallery]:w-max [&_.wp-block-image]:w-max [&_.wp-block-image]:mx-auto [&_figure_img]:max-w-full",
                "[&_figcaption]:rounded-b-xl [&_figcaption]:bg-black/55 [&_figcaption]:text-[0.725rem] [&_figcaption]:text-white",
                "[&_figcaption]:py-1.25 [&_figcaption]:px-2 [&_figcaption]:text-center [&_figcaption]:max-w-full [&_.wp-block-media-text_img]:rounded-xl",
                "[&_.wp-block-media-text]:flex [&_.wp-block-media-text]:gap-8 [&_.wp-block-media-text_figure]:flex-2",
                "[&_.wp-block-media-text_figure_img]:min-w-full [&_.wp-block-media-text_div]:flex-3",
                "[&_.wp-block-quote]:max-w-3xl [&_.wp-block-quote]:mx-auto [&_.wp-block-quote]:bg-mate-duo-500/25 [&_.wp-block-quote]:p-6",
                "[&_.wp-block-quote_p]:font-cabinet [&_.wp-block-quote_p]:text-[clamp(1.25rem,4vw,1.65rem)] [&_.wp-block-quote_p]:leading-[1.1]",
                "[&_.wp-block-quote]:rounded-2xl [&_.wp-block-quote]:relative [&_.wp-block-quote_p]:font-bold [&_.wp-block-quote]:before:absolute",
                "[&_.wp-block-quote]:before:content-['\\201C'] [&_.wp-block-quote]:before:-top-8 [&_.wp-block-quote]:before:-left-8",
                "[&_.wp-block-quote]:before:text-[clamp(2rem,14vw,20rem)] [&_.wp-block-quote]:before:font-cintarini",
                "[&_.wp-block-quote]:before:text-mate-duo-500/90 [&_.wp-block-quote]:before:z-2 [&_.wp-block-quote]:before:transform-3d",
                "[&_iframe]:aspect-video [&_iframe]:w-full [&_iframe]:h-auto! [&_iframe]:rounded-3xl",
                "[&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-tan-600 [&_table_th]:border [&_table_th]:border-tan-600",
                "[&_table_th]:py-1.5 [&_table_th]:px-2 [&_table_td]:py-1.5 [&_table_td]:px-2 [&_table_td]:border [&_table_td]:border-tan-600",
                "[&_table_thead]:bg-bone-200 [&_table_thead]:text-bone-800 [&_.has-text-align-center]:text-center",
                "[&_table_tr_td_a]:text-blue-retro-700 [&_table_tr_td_a:hover]:text-blue-retro-500 [&_table_tr_td_a]:font-semibold",
                "[&_table]:text-tan-700 [&_table_tr_td_a]:transition-colors [&_table_tr_td_a]:duration-300",
                "[&_h2]:text-[clamp(1.8rem,5vw,2rem)] [&_h2]:text-terracotta-800 [&_h2]:font-bold",
                className
            )}
            dangerouslySetInnerHTML={sanitizedData(content)}
        />
    )
}

export default ArticleChapterContent;