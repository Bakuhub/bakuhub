import { GraphQLResolveInfo } from "graphql";
import { DeleteManySubscriptionsOnPremisesArgs } from "./args/DeleteManySubscriptionsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySubscriptionsOnPremisesResolver {
    deleteManySubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
