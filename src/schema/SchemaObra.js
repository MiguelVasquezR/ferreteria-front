import { z } from "zod";

export const schemaObra = z.object({
  nombre: z
    .string()
    .min(1, "El nombres es requrido")
    .max(25, "El nombre es muy largo"),
  telefono: z
    .string()
    .min(10, "El telefono es requrido")
    .max(10, "El telefono es muy largo"),
  correo: z
    .string()
    .email("El correo es requerido")
    .max(50, "El correo es muy largo"),
  rfc: z.string().min(13, "El rfc es requrido").max(13, "El rfc es muy largo"),
  descripcion: z
    .string()
    .min(1, "La descripcion es requrida")
    .max(100, "La descripcion es muy larga"),

  calle: z
    .string()
    .min(1, "La calle es requrida")
    .max(50, "La calle es muy larga"),
  numero: z
    .string()
    .min(1, "El numero es requrido")
    .max(7, "El numero es muy largo"),
  colonia: z
    .string()
    .min(1, "La colonia es requrida")
    .max(50, "La colonia es muy larga"),
  ciudad: z
    .string()
    .min(1, "El ciudad es requrido")
    .max(20, "El ciudad es muy largo"),

  calleP: z
    .string()
    .min(1, "La calle es requrida")
    .max(50, "La calle es muy larga"),
  numeroP: z
    .string()
    .min(1, "El numero es requrido")
    .max(7, "El numero es muy largo"),
  coloniaP: z
    .string()
    .min(1, "La colonia es requrida")
    .max(50, "La colonia es muy larga"),
  ciudadP: z
    .string()
    .min(1, "La ciudad es requrido")
    .max(20, "La ciudad es muy largo"),
});
