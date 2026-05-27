import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { BLOG, CALENDAR, CHAPTER_PAGE, GO_FURTHER, PAGE, QUIZ_HOME, SINGLE_BLOG } from "@/graphql/pages-and-posts-graphql";
import type { BlogItemTypes, BlogTypes, CalendarTypes, ChapterPageTypes, GoFurtherPageTypes, PageTypes, QuizHomeTypes } from "@/types/page-and-post-types";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

//Fetch de uma única página
const fetchPages = async (slug: string) => {
  return await request<PageTypes>(GRAPHQL_URL, PAGE, {
    slug,
  });
};

//Query de uma única página
export const useQueryPage = (slug: string) => {
  return useSuspenseQuery<PageTypes>({
    queryKey: ["single-page"],
    queryFn: () => fetchPages(slug),
  });
};

//Fetch de uma única página
const fetchChapterPage = async (slug: string) => {
  return await request<ChapterPageTypes>(GRAPHQL_URL, CHAPTER_PAGE, {
    slug,
  });
};

//Query de uma única página
export const useQueryChapterPage = (slug: string) => {
  return useSuspenseQuery<ChapterPageTypes>({
    queryKey: ["chapter-page"],
    queryFn: () => fetchChapterPage(slug),
    refetchInterval: 500,
  });
};

//Fetch do blog do conhecimento para todos os resultados
const fetchBlogNews = async (per_page: number, offset: number) => {
  return await request<BlogTypes>(GRAPHQL_URL, BLOG, {
    per_page,
    offset,
  });
};

//Query do blog do conhecimento para todos os resultados
export const useQueryBlogNews = (first: number, offset: number) => {
  return useQuery<BlogTypes>({
    queryKey: ["blog-posts"],
    queryFn: () => fetchBlogNews(first, offset),
  });
};

//Fetch de uma única notícia do blog
const fetchNews = async (slug: string) => {
  return await request<BlogItemTypes>(GRAPHQL_URL, SINGLE_BLOG, {
    slug,
  });
};

//Query de uma única notícia do blog
export const useQueryNews = (slug: string) => {
  return useQuery<BlogItemTypes>({
    queryKey: ["single-blog-post"],
    queryFn: () => fetchNews(slug),
  });
};

//Fetch do blog do conhecimento para todos os resultados
const fetchCalendar = async (per_page: number, offset: number) => {
  return await request<CalendarTypes>(GRAPHQL_URL, CALENDAR, {
    per_page,
    offset,
  });
};

//Query do blog do conhecimento para todos os resultados
export const useQueryCalendar = (first: number, offset: number) => {
  return useSuspenseQuery<CalendarTypes>({
    queryKey: ["calendar"],
    queryFn: () => fetchCalendar(first, offset),
  });
};

//Fetch do blog do conhecimento para todos os resultados
const fetchGoFurther = async () => {
  return await request<GoFurtherPageTypes>(GRAPHQL_URL, GO_FURTHER);
};

//Query do blog do conhecimento para todos os resultados
export const useQueryGoFurther = () => {
  return useSuspenseQuery<GoFurtherPageTypes>({
    queryKey: ["go-further"],
    queryFn: () => fetchGoFurther(),
  });
};

//Fetch da Página Inicial do Teste de Conhecimento
const fetchQuizHome = async (slug: string) => {
  return await request<QuizHomeTypes>(GRAPHQL_URL, QUIZ_HOME, {
    slug,
  });
};

//Query do blog do conhecimento para todos os resultados
export const useQueryQuizHome = (slug: string) => {
  return useSuspenseQuery<QuizHomeTypes>({
    queryKey: ["quiz-home"],
    queryFn: () => fetchQuizHome(slug),
  });
};