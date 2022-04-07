import { GraphQLResolveInfo } from "graphql";
import { UpsertTagsOnTimelinesArgs } from "./args/UpsertTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class UpsertTagsOnTimelinesResolver {
    upsertTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsOnTimelinesArgs): Promise<TagsOnTimelines>;
}
