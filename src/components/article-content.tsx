import { cn, sanitizedData } from "@/lib/utils";

const ArticleContent = ({ className, content }: { className?: string; content: string }) => {
  return (
    <div
      className={cn(
        "[&_p]:text-base [&_p]:md:text-lg [&_p]:xl:text-xl [&_p]:text-tan-700 [&_p]:leading-7 [&_p]:text-justify",
        "[&_p]:hyphens-auto [&_p]:not-last:mb-8 [&_blockquote_p]:text-[1.75rem] [&_blockquote_p]:leading-8 [&_blockquote_p]:text-left",
        " [&_blockquote]:pl-4 [&_blockquote]:mb-12 [&_blockquote]:border-l-5 [&_blockquote]:border-mate-500",
        "[&_hr.wp-block-separator]:border-tan-600/25 [&_sup.fn]:text-mate-500 [&_sup.fn]:font-semibold [&_hr.wp-block-separator]:mb-6",
        "[&_ol.wp-block-footnotes]:text-tan-600 [&_ol.wp-block-footnotes]:list-decimal [&_ol.wp-block-footnotes]:text-sm",
        "[&_ol.wp-block-footnotes]:ml-4 [&_figure]:rounded-lg [&_figure]:relative [&_figure]:max-w-full! [&_figure]:mx-auto!",
        "[&_figure]:mb-16! [&_figure_img]:rounded-lg [&_figure_img]:h-full [&_figure_img]:max-h-full [&_figure_img]:w-full [&_figure_img]:max-w-full",
        "[&_figure_img]:object-contain! [&_figure_figcaption]:absolute [&_figure_figcaption]:bg-black/40 [&_figure_figcaption]:text-xs",
        "[&_figure_figcaption]:top-0 [&_figure_figcaption]:right-0 [&_figure_figcaption]:rounded-tr-lg [&_figure_figcaption]:rounded-bl-lg",
        "[&_figure_figcaption]:text-white [&_figure_figcaption]:p-2 [&_h2.wp-block-heading]:text-3xl [&_h2.wp-block-heading]:text-chocolate-500",
        "[&_h2.wp-block-heading]:font-black [&_h2.wp-block-heading]:mb-8 [&_p_a]:text-chocolate-300 [&_p_a]:hover:text-chocolate-400",
        "[&_p_a]:transition-colors [&_p_a]:duration-300 [&_.wp-block-image_img]:max-w-full! [&_.size-large_img]:max-w-full",
        "[&_ol]:list-decimal [&_ul]:not-last:mb-12 [&_ul]:ml-6 [&_ul]:list-disc [&_ul_li]:text-lg [&_ul_li]:mb-2",
        "[&_strong]:text-tan-800",
        className
      )}
      dangerouslySetInnerHTML={sanitizedData(content)}
    />
  );
};

export default ArticleContent;
