import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("invalid Email"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type Contact = z.infer<typeof contactSchema>;
