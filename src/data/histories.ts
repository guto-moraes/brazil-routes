import type { PeopleHistoryTypes } from "@/types/data-types";
import honorato from "@/assets/images/historias-de-pessoas/honorato-rocha-dos-santos.webp";
import salomao from "@/assets/images/historias-de-pessoas/salomao-gomes-de-souza.webp";
import abraao from "@/assets/images/historias-de-pessoas/abraao-barros-dos-santos.webp";
import adao from "@/assets/images/historias-de-pessoas/adao-de-souza-gomes__esposa.webp";
import jose from "@/assets/images/historias-de-pessoas/jose-batista-porto__familia.webp";
import raimundo from "@/assets/images/historias-de-pessoas/raimundo-pereira-dos-santos__familia.webp";
import pioneiro from "@/assets/images/historias-de-pessoas/pioneiro.webp";

export const peopleHistory: PeopleHistoryTypes[] = [
    {
        name: "Honorato Rocha dos Santos",
        tribute: true,
        image: honorato,
    },
    {
        name: "Salomão Gomes de Souza",
        tribute: true,
        image: salomao,
    },
    {
        name: "Abraão Barros dos Santos",
        tribute: false,
        image: abraao,
    },
    {
        name: "Adão de Souza Gomes",
        tribute: false,
        image: adao,
    },
    {
        name: "José Batista Porto",
        tribute: false,
        image: jose,
    },
    {
        name: "Raimundo Pereira dos Santos",
        tribute: false,
        image: raimundo,
    },
    {
        name: "Pioneiro",
        tribute: false,
        image: pioneiro,
    }
]