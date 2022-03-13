import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({});

// A `main` function so that you can use async/await
async function seed() {

    // Create user, posts, and categories
    // const user = await prisma.premise.create({
    //     data: {
    //         title:'fdsfsdf',
    //
    //
    //     },
    // });
    // await prisma.post.create({
    //     data: {
    //         title: "Hello",
    //         categories: {
    //             create: [
    //                 {
    //                     category: {
    //                         create: {
    //                             name: "category-1",
    //                         },
    //                     },
    //                 },
    //                 {category: {connect: {id: 10}}},
    //             ],
    //         },
    //     },
    // });
    const premise = await prisma.premise.create({
        data: {
            title: "More than half of UK voters still think Boris Johnson should resign",
            status: "UNVERIFIED",
            tags: ["UK"],
            authorId: "dde6d01b-cc10-46cf-9c4a-e7ca7f3268e3",
            activityDate: new Date()
        }
    });
    // Return user, and posts, and categories
    const returnUser = await prisma.user.create({
        data: {
            email: "test@gmail.com",
            name: "test1user",
        }
    });

}

seed()
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });