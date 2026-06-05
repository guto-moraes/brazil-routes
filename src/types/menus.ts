import * as z from "zod";

/**
* Tipagem do Menu dos Capítulos do Almanaque
*/
export const MenuSchema = z.object({
  menu: z.object({
    menuItems: z.object({
      nodes: z.array(
        z.object({
          label: z.string(),
          uri: z.string(),
        }),
      ),
    }),
  }),
});

export type MenuTypes = z.infer<typeof MenuSchema>;
