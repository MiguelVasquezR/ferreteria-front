import z from "zod";

export const SchemaReportDamage = z.object({
  urlImage: z.string().url("La url de la imagen no es válida"),
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(30, "El nombre es muy largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9.#\s]+$/, "Solo . # letras, números y espacios"),
  descripcion: z
    .string()
    .min(1, "La descripcion es obligatoria")
    .max(10, "La descripcion no puede ser mayor a 100 caracteres"),
});
