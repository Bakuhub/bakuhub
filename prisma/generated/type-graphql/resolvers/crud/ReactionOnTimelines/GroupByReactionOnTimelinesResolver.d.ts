import { GraphQLResolveInfo } from "graphql";
import { GroupByReactionOnTimelinesArgs } from "./args/GroupByReactionOnTimelinesArgs";
import { ReactionOnTimelinesGroupBy } from "../../outputs/ReactionOnTimelinesGroupBy";
export declare class GroupByReactionOnTimelinesResolver {
    groupByReactionOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionOnTimelinesArgs): Promise<ReactionOnTimelinesGroupBy[]>;
}
