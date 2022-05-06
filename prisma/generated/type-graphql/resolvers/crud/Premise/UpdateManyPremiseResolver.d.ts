import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPremiseArgs } from "./args/UpdateManyPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPremiseResolver {
    updateManyPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPremiseArgs): Promise<AffectedRowsOutput>;
}
