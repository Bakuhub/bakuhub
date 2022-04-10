import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVotesOnPremiseArgs } from "./args/DeleteManyVotesOnPremiseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVotesOnPremiseResolver {
    deleteManyVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVotesOnPremiseArgs): Promise<AffectedRowsOutput>;
}
