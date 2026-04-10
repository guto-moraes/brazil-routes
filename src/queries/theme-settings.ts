import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import type { ChaptersAlmanaqueTypes } from "@/types/theme-graphql";
import { CHAPTERS_ALMANAQUE } from "@/graphql/theme_settings";

const GRAPHQL_URL = "http://caminhos-do-brasil-central.local/graphql";

const fetchChaptersAlmanaqueHome = async () => {
  return await request<ChaptersAlmanaqueTypes>(GRAPHQL_URL, CHAPTERS_ALMANAQUE);
};

export const useQueryChaptersAlmanaqueHome = () => {
  return useQuery<ChaptersAlmanaqueTypes>({
    queryKey: ["chapters-almanaque-home"],
    queryFn: () => fetchChaptersAlmanaqueHome(),
  });
};