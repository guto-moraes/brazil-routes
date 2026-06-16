import request from "graphql-request";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  GLOSSARY,
  INTERACTIVE_MAP,
  INTERACTIVE_MAP_LOCATION,
  PRESS_RELEASES,
  QUIZ_QUESTIONS,
  TEAM,
  TIMELINE,
} from "@/graphql/custom-types-graphql";
import type {
  GlossaryTypes,
  InteractiveMapLocationTypes,
  InteractiveMapTypes,
  PressReleasesTypes,
  QuizQuestionsTypes,
  TimelineTypes,
} from "@/types/custom-post-types";
import type { TeamTypes } from "@/types/components-types";
import { GRAPHQL_URL } from "@/lib/graphql";

// Fetch do Mapa Interativo para Todos os Resultados
const fetchInteractiveMap = async () => {
  return await request<InteractiveMapTypes>(GRAPHQL_URL, INTERACTIVE_MAP);
};

// Query do Mapa Interativo para Todos os Resultados
export const useQueryInteractiveMap = () => {
  return useSuspenseQuery<InteractiveMapTypes>({
    queryKey: ["interactive-map"],
    queryFn: () => fetchInteractiveMap(),
  });
};

// Fetch do Mapa Interativo para um Resultado
const fetchInteractiveMapLocation = async (id: string) => {
  return await request<InteractiveMapLocationTypes>(GRAPHQL_URL, INTERACTIVE_MAP_LOCATION, {
    id,
  });
};

// Query do Mapa Interativo para um Resultado
export const useQueryInteractiveMapLocation = (id: string) => {
  return useQuery<InteractiveMapLocationTypes>({
    queryKey: ["interactive-map-location", id],
    queryFn: () => fetchInteractiveMapLocation(id),
  });
};

// Fetch do Glossário
const fetchGlossary = async () => {
  return await request<GlossaryTypes>(GRAPHQL_URL, GLOSSARY);
};

// Query do Glossário
export const useQueryGlossary = () => {
  return useSuspenseQuery<GlossaryTypes>({
    queryKey: ["glossary"],
    queryFn: () => fetchGlossary(),
  });
};

// Fetch da Linha do Tempo
const fetchTimeline = async () => {
  return await request<TimelineTypes>(GRAPHQL_URL, TIMELINE);
};

// Query da Linha do Tempo
export const useQueryTimeline = () => {
  return useSuspenseQuery<TimelineTypes>({
    queryKey: ["timeline"],
    queryFn: () => fetchTimeline(),
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch da Equipe do Projeto
const fetchTeam = async () => {
  return await request<TeamTypes>(GRAPHQL_URL, TEAM);
};

// Query da Equipe do Projeto
export const useQueryTeam = () => {
  return useSuspenseQuery<TeamTypes>({
    queryKey: ["team"],
    queryFn: () => fetchTeam(),
    staleTime: 60 * 5 * 1000,
  });
};

// Query das Questões do Teste de Conhecimento
const fecthQuizQuestion = async () => {
  return await request<QuizQuestionsTypes>(GRAPHQL_URL, QUIZ_QUESTIONS);
};

export const useQueryQuestions = () => {
  return useSuspenseQuery<QuizQuestionsTypes>({
    queryKey: ["questions"],
    queryFn: () => fecthQuizQuestion(),
    staleTime: 60 * 5 * 1000,
  });
};

// Query das Questões do Teste de Conhecimento
const fecthPressReleases = async () => {
  return await request<PressReleasesTypes>(GRAPHQL_URL, PRESS_RELEASES);
};

export const useQueryPressReleases = () => {
  return useSuspenseQuery<PressReleasesTypes>({
    queryKey: ["press-releases"],
    queryFn: () => fecthPressReleases(),
    staleTime: 60 * 5 * 1000,
  });
};
