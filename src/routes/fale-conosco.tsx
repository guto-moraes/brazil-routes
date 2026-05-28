import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { useForm } from "@tanstack/react-form";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn, sanitizedData } from "@/lib/utils";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
// import { CheckCheck } from "lucide-react";
// import Alert from "@/components/alert";
import { FormFieldsSchema, type FormSelectType, type FormTypes } from "@/types/page-and-post-types";

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
  { label: "Contato Geral", value: "contato" },
  { label: "Crítica", value: "critica" },
  { label: "Elogio", value: "elogio" },
  { label: "Palestra", value: "palestra" },
  { label: "Sugestão", value: "sugestao" },
];

const ErrorMessage = ({ message }: { message: string }) => (
  <p
    className={cn(
      "rounded-sm border-l-3 border-terracotta-600 bg-terracotta-50",
      "text-xs text-terracotta-950 font-medium py-1.5 px-2.5",
    )}
  >
    {message}
  </p>
);

function ContactUs() {
  const contactForm = useRef<HTMLFormElement | null>(null);

  const { data } = useQueryPage("/fale-conosco");

  const form = useForm({
    validators: { onBlur: FormFieldsSchema },
    defaultValues: {
      subject: "" as FormSelectType,
      fullName: "",
      email: "",
      message: "",
    } as FormTypes,
    onSubmit: async ({ value }) => console.log(value),
  });

  return (
    <Main className="container mx-auto py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 max-md:px-4">
      <Title className="text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700 font-cabinet font-black pb-8 sm:pb-16">
        Fale <span className="text-tan-400">Conosco</span>
      </Title>
      {/* {isSubmitSuccessful && success && (
        <Alert className="py-2 w-full border-transparent bg-darkgreen-500 dark:bg-transparent dark:border-blue-retro-600">
          <CheckCheck className="stroke-white dark:stroke-blue-retron-600" size={32} />{" "}
          <p className="lg:text-lg xl:text-xl text-white font-medium">Mensagem enviada com sucesso!</p>
        </Alert>
      )} */}
      <section className="flex flex-row gap-12 min-h-96 w-full">
        <div className="flex-1 min-h-96 relative rounded-4xl bg-mate-duo-600/25 p-6 overflow-hidden">
          <LogoSvg className="fill-mate-duo-900/7.5 size-72 absolute -bottom-25 -left-25" />
          <h2 className="text-[clamp(1.65rem,5vw,2.25rem)] text-bone-600 font-cabinet font-black tracking-tight">
            Queremos sua participação!
          </h2>
          <div
            className={cn(
              "flex flex-col gap-y-6 [&_p]:text-[clamp(1rem,4vw,1.25rem)] [&_p]:text-bone-700",
              "[&_p]:font-medium [&_p]:text-justify [&_p]:hyphens-auto mt-6 md:mt-12",
            )}
            dangerouslySetInnerHTML={sanitizedData(data.page.content)}
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="flex-1 flex flex-col gap-y-6 max-sm:mb-12"
          ref={contactForm}
        >
          <form.Field 
            name="subject"
          >
            {({ state, handleBlur, handleChange }) => (
              <div className="flex flex-col gap-y-1.5">
                <Label htmlFor="subject" className="text-bone-700">
                  Assunto:
                </Label>
                <Select 
                  items={subjects}
                  aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                  value={state.value} 
                  onValueChange={(value) => handleChange(value as FormSelectType)}
                  defaultValue="Selecione um assunto"
                  required 
                >
                  <SelectTrigger className="h-12! w-full bg-white" onBlur={handleBlur}>
                    <SelectValue placeholder="Selecione um assunto" />
                  </SelectTrigger>
                  <SelectContent title="Selecione um assunto" autoFocus>
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
                {state.meta.errors.length > 0 &&
                  state.meta.isTouched &&
                  state.meta.errors.map((error, index) => <ErrorMessage key={index} message={error!.message} />)}
              </div>
            )}
          </form.Field>
          <form.Field name="fullName">
            {({ state, handleBlur, handleChange }) => (
              <div className="flex flex-col gap-y-1.5">
                <Label htmlFor="fullName" className="text-bone-700">
                  Nome:
                </Label>
                <Input
                  type="text"
                  aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                  value={state.value}
                  onBlur={handleBlur}
                  onChange={(e) => handleChange(e.target.value)}
                  className="bg-white h-12"
                  placeholder="Informe seu nome"
                  required
                />
                {state.meta.errors.length > 0 &&
                  state.meta.isTouched &&
                  state.meta.errors.map((error, index) => <ErrorMessage key={index} message={error!.message} />)}
              </div>
            )}
          </form.Field>
          <form.Field name="email">
            {({ state, handleBlur, handleChange }) => (
              <div className="flex flex-col gap-y-1.5">
                <Label htmlFor="email" className="text-bone-700">
                  E-mail:
                </Label>
                <Input
                  type="email"
                  value={state.value}
                  onBlur={handleBlur}
                  onChange={(e) => handleChange(e.target.value)}
                  className="bg-white h-12"
                  placeholder="Informe seu e-mail"
                  required
                />
                {state.meta.errors.length > 0 &&
                  state.meta.isTouched &&
                  state.meta.errors.map((error, index) => <ErrorMessage key={index} message={error!.message} />)}
              </div>
            )}
          </form.Field>
          <form.Field name="message">
            {({ state, handleBlur, handleChange }) => (
              <div className="flex flex-col gap-y-1.5">
                <Label htmlFor="message" className="text-bone-700">
                  Mensagem:
                </Label>
                <Textarea
                  title="Escreva sua mensagem"
                  aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                  className="bg-white xl:h-32"
                  placeholder="Digite sua mensagem aqui."
                  value={state.value}
                  onBlur={handleBlur}
                  onChange={(e) => handleChange(e.target.value)}
                />
                {state.meta.errors.length > 0 &&
                  state.meta.isTouched &&
                  state.meta.errors.map((error, index) => <ErrorMessage key={index} message={error!.message} />)}
              </div>
            )}
          </form.Field>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={cn(
                  "h-12 uppercase bg-mate-duo-600/60 hover:bg-mate-duo-700/60",
                  "transition-colors duration-500 cursor-pointer disabled:cursor-not-allowed",
                )}
              >
                {isSubmitting ? "Enviando mensagem" : "Enviar Mensagem"}
              </Button>
            )}
          ></form.Subscribe>
        </form>
      </section>
    </Main>
  );
}
