import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVotesOnPremiseArgs } from "./args/FindUniqueVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class FindUniqueVotesOnPremiseResolver {
    votesOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
}
