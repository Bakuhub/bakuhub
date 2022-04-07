import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThreadsOnMergeRequestArgs } from "./args/FindUniqueThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class FindUniqueThreadsOnMergeRequestResolver {
    threadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null>;
}
