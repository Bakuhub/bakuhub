import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVotesOnPremiseArgs } from "./args/UpdateManyVotesOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVotesOnPremiseResolver {
    updateManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
}
