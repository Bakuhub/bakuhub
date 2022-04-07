import { GraphQLResolveInfo } from "graphql";
import { DeleteThreadsOnMergeRequestArgs } from "./args/DeleteThreadsOnMergeRequestArgs";
import { ThreadsOnMergeRequest } from "../../../models/ThreadsOnMergeRequest";
export declare class DeleteThreadsOnMergeRequestResolver {
    deleteThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteThreadsOnMergeRequestArgs): Promise<ThreadsOnMergeRequest | null>;
}
