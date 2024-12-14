import {z} from "zod";

export const homeSettingsSchema = z.object({
    title: z.string().min(5, {message: "Title must be at least 5 characters long"}),
    description: z.string().min(10, {message: "Description must be at least 10 characters long"})
})

export type HomeSettings = z.infer<typeof homeSettingsSchema>;