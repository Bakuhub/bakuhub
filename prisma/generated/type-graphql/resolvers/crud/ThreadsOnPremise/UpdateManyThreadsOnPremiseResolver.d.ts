import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThreadsOnPremiseArgs } from "./args/UpdateManyThreadsOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThreadsOnPremiseResolver {
    updateManyThreadsOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThreadsOnPremiseArgs): Promise<AffectedRowsOutput>;
}
