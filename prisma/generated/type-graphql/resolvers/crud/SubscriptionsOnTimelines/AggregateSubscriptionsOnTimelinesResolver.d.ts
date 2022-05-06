import { GraphQLResolveInfo } from "graphql";
import { AggregateSubscriptionsOnTimelinesArgs } from "./args/AggregateSubscriptionsOnTimelinesArgs";
import { AggregateSubscriptionsOnTimelines } from "../../outputs/AggregateSubscriptionsOnTimelines";
export declare class AggregateSubscriptionsOnTimelinesResolver {
    aggregateSubscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregateSubscriptionsOnTimelinesArgs): Promise<AggregateSubscriptionsOnTimelines>;
}
