import * as z from "zod";

//Tipagem da consulta de todas as postagens no Blog de Notícias
export const BlogItemsSchema = z.object({
  id: z.string(),
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
    nodes: z.array(BlogItemsSchema),
  }),
});

export type BlogTypes = z.infer<typeof BlogSchema>;

//Tipagem da consulta de uma única notícias
export const BlogItemSchema = z.object({
  post: z.object({
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
