import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import type { ChaptersAlmanaqueTypes, FieldsActivityTypes,  } from "@/types/theme-graphql";
import { CHAPTERS_ALMANAQUE, FIELDS_ACTIVITY } from "@/graphql/theme_settings";

const GRAPHQL_URL = "http://caminhos-do-brasil-central.local/graphql";

const fetchFieldsActivityOfProject = async () => {
  return await request<FieldsActivityTypes>(GRAPHQL_URL, FIELDS_ACTIVITY);
};

export const useQueryFieldsActivityOfProject = () => {
  return useQuery<FieldsActivityTypes>({
    queryKey: ["fields-activity-project"],
    queryFn: () => fetchFieldsActivityOfProject(),
  });
};

const fetchChaptersAlmanaqueHomePresentation = async () => {
  return await request<ChaptersAlmanaqueTypes>(GRAPHQL_URL, CHAPTERS_ALMANAQUE);
};

export const useQueryChaptersAlmanaqueHomePresentation = () => {
  return useQuery<ChaptersAlmanaqueTypes>({
    queryKey: ["chapters-almanaque-home"],
    queryFn: () => fetchChaptersAlmanaqueHomePresentation(),
  });
};