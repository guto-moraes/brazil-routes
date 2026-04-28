export const dateFormat = (str: string) => {
  const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(str));
  return date;
};
