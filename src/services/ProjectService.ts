import { Project } from "@prisma/client";
import prismaClient from "../../prisma/prisma";



export class ProjectService {

    async createProject(project: Project) {

        try {
            const newProject = await prismaClient.project.create({
                data: {
                    title: project.title,
                    description: project.description,
                    imageUrl: project.imageUrl,
                    gitRepo: project.gitRepo,
                    creators: project.creators,
                }
            });
            console.log(newProject)
            return newProject
        } catch (e) {
            return e;
        }
    }

    async returnAllProjects() {
        try {
            return await prismaClient.project.findMany()
        } catch (e) {
            return e
        }
    }

    async removeProject(id: string) {
        try {

            return await prismaClient.project.delete({
                where: {
                    id
                }
            })

        } catch (err) {
            return err
        }
    }

}