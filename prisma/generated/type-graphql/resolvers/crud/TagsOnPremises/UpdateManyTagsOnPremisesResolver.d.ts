import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTagsOnPremisesArgs } from "./args/UpdateManyTagsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTagsOnPremisesResolver {
    updateManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
