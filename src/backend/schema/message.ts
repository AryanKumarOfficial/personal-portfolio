import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
    email: z.string().email({message: "Invalid email address"}),
    message: z.string().min(10).max(5000),
})

export type FormSchema = z.infer<typeof formSchema>;