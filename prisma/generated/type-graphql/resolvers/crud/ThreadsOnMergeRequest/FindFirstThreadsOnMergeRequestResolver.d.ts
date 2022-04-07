import { GraphQLResolveInfo } from "graphql";
import { FindFirstThreadsOnMergeRequestArgs } from "./args/FindFirstThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class FindFirstThreadsOnMergeRequestResolver {
    findFirstThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: FindFirstThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null>;
}
