import * as z from "zod";

/* Text Reveal Hidden Types */
export type TextRevealHiddenTypes = {
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
  children: React.ReactNode;
};

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

export type PaginationTypes = z.infer<typeof PaginationSchema>
