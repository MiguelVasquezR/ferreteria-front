import { z } from "zod";

export const SchemaProduct = z.object({
  urlImage: z.string({ message: "La imagen del producto es requerida" }),
  nombre: z.string().min(1, "El nombres es requrido"),
  cantidad: z.string().min(1, "La cantidad del producto es requerida"),
  stockMinimo: z.string().min(1, "El stock minimo del producto es requerido"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
  costo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El costo debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El cost debe ser mayor o igual a 1",
    }),
  precioMenudeo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El precio menudeo debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio menudeo debe ser mayor o igual a 1",
    }),
  precioMayoreo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El precio menudeo debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio menudeo debe ser mayor o igual a 1",
    }),
});
