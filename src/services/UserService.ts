import { UserDto } from "@/dto/UserDto.dto";
import prismaClient from "../../prisma/prisma";

export class UserService {
	async createUser(name: string, email: string) {
		try {
			const user = await prismaClient.user.create({
				data: {
					name,
					email,
				}
			});
			console.log(user)
			return user
		} catch (e) {
			return e;
		}
	}
}
