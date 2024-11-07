import { z } from "zod";

export const Passwords = z
  .object({
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: z
      .string()
      .min(8, "La confirmación debe tener al menos 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export const UserLogin = z.object({
  usuario: z.string().min(1, "El usuario es requerido"),
  contrasena: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export const User = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es requerido")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  telefono: z
    .string()
    .min(1, "El teléfono es requerido")
    .max(10, "El teléfono no puede tener más de 50 caracteres"),
  correo: z
    .string()
    .min(1, "El correo es requerido")
    .max(50, "El correo no puede tener más de 50 caracteres"),
  rfc: z
    .string()
    .min(13, "El rfc es requerido")
    .max(13, "El rfc no puede tener más de 50 caracteres"),
  calle: z
    .string()
    .min(1, "El calle es requerido")
    .max(50, "La calle no puede tener más de 50 caracteres"),
  numero: z
    .string()
    .min(1, "El número es requerido")
    .max(5, "El número no puede tener más de 50 caracteres"),
  colonia: z
    .string()
    .min(1, "El colonia es requerido")
    .max(50, "La colonia no puede tener más de 50 caracteres"),
  ciudad: z
    .string()
    .min(1, "El ciudad es requerido")
    .max(50, "La ciudad no puede tener más de 50 caracteres"),
  sueldo: z
    .string()
    .min(1, "El sueldo es requerido")
    .max(10, "El número no puede superar 10 digitos"),
});
