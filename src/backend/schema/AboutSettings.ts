import {z} from "zod";

export const aboutSettingsSchema = z.object({
    name: z.string().min(1, {message: "Enter a valid Name"}).max(255, {message: "Name is too long"}),
    age: z.number().int().min(1, {message: "Enter a valid Age"}).max(255, {message: "Age is too long"}),
    email: z.string().email({message: "Enter a valid Email"}).max(255, {message: "Email is too long"}),
    address: z.string().min(1, {message: "Enter a valid Address"}).max(255, {message: "Address is too long"}),
    freelanceStatus: z.string().min(1, {message: "Enter a valid Freelance Status"}).max(255, {message: "Freelance Status is too long"}),
    professionalTitle: z.string().min(1, {message: "Enter a valid Professional Title"}).max(255, {message: "Professional Title is too long"}),
    experience: z.number().int().min(1, {message: "Enter a valid Experience"}).max(255, {message: "Experience is too long"}),
    languageSpoken: z.string().min(1, {message: "Enter a valid Language Spoken"}).max(255, {message: "Language Spoken is too long"}),
    projectsCompleted: z.number().int().min(1, {message: "Enter a valid Projects Completed"}).max(255, {message: "Projects Completed is too long"}),

})

export type AboutSettings = z.infer<typeof aboutSettingsSchema>;