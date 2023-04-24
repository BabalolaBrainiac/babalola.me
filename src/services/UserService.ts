import { UserDto } from "@/dto/UserDto.dto";
import createHttpError from "http-errors";
import prismaClient from "../../prisma/prisma";

export class UserService {
	async createUser(name: string, email: string, password: string) {
		try {
			const user = await prismaClient.user.create({
				data: {
					name,
					email,
					password
				}
			});
			console.log(user)
			return user
		} catch (e) {
			return e;
		}
	}

	async returnAllUsers() {
		try {
			return await prismaClient.user.findMany()
		} catch (e) {
			return e
		}
	}

	async validateUser(email: string, password: string) {

		console.log(email, password)
		try {
		const user: any = await prismaClient.user.findUnique({
			where: {
				email
			}
		})
			console.log(user)
			if(!user) {
				console.log("user not found")
				throw new createHttpError.NotFound(`User with ${email} Not Found!`);
			}

			return user.password === password ? user: "Invalid Password"

		} catch (e) {
			return e
		}

	}
}
