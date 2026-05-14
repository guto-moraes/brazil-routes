import * as z from "zod";

//Tipagem do componente TextRevealHidden
export const TextRevealHiddenSchema = z.object({
  animateOnScroll: z.boolean(),
  delay: z.number().optional(),
  blockColor: z.string().optional(),
  stagger: z.number().optional(),
  duration: z.number().optional(),
  children: z.custom<React.ReactNode>(),
});

export type TextRevealHiddenTypes = z.infer<typeof TextRevealHiddenSchema>;

//Tipagem do componente Pagination
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

//Tipagem do componente LiquidImageReveal
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

//Tipagem do componente HorizontalSlidesScroll
export const HorizontalSlideItemSchema = z.object({
  id: z.string().optional(),
  bgColor: z.string(),
  className: z.string().optional(),
  children: z.custom<React.ReactNode>(),
});

export type HorizontalSlideItemTypes = z.infer<typeof HorizontalSlideItemSchema>;

export const HorizontalSlidesSchema = z.object({
  year: z.number().min(4).max(4),
  setYear: z.function({
    input: [z.number().min(4).max(4)],
    output: z.void(),
  }),
  children: z.custom<React.ReactNode>(),
});

export type HorizontalSlidesType = z.infer<typeof HorizontalSlidesSchema>;

//Tipagem do componente de TextLoader
export const TextLoaderSchema = z.object({
  text: z.string(),
  className: z.string().optional(),
  onComplete: z
    .function({
      output: z.void(),
    })
    .optional(),
  gradientColors: z.array(z.string()).optional(),
  backgroundColor: z.string().optional(),
  duration: z
    .object({
      slideUp: z.number().optional(),
      reveal: z.number().optional(),
      slideDown: z.number().optional(),
    })
    .optional(),
  delays: z
    .object({
      stagger: z.number().optional(),
      betweenAnimations: z.number().optional(),
      beforeSlideDown: z.number().optional(),
    })
    .optional(),
});

export type TextLoaderPropsTypes = z.infer<typeof TextLoaderSchema>;

//Tipagem do componente EventCard
export const EventCardSchema = z.object({
  eventTime: z.string(),
  eventDay: z.string().or(z.number()),
  eventMonth: z.string(),
  eventImageUrl: z.string(),
  eventUrl: z.string(),
  eventTitle: z.string(),
  eventPlace: z.string(),
});

export type EventCardTypes = z.infer<typeof EventCardSchema>;

export const EventTimeSchema = z.object({
  datetime: z.string(),
  day: z.string().or(z.number()),
  month: z.string(),
});

export type EventTimeTypes = z.infer<typeof EventTimeSchema>;

export const EventTextSchema = z.object({
  eventUrl: z.string(),
  eventTitle: z.string(),
  eventPlace: z.string(),
});

export type EventTextTypes = z.infer<typeof EventTextSchema>;

//Tipagem do componente CardStackScroll
export const MemberCardDetailsSchema = z.object({
  memberName: z.string(),
  memberRole: z.string(),
  memberDescription: z.string(),
});

export type MemberCardDetailsTypes = z.infer<typeof MemberCardDetailsSchema>;

export const TeamSocialsSchema = z.object({
  socialName: z.string(),
  socialAt: z.string().optional(),
  socialUrl: z.string(),
});

export type TeamSocialTypes = z.infer<typeof TeamSocialsSchema>;

export const CardStackSchema = z.object({
    photo: z.string(),
    name: z.string(),
    role: z.string(),
    description: z.string(),
    socials: z.array(TeamSocialsSchema)
})

export type CardStackTypes = z.infer<typeof CardStackSchema>;

export const TeamItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  team: z.object({
    role: z.string(),
    socials: z.array(TeamSocialsSchema),
  }),
  featuredImage: z.object({
    node: z.object({
      sourceUrl: z.string(),
    }),
  }),
});

export type TeamItemTypes = z.infer<typeof TeamItemSchema>;

export const TeamSchema = z.object({
  equipes: z.object({
    nodes: z.array(TeamItemSchema),
  }),
});

export type TeamTypes = z.infer<typeof TeamSchema>;
