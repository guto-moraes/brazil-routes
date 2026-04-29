import * as z from "zod";

//Tipagem da consulta dos pioneiros
export const PioneerSchema = z.object({
  image: z.object({
    node: z.object({
      guid: z.string(),
    }),
  }),
  name: z.string(),
  tribute: z.string(),
});

export type PioneerTypes = z.infer<typeof PioneerSchema>;

export const PioneersSchema = z.object({
  project: z.object({
    theming: z.object({
      firstScreen: z.object({
        title: z.string(),
        description: z.string(),
      }),
      pioneersList: z.array(PioneerSchema),
      lastScreen: z.object({
        title: z.string(),
        textButton: z.string(),
        urlButton: z.string(),
      }),
    }),
  }),
});

export type PionnersTypes = z.infer<typeof PioneersSchema>;

//Tipagem da consulta para área de atuação
export const FieldActivitySchema = z.object({
  fieldActivity: z.string(),
  fieldActivityDescription: z.string(),
  fieldActivityTags: z.string(),
  fieldActivityColor: z.string(),
  fieldActivityRotateFrom: z.number(),
  fielActivityRotateTo: z.number(),
});

export type FieldActivityTypes = z.infer<typeof FieldActivitySchema>;

export const FieldsActivitySchema = z.object({
  project: z.object({
    theming: z.object({
      projectName: z.string(),
      fieldsActivityTitle: z.string(),
      fieldsActivityPresentation: z.string(),
      fieldsActivities: z.array(FieldActivitySchema),
    }),
  }),
});

export type FieldsActivityTypes = z.infer<typeof FieldsActivitySchema>;

export const FieldsActivityCardItemSchema = z.object({
  color: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.string(),
  number: z.number().or(z.string()),
  className: z.string().optional(),
});

export type FieldsActivityCardItem = z.infer<typeof FieldsActivityCardItemSchema>;

//Tipagem da linha de parceiros realizadores do projeto
export const PartnerSchema = z.object({
  image: z.object({
    node: z.object({
      guid: z.string(),
    }),
  }),
  name: z.string(),
  url: z.string(),
});

export type PartnerType = z.infer<typeof PartnerSchema>;

export const PartnersSchema = z.object({
  project: z.object({
    theming: z.object({
      partners: z.array(PartnerSchema),
    }),
  }),
});

export type PartnersTypes = z.infer<typeof PartnersSchema>;
