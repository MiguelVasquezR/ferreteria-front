import z from "zod";

export const SchemaProduct = z.object({
  urlImage: z
    .string()
    .min(1, { message: "La imagen del producto es requerida" }),

  nombre: z
    .string()
    .min(1, { message: "El nombre es obligatorio" })
    .max(50, { message: "El nombre no puede exceder los 50 caracteres" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9#.]+$/, {
      message: "El nombre solo admite . # letras y números",
    }),

  cantidad: z
    .string()
    .min(1, { message: "La cantidad del producto es requerida" })
    .max(4, { message: "Límite de productos alcanzado" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Este campo solo admite números",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "La cantidad debe ser mayor o igual a 1",
    }),

  stockMinimo: z
    .string()
    .min(1, { message: "El stock mínimo del producto es requerido" })
    .max(8, { message: "Límite alcanzado" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9#.]+$/, {
      message: "El campo solo admite . # letras y números",
    }),

  descripcion: z
    .string()
    .min(1, { message: "La descripción es obligatoria" })
    .max(500, { message: "Límite de 500 caracteres alcanzado" }),

  costo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El campo solo admite números",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El costo debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El costo no puede ser mayor a 9999",
    }),

  precioMenudeo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El campo solo admite números",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio a menudeo debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El precio a menudeo no puede ser mayor a 9999",
    }),

  precioMayoreo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El campo solo admite números",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio a mayoreo debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El precio a mayoreo no puede ser mayor a 9999",
    }),
});
