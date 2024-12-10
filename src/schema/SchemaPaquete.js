import { z } from "zod";

export const SchemaPaquete = z.object({
    precio: z
    .string()
    .refine((value) => !isNaN(parseInt(value)), {
      message: "El precio debe ser un número válido",
    })
    .refine((value) => parseInt(value) >= 1, {
      message: "El precio debe ser mayor o igual a 1",
    }),
    descripcion: z.string().min(1, "La descricpcion del paquete es requrida"),
});