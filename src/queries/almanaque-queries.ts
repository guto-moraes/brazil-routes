import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { CHAPTERS_ALMANAQUE } from "@/graphql/theme-graphql";
import type { ChaptersAlmanaqueTypes } from "@/types/theme-types";

const GRAPHQL_URL = "http://caminhos-do-brasil-central.local/graphql";

//Fetch da Seção Capítulos do Almanaque - Página Inicial
const fetchAlmanaqueChapters = async () => {
  return await request<ChaptersAlmanaqueTypes>(GRAPHQL_URL, CHAPTERS_ALMANAQUE);
};

//Query da Seção Capítulos do Almanaque - Página Inicial
export const useQueryAlmanaqueChapters = () => {
  return useQuery<ChaptersAlmanaqueTypes>({
    queryKey: ["almanaque-chapters"],
    queryFn: () => fetchAlmanaqueChapters(),
  });
};