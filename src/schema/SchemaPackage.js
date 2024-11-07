import z from "zod";

export const SchemaPackage = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(30, "El nombre no puede ser mayor a 30 caracteres"),
  precio: z
    .string()
    .min(1, "El precio es obligatorio")
    .max(20, "El nombre no puede ser mayor a 20 caracteres"),
  descripcion: z
    .string()
    .min(1, "La descripcion es obligatoria")
    .max(150, "La descripcion no puede ser mayor a 100 caracteres"),
});

export const SchemaOffer = z.object({
  precio: z
    .string()
    .min(1, "El precio es obligatorio")
    .max(10, "El precio no puede ser mayor a 10 caracteres"),
  fecha: z.string().min(1, "La fecha es obligatoria"),
});
