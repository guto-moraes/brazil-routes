import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import type { AlmanaquePresentationTypes, ChaptersAlmanaqueTypes, FieldsActivityTypes,  } from "@/types/theme-types";
import { ALMANAQUE_PRESENTATION, CHAPTERS_ALMANAQUE, FIELDS_ACTIVITY, PARTNERS } from "@/graphql/theme-graphql";
import type { PartnersTypes } from "@/types/theme-types";

const GRAPHQL_URL = "http://caminhos-do-brasil-central.local/graphql";

//Fetch da Seção Capítulos do Almanaque - Página Inicial
const fetchAlmanaquePresentation = async () => {
  return await request<AlmanaquePresentationTypes>(GRAPHQL_URL, ALMANAQUE_PRESENTATION);
};

//Query da Seção Capítulos do Almanaque - Página Inicial
export const useQueryAlmanaquePresentation = () => {
  return useQuery<AlmanaquePresentationTypes>({
    queryKey: ["almanaque-presentation"],
    queryFn: () => fetchAlmanaquePresentation(),
  });
};

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

//Fetch da Seção Áreas de Atuação - Página Inicial
const fetchFieldsActivityOfProject = async () => {
  return await request<FieldsActivityTypes>(GRAPHQL_URL, FIELDS_ACTIVITY);
};

//Query da Seção Áreas de Atuação - Página Inicial
export const useQueryFieldsActivityOfProject = () => {
  return useQuery<FieldsActivityTypes>({
    queryKey: ["fields-activity-project"],
    queryFn: () => fetchFieldsActivityOfProject(),
  });
};

//Fetch da Seção Áreas de Atuação - Página Inicial
const fetchPartners = async () => {
  return await request<PartnersTypes>(GRAPHQL_URL, PARTNERS);
};

//Query da Seção Áreas de Atuação - Página Inicial
export const useQueryPartners = () => {
  return useQuery<PartnersTypes>({
    queryKey: ["partners"],
    queryFn: () => fetchPartners(),
  });
};