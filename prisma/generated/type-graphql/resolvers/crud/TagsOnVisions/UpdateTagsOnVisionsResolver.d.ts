import { GraphQLResolveInfo } from "graphql";
import { UpdateTagsOnVisionsArgs } from "./args/UpdateTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class UpdateTagsOnVisionsResolver {
    updateTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsOnVisionsArgs): Promise<TagsOnVisions | null>;
}
