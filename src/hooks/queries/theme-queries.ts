import { useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import type { FieldsActivityTypes, PartnersTypes, PionnersTypes, PressSectionTypes,  } from "@/types/theme-types";
import { FIELDS_ACTIVITY, PARTNERS, PIONEERS, PRESS_TEXT_SECTION } from "@/graphql/theme-graphql";
import { GRAPHQL_URL } from "@/lib/graphql";

// Fetch da Seção de Pioneiros - Página Inicial
const fetchPioneers = async () => {
  return await request<PionnersTypes>(GRAPHQL_URL, PIONEERS);
};

// Consulta da Seção de Pioneiros - Página Inicial
export const useQueryPioneers = () => {
  return useSuspenseQuery<PionnersTypes>({
    queryKey: ["pioneers"],
    queryFn: () => fetchPioneers(),
  });
};

// Fetch da Seção Áreas de Atuação - Página Inicial
const fetchFieldsActivityOfProject = async () => {
  return await request<FieldsActivityTypes>(GRAPHQL_URL, FIELDS_ACTIVITY);
};

// Consulta da Seção Áreas de Atuação - Página Inicial
export const useQueryFieldsActivityOfProject = () => {
  return useSuspenseQuery<FieldsActivityTypes>({
    queryKey: ["fields-activity-project"],
    queryFn: () => fetchFieldsActivityOfProject(),
  });
};

// Fetch da Seção Áreas de Atuação - Página Inicial
const fetchPartners = async () => {
  return await request<PartnersTypes>(GRAPHQL_URL, PARTNERS);
};

// Consulta da Seção Áreas de Atuação - Página Inicial
export const useQueryPartners = () => {
  return useSuspenseQuery<PartnersTypes>({
    queryKey: ["partners"],
    queryFn: () => fetchPartners(),
  });
};

// Fetch da Seção de Publicações na Mídia - Página Inicial
const fetchPressReleaseSection = async () => {
  return await request<PressSectionTypes>(GRAPHQL_URL, PRESS_TEXT_SECTION);
};

// Consulta da Seção de Publicações na Mídia - Página Inicial
export const useQueryPressReleaseSection = () => {
  return useSuspenseQuery<PressSectionTypes>({
    queryKey: ["press-release-section"],
    queryFn: () => fetchPressReleaseSection(),
  });
};