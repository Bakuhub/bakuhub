import { GraphQLResolveInfo } from "graphql";
import { CreateManySubscriptionsOnPremisesArgs } from "./args/CreateManySubscriptionsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySubscriptionsOnPremisesResolver {
    createManySubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateManySubscriptionsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
