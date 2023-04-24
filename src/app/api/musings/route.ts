

import { UserDto } from '@/dto/UserDto.dto';
import {PostSchema, UserSchema } from '@/schema/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import {UserService} from './../../../services/UserService'
import createHttpError from "http-errors";
import { MusingService } from '@/services/MusingService';
import { Post } from '@/types/types';

const musingService = new MusingService()

export async function POST(req: Request, res: NextApiResponse) {

    try {

        const body = await req.json()
        console.log(body)
        const validationResponse = PostSchema.safeParse(body)

        if (!validationResponse.success) {
            const { errors } = validationResponse.error;
            console.error(errors)
            throw new createHttpError.BadRequest(`Validation Error ${errors}!`);
        }

        const postData: Post = {
            title: validationResponse.data.title,
            content: validationResponse.data.content,
            creators: validationResponse.data.creators,
            categories: validationResponse.data.categories,
        }

        console.log(postData)
        const user = await musingService.createPost(postData)

        const userjson = JSON.stringify(user)
        return new Response(userjson)

    } catch (e) {
        console.log(e)
        return e
    }
}
export async function GET(req: NextApiRequest, res: NextApiResponse) {

    try {
        const [posts]: any = await musingService.getAllPosts()
        console.log(posts)

        const usersjson = JSON.stringify(posts)
        return new Response(usersjson)

    } catch (e) {
        console.log(e)
        throw e
    }

}
