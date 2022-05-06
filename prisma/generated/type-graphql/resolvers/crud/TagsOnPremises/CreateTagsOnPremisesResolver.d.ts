import { GraphQLResolveInfo } from "graphql";
import { CreateTagsOnPremisesArgs } from "./args/CreateTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class CreateTagsOnPremisesResolver {
    createTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: CreateTagsOnPremisesArgs): Promise<TagsOnPremises>;
}
