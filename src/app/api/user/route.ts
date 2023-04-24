import { UserDto } from '@/dto/UserDto.dto';
import { UserSchema } from '@/schema/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import {UserService} from './../../../services/UserService'
import createHttpError from "http-errors";

const userService = new UserService()

export async function POST(req: Request, res: NextApiResponse) {

		try {

			const body = await req.json()
			console.log(body)
			const validationResponse = UserSchema.safeParse(body)

			if (!validationResponse.success) {
				const { errors } = validationResponse.error;
				console.error(errors)
				throw new createHttpError.BadRequest(`Validation Error ${errors}!`);
			}

			const {name, email, password} = validationResponse.data

			console.log(name, email, password)
			const user = await userService.createUser(name!, email, password)

			const userjson = JSON.stringify(user)
			return new Response(userjson)

		} catch (e) {
			console.log(e)
			return e
		}
}
export async function GET(req: NextApiRequest, res: NextApiResponse) {

		try {
			const [users]: any = await userService.returnAllUsers()
			console.log(users)

			const usersjson = JSON.stringify(users)
			return new Response(usersjson)

		} catch (e) {
			console.log(e)
			throw e
		}

}
