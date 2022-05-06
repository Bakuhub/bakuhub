import { GraphQLResolveInfo } from "graphql";
import { GroupByReactionOnThreadsArgs } from "./args/GroupByReactionOnThreadsArgs";
import { ReactionOnThreadsGroupBy } from "../../outputs/ReactionOnThreadsGroupBy";
export declare class GroupByReactionOnThreadsResolver {
    groupByReactionOnThreads(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionOnThreadsArgs): Promise<ReactionOnThreadsGroupBy[]>;
}
