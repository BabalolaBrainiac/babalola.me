// import {Musings, Project } from "@prisma/client";
// import {
// 	IsDate,
// 	IsEmail,
// 	IsNotEmpty,
// 	IsOptional,
// 	IsString,
// 	IsUUID,
// 	MinLength,
// } from "class-validator";
//
// export class UserDto {
// 	id?: String;
//
// 	@IsUUID()
// 	@IsOptional()
// 	userId?: string = "";
//
// 	@IsString()
// 	@IsNotEmpty()
// 	@MinLength(2)
// 	name: string;
//
// 	@IsEmail()
// 	@IsNotEmpty()
// 	email: string;
//
// 	@IsOptional()
// 	projects?: Project[];
//
// 	@IsOptional()
// 	musings?: Musings[];
//
// 	@IsDate()
// 	createdAt?: Date;
//
// 	@IsDate()
// 	updatedAt?: Date;
// }
