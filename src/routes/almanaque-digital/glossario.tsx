import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import Title from "@/components/title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/almanaque-digital/glossario")({
  head: () => ({
    meta: [
      {
        title: "Glossário | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Glossário de termos utilizados no site e no Alamanque Digital",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/alamanaque-digital/glossario",
      },
    ],
  }),
  component: Glossary,
});

const items = [
  {
    value: "item-1",
    trigger: "Acordo de Washington",
    content:
      "Assinado sob forte pressão dos Estados Unidos (EUA), este acordo viabilizou o uso de bases aéreas no Nordeste brasileiro durante da Segunda Guerra e o fornecimento de borracha para aquele país. Em contrapartida, o Brasil receberia financiamento dos EUA para a sua industrialização.",
  },
  {
    value: "item-2",
    trigger: "Beribéri",
    content:
      "É uma doença desencadeada por níveis baixos de tiamina, também conhecida como vitamina B1. O beribéri geralmente é causado por má alimentação ou alcoolismo. Os pacientes podem apresentar sintomas como irritabilidade, perda de apetite e fraqueza, além de distúrbios sensitivos e motores (paralisia dos membros inferiores), circulatórios (formação de edemas, problemas cardíacos) e secretores.",
  },
  {
    value: "item-4",
    trigger: "Democracia Liberal",
    content: "Etnograﬁa é o método utilizado pela Antropologia para recolher dados de pesquisa sobre comunidades humanas. Pressupõe o contato direto entre o antropólogo e o seu objeto de estudo: povos indígenas, grupos urbanos, um clube de mães, um conjunto musical etc. Para elucidar a conclusão ﬁnal das análises, a etnograﬁa procura explicitar os pontos de vista dos dois lados – o do estudioso e o de quem é estudado (Almanque Socioambiental do PIX, 2011, p.307).",
  },
  {
    value: "item-5",
    trigger: "Estudos Etnográficos",
    content: "Um sistema de governo onde existe eleições periódicas em que a população escolhe seus representantes, onde o estado garanta os direitos fundamentais dos indivíduos como de religião, de imprensa, de reunião, etc.",
  },
  {
    value: "item-6",
    trigger: "Estudos Historiográficos",
    content: "Historiograﬁa é um termo com signiﬁcado amplo, mas aqui neste material signiﬁca os trabalhos acadêmicos produzidos por historiadores a partir de pesquisas acadêmicas.",
  },
  {
    value: "item-7",
    trigger: "Fontes Históricas",
    content: "São documentos, registros, vestígios, enﬁm, tudo aquilo que é produzido pelo ser humano em determinado momento histórico e que pode ser utilizado pelo historiador para estudo e análise daquele passado. Podem ser consideradas fontes históricas todos os tipos de documentos escritos, pinturas, músicas, objetos, depoimentos orais etc. que trazem consigo informações sobre que está sendo estudado.",
  },
  {
    value: "item-8",
    trigger: "Hiterland",
    content: "Termo em inglês que pode ser traduzido por interior ou mesmo sertão. Era uma expressão muito utilizada nos jornais da década de 1940 e 1950 para se referir às regiões desconhecidas do Brasil.",
  },
  {
    value: "item-9",
    trigger: "Pioneiros",
    content: "Termo bastante estudado nas ciências humanas em geral. Denomina-se pioneiro, aquele que primeiro chega em determinada localidade, os fundadores que iniciaram o processo de formação de uma vila, cidade ou país.",
  },
  {
    value: "item-10",
    trigger: "Sertanista",
    content: "No início do século XX, a categoria sertanista foi empregada com frequência na imprensa para identiﬁcar homens que percorriam os “sertões” do Brasil. A região denominada Brasil Central era o principal destino deles. Essa categoria não designava nenhum cargo especíﬁco, mas a partir dos anos de 1960, a Funai criou o cargo de sertanista, reunindo os servidores que realizavam atrações de povos indígenas e tinham diversas origens funcionais (FREIRE, 2005, p.28-29).",
  },
  {
    value: "item-11",
    trigger: "Tenentismo",
    content: "Movimento que teve repercussões nacionais e era liderado por jovens oﬁciais do Exército brasileiro descontentes com os rumos políticos do país durante a década de 1920. Entre as principais reivindicações destes militares estavam: a instituição do voto secreto, a reforma do judiciário no sentido de moralização e a introdução de ensino primário obrigatório e patriótico (MAIA, 2012, p. 87)."
  }
];

function Glossary() {
  return (
    <Main className="max-w-5xl mx-auto pb-12 xl:pb-24">
      <Title className="text-[clamp(3rem,4vw,4.5rem)] text-tan-700 font-cabinet font-black">
        Glos<span className="text-tan-300">sário</span>
      </Title>
      <section className="glossary-container">
        <Accordion multiple={false} className="space-y-2 border-0">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="rounded-lg border px-0 not-last:border-b border-tan-100"
            >
              <AccordionTrigger
                className={cn(
                  "bg-tan-100 hover:bg-tan-200 aria-expanded:bg-mate-400/50 rounded-b-none text-xl",
                  "text-tan-700 font-inter font-semibold uppercase tracking-tighter hover:no-underline",
                  "px-4 py-3 items-center transition-colors duration-300 cursor-pointer",
                )}
              >
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="bg-white/55 rounded-b-lg text-base text-justify text-muted-foreground hyphens-auto w-full p-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Main>
  );
}
