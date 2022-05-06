import { GraphQLResolveInfo } from "graphql";
import { FindFirstTagsOnPremisesArgs } from "./args/FindFirstTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class FindFirstTagsOnPremisesResolver {
    findFirstTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
}
