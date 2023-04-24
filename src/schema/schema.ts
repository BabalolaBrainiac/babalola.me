import { z } from "zod";

interface Creator {
    name: string,
    email?: string,
    github?: string
}

export const UserSchema = z.object({
    name: z.string().nonempty({
        message: "Name cannot not be empty"
    }).optional(),
    email: z.string().email({
        message: "Enter a valid email"
    }).nonempty({
        message: "Email is a required parameter"
    }).trim(),
    password: z.string().nonempty({
        message: "Name must not be empty"
    })
});

export const PostSchema = z.object({
    title: z.string().nonempty({
        message: "Title cannot not be empty"}),
    content:  z.string().nonempty({
        message: "Post must have a content cannot not be empty"}),
    categories:  z.string().array().nonempty({message: "At least one category is needed"}),
    creators: z.string().array().nonempty({message: "At least one creator is needed"}),
})