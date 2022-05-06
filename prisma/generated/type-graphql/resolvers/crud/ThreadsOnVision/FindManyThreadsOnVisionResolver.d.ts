import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnVisionArgs } from "./args/FindManyThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class FindManyThreadsOnVisionResolver {
    threadsOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadsOnVisionArgs): Promise<ThreadsOnVision[]>;
}
