import { GraphQLResolveInfo } from "graphql";
import { FindManyTagsOnVisionsArgs } from "./args/FindManyTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class FindManyTagsOnVisionsResolver {
    findManyTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsOnVisionsArgs): Promise<TagsOnVisions[]>;
}
