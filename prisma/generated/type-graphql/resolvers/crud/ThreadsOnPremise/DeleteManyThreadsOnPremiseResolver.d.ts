import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThreadsOnPremiseArgs } from "./args/DeleteManyThreadsOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThreadsOnPremiseResolver {
    deleteManyThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThreadsOnPremiseArgs): Promise<AffectedRowsOutput>;
}
