import { GraphQLResolveInfo } from "graphql";
import { FindFirstVotesOnPremiseArgs } from "./args/FindFirstVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class FindFirstVotesOnPremiseResolver {
    findFirstVotesOnPremise(ctx: any, info: GraphQLResolveInfo, args: FindFirstVotesOnPremiseArgs): Promise<VotesOnPremise | null>;
}
