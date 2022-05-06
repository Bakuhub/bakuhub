import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMergeRequestArgs } from "./args/DeleteManyMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMergeRequestResolver {
    deleteManyMergeRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMergeRequestArgs): Promise<AffectedRowsOutput>;
}
