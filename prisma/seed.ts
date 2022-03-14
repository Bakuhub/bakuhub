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
    const premise = await prisma.premise.create({
        data: {
            title: "ifehwoifhowei fejwoifjweoi",
            status: "REFERENCE_PROVIDED",
            authorId: returnUser.id,
            activityDate: new Date(),
            premisesOnTimelines: {
                create: [{
                    timeline: {
                        connect: {
                            id: "6b253865-d87e-44d8-a86f-1d9af8c693b4"
                        },
                    },
                }],

            },
            tagsOnPremises: {
                create: [{
                    tag: {
                        upsert: {
                            label: "usa"
                        }
                    }
                }]
            }

        }
    });

    const tag = await prisma.tag.create({
        data: {
            label: "united kingdom",
            tagsOnPremises: {
                create: [{
                    premise: {
                        connect: {
                            id: "dfe45ff8-0e34-4110-b33d-f252be6fe4c6"
                        }
                    }
                }]
            }
        }
    });
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
    // Return user, and posts, and categories
}

seed()
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect();
        });