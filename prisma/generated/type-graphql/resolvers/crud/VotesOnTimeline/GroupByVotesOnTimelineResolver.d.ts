import { GraphQLResolveInfo } from "graphql";
import { GroupByVotesOnTimelineArgs } from "./args/GroupByVotesOnTimelineArgs";
import { VotesOnTimelineGroupBy } from "../../outputs/VotesOnTimelineGroupBy";
export declare class GroupByVotesOnTimelineResolver {
    groupByVotesOnTimeline(ctx: any, info: GraphQLResolveInfo, args: GroupByVotesOnTimelineArgs): Promise<VotesOnTimelineGroupBy[]>;
}
