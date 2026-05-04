import * as z from "zod";

/* Text Reveal Hidden Types */
export const TextRevealHiddenSchema = z.object({
  animateOnScroll: z.boolean(),
  delay: z.number().optional(),
  blockColor: z.string().optional(),
  stagger: z.number().optional(),
  duration: z.number().optional(),
  children: z.custom<React.ReactNode>(),
});

export type TextRevealHiddenTypes = z.infer<typeof TextRevealHiddenSchema>;

//Tipagem do componente de paginação
export const PaginationSchema = z.object({
  hasPrevious: z.boolean(),
  hasNext: z.boolean(),
  offset: z.number(),
  total: z.number(),
  limit: z.number(),
  maxItems: z.number(),
  maxLeft: z.number(),
  handlePagination: z.function({
    input: [z.number()],
    output: z.void(),
  }),
});

export type PaginationTypes = z.infer<typeof PaginationSchema>;

//Tipagem do componente de efeito de revelação líquida
export const LiquidImageRevealPropsSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  duration: z.number().optional(),
  delay: z.number().optional(),
  className: z.string().optional(),
  centerX: z.number().optional(),
  centerY: z.number().optional(),
  turbulenceFrequency: z.number().optional(),
  turbulenceOctaves: z.number().optional(),
  displacementScale: z.number().optional(),
  maxRadius: z.number().optional(),
});

export type LiquidImageRevealPropsTypes = z.infer<typeof LiquidImageRevealPropsSchema>;

//Tipagem do componente de rolagem horizontal de telas
export const HorizontalSlideItemSchema = z.object({
  bgColor: z.string(),
  className: z.string().optional(),
  children: z.custom<React.ReactNode>(),
});

export type HorizontalSlideItemTypes = z.infer<typeof HorizontalSlideItemSchema>

export const HorizontalSlidesSchema = z.object({
  children: z.custom<React.ReactNode>(),
});

export type HorizontalSlidesType = z.infer<typeof HorizontalSlidesSchema>
