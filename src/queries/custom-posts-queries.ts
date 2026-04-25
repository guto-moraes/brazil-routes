import request from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { INTERACTIVE_MAP } from "@/graphql/custom-types-graphql";
import type { InteractiveMapTypes } from "@/types/custom-post-types";

const GRAPHQL_URL = "http://caminhos-do-brasil-central.local/graphql";

//Fetch do Mapa Interativo
const fetchInteractiveMap = async () => {
  return await request<InteractiveMapTypes>(GRAPHQL_URL, INTERACTIVE_MAP);
};

//Query do Mapa Interativo
export const useQueryInteractiveMap = () => {
  return useQuery<InteractiveMapTypes>({
    queryKey: ["interactive-map"],
    queryFn: () => fetchInteractiveMap(),
  });
};