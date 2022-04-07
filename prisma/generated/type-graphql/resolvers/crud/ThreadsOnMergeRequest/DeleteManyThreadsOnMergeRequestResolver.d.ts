import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThreadsOnMergeRequestArgs } from "./args/DeleteManyThreadsOnMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThreadsOnMergeRequestResolver {
    deleteManyThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput>;
}
