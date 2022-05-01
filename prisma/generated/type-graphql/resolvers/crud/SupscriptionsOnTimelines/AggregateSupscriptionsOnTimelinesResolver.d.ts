import { GraphQLResolveInfo } from "graphql";
import { AggregateSupscriptionsOnTimelinesArgs } from "./args/AggregateSupscriptionsOnTimelinesArgs";
import { AggregateSupscriptionsOnTimelines } from "../../outputs/AggregateSupscriptionsOnTimelines";
export declare class AggregateSupscriptionsOnTimelinesResolver {
    aggregateSupscriptionsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregateSupscriptionsOnTimelinesArgs): Promise<AggregateSupscriptionsOnTimelines>;
}
