import { GraphQLResolveInfo } from "graphql";
import { CreateTagsOnTimelinesArgs } from "./args/CreateTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class CreateTagsOnTimelinesResolver {
    createTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: CreateTagsOnTimelinesArgs): Promise<TagsOnTimelines>;
}
