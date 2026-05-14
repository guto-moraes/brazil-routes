import * as z from "zod";

//Tipagem da consulta de uma página
export const PageSchema = z.object({
  page: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

export type PageTypes = z.infer<typeof PageSchema>;

//Tipagem da consulta de todas as postagens no Blog de Notícias
export const BlogItemsSchema = z.object({
  id: z.string(),
  modified: z.string(),
  date: z.string(),
  author: z.object({
    node: z.object({
      name: z.string(),
    }),
  }),
  news: z.object({
    author: z.string(),
    location: z.string(),
  }),
  categories: z.object({
    nodes: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  tags: z.object({
    nodes: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  featuredImage: z.object({
    node: z.object({
      guid: z.string(),
    }),
  }),
  title: z.string(),
  excerpt: z.string(),
  link: z.string(),
  slug: z.string(),
});

export type BlogItemsTypes = z.infer<typeof BlogItemsSchema>;

export const BlogSchema = z.object({
  posts: z.object({
    pageInfo: z.object({
      offsetPagination: z.object({
        hasMore: z.boolean(),
        hasPrevious: z.boolean(),
        total: z.number(),
      }),
    }),
    nodes: z.array(BlogItemsSchema),
  }),
});

export type BlogTypes = z.infer<typeof BlogSchema>;

//Tipagem da consulta de uma única notícias
export const BlogItemSchema = z.object({
  post: z.object({
    id: z.string(),
    modified: z.string(),
    date: z.string(),
    author: z.object({
      node: z.object({
        name: z.string(),
      }),
    }),
    news: z.object({
      author: z.string(),
      location: z.string(),
    }),
    tags: z.object({
      nodes: z.array(
        z.object({
          name: z.string(),
        }),
      ),
    }),
    title: z.string(),
    content: z.string(),
  }),
});

export type BlogItemTypes = z.infer<typeof BlogItemSchema>;

//Tipage da Query para consultas das postagens na categoria Agenda
export const CalendarItemSchema = z.object({
  id: z.string(),
  modified: z.string(),
  date: z.string(),
  author: z.object({
    node: z.object({
      name: z.string(),
    }),
  }),
  categories: z.object({
    nodes: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  tags: z.object({
    nodes: z.array(
      z.object({
        name: z.string(),
      }),
    ),
  }),
  agenda: z.object({
    eventDate: z.string(),
    eventPlace: z.string(),
  }),
  featuredImage: z.object({
    node: z.object({
      sourceUrl: z.string(),
    }),
  }),
  title: z.string(),
  excerpt: z.string(),
  link: z.string(),
  slug: z.string(),
});

export type CalendarItemTypes = z.infer<typeof CalendarItemSchema>;

export const CalendarSchema = z.object({
  posts: z.object({
    pageInfo: z.object({
      offsetPagination: z.object({
        hasMore: z.boolean(),
        hasPrevious: z.boolean(),
        total: z.number(),
      }),
    }),
    nodes: z.array(CalendarItemSchema),
  }),
});

export type CalendarTypes = z.infer<typeof CalendarSchema>;
