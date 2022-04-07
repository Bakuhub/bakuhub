import { GraphQLResolveInfo } from "graphql";
import { CreateThreadsOnMergeRequestArgs } from "./args/CreateThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class CreateThreadsOnMergeRequestResolver {
    createThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: CreateThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest>;
}
