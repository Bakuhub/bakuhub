import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionOnTimelinesArgs } from "./args/AggregateReactionOnTimelinesArgs";
import { AggregateReactionOnTimelines } from "../../outputs/AggregateReactionOnTimelines";
export declare class AggregateReactionOnTimelinesResolver {
    aggregateReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionOnTimelinesArgs): Promise<AggregateReactionOnTimelines>;
}
