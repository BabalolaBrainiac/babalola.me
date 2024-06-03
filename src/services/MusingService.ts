// import { Post } from "@/types/types";
//
//
// export class MusingService {
//
//     async createPost(post: Post) {
//         try {
//             const newPost = await prismaClient.musings.create({
//                 data: {
//                     title: post.title,
//                     content: post.content,
//                     categories: post.categories,
//                     creators: post.creators,
//                 }
//             })
//             console.log(newPost)
//             return newPost
//
//         } catch (e) {
//             return e
//         }
//     }
//
//     async getAllPosts() {
//         return await prismaClient.musings.findMany({
//             select: {
//                 title: true,
//                 content: true,
//                 creators: true,
//                 categories: true,
//                 createdAt: true,
//                 updatedAt: true
//             },}).then((musings) => {
//             if(!musings[0]) {
//                 return "No Posts Found"
//             }
//
//             return musings
//         }).catch((err) => {
//             return err
//         }).finally(async () => {
//             await prismaClient.$disconnect()
//     }
//     )}
//
//     async createAndPublishPost(post: Post) {
//         try {
//             const newPost = await prismaClient.musings.create({
//                 data: {
//                     title: post.title,
//                     content: post.content,
//                     categories: post.categories,
//                     creators: post.creators,
//                     published: true
//                 }
//             })
//             console.log(newPost)
//             return newPost
//
//         } catch (e) {
//             return e
//         }
//     }
//
//     async getPublished() {
//
//         console.log(prismaClient.musings.count())
//         return await prismaClient.musings.findMany({
//             where: {
//                 published: true
//             },
//             select: {
//                 title: true,
//                 content: true,
//                 creators: true,
//                 categories: true,
//                 createdAt: true,
//                 updatedAt: true
//             },
//             orderBy: {
//                 createdAt: "desc"
//             },
//             take: 10
//         })
//     }
// }