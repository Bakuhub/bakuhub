import { GraphQLResolveInfo } from "graphql";
import { FindFirstThreadsOnVisionArgs } from "./args/FindFirstThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class FindFirstThreadsOnVisionResolver {
    findFirstThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadsOnVisionArgs): Promise<ThreadsOnVision | null>;
}
