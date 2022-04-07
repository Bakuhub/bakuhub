import { GraphQLResolveInfo } from "graphql";
import { GroupByReactionOnVisionsArgs } from "./args/GroupByReactionOnVisionsArgs";
import { ReactionOnVisionsGroupBy } from "../../outputs/ReactionOnVisionsGroupBy";
export declare class GroupByReactionOnVisionsResolver {
    groupByReactionOnVisions(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionOnVisionsArgs): Promise<ReactionOnVisionsGroupBy[]>;
}
