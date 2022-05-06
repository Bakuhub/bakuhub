import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPremiseArgs } from "./args/DeleteManyPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPremiseResolver {
    deleteManyPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPremiseArgs): Promise<AffectedRowsOutput>;
}
