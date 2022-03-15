import {MyContext} from "./index";
import {Thread} from "../../prisma/generated/type-graphql";

export type CreateThread = (_parent: any, _args: Thread, ctx: MyContext) => void

export const createThread: CreateThread = (_parent, _args, ctx) => {
    console.info(ctx);
    console.info(_parent);
    console.info(_args);
    // ctx.prisma.thread.create({
    //     data: {
    //
    //     }
    // });
};