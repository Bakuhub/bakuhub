import {PrismaClient} from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV==="production") {

    prisma = new PrismaClient();
} else {
    // @ts-ignore
    if (!global.prisma) {
        console.log("renew");
        // @ts-ignore
        global.prisma = new PrismaClient();
    }
    console.log("---------------------");
    // @ts-ignore
    prisma = global.prisma;
}
export default prisma;