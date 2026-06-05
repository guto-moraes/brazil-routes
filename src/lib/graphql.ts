if (!import.meta.env.VITE_GRAPHQL_URL) {
  throw new Error("Falta o endereço da GRAPHQL_URL variável de ambiente.");
}

export const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;