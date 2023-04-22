import { UserDto } from '@/dto/UserDto.dto';
import { UserSchema } from '@/schema/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import {UserService} from './../../../services/UserService'
import createHttpError from "http-errors";

const userService = new UserService()

export async function POST(req: Request, res: NextApiResponse) {

	// const {name, email} =req.body
	// console.log(await req.json())

	if(req.method === "POST") {
		try {

			const body = await req.json()
			const validationResponse = UserSchema.safeParse(body)

			if (!validationResponse.success) {
				const { errors } = validationResponse.error;
				console.error(errors)
				throw new createHttpError.BadRequest(`Validation Error ${errors}!`);
			}

			const {name, email} = validationResponse.data

			console.log(name, email)
			const user = await userService.createUser(name, email)

			// return res.json(user)

		} catch (e) {
			console.log(e)
			return e
		}
	}

	return new Error("Invalid Request Method Call")

}

export async function GET(request: Request, response: Response) {
	// const user = request.body;
	return new Response("User is being fetched");
}
