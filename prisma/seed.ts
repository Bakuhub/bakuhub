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
    const returnUser = await prisma.user.create({
        data: {
            email: `${Math.random()}@gmail.com`,
            name: "test1user",
        }
    });
    // @ts-ignore
    const premise = await prisma.premise.create({
        data: {
            title: "ifehwoifhowei fejwoifjweoi",
            status: "UNVERIFIED",
            authorId: returnUser.id,
            activityDate: new Date(),
            timelines: {
                create: [{
                    timeline: {
                        connect: {
                            id: "6b253865-d87e-44d8-a86f-1d9af8c693b4"
                        },
                    },
                }]
            }
        }
    });
    const vision = [];
    // const timeline = await prisma.timeline.create({
    //     data: {
    //         title: "Boris Johnson",
    //         status: "mostly truth",
    //         authorId: returnUser.id,
    //         description: "this is timeline about Boris Johnson"
    //     }
    // });
    // const premisesOnTimelines = await prisma.premisesOnTimelines.create({
    //     data: {
    //         timelineId: timeline.id,
    //         premiseId: premise.id,
    //         timeline:{}
    //     }
    // });
    const data = await prisma.premisesOnTimelines.findMany({
                where: {}
            }
    );
    console.info(data);
    // Return user, and posts, and categories


}

seed()
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });