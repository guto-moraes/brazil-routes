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
