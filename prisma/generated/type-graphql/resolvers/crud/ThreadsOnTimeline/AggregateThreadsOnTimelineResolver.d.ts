import { GraphQLResolveInfo } from "graphql";
import { AggregateThreadsOnTimelineArgs } from "./args/AggregateThreadsOnTimelineArgs";
import { AggregateThreadsOnTimeline } from "../../outputs/AggregateThreadsOnTimeline";
export declare class AggregateThreadsOnTimelineResolver {
    aggregateThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: AggregateThreadsOnTimelineArgs): Promise<AggregateThreadsOnTimeline>;
}
