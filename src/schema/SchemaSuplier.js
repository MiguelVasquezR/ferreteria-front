import z from "zod";

export const SchemeSuplier = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  telefono: z
    .string()
    .min(1, "Debes ingresar el teléfono de contacto")
    .length(10, "El teléfono debe tener al menos 10 caracteres"),
  correo: z
    .string()
    .min(1, "Debes de ingresar un correo")
    .email("El correo no es válido"),
  rfc: z.string().length(13, "El RFC debe tener 13 caracteres"),
  calle: z.string().min(1, "La calle debe tener al es obligatorio"),
  colonia: z.string().min(1, "La colonia debe tener al es obligatorio"),
  numero: z.string().min(1, "El número debe tener al es obligatorio").max(7, "El número no puede ser mayor a 7 caracteres"),
  ciudad: z.string().min(1, "La ciudad debe tener al es obligatorio"),
});
