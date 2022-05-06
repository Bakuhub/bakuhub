import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnVisionArgs } from "./args/UpdateThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class UpdateThreadsOnVisionResolver {
    updateThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadsOnVisionArgs): Promise<ThreadsOnVision | null>;
}
