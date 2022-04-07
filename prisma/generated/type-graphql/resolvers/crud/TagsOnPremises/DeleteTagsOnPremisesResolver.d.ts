import { GraphQLResolveInfo } from "graphql";
import { DeleteTagsOnPremisesArgs } from "./args/DeleteTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class DeleteTagsOnPremisesResolver {
    deleteTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
}
