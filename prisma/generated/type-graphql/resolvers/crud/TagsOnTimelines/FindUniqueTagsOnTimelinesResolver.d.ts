import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOnTimelinesArgs } from "./args/FindUniqueTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class FindUniqueTagsOnTimelinesResolver {
    findUniqueTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsOnTimelinesArgs): Promise<TagsOnTimelines | null>;
}
