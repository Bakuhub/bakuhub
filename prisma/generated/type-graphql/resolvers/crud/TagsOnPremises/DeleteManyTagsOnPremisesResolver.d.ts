import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTagsOnPremisesArgs } from "./args/DeleteManyTagsOnPremisesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTagsOnPremisesResolver {
    deleteManyTagsOnPremises(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagsOnPremisesArgs): Promise<AffectedRowsOutput>;
}
