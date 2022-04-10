import { GraphQLResolveInfo } from "graphql";
import { FindManyVotesOnPremiseArgs } from "./args/FindManyVotesOnPremiseArgs";
import { VotesOnPremise } from "../../../models/VotesOnPremise";
export declare class FindManyVotesOnPremiseResolver {
    votesOnPremises(ctx: any, info: GraphQLResolveInfo, args: FindManyVotesOnPremiseArgs): Promise<VotesOnPremise[]>;
}
