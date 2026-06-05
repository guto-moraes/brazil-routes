import request from "graphql-request";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { MenuTypes } from "@/types/menus";
import { MENU } from "@/graphql/menus";
import { GRAPHQL_URL } from "@/lib/graphql";

const fetchMenu = async (name: string) => {
  return await request<MenuTypes>(GRAPHQL_URL, MENU, {
    name,
  });
};

export const useQueryMenu = (name: string) => {
  return useSuspenseQuery<MenuTypes>({
    queryKey: ["menus", name],
    queryFn: () => fetchMenu(name),
    notifyOnChangeProps: ["data"],
    staleTime: 1000 * 60 * 5,
  });
};
