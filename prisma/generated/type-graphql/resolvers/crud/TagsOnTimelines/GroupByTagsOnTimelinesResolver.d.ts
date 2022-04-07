import { GraphQLResolveInfo } from "graphql";
import { GroupByTagsOnTimelinesArgs } from "./args/GroupByTagsOnTimelinesArgs";
import { TagsOnTimelinesGroupBy } from "../../outputs/TagsOnTimelinesGroupBy";
export declare class GroupByTagsOnTimelinesResolver {
    groupByTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsOnTimelinesArgs): Promise<TagsOnTimelinesGroupBy[]>;
}
