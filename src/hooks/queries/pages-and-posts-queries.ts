import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { APPOINTMENT, BLOG, GO_FURTHER, PAGE, QUIZ_HOME, SINGLE_BLOG, SOCIAL_IMPACT } from "@/graphql/pages-and-posts-graphql";
import type { AppointmentTypes, BlogItemTypes, BlogTypes, GoFurtherPageTypes, PageTypes, QuizHomeTypes, SocialImpactTypes } from "@/types/page-and-post-types";
import { GRAPHQL_URL } from "@/lib/graphql";

// Fetch de uma única página
const fetchPages = async (slug: string) => {
  return await request<PageTypes>(GRAPHQL_URL, PAGE, {
    slug,
  });
};

// Query de uma única página
export const useQueryPage = (slug: string) => {
  return useSuspenseQuery<PageTypes>({
    queryKey: ["single-page"],
    queryFn: () => fetchPages(slug),
  });
};

// Fetch do blog do conhecimento para todos os resultados
const fetchBlogNews = async (per_page: number, offset: number) => {
  return await request<BlogTypes>(GRAPHQL_URL, BLOG, {
    per_page,
    offset,
  });
};

// Query do blog do conhecimento para todos os resultados
export const useQueryBlogNews = (first: number, offset: number) => {
  return useQuery<BlogTypes>({
    queryKey: ["blog-posts", first, offset],
    queryFn: () => fetchBlogNews(first, offset),
    notifyOnChangeProps: ["data"],
  });
};

// Fetch de uma única notícia do blog
const fetchNews = async (slug: string) => {
  return await request<BlogItemTypes>(GRAPHQL_URL, SINGLE_BLOG, {
    slug,
  });
};

// Query de uma única notícia do blog
export const useQueryNews = (slug: string) => {
  return useQuery<BlogItemTypes>({
    queryKey: ["single-blog-post"],
    queryFn: () => fetchNews(slug),
  });
};

// Fetch do blog do conhecimento para todos os resultados
const fetchAppointment = async (per_page: number, offset: number) => {
  return await request<AppointmentTypes>(GRAPHQL_URL, APPOINTMENT, {
    per_page,
    offset,
  });
};

// Query do blog do conhecimento para todos os resultados
export const useQueryAppointment = (first: number, offset: number) => {
  return useSuspenseQuery<AppointmentTypes>({
    queryKey: ["calendar"],
    queryFn: () => fetchAppointment(first, offset),
  });
};

// Fetch do blog do conhecimento para todos os resultados
const fetchGoFurther = async () => {
  return await request<GoFurtherPageTypes>(GRAPHQL_URL, GO_FURTHER);
};

// Query do blog do conhecimento para todos os resultados
export const useQueryGoFurther = () => {
  return useSuspenseQuery<GoFurtherPageTypes>({
    queryKey: ["go-further"],
    queryFn: () => fetchGoFurther(),
  });
};

// Fetch da Página Inicial do Teste de Conhecimento
const fetchQuizHome = async (slug: string) => {
  return await request<QuizHomeTypes>(GRAPHQL_URL, QUIZ_HOME, {
    slug,
  });
};

// Query do blog do conhecimento para todos os resultados
export const useQueryQuizHome = (slug: string) => {
  return useSuspenseQuery<QuizHomeTypes>({
    queryKey: ["quiz-home"],
    queryFn: () => fetchQuizHome(slug),
  });
};

// Fetch da Página Inicial do Teste de Conhecimento
const fetchSocialImpactPage = async () => {
  return await request<SocialImpactTypes>(GRAPHQL_URL, SOCIAL_IMPACT);
};

// Query do blog do conhecimento para todos os resultados
export const useQuerySocialImpactPage = () => {
  return useSuspenseQuery<SocialImpactTypes>({
    queryKey: ["social-impact-page"],
    queryFn: () => fetchSocialImpactPage(),
  });
};