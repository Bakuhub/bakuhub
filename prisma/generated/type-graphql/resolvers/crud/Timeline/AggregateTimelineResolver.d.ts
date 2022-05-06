import { GraphQLResolveInfo } from "graphql";
import { AggregateTimelineArgs } from "./args/AggregateTimelineArgs";
import { AggregateTimeline } from "../../outputs/AggregateTimeline";
export declare class AggregateTimelineResolver {
    aggregateTimeline(ctx: any, info: GraphQLResolveInfo, args: AggregateTimelineArgs): Promise<AggregateTimeline>;
}
