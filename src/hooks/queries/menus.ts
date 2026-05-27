import request from "graphql-request"
import { useSuspenseQuery } from "@tanstack/react-query";
import type { MenuTypes } from "@/types/menus";
import { MENU } from "@/graphql/menus";


const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

const fetchMenu = async (name: string) => {
    return await request<MenuTypes>(GRAPHQL_URL, MENU, {
        name
    })
}

export const useQueryMenu = (name: string) => {
    return useSuspenseQuery<MenuTypes>({
        queryKey: ["menus", name],
        queryFn: () => fetchMenu(name),
    })
}