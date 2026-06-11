/**
 * 
 * Estilização dos elementos HTML do componente Article
 * 
 */

// Afeta todos os elementos e o container
export const general = `
    md:mb-8 *:not-last:mb-8 max-[500px]:w-[99%]! sm:max-w-full! 
    selection:bg-darkgreen-400 selection:text-white    
`;

// Elemento p
export const paragraph = `
    [&_p]:text-[clamp(0.9rem,4vw,1.05rem)]! [&_p]:text-tan-800 sm:[&_p]:text-justify
    [&_p]:text-pretty sm:[&_p]:indent-8 sm:[&_p.no-indent]:indent-0 [&_p]:hyphens-auto    
`;

// Elementos h2
export const headingH2 = `
    [&_h2.wp-block-heading]:text-[clamp(1.15rem,6vw,1.35rem)] [&_h2.wp-block-heading]:text-blue-retro-700 
    [&_h2.wp-block-heading]:tracking-tighter [&_h2.wp-block-heading]:font-bold
    [&_h2.wp-block-heading]:uppercase [&_h2.wp-block-heading]:leading-none
`;

// Elemento figure
export const figure = `
    [&_.wp-block-image]:h-52 md:[&_.wp-block-image]:h-auto md:[&_.wp-block-image]:max-h-150   
    [&_.wp-block-image]:max-w-svw [&_.wp-block-image]:rounded-2xl [&_.wp-block-image]:overflow-hidden
    max-[500px]:[&_.wp-block-image]:max-w-full [&_.wp-block-image]:relative 
    [&_figure.aligncenter]:w-max! [&_figure.aligncenter]:mx-auto!
    [&_figure.alignleft]:w-max! [&_figure.aligncenter]:ms-auto!
    [&_figure.alignright]:w-max! [&_figure.aligncenter]:me-auto!
`;

// Elemento img
export const image = `
    [&_.wp-block-image_img]:h-full [&_.wp-block-image_img]:w-full
    [&_.wp-block-image_img]:object-cover [&_.wp-block-image_img]:object-top
`;

// Elemento figcaption
export const figcaption = `
    [&_.wp-block-image_.wp-element-caption]:absolute [&_.wp-block-image_.wp-element-caption]:bottom-0
    [&_.wp-block-image_.wp-element-caption]:rounted-b-2xl max-[500px]:[&_.wp-block-image_.wp-element-caption]:text-center
    [&_.wp-block-image_.wp-element-caption]:w-full [&_.wp-block-image_.wp-element-caption]:bg-black/50
    [&_.wp-block-image_.wp-element-caption]:py-1 [&_.wp-block-image_.wp-element-caption]:px-3
    [&_.wp-block-image_.wp-element-caption]:text-white [&_.wp-block-image_.wp-element-caption]:text-[clamp(0.625rem,2vw,0.85rem)]
`;

// Elemento blockquote
export const blockquote = `
    [&_.wp-block-quote]:max-w-max [&_.wp-block-quote]:mx-auto [&_.wp-block-quote_p]:text-[clamp(1.15rem,5vw,1.35rem)]!
    max-[500px]:[&_.wp-block-quote_p]:leading-6 [&_.wp-block-quote_p]:bg-tan-200/50 [&_.wp-block-quote_p]:py-2
    [&_.wp-block-quote_p]:text-left [&_.wp-block-quote_p]:indent-0 [&_.wp-block-quote_p]:pr-2 [&_.wp-block-quote_p]:border-l-6 
    [&_.wp-block-quote_p]:border-mate-500 [&_.wp-block-quote_p]:pl-3 [&_.wp-block-quote_p]:font-bold
`;

// Elemento hr
export const hr = `
    [&_.wp-block-separator]:h-px [&_.wp-block-separator]:border-tan-200
`;

// Elemento a
export const anchor = `
    [&_.wp-block-footnotes]:text-tan-600 [&_.wp-block-footnotes]:list-decimal [&_.wp-block-footnotes]:not-last:mb-1
    [&_a]:text-blue-retro-500 [&_a]:hover:text-gray-500 [&_a]:transition-colors [&_a]:duration-300
`;

// Elemento figure galeria de imagens
export const wp_gallery = `
    [&_figure.wp-block-gallery.is-layout-flex]:grid! [&_figure.wp-block-gallery.is-layout-flex]:grid-cols-2!
    sm:[&_figure.wp-block-gallery.is-layout-flex]:grid-cols-3! [&_figure.wp-block-gallery.is-layout-flex]:gap-4!
    sm:[&_.wp-block-gallery.is-layout-flex]:gap-8! [&_.wp-block-gallery.is-layout-flex_.wp-block-image_img]:object-cover
    [&_.wp-block-gallery.is-layout-flex_.wp-block-image_img]:w-full [&_.wp-block-gallery.is-layout-flex_.wp-block-image_img]:h-full
    [&_.wp-block-gallery.is-layout-flex_.wp-block-image_img]:cursor-pointer
`;

// Elemento video no formato vetical
export const vertical_video = `
    [&_.aspect-vertical]:relative [&_.aspect-vertical]:w-full [&_.aspect-vertical]:max-w-sm! [&_.wp-block-video]:mb-8
    [&_.aspect-vertical]:aspect-9/16 [&_.aspect-vertical]:h-[80svh] [&_.aspect-vertical]:max-h-180 [&_.aspect-vertical]:my-0
    [&_.aspect-vertical]:mx-auto [&_.aspect-vertical_video]:w-full [&_.aspect-vertical_video]:h-full
    [&_.aspect-vertical_video]:object-cover [&_.aspect-vertical_video]:absolute [&_.aspect-vertical_video]:top-0
    [&_.aspect-vertical_video]:left-0 [&_.aspect-vertical_video]:object-cover
    `;

