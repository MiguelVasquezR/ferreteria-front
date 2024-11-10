import { z } from "zod";

export const SchemaProduct = z.object({
  urlImage: z.string({ message: "La imagen del producto es requerida" }),
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(50,"El nombre no puede exceder los 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9#.]+$/, "El nombre solo admite .  #  letras y números"),  
  cantidad: z
    .string()
    .min(1, "La cantidad del producto es requerida")
    .max(4,"Limite de productos alcanzado")
    .refine((value) => parseFloat(value) >= 1, {
      message: "La cantidad debe ser mayor o igual a 1",
    })
    .regex(/^\d+$/, "Este campo solo admite números"),
  stockMinimo: z
    .string()
    .min(1, "El stock minimo del producto es requerido")
    .max(8, "Limite alcanzado")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9#.]+$/, "El campo solo admite .  #  letras y números"),  
  descripcion: z
    .string() 
    .min(1, "La descripción es obligatoria")
    .max(500, "Limite de 500 caracteres alcanzado"),
  costo: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El campo solo admite numeros",
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
