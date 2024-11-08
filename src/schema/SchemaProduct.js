import { z } from "zod";

export const SchemaProduct = z.object({
  urlImage: z.string({ message: "La imagen del producto es requerida" }),
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(50,"El nombre no puede exceder los 50 caracteres")
    .regex(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/, "El nombre solo debe contener letras y espacios"),
  cantidad: z
    .string()
    .min(1, "La cantidad del producto es requerida")
    .max(4,"Limite de productos alcanzado")
    .regex(/^\d+$/, "El teléfono solo debe contener números"),
  stockMinimo: z
    .string()
    .min(1, "El stock minimo del producto es requerido")
    .max(5, "Limite alcanzado"),
  descripcion: z
    .string()
    .min(1, "La descripción es obligatoria")
    .max(500, "Limite de 500 caracteres alcanzado"),
  costo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El costo debe ser un número válido",
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
      message: "El precio a menudeo debe ser un número válido",
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
      message: "El precio a mayoreo debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio a mayoreo debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El precio a mayoreo no puede ser mayor a 9999",
    }),
});
