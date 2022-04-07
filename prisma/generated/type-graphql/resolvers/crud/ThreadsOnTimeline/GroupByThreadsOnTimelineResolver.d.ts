import { GraphQLResolveInfo } from "graphql";
import { GroupByThreadsOnTimelineArgs } from "./args/GroupByThreadsOnTimelineArgs";
import { ThreadsOnTimelineGroupBy } from "../../outputs/ThreadsOnTimelineGroupBy";
export declare class GroupByThreadsOnTimelineResolver {
    groupByThreadsOnTimeline(ctx: any, info: GraphQLResolveInfo, args: GroupByThreadsOnTimelineArgs): Promise<ThreadsOnTimelineGroupBy[]>;
}
