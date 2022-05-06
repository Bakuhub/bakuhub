import { GraphQLResolveInfo } from "graphql";
import { UpdateThreadsOnMergeRequestArgs } from "./args/UpdateThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class UpdateThreadsOnMergeRequestResolver {
    updateThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null>;
}
