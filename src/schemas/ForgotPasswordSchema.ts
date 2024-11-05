import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }).min(1, { message: "Email is required" }),
});