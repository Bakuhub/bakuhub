import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({});

// A `main` function so that you can use async/await
async function seed() {
    // Create user, posts, and categories

    // const returnUser = await prisma.user.create({
    //     data: {
    //         email: `${Math.random()}@gmail.com`,
    //         name: "test1user",
    //     }
    // });

    const thread = await prisma.thread.create({
        data: {
            title: "I want to reply to Boris Johnson plans Saudi Arabia visit to seek oil supply increase",
            activityDate: new Date(),
            description:
                    "MPs voice deep concerns over trip after mass execution by regime and its continuing role in Yemen war",
            reference: "",
            premise: {
                connect: {
                    id: "6930b9ec-4512-4e42-aa94-1c4aad3e36f3",
                }
            },
            parentThread: {
                connect: {
                    id: "9273b0c7-0c2b-42a5-8ea0-4f5d137d8121"
                }
            }
        }
    });
    // const premise = await prisma.premise.create({
    //     data: {
    //         title: "this is the main thread to Boris Johnson",
    //         status: "REFERENCE_PROVIDED",
    //         authorId: returnUser.id,
    //         premisesOnTimelines: {
    //             create: [{
    //                 timeline: {
    //                     connect: {
    //                         id: "6b253865-d87e-44d8-a86f-1d9af8c693b4"
    //                     },
    //                 },
    //             }],
    //
    //         },
    //         tagsOnPremises: {
    //             create: [{
    //                 tag: {
    //                     upsert: {
    //                         label: "usa"
    //                     }
    //                 }
    //             }]
    //         }
    //
    //     }
    // });
    //
    // const tag = await prisma.tag.create({
    //     data: {
    //         label: "united kingdom",
    //         tagsOnPremises: {
    //             create: [{
    //                 premise: {
    //                     connect: {
    //                         id: "dfe45ff8-0e34-4110-b33d-f252be6fe4c6"
    //                     }
    //                 }
    //             }]
    //         }
    //     }
    // });
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