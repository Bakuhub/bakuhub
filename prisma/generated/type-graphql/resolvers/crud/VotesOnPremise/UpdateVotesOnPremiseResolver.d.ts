import { GraphQLResolveInfo } from "graphql";
import { UpdateVotesOnPremiseArgs } from "./args/UpdateVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class UpdateVotesOnPremiseResolver {
    updateVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: UpdateVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
}
