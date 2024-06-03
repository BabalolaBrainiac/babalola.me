import {NextRequest, NextResponse } from "next/server";
import { UserSchema } from "../../../../schema/schema";
import { UserService } from "../../../../services/UserService";
import createHttpError from "http-errors";
import { NextApiResponse } from "next";


const userService = new UserService()

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const body = await req.json()
        const validationResponse = UserSchema.safeParse(body)

        if (!validationResponse.success) {
            const { errors } = validationResponse.error;
            console.error(errors)
            throw new createHttpError.BadRequest(`Validation Error ${errors}!`);
        }

        const {email, password} = validationResponse.data

        const user: any = await userService.validateUser(email, password)
        console.log(user)

        const userjson = JSON.stringify(user)
        return new Response(userjson)

    } catch (e) {
        console.log(e)
        throw e
    }

}