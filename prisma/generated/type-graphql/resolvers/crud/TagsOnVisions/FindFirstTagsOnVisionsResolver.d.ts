import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsOnVisionsArgs } from "./args/FindFirstTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class FindFirstTagsOnVisionsResolver {
    findFirstTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsOnVisionsArgs): Promise<TagsOnVisions | null>;
}
