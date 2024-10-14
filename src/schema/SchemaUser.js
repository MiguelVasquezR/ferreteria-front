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
  user: z.string().min(1, "El usuario es requerido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});
