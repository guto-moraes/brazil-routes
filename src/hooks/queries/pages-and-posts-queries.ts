import { BLOG, CALENDAR, PAGE, SINGLE_BLOG } from "@/graphql/pages-and-posts-graphql";
import type { BlogItemTypes, BlogTypes, CalendarTypes, PageTypes } from "@/types/page-and-post-types";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";

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
