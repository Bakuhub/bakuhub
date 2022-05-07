import { GraphQLResolveInfo } from "graphql";
import { GroupByTagsOnVisionsArgs } from "./args/GroupByTagsOnVisionsArgs";
import { TagsOnVisionsGroupBy } from "../../outputs/TagsOnVisionsGroupBy";
export declare class GroupByTagsOnVisionsResolver {
    groupByTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsOnVisionsArgs): Promise<TagsOnVisionsGroupBy[]>;
}
