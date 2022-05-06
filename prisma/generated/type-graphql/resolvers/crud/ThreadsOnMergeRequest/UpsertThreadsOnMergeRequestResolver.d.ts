import { GraphQLResolveInfo } from "graphql";
import { UpsertThreadsOnMergeRequestArgs } from "./args/UpsertThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class UpsertThreadsOnMergeRequestResolver {
    upsertThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpsertThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest>;
}
