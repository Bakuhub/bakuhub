import {Thread} from "../../../prisma/generated/type-graphql";

export const preprocessThreads = (threads: Thread[]) => {
    return threads.filter(thread => !thread.parentThreadId);
};