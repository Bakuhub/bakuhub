import { GraphQLResolveInfo } from "graphql";
import { FindManyTagsOnTimelinesArgs } from "./args/FindManyTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class FindManyTagsOnTimelinesResolver {
    findManyTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsOnTimelinesArgs): Promise<TagsOnTimelines[]>;
}
