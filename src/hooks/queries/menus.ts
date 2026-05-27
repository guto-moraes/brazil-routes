import request from "graphql-request"
import { useSuspenseQuery } from "@tanstack/react-query";
import type { AlmanaqueMenuTypes } from "@/types/menus";
import { ALMANAQUE_MENU } from "@/graphql/menus";


const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

const fetchAlmanaqueMenu = async () => {
    return await request<AlmanaqueMenuTypes>(GRAPHQL_URL, ALMANAQUE_MENU)
}

export const useQueryAlmanqueMenu = () => {
    return useSuspenseQuery<AlmanaqueMenuTypes>({
        queryKey: ["almanaque-menu"],
        queryFn: () => fetchAlmanaqueMenu(),
    })
}