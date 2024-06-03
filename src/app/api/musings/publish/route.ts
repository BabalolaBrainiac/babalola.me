import { UserDto } from '@/dto/UserDto.dto';
import {PostSchema, UserSchema } from '@/schema/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import createHttpError from "http-errors";
import { MusingService } from '@/services/MusingService';
import { Post } from '@/types/types';
import { NextRequest, NextResponse } from 'next/server';

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
        const post = await musingService.createAndPublishPost(postData)
        const postjson = JSON.stringify(post)
        return new Response(postjson)

    } catch (e) {
        console.log(e)
        return e
    }
}

export default async function GET(req: NextRequest, res: NextResponse) {

    try {
        const [posts]: any = await musingService.getPublished()
        console.log(posts)

        const usersjson = JSON.stringify(posts)
        return new Response(usersjson)

    } catch (e) {
        console.log(e)
        throw e
    }

}
