import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnPremisesArgs } from "./args/AggregateSubscriptionsOnPremisesArgs";
import { AggregateSubscriptionsOnPremises } from "../../outputs/AggregateSubscriptionsOnPremises";
export declare class AggregateSubscriptionsOnPremisesResolver {
    aggregateSubscriptionsOnPremises(ctx: any, info: GraphQLResolveInfo, args: AggregateSubscriptionsOnPremisesArgs): Promise<AggregateSubscriptionsOnPremises>;
}
