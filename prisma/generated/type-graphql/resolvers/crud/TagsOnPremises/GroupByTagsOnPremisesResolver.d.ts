import { GraphQLResolveInfo } from "graphql";
import { GroupByTagsOnPremisesArgs } from "./args/GroupByTagsOnPremisesArgs";
import { TagsOnPremisesGroupBy } from "../../outputs/TagsOnPremisesGroupBy";
export declare class GroupByTagsOnPremisesResolver {
    groupByTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: GroupByTagsOnPremisesArgs): Promise<TagsOnPremisesGroupBy[]>;
}
