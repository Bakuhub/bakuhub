import { GraphQLResolveInfo } from "graphql";
import { FindManyTagsOnPremisesArgs } from "./args/FindManyTagsOnPremisesArgs";
import { TagsOnPremises } from "../../../models/TagsOnPremises";
export declare class FindManyTagsOnPremisesResolver {
    findManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManyTagsOnPremisesArgs): Promise<TagsOnPremises[]>;
}
