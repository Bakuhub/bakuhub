import { GraphQLResolveInfo } from "graphql";
import { UpdateManySubscriptionsOnPremisesArgs } from "./args/UpdateManySubscriptionsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySubscriptionsOnPremisesResolver {
    updateManySubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
