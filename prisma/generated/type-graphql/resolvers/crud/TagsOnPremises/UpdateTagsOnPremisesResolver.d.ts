import { GraphQLResolveInfo } from "graphql";
import { UpdateTagsOnPremisesArgs } from "./args/UpdateTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class UpdateTagsOnPremisesResolver {
    updateTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
}
