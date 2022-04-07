import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnVisionArgs } from "./args/DeleteThreadsOnVisionArgs";
import { ThreadsOnVision } from "../../../models/ThreadsOnVision";
export declare class DeleteThreadsOnVisionResolver {
    deleteThreadsOnVision(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadsOnVisionArgs): Promise<ThreadsOnVision | null>;
}
