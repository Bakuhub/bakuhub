import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsOnVisionsArgs } from "./args/DeleteTagsOnVisionsArgs";
import { TagsOnVisions } from "../../../models/TagsOnVisions";
export declare class DeleteTagsOnVisionsResolver {
    deleteTagsOnVisions(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsOnVisionsArgs): Promise<TagsOnVisions | null>;
}
