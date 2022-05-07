import { GraphQLResolveInfo } from "graphql";
import { CreateTagsOnVisionsArgs } from "./args/CreateTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class CreateTagsOnVisionsResolver {
    createTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: CreateTagsOnVisionsArgs): Promise<TagsOnVisions>;
}
