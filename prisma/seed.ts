import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({});

// A `main` function so that you can use async/await
async function seed() {
    // Create user, posts, and categories
    const thread = await prisma.thread.create({
        data: {
            title: "I want to reply to Boris Johnson plans Saudi Arabia visit to seek oil supply increase",
            activityDate: new Date(),
            description:
                    "MPs voice deep concerns over trip after mass execution by regime and its continuing role in Yemen war",
            reference: "",
            parentThread: {
                connect: {
                    id: "9273b0c7-0c2b-42a5-8ea0-4f5d137d8121"
                }
            }
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