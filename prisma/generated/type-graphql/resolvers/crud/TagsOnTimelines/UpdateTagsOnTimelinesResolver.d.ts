import { GraphQLResolveInfo } from "graphql";
import { UpdateTagsOnTimelinesArgs } from "./args/UpdateTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class UpdateTagsOnTimelinesResolver {
    updateTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsOnTimelinesArgs): Promise<TagsOnTimelines | null>;
}
