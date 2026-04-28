import { BLOG, SINGLE_BLOG } from "@/graphql/posts-queries";
import type { BlogItemTypes, BlogTypes } from "@/types/post-types";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import request from "graphql-request";

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

//Fetch do blog de notícias para todos os resultados
const fetchBlogNews = async () => {
  return await request<BlogTypes>(GRAPHQL_URL, BLOG);
};

//Query do blog de notícias para todos os resultados
export const useQueryBlogNews = () => {
  return useSuspenseQuery<BlogTypes>({
    queryKey: ["blog-posts"],
    queryFn: () => fetchBlogNews(),
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
