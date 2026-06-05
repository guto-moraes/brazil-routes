import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useQueryPage } from "@/hooks/queries/pages-and-posts-queries";
import { cn, sanitizedData } from "@/lib/utils";
import { FormFieldsSchema } from "@/types/page-and-post-types";
import Header from "@/layouts/header";
import Main from "@/layouts/main";
import { Title } from "@/components/title";
import LogoSvg from "@/components/logo-svg";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

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
  loader: () => ({
    crumb: "Fale Conosco",
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
      "rounded-sm border-l-3 border-terracotta-600 dark:border-terracotta-500 bg-terracotta-50",
      "dark:bg-terracotta-950 text-xs text-terracotta-950 dark:text-white font-medium py-1.5 px-2.5",
    )}
  >
    {message}
  </p>
);

function ContactUs() {
  const [isSendMail, setIsSendMail] = useState(false);
  const contactForm = useRef<HTMLFormElement | null>(null);
  const { data } = useQueryPage("/fale-conosco");

  useEffect(() => {
    if (isSendMail)
      setTimeout(() => {
        setIsSendMail(false);
      }, 1000);
  });

  const form = useForm({
    validators: { onBlur: FormFieldsSchema },
    defaultValues: {
      subject: "",
      fullName: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });
        // Trigger success toast
        toast.success("Mensagem enviada", {
          description: "Sua mensagem foi enviada com sucesso!",
          className:
            "border-darkgreen-500! bg-darkgreen-400! [&>div>div]:data-[title]:font-bold! text-white! [&>div>div]:text-white! [&_svg]:text-white! [&>*>svg]:text-white!",
        });

        if (!response.ok) {
          // Trigger error toast
          toast.error("Mensagem não enviada", {
            description: "Ocorreu uma falha no envio de sua mensagem.",
            className:
              "border-terracotta-500! bg-terracotta-400! [&>div>div]:data-[title]:font-bold! text-white! [&>div>div]:text-white! [&_svg]:text-white! [&>*>svg]:text-white!",
          });
        }

        form.reset();
      } catch (error) {
        // Trigger error toast
        toast.error("Mensagem não enviada", {
          description:
            error instanceof Error ? error.message : "Ocorreu algum problema durante o envio de sua mensagem.",
          className:
            "border-terracotta-500! bg-terracotta-400! [&>div>div]:data-[title]:font-bold! text-white! [&>div>div]:text-white! [&_svg]:text-white! [&>*>svg]:text-white!",
        });
      }
    },
  });

  return (
    <>
      <Header className="shadow-md" />
      <Main className="flex flex-col items-start py-8 md:py-16">
        <Title
          className={cn(
            "container mx-auto text-[clamp(2.75rem,4vw,4.25rem)] text-tan-700",
            "dark:text-dark-contrast-100 font-cabinet font-black pb-8 sm:pb-16",
          )}
        >
          Fale <span className="text-tan-400 dark:text-dark-contrast-50">Conosco</span>
        </Title>
        <section className="container mx-auto flex flex-col lg:flex-row gap-12 min-h-96 w-full">
          <div className="flex-1 min-h-96 relative rounded-4xl bg-mate-600/25 dark:bg-dark-800 p-6 overflow-hidden">
            <LogoSvg className="fill-mate-900/7.5 size-72 absolute -bottom-25 -left-25" />
            <h2 className="text-[clamp(1.65rem,5vw,2.25rem)] text-bone-600 dark:text-dark-200 font-cabinet font-black tracking-tight">
              Queremos sua participação!
            </h2>
            <div
              className={cn(
                "flex flex-col gap-y-6 [&_p]:text-[clamp(1rem,4vw,1.25rem)] [&_p]:text-bone-700",
                "dark:[&_p]:text-white [&_p]:font-medium [&_p]:text-justify [&_p]:hyphens-auto mt-6 md:mt-12",
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
            <form.Field name="subject">
              {({ state, handleBlur, handleChange }) => (
                <div className="flex flex-col gap-y-1.5">
                  <Label htmlFor="subject" className="text-bone-700 dark:text-dark-300">
                    Assunto:
                  </Label>
                  <Select
                    aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                    value={state.value}
                    onValueChange={(value) => handleChange(value)}
                    defaultValue="Selecione um assunto"
                    required
                  >
                    <SelectTrigger
                      className="h-12! w-full bg-white dark:bg-dark-800 dark:border-dark-400 transition-colors duration-300 cursor-pointer"
                      onBlur={handleBlur}
                    >
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent title="Selecione um assunto" className="dark:border-dark-500" autoFocus>
                      <SelectGroup className="dark:bg-dark-900 border-dark-900">
                        <SelectLabel className="dark:text-dark-300">Assuntos</SelectLabel>
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
                  <Label htmlFor="fullName" className="text-bone-700 dark:text-dark-300">
                    Nome:
                  </Label>
                  <Input
                    type="text"
                    aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                    value={state.value}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-white h-12 dark:bg-dark-800 dark:border-dark-400 transition-colors duration-300 cursor-pointer"
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
                  <Label htmlFor="email" className="text-bone-700 dark:text-dark-300">
                    E-mail:
                  </Label>
                  <Input
                    type="email"
                    value={state.value}
                    onBlur={handleBlur}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-white h-12 dark:bg-dark-800 dark:border-dark-400 transition-colors duration-300 cursor-pointer"
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
                  <Label htmlFor="message" className="text-bone-700 dark:text-dark-300">
                    Mensagem:
                  </Label>
                  <Textarea
                    title="Escreva sua mensagem"
                    aria-invalid={state.meta.errors.length > 0 && state.meta.isTouched}
                    className="bg-white xl:h-32 dark:bg-dark-800 dark:border-dark-400 transition-colors duration-300 cursor-pointer"
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
                    "h-12 uppercase bg-mate-600/60 dark:bg-dark-700 hover:bg-mate-700/60 dark:hover:bg-dark-contrast-100 dark:text-white",
                    "dark:hover:text-dark-contrast-950 transition-colors duration-500 cursor-pointer disabled:cursor-not-allowed",
                  )}
                >
                  {isSubmitting ? "Enviando mensagem" : "Enviar Mensagem"}
                </Button>
              )}
            ></form.Subscribe>
          </form>
        </section>
      </Main>
    </>
  );
}
