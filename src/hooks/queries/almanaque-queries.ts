import request from "graphql-request";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ALMANAQUE_CHAPTERS, ALMANAQUE_PAGE, ALMANAQUE_PRESENTATION, CHAPTER_PAGE } from "@/graphql/almanaque-graphql";
import type { AlmanaqueChaptersTypes, AlmanaquePageTypes, AlmanaquePresentationTypes, ChapterPageTypes } from "@/types/almanaque-types";
import { GRAPHQL_URL } from "@/lib/graphql";

// Fetch de uma única página
const fetchAlmanaquePage = async () => {
  return await request<AlmanaquePageTypes>(GRAPHQL_URL, ALMANAQUE_PAGE );
};

// Query de uma única página
export const useQueryAlmanaquePage = () => {
  return useSuspenseQuery<AlmanaquePageTypes>({
    queryKey: ["almanaque-page"],
    queryFn: () => fetchAlmanaquePage(),
  });
};

// Fetch da Seção de Apresentação do Almanaque - Página Inicial
const fetchAlmanaquePresentation = async () => {
  return await request<AlmanaquePresentationTypes>(GRAPHQL_URL, ALMANAQUE_PRESENTATION);
};

// Query da Seção de Apresentação do Almanaque - Página Inicial
export const useQueryAlmanaquePresentation = () => {
  return useSuspenseQuery<AlmanaquePresentationTypes>({
    queryKey: ["almanaque-presentation"],
    queryFn: () => fetchAlmanaquePresentation(),
  });
};

// Fetch da Seção dos Capítulos do Alamanaque - Página do Almanaque Digital
const fetchAlmanaqueChapters = async (slug: string) => {
  return await request<AlmanaqueChaptersTypes>(GRAPHQL_URL, ALMANAQUE_CHAPTERS, {
    slug,
  });
};

// Query da Seção dos Capítulos do Alamanaque - Página do Almanaque Digital
export const useQueryAlmanaqueChapters = (slug: string) => {
  return useSuspenseQuery<AlmanaqueChaptersTypes>({
    queryKey: ["almanaque-chapters", slug],
    queryFn: () => fetchAlmanaqueChapters(slug),
  });
};


// Fetch para pegar cada capítulo do Almanaque
const fetchChapterPage = async (slug: string) => {
  return await request<ChapterPageTypes>(GRAPHQL_URL, CHAPTER_PAGE, {
    slug,
  });
};

// Query dpara pegar cada capítulo do Almanaque
export const useQueryChapterPage = (slug: string) => {
  return useSuspenseQuery<ChapterPageTypes>({
    queryKey: ["chapter-page"],
    queryFn: () => fetchChapterPage(slug),
    refetchInterval: 500,
  });
};
