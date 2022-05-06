import { GraphQLResolveInfo } from "graphql";
import { FindManyThreadsOnMergeRequestArgs } from "./args/FindManyThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class FindManyThreadsOnMergeRequestResolver {
    threadsOnMergeRequests(ctx: any, info: GraphQLResolveInfo, args: FindManyThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest[]>;
}
