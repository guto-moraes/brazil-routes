import type { MapTypes } from "@/types/data-types";
import chaple from "@/assets/images/expedicao/capela-nossa-senhora-auxiliadora__nova-xavantina.webp"
import river from "@/assets/images/expedicao/chegada-no-rio-das-mortes.webp";
import airport from "@/assets/images/expedicao/aeroporto-de-aragarcas.webp";
import vanique_house from "@/assets/images/expedicao/casa-cel-vanique.webp";
import indianapolis_house from "@/assets/images/expedicao/residencia-indianapolis.webp";

export const map: MapTypes[] = [
    {
        title: "Chegada no Rio das Mortes",
        image: river,
        description: "Às 13h do dia 28/2/1944, após quase 3 meses de marcha, os expedicionários chegam às margens do Rio das Mortes e dão início à construção de uma nova base da FBC. Com a chegada de novos moradores e em virtude do seu crescimento, no dia 3 de março de 1980 aquela localidade se tornou a sede do município de Nova Xavantina - MT.",
        coordinates: [-14.673699501899861, -52.35905366455982],
        imageCopy: "Museu da Fotografia Documental (2026).",
    },
    {
        title: "Aeroporto de Aragarças - GO",
        image: airport,
        description: "Aragarças, em Goiás, foi o nome dado pelo ministro João Alberto a localidade que se tornou a principal base da Fundação Brasil Central. Nos primeiros anos da fundação ali foi construído um aeroporto que, ainda hoje, encontra-se em operação. Muito embora a estrutura antigas das instalações estejam descuidadas e deterioradas.",
        coordinates: [-15.901546,-52.2497363],
        imageCopy: "Arquivo Nacional (2026).",
    },
    {
        title: "Capela de Nossa Senhora Auxiliadora",
        image: chaple,
        description: "A Capela de Nossa Senhora Auxiliadora, atualmente está localizada na Av. Brasil Central, Praça Dom Bosco, em Nova Xavantina - MT. Em 12/4/2011, a Secretaria de Estado da Cultura do Mato Grosso publicou a Portaria de n. 018 que instituiu o seu tombamento como patrimônio cultural do estado.",
        coordinates: [-14.674048554798382, -52.35308653987381],
        imageCopy: "Família Roxo Motta (2026).",
    },
    {
        title: "Casa do Cel. Vanique",
        image: vanique_house,
        description: "O Cel. Flaviano de Mattos Vanique foi o chefe da Expedição Roncador-Xingu (1943) e, posteriormente, mudou-se para a margem direita do Rio das Mortes. A sua casa (foto acima) foi a primeira edificação permanente do atual município de Nova Xavantina - MT.",
        coordinates: [-14.673937350434645, -52.35418373068599],
        imageCopy: "NX1 (2026).",
    },
    {
        title: "Residência em Indianápolis",
        image: indianapolis_house,
        description: "Os integrantes da expedição alcançaram às margens do Rio Pindaíba em dezembro de 1943, próximo do atual distrito de Indianápolis. Na imagem acima, foto de uma residência construída pela FBC naquela localidade.",
        coordinates: [-15.035468970572468, -52.23704406838575],
        imageCopy: "Luiz Gabriel de Souza Nogueira (2025).",
    }
];