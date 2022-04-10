import { GraphQLResolveInfo } from "graphql";
import { DeleteVotesOnPremiseArgs } from "./args/DeleteVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class DeleteVotesOnPremiseResolver {
    deleteVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: DeleteVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
}
