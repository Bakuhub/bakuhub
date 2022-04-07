import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsOnTimelinesArgs } from "./args/DeleteTagsOnTimelinesArgs";
import { TagsOnTimelines } from "../../../models/TagsOnTimelines";
export declare class DeleteTagsOnTimelinesResolver {
    deleteTagsOnTimelines(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsOnTimelinesArgs): Promise<TagsOnTimelines | null>;
}
