import z from "zod";

export const SchemaReportDamage = z.object({
  urlImage: z.string().url("La url de la imagen no es válida"),
  nombre: z
    .string()
    .min(1, "El precio es obligatorio")
    .max(20, "El nombre no puede ser mayor a 20 caracteres"),
  descripcion: z
    .string()
    .min(1, "La descripcion es obligatoria")
    .max(150, "La descripcion no puede ser mayor a 100 caracteres"),
});
