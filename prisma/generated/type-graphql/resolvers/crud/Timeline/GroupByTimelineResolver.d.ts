import { GraphQLResolveInfo } from "graphql";
import { GroupByTimelineArgs } from "./args/GroupByTimelineArgs";
import { TimelineGroupBy } from "../../outputs/TimelineGroupBy";
export declare class GroupByTimelineResolver {
    groupByTimeline(ctx: any, info: GraphQLResolveInfo, args: GroupByTimelineArgs): Promise<TimelineGroupBy[]>;
}
