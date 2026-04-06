import type { MapTypes } from "@/types/data-types";
import chaple from "@/assets/images/expedicao/capela-nossa-senhora-auxiliadora__nova-xavantinawebp.webp"
import river from "@/assets/images/expedicao/chegada-no-rio-das-mortes.webp";
import airport from "@/assets/images/expedicao/aeroporto-de-aragarcas.webp";
import vandique_house from "@/assets/images/expedicao/casa-cel-vandique.webp";

export const map: MapTypes[] = [
    {
        title: "Chegada no Rio das Mortes",
        image: river,
        description: "A Capela de Nossa Senhora Auxiliadora, localizada na Av. Brasil Central – Praça Dom Bosco, em Nova Xavantina-MT, foi tombada (Portaria n. 018/2011, de 12/4/2011) por sua importância cultural.",
        coordinates: [-14.673699501899861, -52.35905366455982],
    },
    {
        title: "Aeroporto de Aragarças - GO",
        image: airport,
        description: "A Capela de Nossa Senhora Auxiliadora, localizada na Av. Brasil Central – Praça Dom Bosco, em Nova Xavantina-MT, foi tombada (Portaria n. 018/2011, de 12/4/2011) por sua importância cultural.",
        coordinates: [-15.901546,-52.2497363],
    },
    {
        title: "Capela de Nossa Senhora Auxiliadora",
        image: chaple,
        description: "A Capela de Nossa Senhora Auxiliadora, localizada na Av. Brasil Central – Praça Dom Bosco, em Nova Xavantina-MT, foi tombada (Portaria n. 018/2011, de 12/4/2011) por sua importância cultural.",
        coordinates: [-14.674048554798382, -52.35308653987381],
    },
    {
        title: "Casa do Cel. Vandique",
        image: vandique_house,
        description: "A Capela de Nossa Senhora Auxiliadora, localizada na Av. Brasil Central – Praça Dom Bosco, em Nova Xavantina-MT, foi tombada (Portaria n. 018/2011, de 12/4/2011) por sua importância cultural.",
        coordinates: [-14.673937350434645, -52.35418373068599],
    }
];