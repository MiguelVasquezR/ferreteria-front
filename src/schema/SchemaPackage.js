import z from "zod";

export const SchemaPackage = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(25, "El nombre es muy largo"),

  precio: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El precio debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El precio no puede ser mayor a 9999",
    }),
  descripcion: z
    .string()
    .min(1, "La descripcion es obligatoria")
    .max(100, "La descripcion no puede ser mayor a 100 caracteres"),
});

export const SchemaOffer = z.object({
  precio: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "El precio debe ser un número válido",
    })
    .refine((value) => parseFloat(value) >= 1, {
      message: "El precio debe ser mayor o igual a 1",
    })
    .refine((value) => parseFloat(value) <= 9999, {
      message: "El precio no puede ser mayor a 9999",
    }),
  fechaFinal: z
    .string()
    .min(1, "La fecha es obligatoria")
    .refine(
      (value) => {
        const inputDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return inputDate >= today;
      },
      {
        message: "La fecha no puede ser anterior a la fecha actual",
      }
    ),
});
