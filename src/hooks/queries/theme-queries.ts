import { useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import type { FieldsActivityTypes, PionnersTypes,  } from "@/types/theme-types";
import { FIELDS_ACTIVITY, PARTNERS, PIONEERS } from "@/graphql/theme-graphql";
import type { PartnersTypes } from "@/types/theme-types";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

//Fetch da Seção de Pioneiros - Página Inicial
const fetchPioneers = async () => {
  return await request<PionnersTypes>(GRAPHQL_URL, PIONEERS);
};

//Query da Seção de Pioneiros - Página Inicial
export const useQueryPioneers = () => {
  return useSuspenseQuery<PionnersTypes>({
    queryKey: ["pioneers"],
    queryFn: () => fetchPioneers(),
  });
};

//Fetch da Seção Áreas de Atuação - Página Inicial
const fetchFieldsActivityOfProject = async () => {
  return await request<FieldsActivityTypes>(GRAPHQL_URL, FIELDS_ACTIVITY);
};

//Query da Seção Áreas de Atuação - Página Inicial
export const useQueryFieldsActivityOfProject = () => {
  return useSuspenseQuery<FieldsActivityTypes>({
    queryKey: ["fields-activity-project"],
    queryFn: () => fetchFieldsActivityOfProject(),
  });
};

//Fetch da Seção Áreas de Atuação - Layout
const fetchPartners = async () => {
  return await request<PartnersTypes>(GRAPHQL_URL, PARTNERS);
};

//Query da Seção Áreas de Atuação - Layout
export const useQueryPartners = () => {
  return useSuspenseQuery<PartnersTypes>({
    queryKey: ["partners"],
    queryFn: () => fetchPartners(),
  });
};