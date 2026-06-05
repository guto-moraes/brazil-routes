import { Resend } from "resend";

if (!import.meta.env.VITE_RESEND_APY_KEY) {
  throw new Error("Falta a RESEND_API_KEY na variável de ambiente.");
}

export const resend = new Resend(import.meta.env.VITE_RESEND_APY_KEY);
