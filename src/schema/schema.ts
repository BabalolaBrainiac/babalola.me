import { z } from "zod";

export const UserSchema = z.object({
    name: z.string().nonempty({
        message: "Name must not be empty"
    }),
    email: z.string().email({
        message: "Enter a valid email"
    }).nonempty({
        message: "Email is a required parameter"
    }).trim(),
});