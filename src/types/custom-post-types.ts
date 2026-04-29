import { Icon, type LatLngTuple } from "leaflet";
import * as z from "zod";

//Tipagem da consulta de localidades do mapa interativo
export const LocationSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  featuredImage: z.object({
    node: z.object({
      guid: z.string(),
    }),
  }),
  places: z.object({
    coordinates: z.string(),
    description: z.string(),
    featuredImageCopy: z.string(),
  }),
});

export type LocationTypes = z.infer<typeof LocationSchema>;

export const InteractiveMapSchema = z.object({
  locations: z.object({
    nodes: z.array(LocationSchema),
  }),
});

export type InteractiveMapTypes = z.infer<typeof InteractiveMapSchema>;

//Tipagem da consulta de informações de uma localidade no mapa interativo
export const InterctiveMapLocationSchema = z.object({
  location: z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
  }),
});

export type InteractiveMapLocationTypes = z.infer<typeof InterctiveMapLocationSchema>;

//Tipagem dos marcadores do mapa
export const MarkersSchema = z.object({
  locations: z.array(LocationSchema),
  show: z.boolean(),
  setShow: z.function({
    output: z.void(),
  }),
  icon: z.instanceof(Icon),
  setId: z.function({
    input: [z.string()],
    output: z.void(),
  }),
});

export type MarkersTypes = z.infer<typeof MarkersSchema>;

export type MarkersMapTypes = MarkersTypes & { setLocation: React.Dispatch<React.SetStateAction<LatLngTuple>> };

//Tipagem dos termos do Glossário
export const GlossaryTermSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

export type GlossaryTermTypes = z.infer<typeof GlossaryTermSchema>

export const GlossarySchema = z.object({
  glossarios: z.object({
    nodes: z.array(GlossaryTermSchema),
  }),
});

export type GlossaryTypes = z.infer<typeof GlossarySchema>;
