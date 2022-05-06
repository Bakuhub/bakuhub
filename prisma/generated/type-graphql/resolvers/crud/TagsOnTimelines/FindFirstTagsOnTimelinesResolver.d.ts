import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsOnTimelinesArgs } from "./args/FindFirstTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class FindFirstTagsOnTimelinesResolver {
    findFirstTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsOnTimelinesArgs): Promise<TagsOnTimelines | null>;
}
