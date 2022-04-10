import { GraphQLResolveInfo } from "graphql";
import { AggregateVotesOnTimelineArgs } from "./args/AggregateVotesOnTimelineArgs";
import { AggregateVotesOnTimeline } from "../../outputs/AggregateVotesOnTimeline";
export declare class AggregateVotesOnTimelineResolver {
    aggregateVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: AggregateVotesOnTimelineArgs): Promise<AggregateVotesOnTimeline>;
}
