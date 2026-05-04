"use client";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/testando")({
  component: Testing,
});

function Testing() {
  return <h1>Olá!</h1>;
}
