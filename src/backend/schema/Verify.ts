import {z} from "zod";

export const verify = z.object({
    email: z.string().email({message: "Invalid email"}),
    token: z.string({message: "Invalid token"}).min(1, {message: "Invalid token"}),
});

export type Verify = z.infer<typeof verify>;