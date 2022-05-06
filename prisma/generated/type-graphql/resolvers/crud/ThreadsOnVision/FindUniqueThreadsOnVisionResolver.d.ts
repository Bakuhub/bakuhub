import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnVisionArgs } from "./args/FindUniqueThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class FindUniqueThreadsOnVisionResolver {
    threadsOnVision(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadsOnVisionArgs): Promise<ThreadsOnVision | null>;
}
