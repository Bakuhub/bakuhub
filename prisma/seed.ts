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