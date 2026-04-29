import request from "graphql-request";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { GLOSSARY, INTERACTIVE_MAP, INTERACTIVE_MAP_LOCATION } from "@/graphql/custom-types-graphql";
import type { GlossaryTypes, InteractiveMapLocationTypes, InteractiveMapTypes } from "@/types/custom-post-types";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

//Fetch do Mapa Interativo para Todos os Resultados
const fetchInteractiveMap = async () => {
  return await request<InteractiveMapTypes>(GRAPHQL_URL, INTERACTIVE_MAP);
};

//Query do Mapa Interativo para Todos os Resultados
export const useQueryInteractiveMap = () => {
  return useSuspenseQuery<InteractiveMapTypes>({
    queryKey: ["interactive-map"],
    queryFn: () => fetchInteractiveMap(),
  });
};

//Fetch do Mapa Interativo para um Resultado
const fetchInteractiveMapLocation = async (id: string) => {
  return await request<InteractiveMapLocationTypes>(GRAPHQL_URL, INTERACTIVE_MAP_LOCATION, {
    id,
  });
};

//Query do Mapa Interativo para um Resultado
export const useQueryInteractiveMapLocation = (id: string) => {
  return useQuery<InteractiveMapLocationTypes>({
    queryKey: ["interactive-map-location", id],
    queryFn: () => fetchInteractiveMapLocation(id),
    // staleTime: 60 * 5 * 1000,
  });
};

//Fetch do Glossário
const fetchGlossary = async () => {
  return await request<GlossaryTypes>(GRAPHQL_URL, GLOSSARY);
};

//Query do Glossário
export const useQueryGlossary = () => {
  return useSuspenseQuery<GlossaryTypes>({
    queryKey: ["glossary"],
    queryFn: () => fetchGlossary(),
    staleTime: 60 * 5 * 1000,
  });
};