// Elemento video no formato horizontal
export const horizontal_video = `
    [&_.aspect-horizontal_div]:relative [&_.aspect-horizontal_div]:rounded-2xl
    [&_.aspect-horizontal_div]:h-0 [&_.aspect-horizontal_div]:pb-[56.25%]
    [&_.aspect-horizontal_div]:overflow-hidden [&_.aspect-horizontal_div_iframe]:h-full
    [&_.aspect-horizontal_div_iframe]:w-full [&_.aspect-horizontal_div_iframe]:absolute
    [&_.aspect-horizontal_div_iframe]:top-0 [&_.aspect-horizontal_div_iframe]:left-0
`;

// Elemento table
export const table = `
    [&_.wp-block-table]:overflow-x-auto [&_.wp-block-table::-webkit-scrollbar]:h-2 [&_.wp-block-table::-webkit-scrollbar-thumb]:rounded-none
    max-md:[&_.wp-block-table]:scroll-thumb-sky-500 [&_.wp-block-table_table]:min-w-full [&_.wp-block-table_table]:divide-y
    [&_.wp-block-table_table]:divide-table-line [&_.wp-block-table_table_th]:px-6 [&_.wp-block-table_table_th]:py-3 [&_.wp-block-table_table_th]:text-start
    [&_.wp-block-table_table_thead]:bg-tan-200 [&_.wp-block-table_table_th]:text-xs [&_.wp-block-table_table_th]:font-semibol
    [&_.wp-block-table_table_th]:text-bone-800 [&_.wp-block-table_table_th]:uppercase [&_.wp-block-table_table_tbody_tr]:odd:bg-tan-100/25
    [&_.wp-block-table_table_tbody_tr]:even:bg-tan-100 [&_.wp-block-table_table_tbody_td]:px-6 [&_.wp-block-table_table_tbody_td]:py-4
    [&_.wp-block-table_table_tbody_td]:whitespace-nowrap [&_.wp-block-table_table_tbody_td]:text-sm [&_.wp-block-table_table_tbody_td]:font-medium
    [&_.wp-block-table_table_tbody_td]:text-bone-700
`;

// Elementos ol e li
export const lists = `
    [&_ol]:text-tan-800 [&_ul]:text-tan-800 [&_ol]:list-decimal [&_ul]:not-last:mb-12 [&_ul]:ml-6 [&_ul]:list-disc [&_ul_li]:mb-2
`;

// Elemento ol (notas de rodapé)
export const ol_footnotes = `
    [&_.wp-block-footnotes]:whitespace-break-spaces [&_.wp-block-footnotes]:text-xs [&_.wp-block-footnotes]:ml-4
`;

// bloco em duas colunas com elementos p e img
export const image_media_block = `
    md:[&_.wp-block-media-text]:columns-2 [&_.wp-block-media-text]:space-x-6
    [&_.wp-block-media-text_div_p]:not-last:mb-6 max-sm:[&_.wp-block-media-text_div]:not-last:mb-6
    max-md:[&_.wp-block-media-text_figure]:mb-6 max-md:[&_.wp-block-media-text_figure]:rounded-2xl
    max-md:[&_.wp-block-media-text_figure]:overflow-hidden max-md:[&_.wp-block-media-text_figure_img]:h-full
    max-md:[&_.wp-block-media-text_figure_img]:w-full max-md:[&_.wp-block-media-text_figure_img]:object-cover
`;

/**
 * Estilização do componente Article para o tema contraste
 */

// Afeta todas as seleções de conteúdo
export const dark_selection = `
    dark:selection:bg-dark-contrast-100 dark:selection:text-bone-900
`;

// Elemento p
export const dark_p = `
    dark:[&_p]:text-white
`;

// Elemento h2
export const dark_h2 = `
    dark:[&_h2.wp-block-heading]:text-blue-retro-300
`;

// Elemento a
export const dark_anchor = `
    dark:[&_a]:text-dark-contrast-100 dark:[&_a]:hover:text-dark-contrast-100/70
`;

// Elemento hr
export const dark_hr = `
    [&_.wp-block-separator]:border-dark-800
`;

// Elemento blockquote
export const dark_blockquote = `
    dark:[&_.wp-block-quote_p]:bg-dark-800 [&_.wp-block-quote_p]:border-blue-retro-500
`;

// Elemento ol e ul (listas)
export const dark_lists = `
    dark:[&_ol]:text-white dark:[&_ul]:text-white
`;

// Elemento ol (notas de rodapé)
export const dark_ol_footnotes = `
    dark:[&_.wp-block-footnotes]:text-dark-200
`;

// Elemento table 
export const dark_table = `
    dark:[&_.wp-block-table_table_thead]:bg-dark-800 dark:[&_.wp-block-table_table_th]:text-blue-retro-400
    dark:[&_.wp-block-table_table_tbody_tr]:odd:bg-dark-900 dark:[&_.wp-block-table_table_tbody_td]:text-white
    dark:[&_.wp-block-table_table_tbody_tr]:even:bg-dark-950
`
