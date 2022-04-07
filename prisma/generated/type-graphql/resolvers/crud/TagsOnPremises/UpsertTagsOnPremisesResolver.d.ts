import { GraphQLResolveInfo } from "graphql";
import { UpsertTagsOnPremisesArgs } from "./args/UpsertTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class UpsertTagsOnPremisesResolver {
    upsertTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpsertTagsOnPremisesArgs): Promise<TagsOnPremises>;
}
