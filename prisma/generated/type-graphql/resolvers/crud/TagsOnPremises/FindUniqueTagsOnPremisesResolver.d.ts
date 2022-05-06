import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagsOnPremisesArgs } from "./args/FindUniqueTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class FindUniqueTagsOnPremisesResolver {
    findUniqueTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagsOnPremisesArgs): Promise<TagsOnPremises | null>;
}
