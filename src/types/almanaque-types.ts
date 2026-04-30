import * as z from "zod";

//Tipagem da consulta da apresentação do Almanaque
export const AlmanaquePresentationSchema = z.object({
  project: z.object({
    theming: z.object({
      ebookPresentation: z.object({
        projectIcon: z.object({
          node: z.object({
            guid: z.string(),
          }),
        }),
        ebookCover: z.object({
          node: z.object({
            guid: z.string(),
          }),
        }),
        title: z.string(),
        ebookSynopsis: z.string(),
        almanaqueUrlPage: z.string(),
        almanaqueDownloadUrl: z.string(),
      }),
    }),
  }),
});

export type AlmanaquePresentationTypes = z.infer<typeof AlmanaquePresentationSchema>;

//Tipagem da consulta de uma página
export const AlmanaquePageSchema = z.object({
  page: z.object({
    title: z.string(),
    content: z.string(),
    almanaque: z.object({
      link: z.object({
        title: z.string(),
        url: z.string(),
        target: z.string(),
      }),
    }),
  }),
});

export type AlmanaquePageTypes = z.infer<typeof AlmanaquePageSchema>;

//Tipagem para consultas da apresentação Almanaque
export const AlmanaqueChapterSchema = z.object({
  tag: z.string(),
  title: z.string(),
  synopsis: z.string(),
  image: z.object({
    node: z.object({
      guid: z.string(),
    }),
  }),
  link: z.object({
    url: z.string(),
  })
});

export type AlmanaqueChapterTypes = z.infer<typeof AlmanaqueChapterSchema>;

export const AlmanaqueChaptersSchema = z.object({
  page: z.object({
    almanaque: z.object({
      ebookChapters: z.array(AlmanaqueChapterSchema),
    }),
  }),
});

export type AlmanaqueChaptersTypes = z.infer<typeof AlmanaqueChaptersSchema>;