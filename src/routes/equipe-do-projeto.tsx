import { createFileRoute } from "@tanstack/react-router";
import { ScrollRotateContent, ScrollRotateSection, ScrollRotateWrapper } from "@/components/section-scroll-rotate";
import ArticleContent from "@/components/article-content";
import luiz from "@/assets/images/team/luiz-gabriel.webp";
import fernanda from "@/assets/images/team/fernanda-alencar.webp";
import alex from "@/assets/images/team/alex.jpeg";
import guto from "@/assets/images/team/guto-moraes.webp";
import { Mail } from "lucide-react";
import Instagram from "@/components/instagram";
import ArticleChapterContent from "@/components/article-chapter-content";

export const Route = createFileRoute("/equipe-do-projeto")({
  head: () => ({
    meta: [
      {
        title: "Equipe do Projeto | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content:
          "Equipe multidisciplinar que atuou no desenvolvimento e na execução do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/equipe-do-projeto",
      },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <>
        <div className="grid grid-cols-2 gap-16">
                <div className="w-full h-full px-4 py-16">
                  <h1 className="text-[clamp(3rem,4vw,4.5rem)] text-tan-800 font-cabinet font-black">
                    Equipe <span className="text-tan-500">do Projeto</span>
                  </h1>
                  <ArticleChapterContent
                    className="mt-16"
                    content={`
                      <p>Nenhum projeto é realizado sozinho. Mesmo quando formal e diretamente não há outras pessoas desenvolvendo ações em prol de um projeto, é certo que haverá um número de pessoas, maior ou menor, que indiretamente viabilização a execução e o alcance dos objetivos. Este é um fato inescapável!</p>
                      <p>No caso do <strong>Projeto Caminhos do Brasil Central</strong>, além das pessoas que indiretamente contribuem para a sua realização, há um grupo que atua diretamente: na sua representação formal, ou seja, a pessoa que é a "cara" do projeto, que é o elo entre a teoria e a prática; na sua organização administrativa, afinal, gerenciar e prestar contas dos recursos recebidos requer altíssima atenção e dedicação. Também há quem tem por ofício fazer com que mais pessoas tenham conhecimento desse projeto e possam ser alcançados por eles: o especialista em mídias sociais e o responsável pelo desenvolvimento deste site, por exemplo.</p>
                    `}
                    />
                </div>

          <div className="w-full">
                    <ScrollRotateWrapper>
            <ScrollRotateSection className="w-full">
              <ScrollRotateContent className="bg-tan-200">
                <div className="max-w-6xl mx-auto h-full py-24 flex flex-col gap-y-12">
                  <h2 className="text-[clamp(2rem,4vw,4rem)] text-tan-800 font-cabinet font-black">
                    Luiz Gabriel <span className="text-tan-500">de Souza Nogueira</span>
                  </h2>
                  <div className="h-full xl:h-120 w-full flex gap-8">
                    <figure className="flex-1 h-full w-full rounded-2xl outline-2 outline-dashed outline-offset-4 outline-tan-600">
                      <img className="rounded-2xl h-full w-full object-cover origin-top-left" src={luiz} alt="" />
                    </figure>
                    <div className="flex-2 flex flex-col justify-between items-start">
                      <div className="h-max w-full flex flex-col gap-y-3.5">
                        <h3 className="text-2xl text-tan-900 font-bold uppercase tracking-tight">Líder do Projeto</h3>
                        <ArticleContent
                          className="flex-2 [&_p]:text-tan-800"
                          content={`
                      <p>Possui graduação em História pela Universidade Federal de Mato Grosso do Sul (UFMS/2014), mestrado em História pela Universidade Federal da Grande Dourados (UFGD/2017) e Bacharelado em Teologia pela Unigran (2024). Pesquisa e tem interesse pelos seguintes temas: Brasil Império, História da Província de Mato Grosso, Registros Paroquiais e História Social. Foi professor na Secretaria de Estado de Educação entre 2018 e 2023. Atualmente é professor no Instituto Federal de Mato Grosso (IFMT), campus Juína.</p>
                      <p>Luiz Gabriel também é autor do livro Uma freguesia ao sul de Mato Grosso: famílias, ilegitimidade e compadrio em Santa Rita de Nioac (1877-1892) e do almanaque digital Desbravando o sertão, conquistando o Brasil: a expedição Roncador-Xingu e a Fundação Brasil Central em Mato Grosso (1943-1967).</p>
                      `}
                        />
                      </div>
                      <div role="list" className="flex justify-start items-center gap-8">
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-2 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Mail /> <span>lorem@loremipsum.com</span>
                          </a>
                        </div>
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-1 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Instagram className="size-6" />
                            <span>@loremipsum</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRotateContent>
            </ScrollRotateSection>

            <ScrollRotateSection>
              <ScrollRotateContent className="bg-[#f0ead2]">
                <div className="max-w-6xl mx-auto h-full py-24 flex flex-col gap-y-12">
                  <h2 className="text-[clamp(2rem,4vw,4rem)] text-[#333d29] font-cabinet font-black">
                    Fernanda Alencar <span className="text-[#333d29]/40">de Souza Ribeiro</span>
                  </h2>
                  <div className="h-full xl:h-120 w-full flex gap-8">
                    <figure className="flex-1 h-full w-full rounded-2xl outline-2 outline-dashed outline-offset-4 outline-[#333d29]">
                      <img className="rounded-2xl h-full w-full object-cover origin-top-left" src={fernanda} alt="" />
                    </figure>
                    <div className="flex-2 flex flex-col justify-between items-start">
                      <div className="h-max w-full flex flex-col gap-y-3.5">
                        <h3 className="text-2xl text-[#333d29] font-bold uppercase tracking-tight">Contabilidade</h3>
                        <ArticleContent
                          className="flex-2 [&_p]:text-[#333d29]"
                          content={`
                      <p>Possui graduação em Ciências Contábeis (2015) e especialização em Gestão Pública pela Universidade Federal de Mato Grosso UFMT (2016). Atualmente, exerce o cargo de técnico administrativo na Universidade Federal de Mato Grosso, atuando em atividades relacionadas à administração pública.</p>
                      `}
                        />
                      </div>
                      <div role="list" className="flex justify-start items-center gap-8">
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-2 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Mail /> <span>lorem@loremipsum.com</span>
                          </a>
                        </div>
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-1 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Instagram className="size-6" />
                            <span>@loremipsum</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRotateContent>
            </ScrollRotateSection>

            <ScrollRotateSection>
              <ScrollRotateContent className="bg-[#cdcdb4]">
                <div className="max-w-6xl mx-auto h-full py-24 flex flex-col gap-y-12">
                  <h2 className="text-[clamp(2rem,4vw,4rem)] text-[#575449] font-cabinet font-black">
                    Alex Catane <span className="text-[#575449]/60">da Hora Santos</span>
                  </h2>
                  <div className="h-full xl:h-120 w-full flex gap-8">
                    <figure className="flex-1 h-full w-full rounded-2xl outline-2 outline-dashed outline-offset-4 outline-[#575449]">
                      <img className="rounded-2xl h-full w-full object-cover origin-top-left" src={alex} alt="" />
                    </figure>
                    <div className="flex-2 flex flex-col justify-between items-start">
                      <div className="h-max w-full flex flex-col gap-y-3.5">
                        <h3 className="text-2xl text-[#575449] font-bold uppercase tracking-tight">Mídias Sociais</h3>
                        <ArticleContent
                          className="flex-2 [&_p]:text-[#575449]"
                          content={`
                      <p>Bahcarel em Teologia (FTBSM) e graduando em Psicologia pela UniMT Faculdades Integradas, Água Boa - MT.</p>
                      <p>É pastor batista na cidade de Ribeirão Cascalheiras, Mato Grosso, cidade que em 2019 lhe conferiu o título de cidadão cascalheirense.</p>
                      `}
                        />
                      </div>

                      <div role="list" className="flex justify-start items-center gap-8">
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-2 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Mail /> <span>lorem@loremipsum.com</span>
                          </a>
                        </div>
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-1 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Instagram className="size-6" />
                            <span>@loremipsum</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRotateContent>
            </ScrollRotateSection>

            <ScrollRotateSection>
              <ScrollRotateContent className="bg-tan-300">
                <div className="max-w-6xl mx-auto h-full py-24 flex flex-col gap-y-12">
                  <h2 className="text-[clamp(2rem,4vw,4rem)] text-tan-800 font-cabinet font-black">
                    José Augusto <span className="text-tan-500">dos Santos Moraes</span>
                  </h2>
                  <div className="h-full xl:h-120 w-full flex gap-8">
                    <figure className="flex-1 h-full w-full rounded-2xl outline-2 outline-dashed outline-offset-4 outline-tan-600">
                      <img className="rounded-2xl h-full w-full object-cover origin-top-left" src={guto} alt="" />
                    </figure>
                    <div className="flex-2 flex flex-col justify-between items-start">
                      <div className="h-max w-full flex flex-col gap-y-3.5">
                        <h3 className="text-2xl text-tan-800 font-bold uppercase tracking-tight">
                          Desenvolvimento do site
                        </h3>
                        <ArticleContent
                          className="[&_p]:text-tan-800"
                          content={`
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium sunt et fugiat magnam adipisci doloremque, dolorum quisquam voluptates voluptas temporibus inventore officiis doloribus cumque, enim dolores libero numquam reiciendis!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laudantium sunt et fugiat magnam adipisci doloremque, dolorum quisquam voluptates voluptas temporibus inventore officiis doloribus cumque, enim dolores libero numquam reiciendis!</p>
                        `}
                        />
                      </div>

                      <div role="list" className="flex justify-start items-center gap-8">
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-2 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Mail /> <span>lorem@loremipsum.com</span>
                          </a>
                        </div>
                        <div role="listitem">
                          <a
                            href="/"
                            title=""
                            className="flex gap-1 text-tan-600 hover:text-tan-500 transition-colors duration-300"
                          >
                            <Instagram className="size-6" />
                            <span>@loremipsum</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollRotateContent>
            </ScrollRotateSection>
      </ScrollRotateWrapper>
          </div>
        </div>

    </>
  );
}
