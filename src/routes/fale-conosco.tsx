import { createFileRoute } from "@tanstack/react-router";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import LogoSvg from "@/components/logo-svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      {
        title: "Fale Conosco | Projeto Caminhos do Brasil Central",
      },
      {
        name: "description",
        content: "Página de contato com a equipe do Projeto Caminhos do Brasil Central",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://caminhosdobrasilcentral.com/fale-conosco",
      },
    ],
  }),
  component: ContactUs,
});

const subjects = [
  { label: "Selecione um assunto", value: null },
  { label: "Contato Geral", value: "contato" },
  { label: "Crítica", value: "critica" },
  { label: "Elogio", value: "elogio" },
  { label: "Palestra", value: "palestra" },
  { label: "Sugestão", value: "sugestao" },
];

function ContactUs() {
  return (
    <Main className="container mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
      <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black pb-8 sm:pb-16">
        Fale <span className="text-tan-400">Conosco</span>
      </Title>

      <section className="flex flex-col gap-12 min-h-96 w-full">
        <div className="flex-1 min-h-96 relative rounded-4xl bg-mate-duo-600/25 p-6 overflow-hidden">
          <LogoSvg className="fill-mate-duo-900/7.5 size-72 absolute -bottom-25 -left-25" />
          <h2 className="text-[clamp(1.65rem,5vw,2.25rem)] text-bone-600 font-cabinet font-black tracking-tight">Queremos sua participação!</h2>
          <div className={cn(
            "flex flex-col gap-y-6 [&_p]:text-[clamp(1rem,4vw,1.25rem)] [&_p]:text-bone-700",
            "[&_p]:font-medium [&_p]:text-justify [&_p]:hyphens-auto mt-6 md:mt-12"
          )}>
            <p>
              O site do <strong>Projeto Caminhos do Brasil Central</strong> foi desenvolvido com muito empenho e
              dedicação por todos os membros da nossa equipe. Porém, mesmo após termos investido muito muito tempo com o
              objetivo de oferecer a você a melhor experiência de utilização possível, não é improvável que alguns erros
              de digitação tenham permanecido ou, ainda, que alguns dos recursos que disponibilizamos não esteja
              funcionando adequadamente.
            </p>
            <p>
              Por este motivo, a criação deste espaço de interação é muito importante para nós. Assim, caso você tenha
              gostado do nosso trabalho e tem algo a nos dizer (pode ser uma crítica construtiva, alguma sugestão, uma
              correção ou, até mesmo, um elogio), não hesite em nos enviar uma mensagem 😉.
            </p>
          </div>
        </div>
        <form className="flex-1 flex flex-col gap-y-6 max-sm:mb-12">
          <div className="flex flex-col gap-y-1.5">
            <Label htmlFor="subject" className="text-bone-700">
              Assunto:
            </Label>
            <Select items={subjects} name="subject" id="subject" required>
              <SelectTrigger className="h-12! w-full bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Assuntos</SelectLabel>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <Label htmlFor="name" className="text-bone-700">
              Nome:
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Informe seu nome"
              className="bg-white h-12"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <Label htmlFor="email" className="text-bone-700">
              E-mail:
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Informe seu e-mail"
              className="bg-white h-12"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <Label htmlFor="message" className="text-bone-700">
              Mensagem:
            </Label>
            <Textarea
              id="message"
              name="message"
              className="bg-white xl:h-32"
              placeholder="Digite sua mensagem aqui."
            />
          </div>
          <Button
            type="submit"
            className={cn(
              "h-12 uppercase bg-mate-duo-600/60 hover:bg-mate-duo-700/60",
              "transition-colors duration-500 cursor-pointer"
            )}
          >
            Enviar Mensagem
          </Button>
        </form>
      </section>
    </Main>
  );
}
