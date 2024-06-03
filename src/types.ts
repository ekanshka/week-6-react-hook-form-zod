import zod from "zod";

export const signupSchema = zod
  .object({
    email: zod.string().email(),
    password: zod.string().min(5),
    confirmPassword: zod.string().min(5),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords must match",
    path: ["confirmPassword"],
  });

export type formFields = zod.infer<typeof signupSchema>;
