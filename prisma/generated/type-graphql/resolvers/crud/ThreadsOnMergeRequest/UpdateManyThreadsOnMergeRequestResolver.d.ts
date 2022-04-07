import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThreadsOnMergeRequestArgs } from "./args/UpdateManyThreadsOnMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThreadsOnMergeRequestResolver {
    updateManyThreadsOnMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadsOnMergeRequestArgs): Promise<AffectedRowsOutput>;
}
