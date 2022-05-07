import { GraphQLResolveInfo } from "graphql";
import { UpsertTagsOnVisionsArgs } from "./args/UpsertTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class UpsertTagsOnVisionsResolver {
    upsertTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsOnVisionsArgs): Promise<TagsOnVisions>;
}
