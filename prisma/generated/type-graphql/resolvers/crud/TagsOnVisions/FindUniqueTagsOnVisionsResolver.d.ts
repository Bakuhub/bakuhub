import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOnVisionsArgs } from "./args/FindUniqueTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class FindUniqueTagsOnVisionsResolver {
    findUniqueTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsOnVisionsArgs): Promise<TagsOnVisions | null>;
}
