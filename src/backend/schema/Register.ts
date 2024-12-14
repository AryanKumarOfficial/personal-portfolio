import {z} from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    confirmPassword: z.string().min(8, {message: "Password must be at least 8 characters long"})
}).superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["confirmPassword"],
        })
    }
})

export type RegisterInput = z.infer<typeof RegisterSchema>