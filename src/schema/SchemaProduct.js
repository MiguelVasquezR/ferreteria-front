import z from "zod";

export const SchemaProduct = z.object({
  urlImage: z
    .string()
    .min(1, { message: "La imagen del producto es requerida" }),

  nombre: z
    .string()
    .min(1, { message: "El nombre es obligatorio" })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres" }),

  cantidad: z
    .string()
    .min(1, { message: "La cantidad del producto es requerida" })
    .max(4, { message: "Límite de productos alcanzado" }),

  stockMinimo: z
    .string()
    .min(1, { message: "El stock mínimo del producto es requerido" })
    .max(8, { message: "Límite alcanzado" }),

  costo: z
    .string()
    .min(1, { message: "El costo del producto es requerido" })
    .max(8, { message: "Límite alcanzado" }),

  precioMenudeo: z
    .string()
    .min(1, { message: "El precio al menudeo es requerido" })
    .max(8, { message: "Límite alcanzado" }),

  precioMayoreo: z
    .string()
    .min(1, { message: "El precio al mayoreo es requerido" })
    .max(8, { message: "Límite alcanzado" }),
});
