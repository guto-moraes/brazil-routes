import request from "graphql-request";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CHAPTERS_ALMANAQUE } from "@/graphql/theme-graphql";
import type { ChaptersAlmanaqueTypes } from "@/types/theme-types";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

//Fetch da Seção Capítulos do Almanaque - Página Inicial
const fetchAlmanaqueChapters = async () => {
  return await request<ChaptersAlmanaqueTypes>(GRAPHQL_URL, CHAPTERS_ALMANAQUE);
};

//Query da Seção Capítulos do Almanaque - Página Inicial
export const useQueryAlmanaqueChapters = () => {
  return useSuspenseQuery<ChaptersAlmanaqueTypes>({
    queryKey: ["almanaque-chapters"],
    queryFn: () => fetchAlmanaqueChapters(),
  });
};