import request from "graphql-request";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ALMANAQUE_CHAPTERS, ALMANAQUE_PAGE, ALMANAQUE_PRESENTATION } from "@/graphql/almanaque-graphql";
import type { AlmanaqueChaptersTypes, AlmanaquePageTypes, AlmanaquePresentationTypes } from "@/types/almanaque-types";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;


//Fetch de uma única página
const fetchAlmanaquePage = async (slug: string) => {
  return await request<AlmanaquePageTypes>(GRAPHQL_URL, ALMANAQUE_PAGE, {
    slug,
  });
};

//Query de uma única página
export const useQueryAlmanaquePage = (slug: string) => {
  return useSuspenseQuery<AlmanaquePageTypes>({
    queryKey: ["single-page"],
    queryFn: () => fetchAlmanaquePage(slug),
  });
};

//Fetch da Seção de Apresentação do Almanaque - Página Inicial
const fetchAlmanaquePresentation = async () => {
  return await request<AlmanaquePresentationTypes>(GRAPHQL_URL, ALMANAQUE_PRESENTATION);
};

//Query da Seção de Apresentação do Almanaque - Página Inicial
export const useQueryAlmanaquePresentation = () => {
  return useSuspenseQuery<AlmanaquePresentationTypes>({
    queryKey: ["almanaque-presentation"],
    queryFn: () => fetchAlmanaquePresentation(),
  });
};

//Fetch da Seção dos Capítulos do Alamanaque - Página do Almanaque Digital
const fetchAlmanaqueChapters = async () => {
  return await request<AlmanaqueChaptersTypes>(GRAPHQL_URL, ALMANAQUE_CHAPTERS);
};

//Query da Seção dos Capítulos do Alamanaque - Página do Almanaque Digital
export const useQueryAlmanaqueChapters = () => {
  return useSuspenseQuery<AlmanaqueChaptersTypes>({
    queryKey: ["almanaque-chapters"],
    queryFn: () => fetchAlmanaqueChapters(),
  });
};
