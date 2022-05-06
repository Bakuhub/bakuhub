import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMergeRequestArgs } from "./args/UpdateManyMergeRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMergeRequestResolver {
    updateManyMergeRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMergeRequestArgs): Promise<AffectedRowsOutput>;
}
